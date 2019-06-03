import React, { Component } from "react";
import { connect } from "react-redux";
import "./FullStory.scss";

class FullStory extends Component {
  constructor() {
    super();
    this.state = {
      article: {}
    };
  }

  componentDidMount = () => {
    if (
      this.props.match.params.id.includes(
        JSON.parse(localStorage.article).publishedAt
      )
    ) {
      this.setState({ article: JSON.parse(localStorage.article) });
    } else {
      this.grabArticleContent(this.props.currentStory.url);
    }
  };

  grabArticleContent = async articleUrl => {
    const {
      title,
      urlToImage,
      author,
      url,
      publishedAt
    } = this.props.currentStory;
    const fetchUrl = `https://api.diffbot.com/v3/article?token=27b09f6cb2a8e2ba60bf2717c2e9326f&url=${articleUrl}`;
    const response = await fetch(fetchUrl);
    const result = await response.json();
    if (!result.objects[0].text) {
      return alert("sorry");
    }
    const currentArticle = {
      title,
      url,
      author,
      content: result.objects[0].text,
      urlToImage,
      publishedAt
    };
    localStorage.setItem("article", JSON.stringify(currentArticle));
    this.setState({ article: currentArticle });
  };

  render() {
    const { title, urlToImage, content, author, url } = this.state.article;

    if (this.state.article.title) {
      return (
        <main className="full-article">
          <button>Favorite</button>
          <img src={urlToImage} alt={title} />
          <h1>{title}</h1>
          <h4>Author: {author}</h4>
          <p>{content}</p>
          <a href={url}>read the original article here</a>
        </main>
      );
    } else {
      return (
        <main className="full-story-loading">
          <img
            src="https://cdn.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif"
            alt="loading gif"
          />
        </main>
      );
    }
  }
}

export const mapStateToProps = state => ({
  currentStory: state.currentStory
});

export default connect(mapStateToProps)(FullStory);
