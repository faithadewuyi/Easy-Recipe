import { useState } from "react";
import { getRecipeFromMistral } from "../utils/recipeUtils";

const Body = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeShown, setRecipeShown] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); 

  const handleGetRecipe = async () => {
    if (ingredients.length >= 3) {
      setLoading(true); 
      setRecipeShown(false);
      try {
        const generatedRecipe = await getRecipeFromMistral(ingredients);
        if (generatedRecipe) {
          setRecipe(generatedRecipe);
          setRecipeShown(true);
        }
      } catch (error) {
        console.error("Error generating recipe:", error);
      } finally {
        setLoading(false); 
      }
    } else {
      alert("You need at least 3 ingredients to generate a recipe.");
    }
  };

  const addIngredient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient") as string | null;

    if (newIngredient && newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient.trim()]);
    }
  };

  const removeIngredient = (index: number) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="p-6">
      <div className="py-2.5 px-7 mt-10">
        <form
          onSubmit={addIngredient}
          className="flex justify-center gap-3 items-center"
        >
          <input
            type="text"
            aria-label="Add Your Ingredient"
            className="bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-md w-full max-w-md"
            name="ingredient"
            placeholder="e.g rice"
          />
          <button
            type="submit"
            className="bg-black px-4 py-2 text-white rounded-md font-medium text-sm"
          >
            + Add Ingredient
          </button>
        </form>
      </div>

      {ingredients.length < 3 && (
        <div
          className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-red-700"
          role="alert"
        >
          <p>
            Add at least {3 - ingredients.length} ingredient
            {3 - ingredients.length > 1 ? "s" : ""} to generate a recipe.
          </p>
        </div>
      )}

      {ingredients.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Ingredients List:</h3>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow"
              >
                <span>{ingredient}</span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {ingredients.length >= 3 && (
        <button
          onClick={handleGetRecipe}
          className={`mt-4 px-4 py-2 rounded-md ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
          } text-white`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get a Recipe"}
        </button>
      )}

      {loading && (
        <div className="mt-4 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-green-500"></div>
        </div>
      )}

      {recipeShown && recipe && (
        <div className="mt-6 bg-green-100 p-4 rounded-md shadow">
          <h2 className="text-lg font-bold">Generated Recipe:</h2>
          <p className="text-gray-800 mt-2">{recipe}</p>
        </div>
      )}
    </div>
  );
};

export default Body;
