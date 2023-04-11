import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FaPencilAlt} from "react-icons/fa"
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";

const Form = () => {

    const navigate = useNavigate()

    const [status, setStatus] = useState(false)

    const [email, setEmail] = useState('')

    const [eye, setEye] = useState(false)

    const {user, setUser} = useContext(CustomContext)

    const registerUser = (e) => {
        e.preventDefault()
        let newUser = {
            email,
            password: e.target[0].value
        }

        axios.post('/register', newUser)
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
            .catch((err) => console.error(err))
    }

    return (
        <div className='content'>
            <form className='form' onSubmit={registerUser}>

                {
                    status &&
                    <p className="form__email" onClick={() => setStatus(false)}>{email}<FaPencilAlt/></p>
                }

                <h2 className="form__title">
                    {
                        status ? 'Придумай пароль для входа на любом устройстве' : 'Регистрация'
                    }
                </h2>

                {
                    status &&
                    <>
                        <div className='form__password'>
                            <input type={eye ? 'text' : 'password'} autoComplete='new-password' className="form__field"
                                   placeholder='Придумайте пароль'/>
                            <span className='form__eye' onClick={() => setEye(prev => !prev)}>
                                {
                                    eye ? <AiFillEye/> : <AiFillEyeInvisible/>
                                }
                            </span>
                        </div>
                        <button type='submit' className="form__btn">Создать аккаунт</button>
                    </>
                }
                {
                    !status &&
                    <>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                               className="form__field" placeholder='Введите email'/>
                        <div className="form__btn" onClick={() => setStatus(true)}>Продолжить</div>
                        <Link to="/login">У меня есть аккаунт</Link>

                    </>
                }


            </form>
        </div>
    );
};

export default Form;