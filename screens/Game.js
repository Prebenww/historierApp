import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors";
import Grid from "../GridTile.";
const { width } = Dimensions.get('window')


const GameScreen = ({navigation}) => {



    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text style={styles.navBarTitle}>JEG HAR ALDRI</Text>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Ligget med eksen på fylla</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Blitt sammen igjen med en eks</Text>
                </View>

                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Vært utro</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Ligget med vennen til eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Dyppet tannbørsten til eksen i do</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Hatt trekant med eksen + 1</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Ligget med faren til eksen</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Vært på teltur med eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Blitt gravid med en eks</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Hatt anal med en eks</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Ringt eksen i fylla</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Tatt taxi med eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Fått eksen til å spandere middag på meg</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Krasjet biln til eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Møtt eksen på "Walk of shame"</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Sølt kebab på eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Hatt en sang som minner meg om eksen</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Fått en kjønnsykdom av eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Stjelt noe fra eksen</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Grått over eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Stalket eksen</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Møtt foreldrene til eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Savnet eksen</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Fått fyllamelding av eksen</Text>
                </View>
                <View style={{ backgroundColor: Colors.orangeColor, flex: 1, width: width, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{fontSize: 50}}>Jeg har aldri:</Text>
                    <Text style={{fontSize: 30}}>Kranglet med eksen</Text>
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    navBar: {
        width: '100%',
        height: 70,
        backgroundColor: '#0D0D0D',
        alignContent: 'center',
        justifyContent: 'center'
    },
    navBarTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: 'center'
    },
    scrollViewContainerStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 600
    }
});


export default GameScreen;
