import './Header.css'
import mainLogo from '../../../Tools/tennis-logo-vector.jpg'

import { Link } from 'react-router-dom'

const Header = (props) => {

    console.log(props);
    return (
        <header class="site-header">
            <nav class="navbar">
                { props.data.token ?
                    <section class="navbar-dashboard">
                        <div>
                            <img src={mainLogo} alt=""></img>
                        </div>
                        <div class="first-bar">
                            <Link class="user-button" to="#">Ранглиста</Link>
                            <Link class="user-button" to="#">Предизвикай</Link>
                            <Link class="user-button" to="#">АДМИН</Link>
                        </div>
                        <div class="middle-bar">
                            <Link to="#">Аматьорска тенис лига</Link>
                        </div>
                        <div class="second-bar">
                            <ul>
                                <li>Здравей, Янко</li>
                                <li><Link class="exit-button" to="#">Излез</Link></li>
                            </ul>
                        </div>
                    </section>
                    :
                    <section class="navbar-anonymous">
                        <div>
                            <img src={mainLogo} alt=""></img>
                        </div>
                         <div class="first-bar">
                             
                        </div>
                        <div class="middle-bar">
                            <Link to="#">Аматьорска тенис лига</Link>
                        </div>
                        <div class="second-bar">
                        <ul>
                            <li><Link to="/register">Регистрирай се</Link></li>
                            <li><Link to="/login">Влез</Link></li>
                        </ul>
                        </div>
                    </section>
                }
            </nav>
        </header>
    );
}

export default Header;