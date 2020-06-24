import React, { Component } from "react";
import 
{ 
View, Text, Dimensions,
Image, TextInput, TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
      <View style={{flex:1, backgroundColor: '#B2DCEA'}}>

        <View style={{height:50, width:330, backgroundColor:'white', flexDirection:'row'}}>
          <TouchableOpacity style={{marginTop:12, marginLeft:5}}>
            <View style={{backgroundColor:'#C4C4C4', width:25, height:4, borderRadius:5}}/>
            <View style={{backgroundColor:'#C4C4C4', width:25, height:4, borderRadius:5, marginTop:3}}/>
            <View style={{backgroundColor:'#C4C4C4', width:25, height:4, borderRadius:5, marginTop:3}}/>
          </TouchableOpacity>

          <Image
            style={{width:23, height:23, marginLeft:260, marginTop:12}}
            source={require('../../images/notif.png')}
          />
        </View>

        {/* Tinggal Loop */}
        <ScrollView>
          <View style={{marginTop:20,backgroundColor:'white', width:290, height:250, alignSelf:'center'}}>
            <View style={{flexDirection:'row'}}>
              <View style={{marginLeft:5, marginTop:5}}>
                <Text style={{fontWeight:'bold', fontSize:10, color:'black'}}>Jumat</Text>
                <Text style={{fontWeight:'bold', fontSize:10, color:'black'}}>26 Februari 2020</Text>
              </View>
              <Image
                source={require('../../images/+.png')}
                style={{width:12,height:12, marginLeft:190, marginTop:5}}
              />
            </View>

            {/* Kalo agenda nya lebih dari 2 tinggal looping aja */}
            <View style={{flexDirection:'row', marginTop:10, marginLeft:5}}>
                <Text style={{fontSize:10, color:'black'}}>08:30</Text>
                <Text style={{fontSize:10, color:'black', marginLeft:15}}>Senam Pagi</Text>
            </View>

            <Text style={{fontSize:10, color:'#9E4D7E', marginLeft:45}}>Perlengkapan</Text>

            <View style={{marginLeft:45, flexDirection:'column'}}>
              <View style={{backgroundColor:'#C4C4C4', height:100, width:2, borderRadius:3, position:'absolute', marginLeft:3}}></View>

              <View style={{flexDirection:'row', marginTop:5}}>
                <View style={{backgroundColor:'green', height:9, width:9, borderRadius:5, marginTop:5}}/>
                <Text style={{fontSize:10, color:'black', marginLeft:5, marginTop:2}}>Baju Olahraga</Text>
              </View>

              <View style={{flexDirection:'row', marginTop:15}}>
                <View style={{backgroundColor:'green', height:9, width:9, borderRadius:5, marginTop:5}}/>
                <Text style={{fontSize:10, color:'black', marginLeft:5, marginTop:2}}>Baju Olahraga</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

export default Login;