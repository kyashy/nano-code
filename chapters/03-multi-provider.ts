import { generateText } from "../src/core/generate-text";
import { createGoogle } from "../src/providers/google";
import type { Message } from "../src/types";

const messages: Message[] = [
  { role: "user", content: "AIエージェントとは何ですか？" },
];

// Google
const google = createGoogle();
const result3 = await generateText({
  model: google("gemini-3.6-flash"),
  messages,
});
console.log("Google:", result3.text);
