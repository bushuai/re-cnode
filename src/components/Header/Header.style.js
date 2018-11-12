import styled from 'styled-components'

export const TabsContainer = styled.nav`
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 14px;
  border-radius: 2px;
`

export const TabList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const TabItem = styled.li`
  padding: 10px 20px;
  text-align: center;
  position: relative;
  
  span {
    transition: color .3s ease;
    cursor: pointer;
    &.active, 
    :hover {
      color: #6f86d6;
    }
  }
`

export const Logo = styled(TabItem)`
  color: #fff;
  font-weight: bold;
  // background-color: #444;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
`