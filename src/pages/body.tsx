import { useState } from "react";
import ClaudeRecipe from "../components/hooks";
import IngredientList from "../components/ingredientList";

const Body = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [recipeShown, setRecipeShown]=useState<boolean>(false)


  
  const handleGetRecipe=()=>{
setRecipeShown(prevRecipe=> !prevRecipe)
  }


  const addIngredient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient") as string | null;

    if (newIngredient && newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient.trim()]);
    }
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
            Add at least {3 - ingredients.length}  ingredient
            {2 - ingredients.length > 1 ? "s" : ""} to generate a recipe.
          </p>
        </div>
      )}
      {ingredients.length > 0 && (<IngredientList
      ingredients={ingredients}
      handleGetRecipe={handleGetRecipe}
      />
      
      )}

{recipeShown &&( 
  <ClaudeRecipe/>
)}
    </div>
  );
};

export default Body;
