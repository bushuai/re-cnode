import React, { Component, Fragment } from 'react'
import { 
  DetailLayer,
  DetailContainer, 
  DetailAuthor,
  DetailTitle,
  DetailContent,
  DetailLink,
  DetailClose
} from './Detail.style'
import { Spring } from 'react-spring'


class Detail extends Component {
  viewTopic = id => {

  }

  render () {
    const { article } = this.props
    return (
      <Fragment>
        <Spring
         from={{
            opacity: 0.8
         }}
         to={{
            opacity: 1
         }}>
          {
            props => (
              <DetailLayer style={props}>
                <DetailClose onClick={() => this.props.closeDetail(null)}><i className="iconfont icon-close"></i></DetailClose>
                <DetailContainer>
                  <DetailTitle>
                    {article.title}
                  </DetailTitle>
                  <div style={{  marginBottom: '10px', color: '#666'}}>
                    written by <a target="blank" href={`https://cnodejs.org/user/${article.author}`}>{article.author}</a>
                    &nbsp;<span role='img' aria-label='time'>⏱</span> {article.activeTime}
                    &nbsp;<span role='img' aria-label='visits'>👀</span> {article.visits} views
                  </div>

                  <DetailContent dangerouslySetInnerHTML={{ __html: article.content }} />

                  <DetailLink target='blank' href={`https://cnodejs.org/topic/${article.id}`}>
                    参与讨论
                  </DetailLink>

                  <DetailAuthor>
                    <a target="blank" href={`https://cnodejs.org/user/${article.author}`}>
                      <img src={article.avatar} alt=""/>
                    </a>
                    <div>
                      <p dangerouslySetInnerHTML={{ __html: article.author }}></p>
                      <p dangerouslySetInnerHTML={{ __html: article.board }}></p>
                      <p dangerouslySetInnerHTML={{ __html: article.signature }}></p>
                    </div>
                  </DetailAuthor>
                </DetailContainer>
              </DetailLayer>
            )
          }
        </Spring>
      </Fragment>
    )
  }
}

export default Detail