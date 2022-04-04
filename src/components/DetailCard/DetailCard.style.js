import { StyleSheet,Dimensions } from 'react-native';

const screenSize=Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:screenSize.width,
        height:200,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'red',

    },
    area:{
        fontSize:20,
        color:'red',

    },
    line:{
        borderWidth:1,
        borderColor:'black',
        marginTop:5,
        marginBottom:5,
    },
    desc:{
        fontSize:15,
        marginBottom:10,
    },
    button:{
        borderRadius:8,
        backgroundColor:'red',
        fontSize:30,
        margin:10,
    },
    button_text:{
        fontSize:22,
        textAlign:'center',
        padding: 10,
        color:'white',
        fontWeight:'600'
    },

})