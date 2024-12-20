import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;
const hf = new HfInference(import.meta.env.VITE_PUBLIC_API_HF_ACCESS_TOKEN);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const maxRetries = 3;
    const retryDelay = 5000; // Retry every 5 seconds if rate limit is hit
    
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await hf.chatCompletion({
                model: "mistralai/Mistral-7B-Instruct-v0.3",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
                ],
                max_tokens: 1024,
            });
            
            return response.choices[0].message.content;  // Return recipe response
        } catch (err) {
            if (err.message.includes("429")) {
                console.log("Rate limit hit, retrying...");
                await delay(retryDelay);  // Wait before retrying
            } else {
                console.error("Error generating recipe:", err.message);
                return "An error occurred. Please try again later."; // Return a user-friendly error
            }
        }
    }

    return "Max retries reached. Please try again later.";
}
