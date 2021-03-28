import React, { useState } from 'react'
import{ View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { FILTER } from '../router';
const url ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink'
export const Header = ({navigation, data}) => {
	console.log(navigation.navigate);
	console.log(data);
	return(
        <View style={styles.view}>
            <Text style={styles.text}>Drinks</Text>
			<TouchableOpacity onPress={() => navigation.navigate(FILTER,(data))}>
			<Image style={styles.filter} source={require('../../public/filter.png')}/>
			</TouchableOpacity>
		</View>
	)
} 
const styles = StyleSheet.create({
	view: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 12,
		borderBottomWidth: 4,
    	borderColor: "grey",
	},
	text: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold'
	},
	filter:{
		width: 20,
		height: 20,
		borderColor: 'black',
		backgroundColor: 'red'
	}
});