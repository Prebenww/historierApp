import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors"

const StoryScreen4 = ({navigation}) => {
    return (

        <View style={{backgroundColor: '#000000', flex: 1, justifyContent: "center", alignItems: "center"}}>
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
                            Når du tror du kjenner noen inn og ut, men finner ut at du ikke kjenner personen i det hele tatt.
                            Jeg tror alle jenter kan relatere til at det første bruddet er alltid det verste. Det føles som om noen river hjertet ut av brystet ditt. Vell, det var i hvert fall slik jeg følte det..
                            Jeg møtte denne gutten på Tinder, og vi fant tonen med engang!  Det var så rart fordi jeg aldri vært på Tinder før. Etter en uke med teksting bestemte vi oss for å gå på en date. Gnisten som vi hadde gjennom sosiale medier var enda større da jeg møtte ham i virkeligheten. Jeg har aldri trodd på kjærlighet ved første blikk, men det virket som at det var tilfellet denne gangen.
                            Jeg levde en løgn. Vi hadde det veldig fint sammen og introduserte hverandre for foreldrene våre. Han lovet meg en lys fremtid og var alltid søt og snill. Etter en stund begynte han å virke litt rar og fjern, det var som å være sammen med noen jeg ikke kjente. Kyssene hans var kalde og ordene hans var tomme.
                            Rett før jul fortalte han at han hadde mistet følelsene for meg. Han fortalte at jeg var en fantastisk jente, men at forholdet vårt måtte ta slutt. Han sa unnskyld 100 ganger, men alt han sa var bare falskt. Etter en uke sjekket jeg instagrammen hans og fant ut at han hadde snakket med en annen jente i flere måneder. De pleide å sende hverandre de sykeste tingene og lo av det faktum at han faktisk var utro. Jeg var fullstendig ødelagt, det føltes som om noen tok hjertet mitt og spyttet på det som om det ikke var verdt noen ting. Jeg kunne ikke kontrollere følelsene mine og tårene fortsatte å trille. Jeg bestemte meg for å konfrontere ham, men han nektet 100% for det - helt til jeg viste bevisene. Han fortalte at han elsker henne mer enn han noen gang har elsket meg, og at han er ferdig med meg. Jeg begynte å lure på om det var noe galt med meg, er jeg stygg, ikke smart nok, for tjukk. Alle de søte tingene han hadde sagt.. alt var bare en løyn. Det som gjør mest vondt er at jeg ofret alt for dette forholdet, og så blir jeg behandlet som om jeg er en idiot som ikke betyr noe. Det hele har gjort meg veldig kald og jeg er redd for å elske fordi smertene som følger med er uutholdelige.
                            Kjærlighet gjør vondt
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

export default StoryScreen4;
