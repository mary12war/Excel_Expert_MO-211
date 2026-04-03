import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type TopicProgress = {
  lessonCompletedAt?: number;
  practiceCompletedAt?: number;
  passedExerciseIds?: string[];
  miniQuizWrongChecks?: number;
};

export type DomainQuizAttempt = {
  domainSlug: string;
  correct: number;
  total: number;
  at: number;
};

export type FullExamAttempt = {
  correct: number;
  total: number;
  estimatedScore: number;
  at: number;
};

type ProgressState = {
  byTopicSlug: Record<string, TopicProgress>;
  domainQuizAttempts: DomainQuizAttempt[];
  fullExamAttempts: FullExamAttempt[];

  markLessonComplete: (topicSlug: string) => void;
  recordMiniQuizOutcome: (topicSlug: string, correct: boolean) => void;
  recordExerciseSuccess: (
    topicSlug: string,
    exerciseId: string,
    allExerciseIdsInTopic: string[]
  ) => void;
  markScenarioPracticeComplete: (topicSlug: string) => void;
  recordFullExamAttempt: (attempt: Omit<FullExamAttempt, "at"> & { at?: number }) => void;
  recordDomainQuizAttempt: (domainSlug: string, correct: number, total: number) => void;
  clearAllProgress: () => void;
};

const dataSlice = {
  byTopicSlug: {} as Record<string, TopicProgress>,
  domainQuizAttempts: [] as DomainQuizAttempt[],
  fullExamAttempts: [] as FullExamAttempt[]
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...dataSlice,

      markLessonComplete: (topicSlug) =>
        set((s) => {
          if (s.byTopicSlug[topicSlug]?.lessonCompletedAt) return s;
          return {
            byTopicSlug: {
              ...s.byTopicSlug,
              [topicSlug]: {
                ...s.byTopicSlug[topicSlug],
                lessonCompletedAt: Date.now()
              }
            }
          };
        }),

      recordMiniQuizOutcome: (topicSlug, correct) =>
        set((s) => {
          const cur = s.byTopicSlug[topicSlug] ?? {};
          return {
            byTopicSlug: {
              ...s.byTopicSlug,
              [topicSlug]: {
                ...cur,
                miniQuizWrongChecks:
                  (cur.miniQuizWrongChecks ?? 0) + (correct ? 0 : 1)
              }
            }
          };
        }),

      recordExerciseSuccess: (topicSlug, exerciseId, allExerciseIdsInTopic) =>
        set((s) => {
          const cur = s.byTopicSlug[topicSlug] ?? {};
          const passed = new Set(cur.passedExerciseIds ?? []);
          passed.add(exerciseId);
          const passedArr = [...passed];
          const allDone =
            allExerciseIdsInTopic.length > 0 &&
            allExerciseIdsInTopic.every((id) => passed.has(id));
          return {
            byTopicSlug: {
              ...s.byTopicSlug,
              [topicSlug]: {
                ...cur,
                passedExerciseIds: passedArr,
                ...(allDone
                  ? {
                      practiceCompletedAt:
                        cur.practiceCompletedAt ?? Date.now()
                    }
                  : {})
              }
            }
          };
        }),

      markScenarioPracticeComplete: (topicSlug) =>
        set((s) => ({
          byTopicSlug: {
            ...s.byTopicSlug,
            [topicSlug]: {
              ...s.byTopicSlug[topicSlug],
              practiceCompletedAt:
                s.byTopicSlug[topicSlug]?.practiceCompletedAt ?? Date.now()
            }
          }
        })),

      recordFullExamAttempt: (attempt) =>
        set((s) => {
          const at = attempt.at ?? Date.now();
          const prev = s.fullExamAttempts[0];
          if (
            prev &&
            prev.correct === attempt.correct &&
            prev.total === attempt.total &&
            prev.estimatedScore === attempt.estimatedScore &&
            at - prev.at < 2000
          ) {
            return s;
          }
          return {
            fullExamAttempts: [{ ...attempt, at }, ...s.fullExamAttempts].slice(0, 20)
          };
        }),

      recordDomainQuizAttempt: (domainSlug, correct, total) =>
        set((s) => ({
          domainQuizAttempts: [
            { domainSlug, correct, total, at: Date.now() },
            ...s.domainQuizAttempts
          ].slice(0, 40)
        })),

      clearAllProgress: () => set({ ...dataSlice })
    }),
    {
      name: "mo211-excel-expert-progress",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        byTopicSlug: s.byTopicSlug,
        domainQuizAttempts: s.domainQuizAttempts,
        fullExamAttempts: s.fullExamAttempts
      })
    }
  )
);
