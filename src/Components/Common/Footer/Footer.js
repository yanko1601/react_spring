import './Footer.css'
import smallLogo from '../../../Tools/small-tennis-logo-vector.jpg';

const Footer = () => {

    return(
        <div className="footer">
            <img src={smallLogo} alt=""></img>
            <p>Аматьорска тенис лига &copy; Всички права запазени</p>
        </div>
        
    );

}

export default Footer;