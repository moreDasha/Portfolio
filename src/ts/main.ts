import '../scss/main.scss';
import { initCursorAnimation } from './components/initCursorAnimation';
import { initIconAnimation } from './components/initIconAnimation';
import { initTimerExperience } from './components/initTimerExperience';

document.addEventListener('DOMContentLoaded', function () {
  initCursorAnimation();
  initIconAnimation();
  initTimerExperience();
});
