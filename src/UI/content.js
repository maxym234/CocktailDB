import React from 'react'
import{ View, Text, Image, StyleSheet} from 'react-native'

export const Content = ({dataContent}) => {
	return(
        <View style={styles.view}>
                <Image style={styles.image} source={{uri: dataContent.strDrinkThumb}}/> 
                <Text style={styles.text}>{dataContent.strDrink}</Text>               
        </View>
	)
} 
const styles = StyleSheet.create({
	view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20
	},
	text: {
		color: 'grey',
		fontSize: 12,
        marginLeft: 20
	},
	image:{
		width: 100,
		height: 100,
	}
});