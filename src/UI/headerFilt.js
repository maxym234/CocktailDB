import React from 'react'
import{ View,  Text, Image, StyleSheet, TouchableOpacity, TouchableOpacityBase} from 'react-native'
export const HeaderFilt = ({navigation}) => {

	return(
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.filter} source={require('../../public/left.png')}/>
                <Text style={styles.text}>Filter</Text>
            </TouchableOpacity>
		</View>
	)
} 
const styles = StyleSheet.create({
	view: {
		display: 'flex',
		flexDirection: 'row',
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
        marginRight: 15
	},
    touch: {
        width: 20,
        height: 50,
        backgroundColor: 'red'
    }
});