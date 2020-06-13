import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import Colors from "../constants/Colors";

export default class Coin extends React.Component {

    state = {
        "coin_result": "head"
    }

    flipACoin() {
        const random = Math.floor(Math.random() * 2) + 1
        console.log(random);

        if(random == 1) {
            // head

            this.setState({
                "coin_result": "head"
            })

        } else {
            // tail

            this.setState({
                "coin_result": "tail"
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.innerBox}>
                    <Text style={{color: Colors.orangeColor, fontSize: 25}}>Trenger du hjelp med å avgjøre om du skal ta eksen tilbake eller ikke?</Text>
                    <Text style={{color: Colors.orangeColor, fontSize: 25}}>Flipp mynten!</Text>
                </View>

                {
                    this.state.coin_result==="head"?

                        <Image
                            source={require("../assets/coin_h.png")}
                            style={{
                                width: 150,
                                height: 150
                            }}
                        />
                        :
                        <Image
                            source={require("../assets/coin_t.png")}
                            style={{
                                width: 150,
                                height: 150
                            }}
                        />
                }

                <TouchableOpacity
                    onPress={()=>{
                        this.flipACoin()
                    }}
                    style={styles.button}
                >
                    <Text>Flipp mynten</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black"

    },
    button: {
        backgroundColor: "#f1c40f",
        padding: 20,
        margin: 10,
        borderRadius: 4
    },
    box1: {
        borderWidth: 1,
        width: "80%",
        height: "10%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    innerBox: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        padding: 20
    }
});
