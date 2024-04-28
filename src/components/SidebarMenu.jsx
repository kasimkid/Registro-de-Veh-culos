import styled from 'styled-components';
import logo from '../assets/react.svg';
import { v } from '../styles/Variables';
import { AiOutlineLeft } from 'react-icons/ai';

export function SidebarMenu({ sidebarOpen, setSidebarOpen }) {

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  return (

    <Container isOpen={sidebarOpen}>
      <button className='Sidebarbutton'
      onClick={openSidebar}>
        <AiOutlineLeft />
      </button>
      <div className='Logocontent'>
        <div className='imgcontent'>
          <img src={logo} />
        </div>
        <div>
          <h2>Usuario</h2>
        </div>
      </div>

    </Container>
  )
}
const Container = styled.div`
color: ${(props) => props.theme.text};
background: ${(props) => props.theme.bg};
position:sticky;
padding-top:20px;

.Sidebarbutton{
  position: absolute;
  top: ${v.xxlSpacing};
  right: -18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background:${(props) => props.theme.bgtgderecha};
  box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  transform:${({isOpen}) => (isOpen ?`initial` : `rotate(180deg)`)};
}
.logocontent{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:${v.lgSpacing};
  .imgcontent{
    display: flex;
    img{
      max-width:100%;
      height:auto;
    }
    cursor:pointer;
    transition: all 0.3s;
    transform:${({ isOpen }) => (isOpen ?
    `scale(0.7)` : `scale(1.5)`)};
  }
  h2{
    display:${({ isOpen }) => (!isOpen ?
    `block` : `none`)};
  }
}
`
export default SidebarMenu

