import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, TextInput} from "react-native-paper"
import Colors from "../constants/Colors"

const StoryScreen3 = ({navigation}) => {
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
                            OK, så dette er ekstremt. Skulle trodd det var en dårlig film liksom.
                            Jeg datet en fyr i sånn omtrent 6 måneder, Ulrik het han. Merkelig nok syntes jeg virkelig at han var en god fyr (stor feil). Så en dag fikk jeg en telefon fra en venn:
                            Hun sa til meg "Helene, du må sette deg ned."
                            Jeg satt og hun sier "Ulrik hadde sex med [en jente], RETT etter at du hadde hatt sex med ham. Jeg mener bokstavelig talt, når du dro, gjorde de det 5 minutter etter! Jeg overhørte alt og de sa de hadde planlagt det!"
                            Jeg kastet opp ... mye. Ikke fordi han var utro, men fordi jenten var 13 år og han var 18!  OG hun hørte på oss når vi gjorde det og de planla det. HVEM GJØR SLIKT ????
                            Politiet innblandet, og jenta fortalte politiet forskjellige historier [hun holdt fast ved at det var samtykkende samleie] så de anmeldte det ikke.
                            Noen måneder senere møtte jeg henne (altså før politiet hadde henlagt saken) og det første som kom ut av munnen hennes var "Ulrik vil være ute av fengsel når jeg er 18 år." med et stort glis rundt munnen. Noe av det dummeste jeg har hørt, men jeg svarte bare "hehe, ja", og gikk.
                            Hele greien gjør meg bare deprimert så jeg prøver å ikke tenke på det. Jeg føler meg så trist og sint når jeg tenker på det. Vi bor på en liten plass så jeg ser dem av og til, dessverre. De er kjærester og later som at ingenting noen gang skjedde..

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

export default StoryScreen3;
