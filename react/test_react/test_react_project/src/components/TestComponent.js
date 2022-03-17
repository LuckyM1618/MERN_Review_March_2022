import React, { Component } from 'react';

class TestComponent extends Component {
    render() {
        // const { firstName, lastName } = this.props
        return (
            <div>
                {this.props.firstName} {this.props.lastName}
            </div>
        );
    }
}

export default TestComponent;