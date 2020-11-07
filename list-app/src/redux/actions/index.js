import { ADD_ARTICLE, TOGGLE_ARTICLE } from "../constants/action-types";


export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };

export function toggleArticle(payload) {
    return { type: TOGGLE_ARTICLE, payload }
  };