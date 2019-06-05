import * as actions from "../actions/index";
import { topReducer } from "./topReducer";
import { mockTopStories } from "../utilities/mockData";

describe("top reducer", () => {
  it("should return init state", () => {
    const expected = [];
    const result = topReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return an array of objects that are passed in", () => {
    const action = actions.saveTopStories(mockTopStories);
    const result = topReducer([], action);
    expect(result).toEqual(mockTopStories);
  });
});
