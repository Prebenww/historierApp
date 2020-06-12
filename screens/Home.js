import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors"

const image = { uri: "https://images.unsplash.com/photo-1580571313472-5bd3de1d1ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" };

const urName = (name) => {
    let navn;

}

const LoginScreen = ({navigation}) => {
    return (

        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>

            <View style={styles.caption}>
                <Text style={{color: Colors.orangeColor, fontSize: 20}}> Norske Breakup Historier</Text>
            </View>
            <View style={{paddingTop: 100, justifyContent: "center",
                alignItems: "center", borderRadius: 25}}>
            <Button
                style={{backgroundColor: "rgba(0, 0, 0, 0.7)", width: 200,  }}
                icon="login"
                mode="text"
                color={Colors.orangeColor}
                onPress={() => navigation.navigate("Meny")}
            >
                Gå til historier!
            </Button>
            </View>
                <View>
                    <TextInput
                        label='Ditt navn'
                        value={name}
                        onChangeText={urName}
                    />
                </View>
        </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 0 ,
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

export default LoginScreen;
