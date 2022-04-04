import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}) => {
    const {error, loading, data} =  useFetch(Config.CATEGORIES_API_URL);

    const onPressCategory = (categoryName) =>{
        navigation.navigate('MealsPage', {categoryName})
    }


    const renderCategories = ({item}) => <CategoryCard categories={item}  onPressCategory={() => onPressCategory(item.strCategory)} />

    if(loading) {
        return <ActivityIndicator size="large"/>
    }
    if(error) {
        return <Text>{error}</Text>
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={data.categories}
                renderItem={renderCategories}
                numColumns={2}
            />
        </View>
    );
};

export default Categories;

const styles=StyleSheet.create({
    container:{
      margin:10,
    }
  })