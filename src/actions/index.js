export const saveTopStories = article => ({
  type: 'SAVE_TOP_STORIES',
  article,
})

export const saveSearchStories = article => ({
  type: 'SAVE_SEARCH_STORIES',
  article,
})

export const saveCurrentStory = article => ({
  type: 'SAVE_CURRENT_STORY',
  article,
})
