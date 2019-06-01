import React, { Component } from "react";
import { topHeadlineData } from "../../utilities/topHeadlinesCall";
import { searchData } from "../../utilities/searchCall";
import { connect } from "react-redux";
import { saveTopStories } from "../../actions/index";
import { saveSearchStories } from "../../actions/index";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";

class ArticleContainer extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      searched: false
    };
  }

  componentDidMount = async () => {
    if (this.props.topStories.length < 1) {
      console.log("hi");
      const topStories = await topHeadlineData();
      this.props.saveTopStories(topStories);
    }
  };

  searchArticles = async e => {
    e.preventDefault();
    this.setState({ searched: true });
    const searchStories = await searchData(this.state.search);
    this.props.saveSearchStories(searchStories);
  };

  renderCards = () => {
    const { topStories, searchStories } = this.props;
    let articleCards;
    if (!this.state.searched) {
      articleCards = topStories.map(story => {
        return <ArticleCard storyInfo={story} />;
      });
    } else {
      articleCards = searchStories.map(story => {
        return <ArticleCard storyInfo={story} />;
      });
    }
    if (articleCards.length < 1) {
      articleCards = <h1>...loading</h1>;
    }
    return articleCards;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.searchArticles}>
          <input
            onChange={e => {
              this.setState({ search: e.target.value });
            }}
          />
          <button>enter</button>
        </form>
        {this.renderCards()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  topStories: state.topStories,
  searchStories: state.searchStories
});

export const mapDispatchToProps = dispatch => ({
  saveTopStories: articles => dispatch(saveTopStories(articles)),
  saveSearchStories: articles => dispatch(saveSearchStories(articles))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer);
