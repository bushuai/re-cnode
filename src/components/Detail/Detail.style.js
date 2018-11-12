import styled from 'styled-components'

export const DetailLayer = styled.div`
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 20px;
  background-color: #fff;
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;
  width: 800px;
  margin-bottom: 20px;
  letter-spacing: .01rem;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.58;
`

export const DetailInner = styled.article`
`

export const DetailUsers = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
  display: flex;
  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    margin-right: 10px;
  }
` 

export const DetailTitle = styled.h1`
  color: #000;
  font-size: 28px;
  margin: 10px 0;
`  

export const DetailAuthor = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;

  img {
    margin-right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  div {
    font-size: 12px;
  }
`

export const DetailContent = styled.div`
  background-color: #fff;
  p {
    margin: 10px 0;
  }
`

export const DetailClose = styled.span`
  position: fixed;
  right: 20px;
  top: 20px;
  display: block;
  cursor: pointer;
  .iconfont {
    color: #ccc;
    font-size: 30px;
  }
`

export const DetailLink = styled.a`
  outline: none;
  padding: 5px 10px;
  margin: 20px auto;
  border: 1px solid #777;
  transition: all .3s ease;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    color: #fff;
    border: 1px solid #04befe;
    background-color: #04befe;
  }
  ::before {
    content: '🚀 ';
    display: inline-block;
  }
`