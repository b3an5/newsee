import { mapDispatchToProps, FullStory, mapStateToProps } from "./FullStory";
import { saveTopStories, saveSearchStories } from "../../actions/index";
import { shallow } from "enzyme";
import {
  mockCurrentStory,
  mockTopStories,
  mockSearchStories
} from "../../utilities/mockData";
import React from "react";

describe("fullStory", () => {
  let wrapper;
  const favoriteArticle = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FullStory currentStory={mockCurrentStory} />);
  });
  describe("fullStory component", () => {
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should match default state", () => {
      expect(wrapper.state()).toEqual({
        article: {}
      });
    });

    it("should call favorite article when button is pressed", () => {
      wrapper.setState({ article: mockCurrentStory });
      wrapper.find(".fav-butt").simulate("click");
      expect(localStorage.favorites).toEqual(
        JSON.stringify([mockCurrentStory])
      );
    });
  });

  describe("mstp", () => {
    it("should return an object with topstories and searchstories", () => {
      const mockState = {
        topStories: mockTopStories,
        searchStories: mockSearchStories,
        currentStory: mockCurrentStory
      };
      const expected = {
        currentStory: mockCurrentStory
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
