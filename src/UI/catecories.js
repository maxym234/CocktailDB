/**
 * @jest-environment jsdom
 */

import React, { useEffect,  useState } from 'react'
import{ View,Image, Text, StyleSheet, FlatList, ImageBackground} from 'react-native'
import{ ActivityIndicator } from 'react-native-paper'
import {Content} from '../UI/content'

export const Categories = ({dataCateg}) => {
    const [image, setImage] = useState([])
    const [page, setPage] =useState('Ordinary Drink')
    const [titles, setTitles] =useState(dataCateg.value)
    useEffect(() => {
        getData()
        return () => {

        }
    }, [page])
   const getData = async()=>{
       try{
        const response = await fetch(dataCateg.url+`${page}`)
        .then(res => res.json())
        .then((resJson) => {setImage(image.concat(resJson.drinks))
    })
       }catch(e){
            throw e;
       }
    }


     const scrollHandler = () => {
        setPage('Cocktail')
        setTitles('Cocktail')
        console.log(dataCateg.url+`${page}`, ' ef3');
     }
   const renderRow = ({ item }) => {
        return(
            <View style={styles.view}>
                    <Content dataContent={item}/>           
            </View>
        )
    }
    const renderFooter = () => {
        return(
            <View style={styles.loader }>
                <ActivityIndicator animating size='large' animating={true}/>
            </View> 
        )
    }

	return(
        <View>
            <Text style={styles.text}>{titles}</Text>
            <FlatList 
                data={image}
                style={styles.flat}  
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={renderFooter} 
                renderItem={renderRow}
                onEndReached={scrollHandler}
                onEndReachedThreshold={0.5}/>
        </View>
	)
} 
const styles = StyleSheet.create({
    flat: {
        marginLeft: 20
    },
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
        margin: 20
	},
	image:{
		width: 100,
		height: 100,
	},
    loader: {
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#CED0CE"
    }
});