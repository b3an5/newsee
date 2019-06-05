import React from 'react'
// import { Link } from "react-router-dom";
import ArticleContainer from '../../Containers/ArticleContainer/ArticleContainer'
import './Home.scss'

export default function Home() {
  return (
    <main>
      <header className="header">
        <h1 className="title">NewSee</h1>
        <h4 className="description">Go Ahead use AdBlock, we dont care.</h4>
      </header>
      <ArticleContainer />
    </main>
  )
}
