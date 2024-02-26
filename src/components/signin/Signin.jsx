import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../signin/signin.css';

import eye from '../../img/eye.svg';
import eyeoff from '../../img/eye-off.svg';

const SignIn = () => {
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    return (
        <div>
            <nav className="title__signin">
                <div className="text__signin">
                    <h1>Вход</h1>
                </div>
            </nav>

            <form className="form-registr__signin">
                <div className="email__signin">
                    <div className="flex-column__signin">
                        <h1>Email</h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="input__signin bottom"
                            placeholder="Введите свой Email"
                            name="email"
                        />
                    </div>
                </div>

                <div className="password__signin">
                    <div className="flex-column__signin">
                        <h1>Password</h1>
                    </div>

                    <div>
                        <input
                            type={isPasswordShown ? "text" : "password"}
                            className="input__signin bottom"
                            placeholder="Введите Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                            {isPasswordShown ? <img src={eye} alt="" /> : <img src={eyeoff} alt="" />}
                        </button>
                    </div>
                </div>

                <Link to='../Sidebar' className="free">
                    <button className="button-sign__signin" type="button">
                        Войти
                    </button>
                </Link>

                <Link to='./Signup' className="free">
                    <p className="have__signin">У вас нет учетной записи? <a href="#!" className="free__signin">Зарегистрироваться</a></p>
                </Link>
            </form>
        </div>
    );
};

export default SignIn;
