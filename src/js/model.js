export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    ); //the page stops here

    //https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcd09
    const data = await res.json();

    // console.log('res', res);
    // console.log('data', data);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const recipe = data.data.recipe;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    alert(err);
  }
};
