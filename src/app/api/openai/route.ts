import { NextRequest, NextResponse } from "next/server";

import { getResumeText } from "@/lib/parse-resume";
import openai from "@/lib/openai";

async function parseBody(req: NextRequest) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

export async function POST(req: NextRequest) {
  const body = await parseBody(req);
  const question = body?.question ?? "";

  if (!question) {
    return NextResponse.json(
      { error: "Missing `question` in JSON body." },
      { status: 400 }
    );
  }

  const resumeText = await getResumeText();

  const resp = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: `today's date is ${new Date()}`,
          },
          {
            type: "input_text",
            text: process.env.SYSTEM_PROMPT!,
          },
          {
            type: "input_text",
            text: `${resumeText}`,
          },
        ],
      },
      {
        role: "user",
        content: [{ type: "input_text", text: String(question) }],
      },
    ],
  });

  const usage = resp.usage ?? {
    input_tokens: 0,
    output_tokens: 0,
    total_tokens: 0,
  };

  // log to server console
  console.log("Token usage:", usage);

  return NextResponse.json({
    answer: resp.output_text ?? "I don’t know",
    tokens: {
      input: usage.input_tokens,
      output: usage.output_tokens,
      total: usage.total_tokens,
    },
  });
}
