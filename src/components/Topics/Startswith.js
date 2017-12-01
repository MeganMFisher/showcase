import React, { Component } from 'react';

export default class Startswith extends Component {
    constructor() {
        super()

        this.state = {
            words: [], 
            startsWithWords: []
        }
    }

    handleChange(e) {
        this.setState({words: e})
    }

    startWith() {
        var list = [];
        this.state.words.split(',').map(e => {
            if(e.toLowerCase().startsWith("sh")) {
                list.push(e)
            }
        })
        this.setState({
            startsWithWords: list
        })

    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Starts with 'sh'</h4>
                <span className='puzzleText'>Word List: { this.state.words }</span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ e => this.startWith() }>Find</button>
                <span className='resultsBox filterStringRB'>'sh' Word List: { this.state.startsWithWords }</span>
            </div>
        )
    }

}