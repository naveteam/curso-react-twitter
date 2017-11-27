import React, { Component } from 'react';
import '../index.css';
import { signUp } from '../services/auth';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#38435a',
        padding: 20,
        color: 'white'
    },
    center: {
        textAlign: 'center'
    },
    submit: {
        padding: '0.85rem',
        border: 0,
        borderRadius: 0,
        backgroundColor: '#ea454b',
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#fff'
    },
    link: {
        marginTop: 15,
        color: '#fff',
        float: 'right'
    }
};

export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await signUp(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <h2 style={styles.center}>Cadastro</h2>
                    <label>
                        <span>Nome de usuario:</span>
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.onChange.bind(this, 'name')}
                            placeholder="Demogorgon"
                        />
                    </label>
                    <label>
                        <span>E-mail:</span>
                        <input 
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange.bind(this, 'email')}
                            placeholder="stranger@things.com"
                        />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange.bind(this, 'password')}
                            placeholder="*****"
                        />
                    </label>
                    <button
                        type="submit"
                        style={styles.submit}
                    >
                        Cadastrar
                    </button>
                </form> 
            </div>
        );
    }
}