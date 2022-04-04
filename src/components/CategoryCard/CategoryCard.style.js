import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        margin:5,
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#dedede'
    },
    name:{
        color: 'black',
        fontSize: 20,
        borderRadius:20,
        fontWeight:'bold',
        marginBottom:5,
    },
    img:{
        width:180,
        height:135,
        resizeMode:'contain',
        borderRadius:4,
    },
});