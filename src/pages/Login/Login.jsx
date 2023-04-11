import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";

const Login = () => {

    const navigate = useNavigate()

    const {setUser} = useContext(CustomContext)

    const loginUser = (e) => {
        e.preventDefault();
        let newUser = {
            email: e.target[0].value,
            password: e.target[1].value
        }
    axios.post('/login', newUser)
        .then(({data}) => {
            setUser({
                token: data.accessToken,
                ...data.user
            })

            localStorage.setItem('user', JSON.stringify({
                token: data.accessToken,
                ...data.user
            }))
            navigate('/')
        })
        .catch((err) => console.log(err.message))
    }

    return (
        <div className='content'>
            <form action="" className='form' onSubmit={loginUser}>
                <h2 className='form__title'>Вход на LOGOS</h2>
                <input autoComplete='username' type="email" className="form__field" placeholder='Email'/>
                <input autoComplete='current-password' type="password" className="form__field" placeholder='Пароль'/>
                <div className='form__create'>
                    <Link to="/register">Создать аккаунт</Link>
                </div>
                <button type='submit' className="form__btn">Войти</button>
            </form>
        </div>
    );
};

export default Login;