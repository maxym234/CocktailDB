/**
 * @jest-environment jsdom
 */

import React, { useEffect,  useState } from 'react'
import{ View,Image, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground} from 'react-native'
import {Content} from '../UI/content'

export const Categories = ({dataCateg}) => {
    const [image, setImage] = useState([])
    // const [load, setLoad] =useState(false)
    const [page, setPage] =useState('Ordinary Drink')
    const [titles, setTitles] =useState(dataCateg.value)
   
    // console.log(dataCateg.url+`${page}`);
    useEffect(() => {
        // setLoad(true)
        getData()
       
        console.log(dataCateg.url+`${page}`, ' ef1');
        // console.log('ef1')
        return () => {

        }
    }, [page])
   const getData = async()=>{
       try{
        const response = await fetch(dataCateg.url+`${page}`)
        .then(res => res.json())
        .then((resJson) => {setImage(image.concat(resJson.drinks))
        // setLoad(false)
    })
        console.log(dataCateg.url+`${page}`, ' ef2');
       }catch(e){
            throw e;
       }
    }


     const scrollHandler = () => {
        setPage('Cocktail')
        setTitles('Cocktail')
        console.log(dataCateg.url+`${page}`, ' ef3');
        // setLoad(true)
     }
    // console.log('image',image);
    const title = () => {
        return(
            <Text style={styles.text}>{titles}</Text>
        )
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
            // load ? 
            <View style={styles.loader }>
                <ActivityIndicator size='large' animating={true}/>
            </View> 
        )
    }

	return(
        <FlatList 
        data={image}
        style={styles.flat}  
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter} 
        ListHeaderComponent={title}
        renderItem={renderRow}
        onEndReached={scrollHandler}
        onEndReachedThreshold={0}/>
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
        marginLeft: 20
	},
	image:{
		width: 100,
		height: 100,
	},
    loader: {
        marginTop: 20,
        alignItems: 'center',
        position: "absolute",
        bottom: 60,
        color: 'red'
    }
});