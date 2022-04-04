import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({categories, onPressCategory}) => {
    return (
        <TouchableWithoutFeedback onPress={onPressCategory}>
            <View style={styles.container}>
                <Image 
                    source={{uri: categories.strCategoryThumb}}
                    style={styles.img}
                />
                <Text style={styles.name}>{categories.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CategoryCard;