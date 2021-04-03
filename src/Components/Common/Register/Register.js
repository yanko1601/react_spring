import { Link } from 'react-router-dom';

const Register = () => {

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
                                <input type="text" placeholder="име" name="name"/>
                            </div>
                            <div class = "login-field">
                                <label>Фамилия</label>
                                <input type="text" placeholder="фамилия" name="lastName"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Имейл</label>
                                <input type="email" placeholder="имейл" name="email"/>
                            </div>
                            <div class = "login-field">
                                <label>Години</label>
                                <input type="number" placeholder="години" name="age"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Парола</label>
                                <input type="password" placeholder="парола" name="rassword"/>
                            </div>
                            <div class = "login-field">
                                <label>Потвърди парола</label>
                                <input type="confirmPassword" placeholder="потвърди парола" name="confirmPassword"/>
                            </div>
                        </section>
                        <section class = "input-row">
                            <div class = "login-field">
                                <label>Град</label>
                                <select type="text" placeholder="град" name="city">
                                    <option value="Sofia">София</option>
                                    <option value="Varna">Варна</option>
                                    <option value="Ruse">Русе</option>
                                    <option value="Shumen">Шумен</option>
                                </select>
                            </div>
                            <div class = "login-field">
                                <label>Резерва</label>
                                <input type="text" placeholder="резерва" name="reserv"/>
                            </div>
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