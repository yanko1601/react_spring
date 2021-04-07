import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const[cities, setCities] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/city/getAll', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setCities(data))
        .catch(err => console.error(err))
    }, [])

    return(
            <form class = "form-wrapper">
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
                                <input type="confirmPassword" id="confirmPassword" placeholder="потвърди парола" name="confirmPassword"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Град</label>
                                <select type="text" placeholder="град" name="city">
                                     {cities ? cities.map (c => {
                                        <option key={c.id} value={c.name}>{c.name}</option>
                                    }) : 
                                        <option key="" value=""></option>
                                    }
                                </select>
                            </div>
                            {/* <div class = "login-field">
                                <label>Резерва</label>
                                <input type="text" placeholder="резерва" name="reserv"/>
                            </div> */}
                        </section>

                        <button type="submit">РЕГИСТРИРАЙ МЕ</button>
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