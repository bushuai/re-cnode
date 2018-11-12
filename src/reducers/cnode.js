const CHANGE_ARTICLE = 'CHANGE_ARTICLE'
const CHANGE_PAGE = 'CHANGE_PAGE'
const CHANGE_TAB = 'CHANGE_TAB' 
const CHANGE_LIST = 'CHANGE_LIST'
const TOGGLE_DETAIL  = 'TOGGLE_DETAIL'

const initialState = {
  tab: 'all',
  page: 1,
  article: null,
  list: null,
  showDetail: false
}

const cnode = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ARTICLE: 
      return { ...state, article: action.article }
    case CHANGE_TAB:
      return { ...state, tab: action.tab }
    case CHANGE_PAGE:
      return { ...state, page: action.page }
    case CHANGE_LIST:
      return { ...state, list: action.list }
    case TOGGLE_DETAIL:
      return { ...state, article: action.article }
    default:
      return state
  }
}

export default cnode