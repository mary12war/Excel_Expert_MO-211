import { PracticeClient } from "./practice-client";

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PracticeClient slug={slug} />;
}

