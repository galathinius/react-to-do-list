import { ADD_ARTICLE, TOGGLE_ARTICLE } from "../constants/action-types";


const initialState = {
    articles: [{
                  text: 'one item',
                  done: false,
                  id: 0,
              },{
                  text: 'two item',
                  done: true,
                  id: 1,
              }],
    nextId: 2,
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        const articleToAdd = {
            text: action.payload,
            id: state.nextId,
            done: false,
        }
        const newState = Object.assign({}, state, {
            articles: state.articles.concat(articleToAdd),
            nextId: ++ state.nextId,
          });

        return newState
      }

      if (action.type === TOGGLE_ARTICLE) {
        const articlesToModify = state.articles.slice();
        const articleToToggle = articlesToModify[action.payload];
        articleToToggle.done = !articleToToggle.done;

        const newState = Object.assign({}, state, {
            articles: articlesToModify,
            // nextId: ++ state.nextId,
          });

        return newState
      }
    return state;
};
  
  export default rootReducer;