import React, {Component} from 'react';
export default class OLComponent extends Component {
    render() {
        return (
            <div style={{display: 'none'}}>
                {this.props.children}
            </div>
        );
    }
}
