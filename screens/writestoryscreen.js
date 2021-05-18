import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Alert, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Appheader from '../appheader';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryscreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            storyText:'',
        }
    }

    submitStory = ()=>{
        console.log(db.collection('stories'))
        db.collection('stories').add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title:'',
            author:'',
            storyText:''
        })
        ToastAndroid.show('Your story has been submitted', ToastAndroid.SHORT)
    }

  render(){  
      return(
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <View style={styles.container}>
              <Appheader/>
              
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Story Title'
                 onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                 /> 
              
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Author'
                 onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                 />
              
                 <TextInput
                 style={{height: 250, width: 200, borderWidth: 1.5, fontSize: 20}}
                 placeholder='Write your story'
                 onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                 />
              
                  <TouchableOpacity 
                  style={styles.submitButton}
                  onPress={this.submitStory}>
                     <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
              
          </View>
          </KeyboardAvoidingView>
      )
  
}
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    submitButton:{
        backgroundColor: 'blue',
        width: 50,
        borderWidth: 1.5,
        marginTop:20,
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop:20,
        marginBottom:20
    }
})