export const CurrentStoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_CURRENT_STORY":
      return action.article;
    default:
      return state;
  }
};
