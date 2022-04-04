import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({detail}) =>{

    const onPressButton= () => {
        Linking.openURL(detail.strYoutube);
    }

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={{uri: detail.strMealThumb}}
                    style={styles.image}
                /> 
                <Text style={styles.title}>{detail.strMeal}</Text>
                <Text style={styles.area}>{detail.strArea}</Text>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            <TouchableOpacity
                onPress={onPressButton}
                style={styles.button}
                disabled={detail.strYoutube ? false : true}
            >
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailCard;