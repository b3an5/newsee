export const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_SEARCH_STORIES':
      return action.article
    default:
      return state
  }
}
