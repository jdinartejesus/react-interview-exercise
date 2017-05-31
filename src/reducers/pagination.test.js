import pagination from './pagination.js'
import { initialState } from './pagination.js'
import { loadData, pageNumberChange } from '../actions'

describe('reducers/pagination', () => {

  const friendsList = [
    {
      id: 1496217011637,
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      id: 1496217029152,
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      id: 1496217043338,
      name: 'George Washington',
      starred: false
    }
  ];

  it('should return given data w/ pages', () => {
    expect(pagination(initialState, loadData(friendsList)).page).toHaveLength(initialState.itemsPage)
  })

  it('should return given data w/ pages', () => {
    const nextTestingPage = 1
    expect(pagination(initialState, pageNumberChange(nextTestingPage)).currentPage).toBe(nextTestingPage)
  })
})
