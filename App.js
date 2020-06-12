import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "./screens/Home"
import Story from "./screens/Story"
import Meny from "./screens/Meny"
import Soon from "./screens/Soon";
import StoryScreen2 from "./screens/Story2";
import StoryScreen3 from "./screens/Story3";
import { Ionicons } from '@expo/vector-icons';
import { DrawerContent } from "./components/DrawerContent"
import StoryScreen4 from "./screens/Story4";
import EmailScreen from "./screens/Email";


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SoonStack = createStackNavigator();
const StoryStack = createStackNavigator();
const MenyStack = createStackNavigator();
const Story2Stack = createStackNavigator();
const Story3Stack = createStackNavigator();
const Story4Stack = createStackNavigator();
const EmailStack = createStackNavigator();

const EmailStackScreen = ({navigation}) => (
    <EmailStack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22,
        },

        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',
        },
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color="#fe019a"
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        title: "Velkommen",
        titleSize: 15,
        headerTintColor: '#fe019a'
    }}>
        <EmailStack.Screen name="Email" component={EmailScreen}/>
    </EmailStack.Navigator>
)
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator  screenOptions={{
      headerTitleStyle: {
        fontSize: 22,
      },

      headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',
        },
      headerLeft: () => (
          <Ionicons
              name="ios-menu"
              size={30}
              color="#fe019a"
              style={{paddingLeft: 25}}
              onPress={() => {
                navigation.toggleDrawer()
              }}/>
      ),
      title: "Velkommen",
      titleSize: 15,
      headerTintColor: '#fe019a'
    }}>
      <HomeStack.Screen name="Home" component={Home}/>
    </HomeStack.Navigator>
)

const StoryStackScreen = ({navigation}) => (
    <StoryStack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22
        },
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',

        },
        headerTitleAlign: 'center',
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        headerRight: () => (
            <Ionicons
                name="ios-arrow-round-back"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => navigation.goBack()}/>
        ),
        title: "Min breakup historie",
        titleSize: 15,
        headerTintColor: '#fe019a'
    }}>
        <StoryStack.Screen name="Story" component={Story}/>
    </StoryStack.Navigator>
)
const Story2StackScreen = ({navigation}) => (
    <Story2Stack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22
        },
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',

        },
        headerTitleAlign: 'center',
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        headerRight: () => (
            <Ionicons
                name="ios-arrow-round-back"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => navigation.goBack()}/>
        ),
        title: "Min breakup historie",
        titleSize: 15,
        headerTintColor: '#fe019a'
    }}>
        <Story2Stack.Screen name="Story2" component={StoryScreen2}/>
    </Story2Stack.Navigator>
)

const Story4StackScreen = ({navigation}) => (
    <Story4Stack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22
        },
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',

        },
        headerTitleAlign: 'center',
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        headerRight: () => (
            <Ionicons
                name="ios-arrow-round-back"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => navigation.goBack()}/>
        ),
        title: "Min breakup historie",
        titleSize: 15,
        headerTintColor: '#fe019a'
    }}>
        <Story4Stack.Screen name="Story4" component={StoryScreen4}/>
    </Story4Stack.Navigator>
)
const Story3StackScreen = ({navigation}) => (
    <Story3Stack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22
        },
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',

        },
        headerTitleAlign: 'center',
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        headerRight: () => (
            <Ionicons
                name="ios-arrow-round-back"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => navigation.goBack()}/>
        ),
        title: "Min breakup historie",
        titleSize: 15,
        headerTintColor: '#fe019a'
    }}>
        <Story3Stack.Screen name="Story3" component={StoryScreen3}/>
    </Story3Stack.Navigator>
)
const MenyStackScreen = ({navigation}) => (
    <MenyStack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22
        },
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',

        },
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color="#fe019a"
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        headerRight: () => (
            <Ionicons
                name="ios-arrow-round-back"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => navigation.goBack()}/>
        ),
        title: "Historier",
        titleSize: 15,
        headerTintColor: '#fe019a' +
            ''
    }}>
        <MenyStack.Screen name="Meny" component={Meny}/>
    </MenyStack.Navigator>
)

const SoonStackScreen = ({navigation}) => (
    <SoonStack.Navigator  screenOptions={{
        headerTitleStyle: {
            fontSize: 22,
        },

        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent',
        },
        headerLeft: () => (
            <Ionicons
                name="ios-menu"
                size={30}
                color="#fe019a"
                style={{paddingLeft: 25}}
                onPress={() => {
                    navigation.toggleDrawer()
                }}/>
        ),
        headerRight: () => (
            <Ionicons
                name="ios-arrow-round-back"
                size={30}
                color='#fe019a'
                style={{paddingLeft: 25}}
                onPress={() => navigation.goBack()}/>
        ),
        title: "Kommer snart",
        titleSize: 15,
        headerTintColor: '#fe019a'
    }}>
        <SoonStack.Screen name="Soon" component={Soon}/>
    </SoonStack.Navigator>
)
export default function App() {

  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home"  drawerStyle={{
              width: 250,
          }} drawerContent={props => <DrawerContent {...props} /> }>
              <Drawer.Screen name="Home" component={HomeStackScreen}/>
              <Drawer.Screen name="Story" component={StoryStackScreen}/>
              <Drawer.Screen name="Meny" component={MenyStackScreen}/>
              <Drawer.Screen name="Soon" component={SoonStackScreen}/>
              <Drawer.Screen name="Story2" component={Story2StackScreen}/>
              <Drawer.Screen name="Story3" component={Story3StackScreen}/>
              <Drawer.Screen name="Story4" component={Story4StackScreen}/>
              <Drawer.Screen name="Email" component={EmailStackScreen}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
