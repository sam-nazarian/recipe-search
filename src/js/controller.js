import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// console.log(icons); //path to new icons file
///////////////////////////////////////

// only in async funcs you can use 'await', func runs in background
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1); //window.location is entire url

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    // gives access to state.recipe
    await model.loadRecipe(id); //awaiting since it is an async func, so returns a promise, stops execution of this func until loadRecipe is loaded
    // console.log(model.state.recipe);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
// For parcel to work this needs to have perfect syntax, including ;

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

controlSearchResults();

// below uses publisher subscriber pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();

/*
1) Controller is the main module that controls what happens in the app. It delegates tasks to models and views.
2) The controller.js file is linked with the index.html file, which makes it an entry point for all other JavaScript modules.
*/
