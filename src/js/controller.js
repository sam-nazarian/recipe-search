import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// console.log(icons); //path to new icons file

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

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
    alert(err);
  }
};

// For parcel to work this needs to have perfect syntax, including ;
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
