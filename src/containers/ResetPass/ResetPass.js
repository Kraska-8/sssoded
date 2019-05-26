import React, { Component } from 'react'
import classes from './ResetPass.css'
import { withRouter } from 'react-router-dom'
import Button  from '../../components/UI/Button/Button'

export class ResetPass extends Component {
    componentDidUpdate(){
        console.log("Reset Pass Will update",this.props);
        console.log(this.props);
    }
  render() {
    return (
      
      <div className={classes.ResetPass}> 
       <h2>Восстановление пароля</h2>
       <p>Форма восстановления пароля</p>
        <Button btnType="Success" clicked={this.checkLogin}>Продолжить</Button>
        <Button btnType="Danger" clicked={this.props.resetClosed}>Отмена</Button>
      </div>
    )
  }
}

export default withRouter(ResetPass)
