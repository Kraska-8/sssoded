import React, { Component } from 'react';
import classes from './Registration.css'
import Button  from '../../components/UI/Button/Button';
import { Link } from 'react-router-dom'

export class Registration extends Component {
    state={
        login:'',
        password:'',
        isChecked: false
    }
    checkReg = () =>{
        alert('Checked!')
    }
    resetForm = () =>{
      alert('Resetted!')
     }
  render() {
    return (
      <div className={classes.Registration}>
        <h1>Регистрация на Площадке</h1>
        <h4>Пожалуйста, введите Ваши данные для создания учетной записи на Площадке</h4>
        <form>
            <div>
                <label htmlFor="email">Логин (e-mail)<sup>*</sup></label>
                <input type="email" id="email" placeholder="Введите Ваш email" />
            </div>
            <div>
                <label htmlFor="password">Пароль<sup>*</sup></label>
                <input type="password" id="password" placeholder="Введите Ваш пароль учетной записи на Площадке" />
            </div>
            <div>
                <label htmlFor="repeat_password">Подтверждение пароля<sup>*</sup></label>
                <input type="password" id="repeat_password" placeholder="Подтвердите Ваш пароль учетной записи на Площадке" />
            </div>
            <div>
                <input type="checkbox" name="vehicle1" value="agreed"/>Я даю <a href="/">Согласие на обработку персональных данных</a>
                </div>
        </form>
        <Button btnType="Success" clicked={this.checkReg}>Зарегистрироваться</Button>
        <p>Есть учетная запись? <Link to="/"  >Войти сейчас</Link></p>
      </div>
    )
  }
}

export default Registration
