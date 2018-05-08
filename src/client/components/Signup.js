import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import SignupApi from '../logicas/SignupApi';

const initialState = { 
    login: '', 
    senha: '', 
    confirmacao: '',
    messages: []
};

export default class Signup extends Component {

    constructor(props) {
        super(props);
        
        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    isFormValid() {
        
        const messages = [];

        // crossfield validation, algo que o HTML5 não faz
        if(this.state.senha != this.state.confirmacao) 
            messages.push('Senha não confere');

        if(this.state.senha == this.state.login)
            messages.push('Senha igual ao username');            
    
        this.setState({ messages });

        return !messages.length;
    }

    handleSubmit(event) {

        event.preventDefault();

        if(!this.isFormValid()) return;
        
        const { login, senha, urlPerfil } = this.state;
        
        const newUser = {
            login, 
            senha, 
            urlPerfil
        };

        SignupApi
            .signup(newUser)
            .then(() => {
                alert('Enviado');
                browserHistory.push('/');
            })
            .catch(err => {
                alert('Erro no envio');
                const messages = [];
                messages.push(err);
                this.clearForm();
                this.setState({ messages });
            });
    }

    clearForm() {
        this.setState(initialState);
    }

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="signup-box">
                <h1 className="text-center">Signup</h1>

                <ul className="error-messages">
                    {
                        this.state.messages.map(message => 
                            (<li>{message}</li>)
                        )
                    }
                </ul>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="input-group">
                        <label>Username</label>
                        <input required name="login" onInput={this.handleInputChange} value={this.state.userName} autoFocus autoComplete="off"/>
                    </div>
                    
                    <div className="input-group">
                        <label>Password</label>
                        <input required name="senha" onInput={this.handleInputChange} type="password" value={this.state.password} autoComplete="off"/>
                    </div>

                     <div className="input-group">
                        <label>Confirm password</label>
                        <input required name="confirmacao" onInput={this.handleInputChange} type="password" value={this.state.passwordConfirmation} />
                    </div>

                    <div className="input-group">
                        <label>Perfil url</label>
                        <input name="urlPerfil" onInput={this.handleInputChange} value={this.state.perfilUrl} />
                    </div>
                    
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
    }
}