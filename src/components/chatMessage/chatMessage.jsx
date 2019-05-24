import React from 'react';
import reactStringReplace from 'react-string-replace';
import './chatMessage.css';

class ChatMessage extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;

        this.toBeRendered = this.props.message
    }
    componentWillMount() {
        const keywordArr = this.props.keywords;
        for (let keyword of keywordArr) {
            this.toBeRendered = reactStringReplace(this.toBeRendered, keyword, (match, i) => (
                <span className="emphasis" key={Math.random()}>{match}</span>))
        }
    }
    render() {
        return <p>{this.toBeRendered}</p>
    }
}


export default ChatMessage;