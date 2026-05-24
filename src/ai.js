import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function generateMagicEmail(formData) {
  const { recipientName, tone, emailBody } = formData;

  const SYSTEM_PROMPT = `You are an expert executive assistant. Write a highly effective, grammatically perfect email. 
  The recipient is: ${recipientName}. 
  The tone of the email must be: ${tone}. 
  The email MUST include the following key points: ${emailBody}. 
  Output ONLY the email content, including a Subject line. Format the output in Markdown.`;

  try {
    const response = await hf.chatCompletion({
      model: "XiaomiMiMo/MiMo-V2-Flash",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `${SYSTEM_PROMPT} \n\n write an email using given instructions`,
        },
      ],
      max_tokens: 1024,
    });

    if (!response.choices || response.choices.length === 0) {
      return "Something went wrong. Please try again.";
    }
    return response.choices[0].message.content;
  } catch (err) {
    console.error("AI Error: ", err.message);
    return "Error connecting to AI. Check your API key or internet connection."; //debug
  }
}
