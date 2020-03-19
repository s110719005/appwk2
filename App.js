import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.backStyle}>

        <Header />
        <AlbumList />
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backStyle:{
    backgroundColor: "#9F9F9F"
  },
  
});

export default App;
