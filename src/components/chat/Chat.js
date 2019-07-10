import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMessage } from "./thunks";
import { get } from "lodash/fp";

import './Chat.scss';

class Chat extends Component {
    state = {
        value: ''
    };

    addMessage = () => {
        this.setState({ value: '' })
        this.props.addMessage('I said: ' + this.state.value);
    };

    render() {
        const messages = get("messages", this.props, []);
        console.log(messages);
        return (
            <div>
                <ul id="msg">
                    {messages.map((msg, i) => (<li key={i}>{msg}</li>))}
                </ul>
                <form onSubmit={e => e.preventDefault()}>
                    <input id="m" value={this.state.value} autoComplete="off" onChange={event => this.setState({ value: event.target.value })} /><button onClick={() => this.addMessage()}>Send</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        messages: state.chat.messages
    };
};

const mapDispatchToProps = dispatch => ({
    addMessage: message => dispatch(addMessage(message)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
