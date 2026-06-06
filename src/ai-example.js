import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function generateMagicEmail(formData) {
  const { recipientName, tone, emailBody } = formData;

  const systemPrompt = `
You are an expert executive assistant.
Write a highly effective, grammatically correct email.
The recipient is: ${recipientName}.
The tone must be: ${tone}.
The email must include these key points: ${emailBody}.
Return only the email content with a Subject line in Markdown.
`.trim();

  try {
    const response = await hf.chatCompletion({
      model: "your-ai-model",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Write the email now." },
      ],
      max_tokens: 400,
      temperature: 0.4,
    });

    return (
      response?.choices?.[0]?.message?.content ||
      "Something went wrong. Please try again."
    );
  } catch (err) {
    console.error("AI Error:", err);
    return "Error connecting to AI. Check your API key, model availability, or internet connection.";
  }
}
