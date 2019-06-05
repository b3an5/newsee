import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { topHeadlineData } from '../../utilities/topHeadlinesCall'
import { searchData } from '../../utilities/searchCall'
import { saveTopStories } from '../../actions/index'
import { saveSearchStories } from '../../actions/index'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleContainer.scss'

export class ArticleContainer extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      searched: false,
      favorites: false,
      errored: false,
    }
  }

  componentDidMount = async () => {
    if (this.props.topStories.length < 1) {
      let topStories = null
      try {
        topStories = await topHeadlineData()
      } catch (e) {
        this.setState({ errored: true })
      }
      this.props.saveTopStories(topStories)
    }
  }

  searchArticles = async e => {
    e.preventDefault()
    this.setState({ favorites: false })
    if (this.state.search === '') {
      this.setState({ searched: false })
    } else {
      this.setState({ searched: true })
      let searchStories = null
      try {
        searchStories = await searchData(this.state.search)
      } catch (e) {
        this.setState({ errored: true })
      }
      this.props.saveSearchStories(searchStories)
    }
  }

  renderArticleCard = contents => {
    return contents.map(content => {
      return <ArticleCard storyInfo={content} key={content.title} />
    })
  }

  renderCards = () => {
    const { topStories, searchStories } = this.props
    let articleCards
    if (this.state.errored) {
      articleCards = <h1>sorry server-side error try to refresh</h1>
    } else {
      if (!this.state.searched) {
        articleCards = this.renderArticleCard(topStories)
      } else {
        if (searchStories.length < 1) {
          articleCards = <h1>search did nott match any stories</h1>
        } else {
          articleCards = this.renderArticleCard(searchStories)
        }
      }
      if (articleCards.length < 1) {
        articleCards = <h1>...loading</h1>
      }
      if (this.state.favorites) {
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        articleCards = this.renderArticleCard(favorites)
      }
    }
    return articleCards
  }

  render() {
    return (
      <div>
        <div className="controls">
          <form onSubmit={this.searchArticles} className="search-form">
            <input
              className="search-input"
              onChange={e => {
                this.setState({ search: e.target.value })
              }}
            />
            <button>enter</button>
          </form>
          <button
            onClick={() => this.setState({ favorites: !this.state.favorites })}
            className="fav-button"
          >
            favorites
          </button>
        </div>
        <div className="article-container">{this.renderCards()}</div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  topStories: state.topStories,
  searchStories: state.searchStories,
})

export const mapDispatchToProps = dispatch => ({
  saveTopStories: articles => dispatch(saveTopStories(articles)),
  saveSearchStories: articles => dispatch(saveSearchStories(articles)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer)

ArticleContainer.propTypes = {
  topStories: PropTypes.array,
  searchStories: PropTypes.array,
  saveTopStories: PropTypes.func,
  saveSearchStories: PropTypes.func,
}
