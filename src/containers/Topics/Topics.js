import React, { Component, Fragment } from 'react'
// import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { TopicList, Loading } from './Topics.style'
import AppHeader from '../../components/Header/Header'
import List from '../../components/List/List'
import TopicDetail from '../../components/Detail/Detail'
import history from '../../history'
import { connect } from 'react-redux'
import Pager from '../../components/Pager/Pager'
import { fetchTopicList, fetchTopicDetail } from '../../actions/cnode'

class Topic extends Component {
  componentDidMount () {
    const { 
      changeTab, 
      fetchTopics, 
      match: { 
        params: { 
          type = 'all',
          page
        }
      } 
    } = this.props
    changeTab(type)
    fetchTopics(type, page)
  }

  // componentWillUpdate (nextProps, nextState ) { 
  //   // const { tab, page, fetchTopics } = nextProps
  //   // fetchTopics(tab, page)
  //   // return true
  // }

  componentWillReceiveProps (nextProps) {
    console.log('# next props: ', nextProps)
    const { tab, fetchTopics } = this.props
      
    if (nextProps.page !== this.props.page) {
      fetchTopics(tab, nextProps.page)
    }
  }

  prevPage = () => {
    const page = this.props.page - 1 < 1 ? 1 : this.props.page - 1
    this.props.changePage(page)
    history.push(`/tab/${this.props.tab}?page=${page}`)
  }
  
  nextPage = () => {
    const page = this.props.page + 1
    this.props.changePage(page)
    history.push(`/tab/${this.props.tab}?page=${page}`)
  }

  render () {
    const { 
      topics,
      toggleDetail,
      article,
      changeTab,
      tab,
    } = this.props

    return (
      <Fragment>
        <AppHeader currentTab={tab} changeTab={changeTab} />
        <TopicList>
        { 
          topics 
          ? <List onTopicClick={toggleDetail} items={topics} />
          : <Loading />
        }
        </TopicList>
        <Pager prev={this.prevPage} next={this.nextPage}/>
        { article && <TopicDetail closeDetail={toggleDetail} article={article} /> }
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
  tab: state.tab,
  article: state.article,
  page: state.page,
  topics: state.list,
  showDetail: state.showDetail
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePage: page => {
    dispatch({
      type: 'CHANGE_PAGE',
      page
    })
  },

  changeTab: tab => {
    history.push(`/tab/${tab}`)
    dispatch({ type: 'CHANGE_TAB', tab })
    dispatch({ type: 'CHANGE_PAGE', page: 1 })
    dispatch(fetchTopicList(tab))
  },

  changeArticle: () => {
    dispatch({
      type: 'CHANGE_ARTICLE',
      article: { title: '1' }
    })
  },

  fetchTopics: (tab = 'all', page = 1) => {
    dispatch(fetchTopicList(tab, page))
  },

  toggleDetail: article => {
    dispatch(fetchTopicDetail(article))
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Topic)