import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { Drinks } from './src/drinks/drinks.js'
import { Filter } from './src/filter/filter.js'

export default class App extends Component {
  render(){
    return (
      <View>
        <Drinks/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
 
})

