import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth=Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex:1,
        margin:7,
    },
    img:{
        borderRadius:20,
    },
    image: {
        flex:1,
        justifyContent: "flex-end",
        height:200,
      },
      text: {
        color: "white",
        fontSize: 25,
        lineHeight: 48,
        //fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#0000007f",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
})