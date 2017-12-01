import React, { Component } from 'react';

export default class SmallestNum extends Component {
    constructor() {
        super();

        this.state = {
            numbers: '',
            smallest: 0
        }
    }

    handleChange(val) {
        this.setState({numbers: val})
    }

    findSmallest() {
        var nums = this.state.numbers.split(',').map(Number)
        var small = Math.min(...nums)
        this.setState({smallest: small})

    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Smallest Number</h4>
                <span className='puzzleText'>Numbers: {this.state.numbers}</span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={e => this.findSmallest()}>Find</button>
                <span className='resultsBox filterStringRB'>Smallest Number: { this.state.smallest }</span>
            </div>
        )
    }

}