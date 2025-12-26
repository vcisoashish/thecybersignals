'use client';

import { blogs } from "@/.velite/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";

export default function Home() {
  return (
    <HomeCoverSection blogs={blogs} />
  );
}
// Build trigger
