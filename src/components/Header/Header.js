import React from 'react'
import { TabsContainer, TabList, TabItem, Logo } from './Header.style'
import classNames from 'classnames'

const Tabs = [ 
  { name: '全部', key: 'all' },
  { name: '精华', key: 'good' },
  { name: '分享', key: 'share' },
  { name: '问答', key: 'ask' },
  { name: '招聘', key: 'job' },
  { name: '客户端测试', key: 'dev'}
]
const Header = props => (
  <TabsContainer>
    <TabList>
      <Logo>
        CNode
      </Logo>
    {
      Tabs.map(tab => 
        (<TabItem key={tab.key}>
          <span 
            className={classNames({'active': props.currentTab === tab.key})} 
            onClick={() => props.changeTab(tab.key)}>
            {tab.name}
          </span>
        </TabItem>)
      )
    }
    </TabList>
  </TabsContainer>
)

export default Header