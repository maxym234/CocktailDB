import React, {Component} from 'react'
import{ View, StyleSheet, Text, ScrollView} from 'react-native'
import CheckBox from 'react-native-check-box'
import {HeaderFilt} from '../UI/headerFilt'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

export default class Filter extends Component {
    state = {
        categories: []
    }
    
        
 componentDidMount = async () => {
    try{
      const response = await fetch(url);
      const categories = await response.json();
     
      this.setState({categories: categories.drinks});  
    }catch(e){
      throw e; 
    }
   }
    render(){
        const { categories } = this.state;
        const { navigation } = this.props
        return(
            <ScrollView>
                <HeaderFilt navigation={navigation}/>
                {categories.map( categorie => 
                    <View key={categorie.id}style={styles.view}> 
                        <CheckBox onClick={() => console.log(1)} isChecked={true} style={styles.check}/>
                        <Text>{categorie.strCategory}</Text>
                    </View>
                )}
                    
                
            </ScrollView>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 15   
    },
    check: {
        marginRight: 10
    }
});