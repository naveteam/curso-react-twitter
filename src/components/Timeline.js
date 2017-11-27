import React, { Component } from 'react';
import { getTweets, createTweet } from '../services/tweet';

const styles = {
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    newTweet: {
        display: 'flex',
        flex: 1
    },
    submit: {
        border: 0,
        borderRadius: 0,
        backgroundColor: '#38435a',
        color: 'white',
        padding: '0.5rem'
    },
    refresh: {
        backgroundColor: '#ea454b',
        padding: '0.75rem',
        marginTop: 20,
        border: 0,
        color: '#fff',
        alignSelf: 'flex-end'
    }
}

export default class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweet: '',
            tweets: [],
            user: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentWillMount() {
        await this.listTweets();
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        });
    }

    async listTweets() {
        try {
            const res = await getTweets();
            this.setState({
                ...this.state,
                tweets: res.data
            });    
        } catch (error) {
            console.log(error);
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const res = await createTweet({userId: this.state.user.id, text: this.state.tweet});

        this.setState({
            tweets: [res.data].concat(this.state.tweets),
            tweet: ''
        });
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            tweet: event.target.value
        });
    }

    render() {
        return (
            <div style={styles.timeline}>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <textarea 
                        style={styles.newTweet}
                        value={this.state.tweet}
                        onChange={this.handleChange}
                    />
                    <button style={styles.submit} type="submit">Tweetar</button> 
                </form>
                <button style={styles.submit} onClick={this.listTweets.bind(this)}>Atualizar</button>
                <div>
                    <ul>
                        {this.state.tweets.map((tweet) => (
                            <li key={tweet.id}>{tweet.name}: {tweet.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }


















}
