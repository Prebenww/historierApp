import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch, Button
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import Colors from "../constants/Colors";


export function DrawerContent(props) {

    const paperTheme = useTheme();


    return(
        <View style={{flex:1, backgroundColor: "#a9a9a9"}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi0zAMizJyidMyE9N8pe_uiA5sQ4GWRJwFuImV2qzhO4d4bhU1&usqp=CAU'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Norske Historier</Title>
                                <Caption style={styles.caption}>Ekte breakup historier</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Hjem"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Historier"
                            onPress={() => {props.navigation.navigate('Meny')}}
                        />
                    </Drawer.Section>
                </View>


            </DrawerContentScrollView>

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: "https://cdn.pixabay.com/photo/2012/04/14/17/17/heart-34655_1280.png"
                }}
            />

            <Drawer.Section style={styles.bottomDrawerSection}>

            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,


    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: Colors.orangeColor
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,

    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'black',
        borderTopWidth: 0,

    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    tinyLogo: {
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    }
});
