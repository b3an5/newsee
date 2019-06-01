import React from "react";
import "./ArticleCard.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveCurrentStory } from "../../actions/index";

function ArticleCard(props) {
  let { title, urlToImage, description, publishedAt, source } = props.storyInfo;
  return (
    <article>
      <img alt={title} src={urlToImage} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={`/article/${publishedAt}${source.id}`}>
        <button
          onClick={() => {
            props.saveCurrentStory(props.storyInfo);
          }}
        >
          Read Full Article
        </button>
      </Link>
    </article>
  );
}

export const mapDispatchToProps = dispatch => ({
  saveCurrentStory: articles => dispatch(saveCurrentStory(articles))
});

export default connect(
  null,
  mapDispatchToProps
)(ArticleCard);
