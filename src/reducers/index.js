import { combineReducers } from "redux";
import { topReducer } from "../reducers/topReducer";
import { SearchReducer } from "./searchReducer";
import { CurrentStoryReducer } from "./CurrentStoryReducer";

const rootReducer = combineReducers({
  topStories: topReducer,
  searchStories: SearchReducer,
  currentStory: CurrentStoryReducer
});

export default rootReducer;
