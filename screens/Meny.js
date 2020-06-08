import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors";
import Grid from "../GridTile.";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Story")}
                >
                    <View style={styles.container3}>
                        <View style={styles.caption}>
                            <Text style={{color: Colors.orangeColor, fontSize: 20}}> Blomster i søpla </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Soon")}
                >
                    <View style={styles.container3}>
                        <View style={styles.caption}>
                            <Text style={{color: Colors.orangeColor, fontSize: 20}}> 7 minutter i helvette</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Soon")}
                >
                    <View style={styles.container3}>
                        <View style={styles.caption}>
                            <Text style={{color: Colors.orangeColor, fontSize: 20}}> Forbudte fantasier</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Soon")}
                >
                    <View style={styles.container3}>
                        <View style={styles.caption}>
                            <Text style={{color: Colors.orangeColor, fontSize: 20}}> En brutal breakup</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20,
        justifyContent: "center"
    },
    textContainerStyle: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 50,
        borderWidth: 1,
        borderColor: Colors.orangeColor,
        borderRadius: 25,
        alignItems: "center",
    },
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

export default LoginScreen;
