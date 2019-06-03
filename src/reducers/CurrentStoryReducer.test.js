import { CurrentStoryReducer } from "./CurrentStoryReducer";
import * as actions from "../actions/index";

describe("current story reducer", () => {
  it("should return init state", () => {
    const expected = {};
    const result = CurrentStoryReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should retun an object that is passed into", () => {
    const obj = { name: "bob" };
    const action = actions.saveCurrentStory(obj);
    const result = CurrentStoryReducer({}, action);
    expect(result).toEqual(obj);
  });
});
