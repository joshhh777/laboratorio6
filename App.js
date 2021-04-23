import React, { Component } from 'react';
import Message from './componentes/message/Message';
import Body from './componentes/body/Body';
import Nuestroflatlist from './componentes/outFlatList/flatlist';
import Conexionf from './componentes/conexion/conexion';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  TextInput,
  Alert,
  Button, } from 'react-native';

const provincias = [
  {
    id:1,
    name: 'Arequipa',
  },
  {
    id:2,
    name: 'Puno',
  },
  {
    id:3,
    name: 'Cuzco',
  }
];

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Tab  = createMaterialTopTabNavigator();

function PantallaInicial({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center',marginTop:40}}>
      <Text> Pantalla de Inicio Cancino</Text>

      <Button
        title = "Ir a los Detalles"
        onPress={() => navigation.navigate('Detalles')}/>
      <View >
        <Nuestroflatlist />
      </View>
    </View>
  );
}

function PantallaDetalles({navigation}) {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Pantalla de Detalles Cancino</Text>

      <Button 
        title="Volver a la Primera Pantalla"
        onPress={() => navigation.popToTop()}
        />
       
    </View>
  )

}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      count: 0,
    };
  }

  ShowAlert = () => {
    Alert.alert(
      'Titulo',
      'Hola Jose Cancino',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  changeTextInput = text => {
    console.log(text)
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
        count: this.state.count + 1,
    });
  };


  
  render() {
    return(
  
        <NavigationContainer >
          <Tab.Navigator
           initialRouteName="Home"  
           style={{marginTop:30}}
           tabBarOptions={{
             activeTintColor: '#e91e63'
           }}>
            <Tab.Screen name="Home" component={PantallaInicial}
               options={{
                 tabBarLabel: 'Home',
                 tabBarIcon: ({color, size}) => (
                    <MaterialComunityIcons name="home" color={color} size={size}/>
                 ),
               }}/>
            <Tab.Screen name="Detalles" component={PantallaDetalles}
               options={{
                 tabBarLabel: 'Detalles',
                 tabBarIcon: ({color, size}) => (
                    <MaterialComunityIcons name="bell" color={color} size={size}/>
                 ),
               }}/>
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 10,
  },
  
  text: {
    fontSize: 45,
    color: 'blue',
    textAlign: 'center',
    marginTop:12,
  },

  textb: {
    color: 'white',
    
  },
  
  button: {
    top: 10,
    color: 'white',
    borderColor: 'black',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: 'red',
  },   

  img:{
    maxWidth: 400,
    maxHeight: 400,
  },
});


 /*   <View style = {styles.container}>         
       <View style={styles.text}>
          <Text style={styles.text}>Hola Jose Cancino Ingrese su edad</Text>
        </View> 
        
        <Message style={styles.mes}/> 

        <TextInput
          style = {{height: 40, borderColor: 'gray', borderWidth:1, width: 150, textAlign: 'center'}}
          onChangeText = {text => this.changeTextInput(text)}
          value = {this.state.textValue}
        /> 
        <Body textBody={'TEXTO EN BODY'} onBodyPress={this.onPress}/>

        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>{this.state.count}</Text>
        </View>

        {provincias.map(item => (
           <View>
             <Text>{item.name}</Text>
           </View>    
        ))}

      <View style = {styles.container}>
        <Nuestroflatlist showAlert={this.ShowAlert}/>
      </View> 
*/