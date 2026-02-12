import '../scss/main.scss';
import { initCursorAnimation } from './components/initCursorAnimation';
import { initIconAnimation } from './components/initIconAnimation';

document.addEventListener('DOMContentLoaded', function () {
  initCursorAnimation();
  initIconAnimation();
});
