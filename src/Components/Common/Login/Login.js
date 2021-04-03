import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <form>
            <body>
                <section class = "wrapper">
                    <header class = "login-header">
                        <p>Влез</p>
                    </header>
                    <main class = "login-main">
                        <div class = "login-field">
                            <label>ИМЕЙЛ</label>
                            <input type="text" placeholder="имейл" name="email"/>
                        </div>
                        <div class = "login-field">
                            <label>ПАРОЛА</label>
                            <input type="password" placeholder="парола" name="password"/>
                        </div>
            
                        <button type="submit">ВЛЕЗ</button>
                    </main>
                    <footer class = "login-footer">
                        <p>Нямаш регистрация?</p>
                        <p>Регистрирай се </p><Link to="/register">тук</Link>
                    </footer>
                </section>
            </body>
        </form>
    );

}

export default Login;