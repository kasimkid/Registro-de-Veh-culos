import React from 'react'
import styled from 'styled-components'
import logo from '../assets/react.svg'

const SidebarMenu = ({sidebarOpen, setSidebarOpen}) => {



  return (
  
    <Container>
      <div className='Logocontent'>
        <div className='imgcontent'>
          <img src= { logo }/>
        </div>
        <div>
          <h2>Usuario</h2>
        </div>
      </div>
       
    </Container>
  )
}
const Container = styled.div `
color: ${(props) => props.theme.text}
background: ${(props) => props.theme.bg}
position:sticky;
.logocontent{
  display: flex
  justify-content: center
  align-items: center
}
`
export default SidebarMenu