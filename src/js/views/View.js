import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  // Below is a JSDoc comment
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {Boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | String} A markup string is returned if render=false
   * @this {Object} View Instance
   * @author Saman Fathnazarian
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //only change things that have changed, don't reload entire page, which causes flickering
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup); //converts string to dom
    const newElements = Array.from(newDOM.querySelectorAll('*')); //array.from() to convert nodeList to arr
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      //Updates changed text
      // newEl is an elm but 1st child of it may not be an elm, might be a text only elm
      //only change textContent of elms that have text as their child, only happen on elms that contain text directly as their child
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed Attributes
      if (!newEl.isEqualNode(curEl)) {
        //object of all attributes that have changed

        // console.log(Array.from(newEl.attributes));
        // console.log(newEl.attributes);
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // default message if nothging is passed in
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div> 
          <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div> 
          <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
