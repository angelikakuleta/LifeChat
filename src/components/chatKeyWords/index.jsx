import React from 'react';
import { Typography } from 'antd';
import './chatKeyWords.css';

const { Text } = Typography;

class ChatKeyWords extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div id="ChatKeyWords">
                {this.props.keywords.map((item, index) => (
                    <Text key={index} code>{item}</Text>
                ))}
            </div>
        )
    }
}

export default ChatKeyWords;