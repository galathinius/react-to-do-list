import store from "./store/index";
import { addArticle, toggleArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;
window.toggleArticle = toggleArticle;