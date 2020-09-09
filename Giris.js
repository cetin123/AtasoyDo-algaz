import React, {useState,Component} from 'react';
import {ScrollView,Text,StyleSheet, Button,View,Alert,TextInput,TouchableOpacity,ImageBackground, Dimensions, StatusBar,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')

export default class Giris extends Component{

 
 

render(){

 console.disableYellowBox = true;
  return (
<ScrollView style={styles.container}>
<ImageBackground source={require('./img/Green.jpg')} style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,flex:1}}>   


<StatusBar barStyle={'dark-content'} backgroundColor={'#333'} /> 
    
         <Text style={ {fontSize:35,color:'white',fontWeight: 'bold',top:'5%',textAlign:'center',opacity:0.8}}>
          ATAŞEHİR 
         </Text>  
         <Text style={ {fontSize:35,color:'white',fontWeight: 'bold',top:'5%',textAlign:'center',opacity:0.8}}>
         DOĞALGAZ
         </Text> 

         <View style={styles.blur}>
         <View style={styles.buttonicon}>  
          <TouchableOpacity
         style={{backgroundColor:'dimgrey',alignItems:'center',borderRadius:15,justifyContent:'center',opacity:0.8,bottom:'55%',right:'5%',height:'10%',width:'30%'}}
         >
          <Text style={{color:'white'}}>KEŞİF</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           style={{backgroundColor:'dimgrey',alignItems:'center',borderRadius:15,justifyContent:'center',opacity:0.8,bottom:'55%',left:'5%',height:'10%',width:'30%'}}
           
            >
          <Text style={{color:'white'}}>KOMBİLER</Text>
          </TouchableOpacity>
        </View>    



        </View> 



 </ImageBackground>           
</ScrollView>  
     
         



 
  )}};
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
     blur: {
          
       flex: 1,
       backgroundColor: 'rgba(100,100,100,0.2)',
       top:'5%'
    
    },
    buttonicon:{ 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center', 
     
        },
   
  });