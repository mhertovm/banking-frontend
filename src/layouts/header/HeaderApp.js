import { Link } from 'react-router-dom';
// import ShCartH from './ShCartH/ShCartH';
// import SearchH from './SearchH';
// import MenuH from './MenuH';
import User from '../../pages/user/User';


function HeaderApp(){
  const token = localStorage.getItem("token");
  
  return (
    <>
    <Link to={token?'/banking':"/banking-frontend"}>
      <h2 className='Header-logo' style={{fontFamily: 'sans-serif', color:'orange', fontSize:"20px"}}>ID BANK</h2>
    </Link>
    <div className='Header-link-container'>
      <Link className='Header-link' to={"/"}>Contact</Link>|
      <Link className='Header-link' to={"/"}>Help</Link>|
      {!token ?
      <>
      <Link className='Header-link' to={"/register"}>Register</Link>|
      <Link className='Header-link' to={"/banking-frontend"}>Login </Link>
      </>
      : false
      }
    </div>
    <div className='Header-container'>
      <div className='Header-navbar'>
        {/* <MenuH /> */}
      </div>
      <div className='Header-function'>
        {/* <SearchH />
        <ShCartH /> */}
        {token ? <User /> : ""}
      </div>
    </div>
    </>
  );
}
  
export default HeaderApp;