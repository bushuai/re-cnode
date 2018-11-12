import styled from 'styled-components'

export const Pager = styled.div`
  width: 55vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;

  span {
    cursor: pointer;
    color: #fff;
    font-size: 40px;
    opacity: .3;
    transition: all .3s ease;

    :hover {
      opacity: 1;
      
      &.prev{
        transform: translateX(-5px);
      }
  
      &.next {
        transform: translateX(5px);
      }
    }
  }
`