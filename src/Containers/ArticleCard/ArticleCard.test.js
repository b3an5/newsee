import { mapDispatchToProps, ArticleCard } from "./ArticleCard";
import { saveCurrentStory } from "../../actions/index";
import { shallow } from "enzyme";
import { mockCurrentStory } from "../../utilities/mockData";
import React from "react";

describe("ArticleCard", () => {
  describe("articleCard component", () => {
    let wrapper;
    it("should match snapshot", () => {
      wrapper = shallow(
        <ArticleCard
          storyInfo={mockCurrentStory}
          key={mockCurrentStory.title}
        />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
  describe("map dispatch to props", () => {
    it("it should call dispatch with saveCurrentStory", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = saveCurrentStory([{ title: "example" }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveCurrentStory([{ title: "example" }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
