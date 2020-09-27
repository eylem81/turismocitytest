import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {      
      data: [],        
    }    
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    fetch('https://picsum.photos/v2/list')
    .then ((res) =>res.json())
    .then((res)=>{      
      this.setState({data:res});
    });       
  }



  render() {
      
    return (
      
        <FlatList
          data={this.state.data}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={
            ({item}) =>  (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Image style={styles.imageThumbnail} source={{ uri: item.download_url }} />
              </View>

            )
          }

        />
      
    );
  }

}

const styles = StyleSheet.create({
  
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },

})