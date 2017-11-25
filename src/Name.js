import React, { Component } from 'react';

export default class Name extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;

        return (
            <p>My name is { text }</p>
        );
    }
}
