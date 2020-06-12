import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Platform, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ProgressBar, Button, Card} from 'react-native-paper';
import Colors from "../constants/Colors";

const CardScreen = () => {

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>

                        <View style={{flexDirection: "row"}}>
                            <Text style={{
                                color: Colors.orangeColor,
                                paddingLeft: 10,
                                paddingTop: 10,
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                            >
                                Dalavegen 52</Text>

                        </View>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({

    card: {
        height: 150,
        width: 250,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});


export default CardScreen;

