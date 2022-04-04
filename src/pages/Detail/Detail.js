import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';

const Detail = ({route}) => {
    const {meal_id}=route.params;

    const {loading, data, error}=useFetch(Config.DETAIL_API_URL+meal_id);
    
    const renderDetail = ({item}) => <DetailCard detail={item} />

    if(error){
        <Text>{error}</Text>
    }
    if(loading){
        <ActivityIndicator size="large"/>
    }
    return (
        <View>
            <FlatList 
                data={data.meals}
                renderItem={renderDetail}
            />
        </View>
    );
};

export default Detail;