var moment = require('moment')
moment.locale('es')

import React, {Component} from 'react';
import  ModalSelector from 'react-native-modal-selector';
import DateTimePicker from "react-native-modal-datetime-picker";
import {TextInput, View, Button, StyleSheet, Text,Switch, TouchableOpacity   } from 'react-native';

export default class PriTrans extends Component{
    constructor(props) {
        super(props);
        this.state = {
            importe: 0,
            isVisible: false
        };
    }

    render(){
        return(
            <View estyle={estilos.contenido}>
                <Text>Cuenta Origen</Text>
                <ModalSelector style={estilos.seleccion}
                initValue="Seleccionar"/>
                <Text>Cuenta Destino</Text>
                <ModalSelector style={estilos.seleccion}
                initValue="Escoger"/>
                <Text>Importe</Text>
                <TextInput style={estilos.input} value="Escribe"></TextInput>
                <Text>Referencia</Text>
                <TextInput style={estilos.input} value="Escribe"></TextInput>
                <TouchableOpacity value="HOLA"></TouchableOpacity>
                <DateTimePicker
                 isVisible={this.state.isVisible}
                 mode="date"
                 />  
                 <View estyle ={estilos.email}>
                    <Text>Notificarme al mail</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
             
                     ></Switch>
                 </View>
                <Button title="Siguiente" onPress={()=> this.props.navigation.navigate('Segundo')}/>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
  contenido:{
    flex:1,
    alignItems:'center',
    backgroundColor:'black',
    justifyContent: 'center',
    marginLeft:20,
  },
  email:{
    backgroundColor:'black',
    flexDirection:'row',
  },
  input:{
    width:200,
    height:30,
    borderWidth:2,
    borderColor:'black'
  },
  
   
});