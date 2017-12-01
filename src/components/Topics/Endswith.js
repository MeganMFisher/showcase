import React, { Component } from 'react';

export default class Endswith extends Component {
    constructor() {
        super() 

        this.state = {
            words: [],
            endsWithList: []
        }
    }

    handleChange(e) {
        this.setState({ words: e })
    }

    endsWith() {
        var list = [];
        this.state.words.split(',').map(e => {
            if(e.toLowerCase().endsWith('s')) {
                list.push(e)
            }
        })
        this.setState({
            endsWithList: list,
            words: []
        })
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Ends with 's'</h4>
                <span className='puzzleText'>Word List: { this.state.words }</span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ e => this.endsWith() }>Find</button>
                <span className='resultsBox filterStringRB'>'s' Word List: { this.state.endsWithList }</span>
            </div>
        )
    }
}