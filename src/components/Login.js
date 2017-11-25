import React, { Component } from 'react';
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

    render() {
        return (
            <div className="container">
                <form style={styles.form}>
                    <h2 style={styles.center}>Entrar</h2>
                    <label>
                        <span>E-mail</span>
                        <input type="text" placeholder="example@example.com"/>
                    </label>
                    <label>
                        <span>Senha</span>
                        <input type="password" placeholder="*****"/>
                    </label>
                    <button style={styles.submit} type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}