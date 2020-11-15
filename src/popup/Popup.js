import React from 'react'
import './Popup.scss'

export class Popup extends React.Component {
    constructor() {
        super();

        this.state = {
            shown: false
        }
    }

    render() {
        return <div className="popup">
            <button onClick={() => this.setState({ shown: true })}>{ this.props.text }</button>

            <div className={ (this.state.shown ? 'shown' : 'hidden') + ' popup-window'}>
                <button className="close-btn"
                    onClick={() => this.setState({ shown: false })}>Close</button>
                { this.props.children }
            </div>
        </div>
    }
}