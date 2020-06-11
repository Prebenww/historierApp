import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors"

const StoryScreen2 = ({navigation}) => {
    return (

        <View style={{ backgroundColor: '#000000', flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: "https://images.unsplash.com/photo-1580571313472-5bd3de1d1ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                }}
            />
            <View style={styles.container}>
                <ScrollView style={styles.box}>
                    <View style={styles.innerBox}>
                        <Text style={{color: Colors.orangeColor, fontSize: 25}}>Min Breakup historie</Text>
                        <Text style={{color: Colors.orangeColor, fontSize: 25}}>
                            Jeg møtte en jente på skolen, og vi bodde faktisk ganske nære hverandre, så vi hadde hengt mye med hverandre i løpet av sommeren - jeg har vært hos henne og møtt foreldrene hennes, osv. Hun skulle på en utenlandstur med skolekorpset. Telefonen hennes kom ikke til å fungere mens hun var borte, dette er en stund siden nemlig, uansett, jeg bestemte meg for å overraske henne på flyplassen da hun kom tilbake. Du vet, være litt romantisk haha.
                            Så jeg venter på terminalen på flyplassen. Jeg begynner å se et par ansikter jeg kjenner igjen fra korpset hennes. Så ser jeg hun, jeg begynner å gå mot henne og jeg ser til min forskrekkelse at hun holder hender med en person jeg pleide å gå på videregående med. Han gikk også på skolen min og hadde tilfeldigvis blitt med på turen med henne. Jeg er ikke dum, jeg skjønte raskt hva som foregikk. Men på dette tidspunktet hadde faren hennes allerede sett meg og startet en samtale med meg. Han tilbyr meg en tur hjem med henne, ja forresten, jeg tror [fyrens navn] skal sitte på også, men jeg er sikker på at dere tre kan klemme dere sammen baki der. På dette tidspunktet er jeg rimelig sikker på at jeg kommer til å kollapse. Det er ingen utvei - hun er her, han er her, det er superklein stemning. Hun forteller meg at vi må snakke, jeg sa at det var unødvendig og gikk til bussterminalen og gjorde meg klar for en tre timers busstur hjem..
                            Jaja, det kunne vært verre. Han dumpet henne to uker senere, og foreldrene hennes klikket på henne fordi de synes han var en idiot og at jeg var en flott gutt. Hun fortalte meg at hun hadde lært mye de siste to ukene og at hun var en mye mer moden person nå. Jeg tok hun ikke tilbake, heldigvis.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
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

export default StoryScreen2;
