import React, { Component } from 'react';
import { View,TouchableOpacity, Image, Text } from 'react-native';
import Button from '../components/Button';
import database from '../config'
import axios from 'axios';

export default class WeatherScreen extends Component {
  likeCount = ()=>{
    var dbRef=database.ref("Rating/likePressed");
    dbRef.on("value",(data)=>{
      this.setState({like : parseInt(data.val())})
    })
  }

  dislikeCount = ()=>{
    var dbRef=database.ref("Rating/dislikePressed");
    dbRef.on("value",(data)=>{
      this.setState({dislike : parseInt(data.val())})
    })
  }

  getWeather= async ()=>{
    var response = await fetch("https://fcc-weather-api.glitch.me/api/current?lat=22.76&lon=86.19");
    this.setState({weather : await response.json()});
  }

  componentDidMount(){
    this.getWeather();
    this.likeCount();
    this.dislikeCount();
  }

  constructor(){
    super();
    this.state={
      weather : '',
      like : 0,
      dislike : 0
    };
  }

  isLikePressed=()=>{
    this.setState({like : this.state.like+1})
    var like=database.ref('Rating')
    like.update({
      'likePressed' : this.state.like+1
    })
  }
  
  isDislikePressed=()=>{
    this.setState({dislike : this.state.dislike+1})
    var dislike=database.ref('Rating')
    dislike.update({
      'dislikePressed' : this.state.dislike+1,
    })
  }
  
  render() {
    console.log(this.state.like,this.state.dislike);
    if(this.state.weather===''){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }else{
      return (
        <View style = {{
          backgroundColor:"yellow",
          paddingBottom : 300
        }}>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate("HomeScreen")}}
          >
              <Image
                style={{width : 48, height : 42}}
                source={require('../assets/back.png')}
              />
          </TouchableOpacity>
          <Button
            marginTop="30"
            width = "400"
            height = "50"
            backgroundColor="rgb(171, 84, 173)"
            borderWidth="3"
            borderRadius="15"
            fontSize="30"
            fontWeight="BOLD"
            borderColor="rgb(144, 24, 153)"
            text="Weather Screen"
            textColor="rgb(79, 3, 3)"
          /> 
          <Text style={{marginTop : 20}}>Weather : {this.state.weather.weather[0].description}</Text>
          <Text style={{marginTop : 20}}>Temperature : {this.state.weather.main.temp}&deg;C</Text>
          <Text style={{marginTop : 20}}>Minimum Temperature : {this.state.weather.main.temp_min}&deg;C</Text>
          <Text style={{marginTop : 20}}>Maximum Temperature : {this.state.weather.main.temp_max}&deg;C</Text>
          <Text style={{marginTop : 20}}>Pressure : {this.state.weather.main.pressure}</Text>
          <Text style={{marginTop : 20}}>Humidity : {this.state.weather.main.humidity}</Text>
          <Text style={{marginTop : 20}}>Wind Speed : {this.state.weather.wind.speed}</Text>
          <TouchableOpacity onPress={this.isLikePressed}>
              <Image
                style={{width : 50, height : 50, marginTop : 20, marginLeft : 50}}
                source={require('../assets/thumbsup.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.isDislikePressed}>
              <Image
                style={{width : 50, height : 50, marginTop : -40, marginLeft : 200}}
                source={require('../assets/thumbsdown.png')}
              />
          </TouchableOpacity>
          <View style = {{marginLeft : 60, marginTop : 20}}>
            <Text>{this.state.like}</Text>
          </View>
          <View style = {{marginLeft : 220, marginTop : -20}}>
            <Text>{this.state.dislike}</Text>
          </View>
        </View>
      );
  }
  }
}