export const topReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_TOP_STORIES":
      return action.article;
    default:
      return state;
  }
};
