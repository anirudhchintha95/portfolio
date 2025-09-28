import fs from "node:fs/promises";
import path from "node:path";

let cachedResume: string | null = null;

export async function getResumeText(): Promise<string> {
  if (cachedResume) return cachedResume;
  const filePath = path.join(process.cwd(), "public", "resume.md");
  cachedResume = await fs.readFile(filePath, "utf8");
  return cachedResume;
}
