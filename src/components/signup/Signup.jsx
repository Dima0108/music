import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../signup/signup.css'

import arrow from '../../img/Arrow.svg'
import eye from '../../img/eye.svg';
import eyeoff from '../../img/eye-off.svg';
const SignUp = () => {
    const [password1, setPassword1] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVisibility1 = () => {
        setIsPasswordShown(!isPasswordShown);
    };
    return (
        <div>
            <header className="header__signup">
                <div className="container_arrow__signup">
                    <Link to={"/"}>
                        <div className="img_arrow__signup">
                            <img className="arrow__signup" src={arrow} alt="" />
                        </div>
                    </Link>
                </div>
            </header>

            <section className="title__signup">
                <div className="text__signup">
                    <h1>Зарегистрироваться</h1>
                </div>
            </section>

            <form className="form-registr__signup" >
                <div className="Name__signup">
                    <div className="flex-column__signup">
                        <h1>Ваше имя</h1>
                    </div>

                    <div className="inputForm__signup">
                        <input type="text" className="input__signup bottom" placeholder="Введите ваше имя" name='username' />
                    </div>
                </div>

                <div className="email__signup">
                    <div className="flex-column__signup">
                        <h1>Ваша Email</h1>
                    </div>
                    <div className="inputForm">
                        <input type="text" className="input__signup bottom" placeholder="Введите Email" name='email' />
                    </div>
                </div>

                <div className="password__signup">
                    <div className="flex-column__signup">
                        <h1>Пароль</h1>
                    </div>

                    <input
                        type={isPasswordShown ? "text" : "password"}
                        className="input__signin bottom"
                        placeholder="Введите Password"
                        name="password"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />

                    <button type="button" onClick={togglePasswordVisibility1} className="toggle-password-signup">
                        {isPasswordShown ? <img src={eye} alt="" /> : <img src={eyeoff} alt="" />}
                    </button>
                </div>

                <Link to='../../Sidebar' className="btn__signup">
                    <button className="button-sign__signup" type="button">Зарегистрироваться</button>
                </Link>

                <Link to='/'>
                    <p className="have__signup">У вас есть учетная запись? <a href="#!" className="free__signup">Войти</a></p>
                </Link>
            </form>
        </div>
    );
}

export default SignUp;