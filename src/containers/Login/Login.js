import React, { Component } from 'react'
import classes from './Login.css'
import Modal from '../../components/UI/Modal/Modal'
import Button  from '../../components/UI/Button/Button'
import ResetPass from '../ResetPass/ResetPass'

export class Login extends Component {
    state = {
      forgotModal: false
    }
    
  openModal = () =>{
    this.setState({forgotModal:true});
  }
  closeModal = () =>{
    this.setState({forgotModal:false});
  }
  checkLogin = () =>{
      alert('Checked!')
  }
  resetForm = () =>{
    console.log(this.props.history);
    
    this.props.history.push('/registration')
   }

   componentDidMount(){
     console.log(this.props);
     
   }

  render() {
    return (
      <div className={classes.Login}>
      <h1>Вход</h1>
        <Modal show={this.state.forgotModal} modalClosed={this.closeModal}>
           <ResetPass resetClosed={this.closeModal}/>
        </Modal>
        <p>Форма логина</p>
        <Button btnType="Success" clicked={this.checkLogin}>Войти</Button>
        <Button btnType="Danger" clicked={this.resetForm}>Зарегистрироваться</Button>
        <span 
        className={classes.ForgotPass}
        onClick={this.openModal}
         >Забыли пароль?</span>



      </div>
    )
  }
}

export default Login
