import React from "react";
import { connect } from "react-redux";

function FullStory(props) {
  const {
    title,
    urlToImage,
    content,
    author,
    description
  } = props.currentStory;
  return (
    <main>
      <img src={urlToImage} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{content}</p>
    </main>
  );
}

export const mapStateToProps = state => ({
  currentStory: state.currentStory
});

export default connect(mapStateToProps)(FullStory);
