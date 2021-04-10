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
                    <section className="navbar-dashboard">
                        <div>
                            <img src={mainLogo} alt=""></img>
                        </div>
                        {props.data.user.role === "ADMIN" ? 
                            <div className="first-bar">
                            <Link className="user-button" to="/">Начало</Link>
                            <Link className="user-button" to="/challenge">Предизвикай</Link>
                            <Link className="user-button" to="/admin">АДМИН</Link>
                            </div>
                            :
                            <div className="first-bar">
                            <Link className="user-button" to="/">Начало</Link>
                            <Link className="user-button" to="#">Ранглиста</Link>
                            <Link className="user-button" to="/challenge">Предизвикай</Link>
                            </div>
                        }
                        <div className="middle-bar">
                            <Link to="/"><span>Аматьорска тенис лига</span></Link>
                        </div>
                        <div className="second-bar">
                            <ul>
                                <li className="welcome-text">Здравей, {props.data.user.name}</li>
                                <li><button className="user-button" onClick={onClickExitButton}>Излез</button></li>
                            </ul>
                        </div>
                    </section>
                    :
                    <section class="navbar-anonymous">
                        <div>
                            <img src={mainLogo}></img>
                        </div>
                         <div class="first-bar">
                             
                        </div>
                        <div class="middle-bar">
                            <Link to="/"><span>Аматьорска тенис лига</span></Link>
                        </div>
                        <div class="second-bar">
                        <ul>
                            <li><Link to="/register" className="user-button">Регистрирай се</Link></li>
                            <li><Link to="/login" className="user-button">Влез</Link></li>
                        </ul>
                        </div>
                    </section>
                }
            </nav>
        </header>
    );
}

export default Header;