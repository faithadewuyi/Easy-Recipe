interface IngredientListProps{
    ingredients: string[];
    handleGetRecipe:()=> void;
}

export default function IngredientList({ingredients,
    handleGetRecipe
}: IngredientListProps){

    const ingredientsListItems = ingredients.map((ingredient) => (
        <li key={ingredient} className="list-disc ml-6">
          {ingredient}
        </li>
      ));
    
    return(
        <section className="mt-6">
        <h2 className="font-bold text-lg">Ingredients on hand:</h2>
        <ul className="ingredients-list mt-4 ml-6 list-disc" aria-live="polite">
          {ingredientsListItems}
        </ul>
        {ingredients.length >= 3 && (
          <div className="flex justify-between items-center rounded-md bg-[#F0EFEB] px-3 py-6 mt-6">
            <div>
              <h3 className="font-medium text-sm leading-6">Ready for a recipe?</h3>
              <p className="text-sm text-[#6B7280] leading-5">
                Generate a recipe from your list of ingredients.
              </p>
            </div>
            <button
              className="border-none border-[#D17557] bg-emerald-500 text-white rounded-md shadow-lg text-sm px-4 py-2 md:px-6 md:py-3 cursor-pointer"
              aria-label="Generate a recipe from ingredients"
              onClick={handleGetRecipe}
            >
              Get a recipe
            </button>
          </div>
        )}
      </section>
    )
}