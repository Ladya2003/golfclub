import group1 from '../images/Group 1.svg';
import email from '../images/2089181.png';
import phone from '../images/img_302780.png';
import map from '../images/map-svgrepo-com1.svg';
import {useState, useEffect} from 'react'
// import '../style-scss/style.css';
import classes from './../style-scss/style.module.scss'
import React from 'react';
import Counter from './../components/Counter'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)


    // при измнении value - происходит useEffect
    useEffect( () => {
        for (const validation in validations) {
            switch(validation) {
                case 'minLength' :
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty' :
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength' :
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail' :
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
            }
        }
    }, [value])

    // если все ошибки - false то кнопка доступна
    useEffect( () => {
        if (isEmpty || maxLengthError || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError])

    return {
        isEmpty,
        minLengthError,
        emailError,
        maxLengthError,
        inputValid
    }
}

// для изменения хуков при вводе в input
const useInput = (InitialValue, validations) => {
    const [value, setValue] = useState(InitialValue)
    const [isDirty, setDirty] = useState(false)
    
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange, 
        onBlur,
        isDirty,
        // возвращаем все параметры
        ...valid
    }
}

const Contacts = () => {
    const username = useInput('', {isEmpty: true, minLength: 3})
    const email = useInput('', {isEmpty: true, minLength: 5, isEmail : true})
    const message = useInput('', {isEmpty: true, minLength: 10, maxLength : 100})


    // чтобы при увеличении/уменьшении людей не перезагружалась страница
    // const handleSubmit = event => {
    //     event.preventDefault();
    // }

    return (
        <div className="container55">
            <div class="starttext_about">
                <h1>Get in Touch</h1>
                <p>We advise you to sign up in advance for our club, because there are a lot of people who want to</p>
            </div>
            <div class="svg">
                <img src={group1}/>
            </div>
            <form class="decor">
                <div class="form-left-decoration"></div>
                <div class="form-right-decoration"></div>
                <div class="circle"></div>
                <div class={classes.formInner}>
                    <h3>Write to us</h3>
                    {(username.isDirty && username.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                    {(username.isDirty && username.minLengthError) && <div style={{color: 'red'}}>Должно быть минимум 3 символа</div>}
                    <input onChange={e => username.onChange(e)} onBlur={e => username.onBlur(e)} value={username.value} type="text" placeholder="Username" name='username'/>     
                    {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                    {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Должно быть минимум 5 символов</div>} 
                    {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Некорректный email</div>}            
                    <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type="email" placeholder="Email" name='email'/>
                    {(message.isDirty && message.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                    {(message.isDirty && message.minLengthError) && <div style={{color: 'red'}}>Должно быть минимум 10 символов</div>}
                    {(message.isDirty && message.maxLengthError) && <div style={{color: 'red'}}>Должно быть максимум 100 символов</div>} 
                    <textarea onChange={e => message.onChange(e)} onBlur={e => message.onBlur(e)} value={message.value} placeholder="Messages..." rows="3" name='message'></textarea>
                    <Counter initialCount={1}/>
                    <button disabled={!username.inputValid || !email.inputValid || !message.inputValid} id='subm'className={classes.subm} style={(!username.inputValid || !email.inputValid || !message.inputValid) ? {backgroundColor: 'gray'} : null}>Send</button>
                </div>
            </form>
            <div class="map">
                <div class="contact text-left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <footer>
                <div class="hours_of_operation">
                    <p>Mon-Wed: 6:00am-8:00pm</p>
                    <p>Thurs-Fri:6:30am-7:30pm</p>
                    <p>Sat:7:00am-9:00pm</p>
                    <p>Sun:8:00am-8:00pm</p>
                </div>
                <div class="quick_links1-2">
                    <p>Blog</p>
                    <p>Blog single</p>
                </div>
                <div class="quick_links3-4">
                    <p>Golf</p>
                    <p>Mini golf</p>
                </div>
                <div class="contact">
                    <div class="email">
                        <div class="photo">
                            <img src={email} alt="#"/>
                        </div>
                        <p>golf_nc@mail.com</p>
                    </div>
                    <div class="phone">
                        <div class="photo">
                            <img src={phone} alt="#"/>
                        </div>
                        <p> +375292363203</p>
                    </div>
                    <div class="place">
                        <div class="photo">
                            <img src={map} alt="#"/>
                        </div>
                        <p> California, 75 West Rock</p>
                    </div>
                </div>
            </footer>
        </div>                                         
    );

    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    // const [usernameDirty, setUsernameDirty] = useState(false)
    // const [emailDirty, setEmailDirty] = useState(false)
    // const [messageDirty, setMessageDirty] = useState(false)

    // const [usernameError, setUsernameError] = useState('Имя пользователя не может быть пустым')
    // const [emailError, setEmailError] = useState('Email не может быть пустым')
    // const [messageError, setMessageError] = useState('Сообщение не может быть пустым')

    // const [formValid, setFormValid] = useState(false)


    // useEffect( () => {
    //     if (usernameError || emailError || messageError) {
    //         setFormValid(false)
    //     } else {
    //         setFormValid(true)
    //     }
    // }, [usernameError, emailError, messageError])


    // const usernameHandler = (e) => {
    //     setUsername(e.target.value)
    //     if (e.target.value === '') {
    //         setUsernameError('Имя пользователя не может быть пустым')
    //     } else {
    //         setUsernameError('')
    //     }
    // }

    // const emailHandler = (e) => {
    //     setEmail(e.target.value)
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!re.test(String(e.target.value).toLowerCase())) {
    //         setEmailError('Некорректный email')
    //     } else {
    //         setEmailError('')
    //     }
    // }

    // const messageHandler = (e) => {
    //     setMessage(e.target.value)
    //     if (e.target.value === '') {
    //         setMessageError('Сообщение не может быть пустым')
    //     } else {
    //         setMessageError('')
    //     }
    // }



    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'username' :
    //             setUsernameDirty(true)     
    //             break
    //         case 'email' :
    //             setEmailDirty(true)       
    //             break
    //         case 'message' : 
    //             setMessageDirty(true)
    //             break
    //     }
    // }

    // <div class="form-inner">
    //                 <h3>Write to us</h3>
    //                 {(usernameDirty && usernameError) && <div style={{color: 'red'}}>{usernameError}</div>}
    //                 <input value={username} onChange={(e) => usernameHandler(e)} onBlur={e => blurHandler(e)} type="text" placeholder="Username" name='username'/>
    //                 {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
    //                 <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" placeholder="Email" name='email'/>
    //                 {(messageDirty && messageError) && <div style={{color: 'red'}}>{messageError}</div>}
    //                 <textarea value={message} onChange={e => messageHandler(e)} onBlur={e => blurHandler(e)} placeholder="Messages..." rows="3" name='message'></textarea>
    //                 <input disabled={!formValid} type="submit" value="Send"/>
    //             </div>
}

export default Contacts;