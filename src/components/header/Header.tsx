
import './header.css';
import fiservLogo from "../../assets/fiserv_logo_orange_rgb.jpg";
import { Checkout } from './Checkout';


export const Header = () => {
  return (
    <header>
      <div className=" header_container">
        <div className="logo_container">
          <img src= {fiservLogo} alt="me" className='fiserv_logo'/>
        </div>
        <Checkout/>
      </div>
    </header>
  )
}
