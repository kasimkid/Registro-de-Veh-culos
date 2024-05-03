import styled from 'styled-components';
import logo from '../assets/react.svg';
import { v } from '../styles/Variables';
import { AiOutlineLeft, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
          <h2>Rafael</h2>
        </div>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <Link className="Links" to={to} >
            <div className="Linkicon">
              {icon}
            </div>
            {sidebarOpen &&
              <span>{label}</span>
            }
          </Link>
        </div>
      ))}
    </Container>
  );
}
const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/'
  },
  {
    label: 'Nuevo Ingreso',
    icon: <MdOutlineAnalytics />,
    to: '/nuevo_ingreso'

  },
  {
    label: 'Vehículos',
    icon: <AiOutlineHome />,
    to: '/vehiculos'

  },
]




//Styled COmponents
const Container = styled.div`
color: ${(props) => props.theme.text};
background: ${(props) => props.theme.bg};
position: sticky;
padding-top: 20px;

.Sidebarbutton{
  position: absolute;
  top: ${v.xxlSpacing};
  right: -18px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background:${(props) => props.theme.bgtgderecha};
  box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  transform:${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
  border: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  padding:0;
  font-family: inherit;
  outline:none;
}
.Logocontent{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:${v.lgSpacing};

  .imgcontent{
    display: flex;
    img {
      max-width:100%;
      height:auto;
    }
    cursor:pointer;
    transition: all 0.4s;
    transform:${({ isOpen }) => (isOpen ?
    `scale(0.7)` : `scale(1.5)`)};
    }
  h2{
    display:${({ isOpen }) => (isOpen ?
    `block` : `none`)};
    }

.LinkContainer{
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links{
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px)
    }
    
 
  }

`;
export default SidebarMenu



