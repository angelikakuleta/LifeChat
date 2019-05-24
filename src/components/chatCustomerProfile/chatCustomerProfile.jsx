import React from 'react';
import { Card, Meta, Avatar } from 'antd';
import './chatCustomerProfile.css';

class chatCustomerProfile extends Card {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Card id="card" style={{ width: 300, marginTop: 16 }}>
                <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={this.props.name}
                    description={this.props.email}
                />
            </Card>
        )
    }
}

export default chatCustomerProfile;