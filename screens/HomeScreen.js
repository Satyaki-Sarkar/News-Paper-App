import React, { Component } from 'react';
import { View,TouchableOpacity, Image, Text } from 'react-native';
import Button from '../components/Button';
import database from '../config';
var likes,dislikes;

export default class HomeScreen extends Component {
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

  constructor(){
    super();
    this.state={
      like : 0,
      dislike : 0
    };
  }

  componentDidMount(){
    this.likeCount();
    this.dislikeCount();
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
      'dislikePressed' : this.state.dislike+1
    })
  }

  render() {
    return (
      <View style = {{
        backgroundColor:"yellow",
        paddingBottom : 300
      }}>
        <Button
          marginTop="50"
          width="400"
          height="80"
          borderWidth="5"
          borderRadius="30"
          borderColor="red"
          backgroundColor="purple"r4
          fontSize="40"
          fontWeight="bold"
          text="White Hat Times"
          textColor="white"
        />
        <Button
          marginTop="60"
          width = "400"
          height = "50"
          backgroundColor="rgb(242, 19, 63)"
          borderWidth="3"
          borderRadius="15"
          fontSize="30"
          fontWeight="BOLD"
          borderColor="rgb(73, 38, 214)"
          text="International News"
          textColor="rgb(104, 6, 17)"
          pageToBeShifted={()=>{this.props.navigation.navigate("InternationalNews")}}
         /> 
         <Button
          marginTop="60"
          width = "400"
          height = "50"
          backgroundColor="rgb(36, 130, 31)"
          borderWidth="3"
          borderRadius="15"
          fontSize="30"
          fontWeight="BOLD"
          borderColor="rgb(39, 97, 99)"
          text="National/Local News"
          textColor="rgb(140, 206, 53)"
          pageToBeShifted={()=>{this.props.navigation.navigate("NationalNews")}}
         /> 
         <Button
          marginTop="60"
          width = "400"
          height = "50"
          backgroundColor="blue"
          borderWidth="3"
          borderRadius="15"
          fontSize="30"
          fontWeight="BOLD"
          borderColor="orange"
          text="Sports"
          textColor="yellow"
          pageToBeShifted={()=>{this.props.navigation.navigate("SportsPage")}}
         /> 
         <Button
          marginTop="60"
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
          pageToBeShifted={()=>{this.props.navigation.navigate("WeatherScreen")}}
         /> 
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