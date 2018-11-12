import React, { Fragment }  from 'react'
import { 
  TopicItem, 
  TopicItemRight,
  TopicAvatar, 
  TopicMeta,
  TopicTitle
} from './List.style'

const TopicItems = props => (
  <Fragment>
    {
      props.items && props.items.map(item => (
        <TopicItem key={item.link} style={props} onClick={() => props.onTopicClick(item)}>
          <TopicAvatar src={item.avatar} />
          
          {/* { item.pin ? (<TopicPin />) : null } */}
          <TopicItemRight>
            <TopicTitle>
              {item.title}&nbsp;
              { 
                item.pin 
                  ? (<span role='img' title='置顶' aria-label='pin'>📌</span>) 
                  : (<span role='img' title='文章' aria-label='title' data-icon='📖'></span>)  
              } 
            </TopicTitle>
            <TopicMeta>
              <span className='topic__meta topic__meta--message'>
                <i className="iconfont icon-message"></i> 
                {item.replies}
              </span>
              <span className='topic__meta topic__meta--visits'>
                <i className="iconfont icon-eye"></i> 
                {item.visits}
              </span>
              {/* <span className='topic__meta'>
                <i className="iconfont icon-time-circle"></i> 
                {item.activeTime}
              </span> */}
            </TopicMeta>
            {/* <TopicMeta>
              <TopicUserInfo>
                发表于 
              </TopicUserInfo>
            </TopicMeta> */}
          </TopicItemRight>
        </TopicItem>))
    }
  </Fragment>
)

export default TopicItems