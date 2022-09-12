import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map((bookmark) => previewView.render(bookmark, false)) //passing each bookmark as a parameter, returns proper string format of bookmark
      .join('');
  }
}

export default new BookmarksView();
