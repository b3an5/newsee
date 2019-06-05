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
import { apiKey } from "../../utilities/apiKey";

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
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSearchStories)
        })
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

    it("should change the state of favorites when favorite button is pressed", () => {
      expect(wrapper.state()).toEqual({
        search: "",
        searched: false,
        favorites: false,
        errored: false
      });
      localStorage.favorites = JSON.stringify(mockTopStories);
      wrapper.find(".fav-button").simulate("click");
      expect(wrapper.state()).toEqual({
        search: "",
        searched: false,
        favorites: true,
        errored: false
      });
    });

    it("should change the state of search when its typed into", () => {
      expect(wrapper.state()).toEqual({
        search: "",
        searched: false,
        favorites: false,
        errored: false
      });
      wrapper
        .find(".search-input")
        .simulate("change", { target: { value: "blah" } });
      expect(wrapper.state()).toEqual({
        search: "blah",
        searched: false,
        favorites: false,
        errored: false
      });
    });

    it("should search when searchform is submitted", () => {
      wrapper
        .find(".search-input")
        .simulate("change", { target: { value: "blah" } });
      wrapper.find(".search-form").simulate("submit", {
        preventDefault: () => {}
      });
      expect(wrapper.state()).toEqual({
        search: "blah",
        searched: true,
        favorites: false,
        errored: false
      });
    });

    // it.skip("should call searchData with the correct paramaters", () => {
    //   // const spy = jest.spyOn(wrapper.instance(), "searchData");
    //   wrapper
    //     .find(".search-input")
    //     .simulate("change", { target: { value: "blah" } });
    //   wrapper.find(".search-form").simulate("submit", {
    //     preventDefault: () => {}
    //   });

    //   expect(window.fetch).toHaveBeenCalled(
    //     "https://newsapi.org/v2/everything?" +
    //       "q=" +
    //       "blah" +
    //       "&" +
    //       "language=en&" +
    //       "sortBy=relevancy&" +
    //       "apiKey=" +
    //       apiKey
    //   );
    // });
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
