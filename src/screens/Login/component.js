import React, { Component } from "react";
import 
{ 
View, Text, Dimensions,
Image, TextInput, TouchableOpacity
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
  }

   windowWidth = Dimensions.get('window').width;
   windowHeight = Dimensions.get('window').height;
   tinggi = 60/100*this.windowHeight;
   radius = 17/100*(this.windowHeight+this.windowWidth)
  render() {
    console.log(this.radius)
    return (
      <View style={{flex:1, backgroundColor: '#9E4D7E'}}>
        {/* Oval */}
        <View style={{width: this.windowWidth, height: this.tinggi, 
          backgroundColor: '#B2DCEA', borderRadius: this.radius,
          marginTop:'-45%'}}></View>
        {/* Image Student */}
        <Image 
        style={{alignSelf: 'center', marginTop:'-20%'}}
        source={require('../../images/student-cartoon.png')}/>
        <Image
        style={{marginLeft:'30%', marginTop:'-48%'}}
        source={require('../../images/child-toys.png')}
        />
        <Image
        style={{marginLeft: '40%', marginTop:'-35%'}}
        source={require('../../images/doll.png')}
        />
        <View style={{flex:1, marginTop:'45%'}}>
          {/* Email */}
          <View style={{backgroundColor: 'gray', 
            opacity:0.5, flexDirection: 'row',
            alignItems: 'center', marginHorizontal:'3%',
            borderRadius:20}}>
            <Image
            style={{marginLeft: 20}}
            source={require('../../images/email-icon.png')}
            />
            <TextInput
            style={{marginLeft: 5, color: '#000', fontSize:15}}
            />
          </View>

          {/* Password */}
          <View style={{backgroundColor: 'gray', 
            opacity:0.5, flexDirection: 'row',
            marginHorizontal:'3%',borderRadius:20, 
            marginTop:'5%', alignItems: 'center'}}>
            <Image
            style={{marginLeft: 20, marginTop: '-3%'}}
            source={require('../../images/password-icon.png')}
            />
            <TextInput
            style={{marginLeft: 5, color: '#000', fontSize:15}}
            />
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
          >
            <View
             style={{borderColor: '#1E5363', backgroundColor: '#D8A1B8', 
             borderWidth:2, alignItems: 'center', marginHorizontal: '38%',
             paddingVertical:'1%', borderRadius:10, marginTop: '20%'}}
            >
              <Text style={{fontSize: 17, fontWeight: '700'}}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;