import React, {useState,Component,useRef} from 'react';
import {Animated,ScrollView,Text,StyleSheet,Button,View,Alert,TextInput,TouchableOpacity,ImageBackground, Dimensions, StatusBar,SafeAreaView,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TOKEN } from './config';
const { width, height } = Dimensions.get('window')
import Axios from 'axios';
import { heightPercentageToDP as hp, widthPercentageToDP as wp,} from 'react-native-responsive-screen'
export default class App extends Component{


  constructor(props) {
		super(props);

		this.state = {
			userName: "",
      userPassword: "",
      rol:null,
     
		};
  }

  async goLogin() {
    console.log(this.state)
		var name = this.state.userName;
		var pass = this.state.userPassword;
    var present = this;
    
		if (!name || !pass) {
      Alert.alert("Uyarı","Kullanıcı Adı ve Şifrenizi Boş Bırakamazsınız !");
    }
    else{
      console.log("testres");
      var LoginData = {
        'kadi' : name,
        'sifre' : pass,
        'token': TOKEN
      }
      Axios.post('http://195.175.76.118:3500/login', LoginData)
          .then(obj => {
            console.log(obj)
        if ( obj.data.error == false ) {
       
       this.props.navigation.navigate('Giris')
        } else {
          Alert.alert("Hata", obj.data.message);
        }
    }).catch(err => {
      console.log(err)
      alert(err)
    })
    }
  }  
 

render(){
  
 
 console.disableYellowBox = true;
  return (
<ScrollView style={styles.container}>
 <SafeAreaView>
 <ImageBackground source={require('./img/Green.jpg')} style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,flex:1}}>   
   <StatusBar barStyle={'dark-content'} backgroundColor={'#333'} /> 

      <View style={styles.head}>  
          <Text style={ {fontSize: hp('4.5%'),color:'white',fontWeight: 'bold',textAlign:'center',opacity:0.8,}}>
           ATAŞEHİR 
          </Text>  
          <Text style={ {fontSize: hp('4.5%'),color:'white',fontWeight: 'bold',textAlign:'center',opacity:0.8}}>
           DOĞALGAZ
         </Text> 
       </View>   

       <View style={styles.body}>


       </View> 

       <View style={styles.foot}>
         
             <View style={styles.blur}>
               <View style={styles.icon1}>
                    <Icon name="link" size={30} color="aliceblue" />
                    <TextInput
                      inlineImageLeft='search_icon'
                      style={{height:50,backgroundColor:'white',borderColor: 'lightsteelblue', borderWidth: 1,width: wp('60%'),borderRadius:15,borderWidth:3,opacity:0.9,}}
                      value={this.state.userName}
                      onChangeText={(value) => this.setState({userName: value})}
                      placeholder="Kullanıcı Adı"/> 
                </View> 
                <View style={styles.icon2}>  
                 <Icon name="key" size={30} color="aliceblue" />  
                 <TextInput
                 style={{height:50,backgroundColor:'white',borderColor: 'lightsteelblue', borderWidth: 1, width: wp('60%'),borderRadius:15,borderWidth:3,opacity:0.9,}}
                 onChangeText={(value) => this.setState({userPassword: value})}
                 value={this.state.userPassword}
                 secureTextEntry={true}
                 password={true}
                placeholder="Kullanıcı Şifre"/>
               </View>
             </View>  

       </View>  
       <View style={styles.exit}>
       </View>
       <TouchableOpacity
           style={{backgroundColor:'dimgrey',width:'30%',height:'25%',alignItems:'center',borderRadius:15,justifyContent:'center',opacity:0.9}}
           onPress={() => {this.props.navigation.navigate('Giris')}}
            >
          <Text style={{color:'white'}}>ŞİFRE DEĞİŞTİR</Text>
          </TouchableOpacity>
  </ImageBackground>   
 </SafeAreaView>        
</ScrollView>   


 
  )}};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'transparent',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    head: {
      flex: 1,
      backgroundColor:'transparent',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    },
    body: {
      flex: 2,
      backgroundColor:'transparent',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    foot: {
      flex: 3,
      backgroundColor:'transparent',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center'

    },
    exit: {
      flex: 1,
      backgroundColor:'transparent',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      
    },
    blur: {
      backgroundColor: 'rgba(150,150,150,0.2)',
      height: hp('20%'),
      width: wp('90%'),
      borderRadius:15,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      },
     icon1: {
      
       flex:1,
       flexDirection:"row",
       alignItems:'center',
       justifyContent:'center',
       
       },

      icon2: {
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
       },
  });