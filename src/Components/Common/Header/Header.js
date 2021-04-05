import './Header.css'
import mainLogo from '../../../Tools/tennis-logo-vector.jpg'

import { Link } from 'react-router-dom'

const Header = (props) => {

    const onClickExitButton = (e) => {
        e.preventDefault();
        props.HandleLogOut()
    } 

    return (
        <header class="site-header">
            <nav class="navbar">
                { props.data.token ?
                    <section class="navbar-dashboard">
                        <div>
                            <img src={mainLogo} alt=""></img>
                        </div>
                        {props.data.user.role === "ADMIN" ? 
                            <div class="first-bar">
                            <Link class="user-button" to="#">Ранглиста</Link>
                            <Link class="user-button" to="#">Предизвикай</Link>
                            <Link class="user-button" to="#">АДМИН</Link>
                            </div>
                            :
                            <div class="first-bar">
                            <Link class="user-button" to="#">Ранглиста</Link>
                            <Link class="user-button" to="#">Предизвикай</Link>
                            </div>
                        }
                        <div class="middle-bar">
                            <Link to="#">Аматьорска тенис лига</Link>
                        </div>
                        <div class="second-bar">
                            <ul>
                                <li>Здравей, {props.data.user.name}</li>
                                <li><button class="exit-button" onClick={onClickExitButton}>Излез</button></li>
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