import { getAllTopicSlugs } from "@/lib/staticPaths";
import { PracticeClient } from "./practice-client";

export function generateStaticParams() {
  return getAllTopicSlugs();
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PracticeClient slug={slug} />;
}

