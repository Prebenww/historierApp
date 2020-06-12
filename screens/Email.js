import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Colors from "../constants/Colors";
import email from 'react-native-email'

const EmailScreen = ({navigation}) => {
    return (

        <View style={{backgroundColor: '#000000', flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: "https://images.unsplash.com/photo-1580571313472-5bd3de1d1ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                }}
            />

                <View style={styles.container}>
                    <View style={{backgroundColor: "#a9a9a9" ,width: "70%", alignItems: "center",justifyContent: "center", height: "30%",borderRadius: 25
                    }}>
                    <Button  title="Klikk her for å sende inn din historie!" onPress={handleEmail} />
                    </View>
                </View>
        </View>
    )
}
const handleEmail = () => {
    const to = ['appsnorge@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: 'Min breakup historie',
        body: 'Skriv din breakup historie her!'
    }).catch(console.error)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",

    },
    tinyLogo: {
        width: "70%",
        height: "27%",
    },
    box: {
        borderWidth: 1,
        borderColor: Colors.orangeColor,
        width: "95%",
        height: "80%",
    },
    innerBox: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        padding: 20
    }

})

export default EmailScreen;
