import {
  mapDispatchToProps,
  ArticleContainer,
  mapStateToProps
} from "./ArticleContainer";
import { saveTopStories, saveSearchStories } from "../../actions/index";
import { shallow } from "enzyme";
import {
  mockCurrentStory,
  mockTopStories,
  mockSearchStories
} from "../../utilities/mockData";
import React from "react";

describe("ArticleContainer", () => {
  describe("articleContainer component", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <ArticleContainer
          topStories={mockTopStories}
          searchStories={mockSearchStories}
        />
      );
    });

    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have the correct default state", () => {
      expect(wrapper.state()).toEqual({
        search: "",
        searched: false,
        favorites: false,
        errored: false
      });
    });
  });

  describe("mapDispatchToProps", () => {
    it("should call dispatch with saveTopStories", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = saveTopStories([{ title: "example" }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveTopStories([{ title: "example" }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should call dispatch with saveSearchStories", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = saveSearchStories([{ title: "example" }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveSearchStories([{ title: "example" }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe("mapStateToProps", () => {
    it("should return an object with topstories and searchstories", () => {
      const mockState = {
        topStories: mockTopStories,
        searchStories: mockSearchStories,
        currentStory: mockCurrentStory
      };
      const expected = {
        topStories: mockTopStories,
        searchStories: mockSearchStories
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
