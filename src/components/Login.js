import React, { Component } from 'react';
import { login } from '../services/auth';
import '../index';

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

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const res = await login(this.state);
        localStorage.setItem('user', JSON.stringify(res.data));
        this.props.history.push('/timeline');
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <h2 style={styles.center}>Entrar</h2>
                    <label>
                        <span>E-mail</span>
                        <input 
                            value={this.state.email}
                            onChange={this.onChange.bind(this, 'email')}
                            type="text" 
                            placeholder="example@example.com"
                        />
                    </label>
                    <label>
                        <span>Senha</span>
                        <input 
                            value={this.state.password}
                            onChange={this.onChange.bind(this, 'password')}
                            type="password" 
                            placeholder="*****"
                        />
                    </label>
                    <button style={styles.submit} type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}