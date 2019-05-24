import React from 'react';
import { Card, Avatar } from 'antd';
import './chatUserData.css';

class ChatUserData extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Card id="ChatUserDataCard">
                    <Avatar id="avatar" icon="user" size={64} /><div id="UserText">
                        <h1>{this.props.name}</h1>
                        <h5>{this.props.email}</h5>
                    </div>
                </Card >
            </div>
        )
    }
}

export default ChatUserData;