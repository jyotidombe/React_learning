import { Component } from 'react';
import { createConnection } from './chat.js';

export default class ChatRoom extends Component {
    state = {
        serverUrl: 'https://localhost:1234',
    };

    componentDidMount() {
        this.setConnection();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.serverUrl !== this.state.serverUrl ||
            prevState.roomId !== this.state.roomId
        ) {
            this.destroyConnection();
            this.setConnection();
        }
    }

    setConnection() {
        this.connect = createConnection(
          this.state.serverUrl,
          this.state.roomId
        );
        this.connect.connect();    
    }

    componentWillUnmount() {
        this.destroyConnection();
    }

    destroyConnection() {
        this.connect.disconnect();
        this.connect = null;
    }

    render(){
        return (
            <>
            <label>
                Server URL:{' '}
                <input value={this.state.serverUrl} onChange={e => {this.setState({serverUrl:e.target.value})} }/>
            </label>
            <br />
                <label>
                    Room ID:{' '}
                    <input
                        value={this.props.roomId}
                        onChange={e => this.setState({ roomId: e.target.value })}
                    />
                </label>
                <h3>Welcome to the {this.props.roomId} room!</h3>
            </>
        )
    }
}