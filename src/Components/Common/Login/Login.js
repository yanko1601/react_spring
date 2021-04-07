import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'

async function fetData(fData) {
    await fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
      'Content-Type': 'application/json'
        },
        body: JSON.stringify(fData)
    })
    .then(res => res.json())
    .catch(err => console.error(err))
    
  }


const Login = (props) => {

    const [succsess, setSuccess] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const loginData = {username: e.target.email.value, password: e.target.password.value};
        fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }).then(res => res.json())
        .then(data => {
            if(data.token) {
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                    props.HandleLogin(data)
                }, 2000)
            }
        })
        .catch(err => console.error(err))
        
    }

    return (
        <body>
            <form onSubmit={onSubmitHandler}>
                {succsess ? 
                    <div className="login-message">
                    <h5>Успешно се логнахте в лигата</h5>
                </div> 
                :
                <div></div>}
                <section class = "wrapper">
                    <header class = "login-header">
                        <p>Влез</p>
                    </header>
                    <main class = "login-main">
                        <div class = "login-field">
                            <label>ИМЕЙЛ</label>
                            <input type="text" placeholder="имейл" id="email" name="email"/>
                        </div>
                        <div class = "login-field">
                            <label>ПАРОЛА</label>
                            <input type="password" placeholder="парола" id="password" name="password"/>
                        </div>
            
                        <button type="submit">ВЛЕЗ</button>
                    </main>
                    <footer class = "login-footer">
                        <p>Нямаш регистрация?</p>
                        <p>Регистрирай се </p><Link to="/register">тук</Link>
                    </footer>
                </section>
            </form>
        </body>
    );

}

export default Login;