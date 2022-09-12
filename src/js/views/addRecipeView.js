import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow(); //only used in this class, controller not using it
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    /*
    // this keyword on handler func points to elm that listener is attached to (in this case _btnOpen)
    // could also use arrow func, so that this would point to obj (created by class/instance), could also use bind

    // Below Also Works:
    this._btnOpen.addEventListener(
      'click',
      function () {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
      }.bind(this)
    );
    */
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      //modern browser API
      //returns an obj, spread it into an arr
      const dataArr = [...new FormData(this)]; //param is form class
      const data = Object.fromEntries(dataArr); //takes an arr of entries & converts it to an obj
      handler(data);
    });
  }

  _generateMarkup() {
    //
  }
}

export default new AddRecipeView();
