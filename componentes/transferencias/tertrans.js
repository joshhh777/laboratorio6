var moment = require('moment')
moment.locale('es')

import React, {Component} from 'react';
import {Text, View, Image,TouchableOpacity, StyleSheet} from 'react-native';

export default class TerTrans extends Component{
    constructor(props) {
        super(props);
        this.state = {
            importe: 0,
        };
    }

    render(){
        return(
            <View style={estilos.contenido}>
                
                <TouchableOpacity style={estilos.button} title="Aceptar" onPress={()=> this.props.navigation.navigate('Primero')}><Text style={estilos.textboton}>Aceptar</Text></TouchableOpacity>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenido:{
      flex:1,
      marginLeft:20,
      marginTop:10,
      justifyContent:'center',
      alignItems:'center',
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