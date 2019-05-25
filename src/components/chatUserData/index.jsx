import React from 'react';
import { Card, Avatar } from 'antd';
import './chatUserData.css';
import avatar1 from '../../assets/avatars/pipo-enemy1.png'

class ChatUserData extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div style={{ backgroundColor: "transparent" }}>
                <Card id="ChatUserDataCard">
                    <Avatar id="avatar" src={avatar1} size={100} /><div id="UserText">
                        <h1>{this.props.name}</h1>
                    </div>
                </Card >
            </div>
        )
    }
}

export default ChatUserData;