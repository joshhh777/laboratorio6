import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, ProgressViewIOSComponent} from 'react-native';

const DATA =[
    {
        id: '1',
        titulo:'Primer item',
    },
    {
        id:'2',
        titulo:'segundo item',
    },
    {
        id:'3',
        titulo:'tercer item',
    },
];

function Item({titulo, showAlert}){
    return(
        <TouchableOpacity onPress={showAlert}>
        <View style={estilos.item}>
            <Text style={estilos.titulo}>{titulo}</Text>
        </View>
        </TouchableOpacity>
    );
}

const ListEmpty = () => {
    return(
        <View>
            <Text style={{textAlign: 'center', color:'white', fontSize:40}}>No Data Found</Text>
        </View>
    )

};

const Nuestroflatlist = props => (  
        <View style={estilos.container}>
            <FlatList data={DATA}
            renderItem={({item}) => (
                    <Item titulo={item.titulo} showAlert={props.showAlert}/>
                )}
            keyExtractor={item => item.id}
            ListEmptyComponent={ListEmpty} />
        </View>
);

export default Nuestroflatlist

const estilos = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    item:{
        backgroundColor:'orange',
        padding:20,
        marginVertical:8,
        marginHorizontal:16
    },
    titulo:{
        fontSize:32
    },
});