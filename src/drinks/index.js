import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Drinks from './drinks.js'
import Filter from '../drinks/filter.js'
import { DRINKS, FILTER } from '../router.js'
export default createAppContainer(
    createStackNavigator(
        {
            [DRINKS]: Drinks,
            [FILTER]: Filter,
        },
        {
            headerMode: 'none'
        }   
    )
)