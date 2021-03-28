import React, {Component} from 'react'
import{ View, StyleSheet, Text} from 'react-native'
import {Header} from '../UI/header'
import {Categories} from '../UI/catecories'
import request from '../../request'


export default class Drinks extends Component {
    render(){
        const { navigation } = this.props
        return(
            <View style={styles.view}>
                <Header navigation={navigation} data={request}/>
                    <View> 
                        <Categories key={request.key} dataCateg={request}/>
                    </View>
                
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    text:{
        margin: 20,
        color: 'gray',
        fontSize: 12
    },
    view: {
        paddingBottom: 200
    }
    
});