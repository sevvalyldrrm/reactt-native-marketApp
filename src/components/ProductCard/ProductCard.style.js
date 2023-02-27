import { StyleSheet } from 'react-native'

export default  StyleSheet.create({
    container : {
        backgroundColor : '#eeeeee',
        borderWidth : 1,
        borderColor : 'grey',
        margin : 10,
        flexDirection : 'row'
    },
    image : {
        width: 100,
        minHeight : 100,
        resizeMode : 'contain',
        backgroundColor : 'white'
    },
    body_container : {
        flex : 1,
        justifyContent : 'space-between',
        padding : 5
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    price : {
        textAlign : 'right',
        fontSize : 16,
        fontStyle : 'italic'
    }
})
