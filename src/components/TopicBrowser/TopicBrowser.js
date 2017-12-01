import React, { Component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import SortNumbers from '../Topics/SortNumbers'
import Average from '../Topics/Average'
import SmallestNum from '../Topics/SmallestNum'
import LargestNum from '../Topics/LargestNum'
import Startswith from '../Topics/Startswith'
import Endswith from '../Topics/Endswith'

class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
        <SortNumbers />
        <Average />
        <SmallestNum />
        <LargestNum />
        <Startswith />
        <Endswith />
      </div>
    )
  }
}

export default TopicBrowser