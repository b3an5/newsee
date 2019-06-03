import React from "react";
// import { Link } from "react-router-dom";
import ArticleContainer from "../../Containers/ArticleContainer/ArticleContainer";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="title">Newsee</h1>
      </header>
      <ArticleContainer />
    </main>
  );
}
