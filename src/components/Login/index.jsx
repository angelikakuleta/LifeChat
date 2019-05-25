import React from 'react';
import '../../styles/form.css';

export default class Login extends React.Component {
   state = {
      email: '',
      password: '',
      errors: {},
      isDisable: true
   };

   handleChangeEmail = (e) => {
      let error = '';
      let isDisable = true;

      if (e.target.value.length === 0)
         error = 'To pole jest wymagane';
      else if (!(/^\S+@\S+\.\S+$/i.test(e.target.value)))
         error = 'Niewłaściwy format adresu email';
      else isDisable = false;

      this.setState({
         email: e.target.value,
         isDisable,
         errors: {
            ...this.state.errors,
            email: error
         }
      });
   };

   handleChangePassword = (e) => {
      let error = '';
      let isDisable = true;

      if (e.target.value.length === 0)
         error = 'To pole jest wymagane';  
      else isDisable = false;

      this.setState({
         password: e.target.value,
         isDisable,
         errors: {
            ...this.state.errors,
            password: error
         }
      });
   }

   handleClick = async (e) => {
      e.preventDefault();
      
      const { email, password } = this.state;
      const requestBody = { email, password }
      
      try {
         let response = await fetch('/login', {
            method: "post",
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(requestBody)
         });
         if (response.status !== 200) throw response;
         localStorage.setItem("x-auth-token", response.headers.get('x-auth-token'));
         response = await response.json();
         this.props.changeLoggedStatus(true);
         console.log(response);
      } catch (err) {
         console.log(err);
         if ([404, 400].includes(err.status)) {
            let error = 'Błędny email lub hasło';
            this.setState({
               email: '',
               password: '',
               isDisable: true,
               errors: {
                  email: '',
                  password: error
               }
            });
         }
      }
   }

   render() {
      return (
         <section id='login' className="form">
            <div>
               <h2>Panel logowania</h2>
               <form onSubmit={this.handleClick}>   
                  <div>          
                     <input type='email' value={this.state.email} onChange={this.handleChangeEmail} placeholder='e-mail' />
                     {this.state.errors.email && (<div className='error'>{this.state.errors.email}</div>)}
                  </div>
                  <div>
                     <input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder='password' />
                     {this.state.errors.password && (<div className='error'>{this.state.errors.password}</div>)}
                  </div>
                  <input id='submit' type='submit' value='Zaloguj się' disabled={this.state.isDisable} />
               </form>
            </div>
         </section>
      );
   };
};