import createElements from './youtube-client/markup';
import createSlider from './youtube-client/slider';
import fetchData from './youtube-client/index';

window.onload = function app() {
createElements();
createSlider();
fetchData();
};
