// Google APIを呼び出す最小限の実装
async function callGoogle() {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
    {
      method: "POST",
      headers: {
        "x-goog-api-key": `${process.env.GOOGLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: "TypeScriptについて簡潔に説明してください。" }] },
        ],
      }),
    },
  );

  const data = await response.json();
  console.log(data.candidates[0].content.parts[0].text);
}

callGoogle();
