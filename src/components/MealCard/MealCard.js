import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from './MealCard.style'

const MealCard = ({meals, onPressMeal}) =>{
    return (
        <TouchableWithoutFeedback onPress={onPressMeal}>
            <View style={styles.container}>
                <ImageBackground
                    source={{uri: meals.strMealThumb}}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={styles.img}
                >
                    <Text  style={styles.text} numberOfLines={1}>{meals.strMeal}</Text>   
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MealCard;