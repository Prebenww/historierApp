import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors"


const SoonScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.caption}>
                <Text style={{color: Colors.orangeColor, fontSize: 20}}>Kommer snart</Text>
            </View>
            <View style={{paddingTop: 100}}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 0,
        justifyContent: "center"
    },
    caption: {
        backgroundColor: 'black',
        padding: 50,
        borderWidth: 1,
        borderColor: Colors.orangeColor,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    tinyLogo: {
        width: "70%",
        height: "27%",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
})

export default SoonScreen;
