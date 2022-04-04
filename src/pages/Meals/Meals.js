import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';

const Meals = ({route, navigation}) => {
    const {categoryName} =route.params;
    const {error, loading, data} =useFetch(Config.MEALS_API_URL+categoryName);

    const onPressMeal = (meal_id) =>{
        navigation.navigate('DetailPage', {meal_id});
    }

    const renderMeals = ({item}) => <MealCard meals={item} onPressMeal={() => onPressMeal(item.idMeal)}/>;

    if(error){
        return <Text>{error}</Text>
    }
    if(loading){
        return <ActivityIndicator size="large"/>
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={data.meals}
                renderItem={renderMeals}
            />
        </View>
    );
};

export default Meals;

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:5,
    },
})