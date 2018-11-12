import React from 'react'
import { Pager } from './Pager.style'

export default props => (
  <Pager>
    <span className='prev iconfont icon-left' onClick={() => props.prev()}></span>
    <span className='next iconfont icon-right' onClick={() => props.next()}></span>
  </Pager> 
)