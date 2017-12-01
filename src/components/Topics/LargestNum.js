import React, { Component } from 'react';

export default class LargestNum extends Component {
    constructor() {
        super()

        this.state = {
            numbers: '',
            largest: 0
        }
    }

    handleChange(e) {
        this.setState({numbers: e})
    }

    findLargest() {
        var nums = this.state.numbers.split(',').map(Number)
        var large = Math.max(...nums)
        this.setState({largest: large})
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Largest Number</h4>
                <span className='puzzleText'>Numbers: { this.state.numbers }</span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ e => this.findLargest() }>Find</button>
                <span className='resultsBox filterStringRB'>Number: { this.state.largest }</span>
            </div>
        )
    }
}