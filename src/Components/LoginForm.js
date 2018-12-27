import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {
    state = {  }
    register = (e) => {
        e.preventDefault();
        console.log("Now The Login Should happen");
    }
    render() { 
        return (  
            <form className="login" onSubmit={this.register}>
                <label>Name</label>
                <input type="text" name="Name" placeholder="Name"/>
                <label>E-Mail Adresse</label>
                <input type="text" name="E-Mail-Adress" placeholder="E-Mail-Adresse"/>
                <label>Passwort</label>
                <input type="password" name="password" placeholder="Passwort"/>
                <input type="submit" value="SIGN UP"/>
            </form>
        );
    }
}
 
export default LoginForm;