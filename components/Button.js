import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';

export default class Button extends Component{
  render(){
    return(
      <View>
        <TouchableOpacity style = {[homeStyles.container,
                                    {marginTop : parseInt(this.props.marginTop),
                                    width : parseInt(this.props.width),
                                    height : parseInt(this.props.height),
                                    borderColor : this.props.borderColor,
                                    borderRadius : parseInt(this.props.borderRadius),
                                    borderWidth : parseInt(this.props.borderWidth),
                                    backgroundColor : this.props.backgroundColor
                                    }]}
                          onPress ={()=>{this.props.pageToBeShifted()}} 
                          >
                                   
          <Text style = {[homeStyles.content,
                          {color : this.props.textColor,
                           fontWeight : this.props.fontWeight,
                           fontSize : parseInt(this.props.fontSize),
                           textDecorationLine : this.props.textDecorationLine
                          }
                          ]}>{this.props.text}</Text>  
        </TouchableOpacity>
      </View>
    )
  }
}

const homeStyles = StyleSheet.create(
  {
    container : {
                  marginTop : 50,
                  alignSelf : 'center',
                  justifyContent : 'center',
                  alignItems : 'center',
                  width : 320,
                  height : 80,
                  borderWidth : 5,
                  borderRadius : 30,
                  borderColor : "red",
                  backgroundColor : "purple",
                },
    content : {
                textAlign : 'center',
                color : "yellow",
                fontWeight : "bold",
                fontSize : 40,
                // fontFamily : "monospace",
                textDecorationLine : "underline"
              }
  }
)