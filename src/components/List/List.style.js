import styled from 'styled-components'

export const TopicItem = styled.li`
  // margin-bottom: 10px;
  // border-radius: 2px;
  border-bottom: 1px dotted #eee;
  padding: 10px;
  background-color: #fff;
  transition: all .4s ease;
  font-size: 14px;
  transition: all .5s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  transition: all .3s ease;
  :hover {
    color: #469dfb;
    cursor: pointer;
    // border-radius: 5px;
    border: 1px soild #777;
    // transform: scale(1.01);
    // z-index: 1001;
    // margin: 5px 0;
    // transform: translateX(5px);
    // background-color: #f9f9f9;
    z-index: 10;
    // box-shadow: 0 0 10px rgba(69, 65, 78, .08);
    // box-shadow: 0 1px 15px rgba(69, 65, 78, .1);
  }
`

export const TopicItemRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
`

export const TopicTitle = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  // white-space: nowrap;
  display: block;
  ::before {
    // content: '📖';
    display: inline-block;
  }
`

export const TopicSummary = styled.p`
  color: #666;
  margin: 5px 0;
`

export const TopicAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 3px;
`

export const TopicMeta = styled.div`
  margin-top: 10px;
  display: flex;

  span {
    display: flex;
    align-items: center;
    margin-right: 5px;
    color: #666;
    font-size: 12px;
    i {
      display: inline-block;
      margin-right: 3px;
    }
  }
`

export const TopicUserInfo = styled.span`
  margin-top: 10px;
`

export const TopicCounts = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666;

  span:first-child {
    margin-right: 10px;
  }
`

export const TopicGood = styled.span`
  width: 5px;
  height: 5px;
  display: block;
  background-color: #000;
`


export const TopicPin = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14px 14px 0;
  border-color: transparent #007bff transparent transparent;
`