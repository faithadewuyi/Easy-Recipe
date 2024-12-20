export interface IngredientListProps{
    ingredients: string[];
    handleGetRecipe:()=> void;
}

export interface ChatCompletionResponse {
    choices: { message: { content: string } }[];
}
