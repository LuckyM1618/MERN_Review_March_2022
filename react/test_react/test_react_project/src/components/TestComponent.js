import React, { Component } from 'react';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }

    render() {
        return (
            <div>
                <h1>Lightswitch is { this.state.position }</h1>
                <button onClick={this.flipSwitch}>Flip Switch</button>
            </div>
        );
    }
}

export default TestComponent;