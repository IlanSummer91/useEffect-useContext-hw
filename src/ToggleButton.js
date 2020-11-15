import React from 'react';
import './ToggleButton.scss';

export class ToggleButton extends React.Component {

    constructor() {
        super();

        this.state = {
            isHidden: true,
        }
    }

    renderButton() {
        if (this.state.isHidden) {
            return <button 
                onClick={ () => this.setState({isHidden: false}) }>
                    { this.props.showText }</button>;
        } else {
            return <button 
                onClick={ () => this.setState({isHidden: true}) }>
                    { this.props.hideText }</button>;
        }
    }

    render() {
        return <div className='toggle-button'>
            <fieldset>
                <legend>
                    { this.renderButton() }
                </legend>
                <div className={ (this.state.isHidden ? 'hidden' : 'shown') + ' toggle-btn' }>
                    { this.props.children }
                </div>
            </fieldset>
        </div>
    }
}