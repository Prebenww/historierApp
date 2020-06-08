import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "./constants/Colors"
const Grid = ({navigation}) => {
    return (

        <View style={styles.container3}>
            <View style={styles.caption}>
                <Text style={{color: Colors.orangeColor, fontSize: 20}}> Norske Breakup Historier</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container3: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20 ,
        justifyContent: "center"
    },
    caption: {
        backgroundColor: 'black',
        padding: 50 ,
        borderWidth: 1,
        borderColor: Colors.orangeColor,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",


    }
})

export default Grid;
