import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FullStory.scss'
import PropTypes from 'prop-types'

export class FullStory extends Component {
  constructor() {
    super()
    this.state = {
      article: {},
    }
  }

  componentDidMount = () => {
    if (
      localStorage.article &&
      this.props.match.params.id.includes(
        JSON.parse(localStorage.article).publishedAt
      )
    ) {
      this.setState({ article: JSON.parse(localStorage.article) })
    } else {
      this.grabArticleContent(this.props.currentStory.url)
    }
  }

  grabArticleContent = async articleUrl => {
    const {
      title,
      urlToImage,
      author,
      url,
      publishedAt,
      source,
    } = this.props.currentStory
    const fetchUrl = `https://api.diffbot.com/v3/article?token=27b09f6cb2a8e2ba60bf2717c2e9326f&url=${articleUrl}`
    const response = await fetch(fetchUrl)
    const result = await response.json()

    const currentArticle = {
      title,
      url,
      author,
      content: result.objects[0].html,
      urlToImage,
      publishedAt,
      source,
    }
    localStorage.setItem('article', JSON.stringify(currentArticle))
    this.setState({ article: currentArticle })
  }

  favoriteArticle = () => {
    let favArr = []
    if (localStorage.favorites) {
      favArr = JSON.parse(localStorage.favorites)
    }
    favArr.push(this.state.article)
    localStorage.setItem('favorites', JSON.stringify(favArr))
  }

  render() {
    const { content } = this.state.article

    if (this.state.article.title) {
      return (
        <main className="full-article">
          <button onClick={() => this.favoriteArticle()} className="fav-butt">
            Favorite
          </button>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </main>
      )
    } else {
      return (
        <main className="full-story-loading">
          <img
            src="https://cdn.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif"
            alt="loading gif"
          />
        </main>
      )
    }
  }
}

export const mapStateToProps = state => ({
  currentStory: state.currentStory,
})

export default connect(mapStateToProps)(FullStory)

FullStory.propTypes = {
  currentStory: PropTypes.object,
  match: PropTypes.func,
}
