import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'

const Register = (props) => {


    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = {
            "name": e.target.name.value,
            "lastName": e.target.lastName.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
            "confirmPassword": e.target.confirmPassword.value,
            "city": e.target.city.value,
            "age": Number(e.target.age.value)
        }

        fetch('http://localhost:8080/player/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => props.HandleRegister(data))
        .catch(err => console.error(err))
    }

    return(
            <form class = "form-wrapper" onSubmit={onSubmitHandler}>
                <section class = "wrapper">
                    <header class = "login-header">
                        <p>Регистрирай се</p>
                    </header>
                    <main class = "login-main">
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Име</label>
                                <input type="text" id="name" placeholder="име" name="name"/>
                            </div>
                            <div class = "login-field">
                                <label>Фамилия</label>
                                <input type="text" id="lastName" placeholder="фамилия" name="lastName"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Имейл</label>
                                <input type="email" id="email" placeholder="имейл" name="email"/>
                            </div>
                            <div class = "login-field">
                                <label>Години</label>
                                <input type="number" id="age" placeholder="години" name="age"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Парола</label>
                                <input type="password" id="password" placeholder="парола" name="rassword"/>
                            </div>
                            <div class = "login-field">
                                <label>Потвърди парола</label>
                                <input type="password" id="confirmPassword" placeholder="потвърди парола" name="confirmPassword"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Град</label>
                                <select type="text" placeholder="град" name="city" defaultValue="Шумен">
                                    <option key="1" value="Шумен">Шумен</option>
                                    <option key="2" value="Варна">Варна</option>
                                    <option key="3" value="Русе">Русе</option>
                                    <option key="4" value="Бургас">Бургас</option>
                                </select>
                            </div>
                            {/* <div class = "login-field">
                                <label>Резерва</label>
                                <input type="text" placeholder="резерва" name="reserv"/>
                            </div> */}
                        </section>

                        <button type="submit" className="register-button">РЕГИСТРИРАЙ МЕ</button>
                    </main>
                    <footer class = "login-footer">
                        <p>Вече си регистриран?</p>
                        <p>Влез </p><Link to="/login">тук</Link>
                    </footer>
                </section>
            </form>
    );

}

export default Register;