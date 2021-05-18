import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';
import db from '../config';

export default class ReadStoryrscreen extends React.Component{
    constructor(){
        super();
        this.state={
            allStories: [],
            search: ''
        }
    }

    componentDidMount(){
        this.retrieveStories()
    }

    retrieveStories=()=>{
        try {
            var allStories = []
            var stories = db.collection("stories")
            .get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    allStories.push(doc.data())
                    console.log('This are the stories', allStories)
                })
                this.setState({allStories})
            })
        }
        catch(error){
            console.log(error);
        }
    };

  render(){
      return(
          <View>
              <View style={styles.searchBar}>
              <TextInput
            style={styles.bar}
            placeholder='Enter Story Title'
            onChangeText={(text)=>{this.setState({
              search: text
            })}}
            />
            <TouchableOpacity style={styles.searchButton} onPress={()=>{this.searchTransaction(this.state.search)}}>
              <Text>Search</Text>
            </TouchableOpacity>
            </View>
              <FlatList
              data={this.state.allStories}
              renderItem={({ item }) => (
                <View style={{borderBottomWidth: 2}}>
                      <Text>Title: {item.title}</Text>
                      <Text>Author: {item.author}</Text>
                      <Text>Story: {item.storyText}</Text>
                  </View>   
              )}
              keyExtractor={(item, index)=>index.toString()}
              onEndReached={this.fetchMoreTransactions}
              onEndReachedThreshold={0.7}
              />
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    itemContainer: {
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'pink',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    searchBar:{
        flexDirection: 'row',
        height: 45,
        width: 'auto',
        borderWidth: 0.5,
        alignItems: 'center',
        backgroundColor: 'yellow'
      },
      bar:{
        borderWidth: 2,
        height: 35,
        width: 300,
        paddingLeft: 10
      },
      searchButton:{
        borderWidth: 1,
        height: 35,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
      }
});