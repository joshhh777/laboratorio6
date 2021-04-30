var moment = require('moment')
moment.locale('es')

import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class SegTrans extends Component{
    constructor(props) {
        super(props);
        this.state = {
            importe: 0,
        };
    }

    render(){
        return(
            <View style={estilos.contenido}>
                <Text>Cuenta Origen</Text>
                <TextInput style={estilos.input} value=""/>
                <Text>Cuenta Destino</Text>
                <TextInput style={estilos.input} value=""/>
                <Text>Importe</Text>
                <TextInput style={estilos.input} value=""/>
                <Text>Referencia</Text>
                <TextInput style={estilos.input} value=""/>
                <Text>Fecha</Text>
                <TextInput style={estilos.input} value=""/>
                <Text>Mail</Text>
                <TextInput style={estilos.input} value=""/>
                <View style={estilos.botones}>
                <TouchableOpacity style={estilos.button} title="Volver" onPress={()=> this.props.navigation.navigate('Primero')}><Text style={estilos.textboton}>Volver</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.button} title="Confirmar" onPress={()=> this.props.navigation.navigate('Tercero')}><Text style={estilos.textboton}>Confirmar</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenido:{
      flex:1,
      marginLeft:20,
      marginTop:10,
        
    },
    
    input:{
      width:200,
      height:50,
      borderWidth:1,
      borderEndColor:'red',
      
    },
    button: {
            top: 10,
            width:150,
            height:40,
            marginStart:30,
            color: 'white',
            alignItems: 'center',
            borderWidth:1,
            borderColor:'black',
            justifyContent:'center',
            backgroundColor:'blue',
          
    },
    botones:{
        alignItems:'center',
        flexDirection:'row',
    },
    textboton:{
        color:'white',
    },
     
  });