import React, { Component } from 'react';
import { View,TouchableOpacity, Image, Text } from 'react-native';
import Button from '../components/Button';
import database from '../config'

export default class SportsPage extends Component {
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
    }
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

  componentDidMount(){
    this.likeCount();
    this.dislikeCount();
  }
  
  render() {
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
          backgroundColor="blue"
          borderWidth="3"
          borderRadius="15"
          fontSize="30"
          fontWeight="BOLD"
          borderColor="orange"
          text="Sports"
          textColor="yellow"
         />
         <TouchableOpacity onPress={this.isLikePressed}>
            <Image
              style={{width : 50, height : 50, marginTop : 300, marginLeft : 50}}
              source={require('../assets/thumbsup.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity onPress={this.isDislikePressed}>
            <Image
              style={{width : 50, height : 50, marginTop : -40, marginLeft : 200}}
              source={require('../assets/thumbsdown.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image
              style={{width : 280, height : 160, marginTop : -300, marginLeft : 20}}
              source={require('../assets/sports.png')}
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