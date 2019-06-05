import { searchData } from './searchCall'
import { mockSearchStories } from './mockData'
import { apiKey } from './apiKey'

describe('top headline call', () => {
  const mockSearch = 'theo'
  const mockUrl =
    'https://newsapi.org/v2/everything?' +
    'q=' +
    mockSearch +
    '&' +
    'language=en&' +
    'sortBy=relevancy&' +
    'apiKey=' +
    apiKey
  const mockResult = { articles: mockSearchStories }
  window.fetch = jest.fn().mockImplementation(() =>
    // eslint-disable-next-line no-undef
    Promise.resolve({
      ok: true,
      // eslint-disable-next-line no-undef
      json: () => Promise.resolve(mockResult),
    })
  )

  it('should fetch using correct url parameter', () => {
    searchData(mockSearch)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return articles array', async () => {
    const result = await searchData(mockSearch)
    await expect(result).toEqual(mockResult.articles)
  })
})
