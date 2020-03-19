import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import albumData from "./Album";

const AlbumList = () => {
    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                  uri : albumData[0].img1
                }}
            />
            <View style={styles.headerContentStyle}>
              <Text style={styles.albums_name}>{albumData[0].title}</Text>
              <Text style={styles.singer}>{albumData[0].artist}</Text>
            </View>
          </View>
          <View style={styles.cardSectionStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri : albumData[0].img2
              }}
            />
          </View>
        </View>

        <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri : albumData[1].img1
              }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.albums_name}>{albumData[1].title}</Text>
            <Text style={styles.singer}>{albumData[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri : albumData[1].img2
            }}
          />
        </View>
        </View>

        <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri : albumData[2].img1
              }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.albums_name}>{albumData[2].title}</Text>
            <Text style={styles.singer}>{albumData[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri : albumData[2].img2
            }}
          />
        </View>
        </View>

        <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri : albumData[3].img1
              }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.albums_name}>{albumData[3].title}</Text>
            <Text style={styles.singer}>{albumData[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri : albumData[3].img2
            }}
          />
        </View>
        </View>

        <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri : albumData[4].img1
              }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.albums_name}>{albumData[4].title}</Text>
            <Text style={styles.singer}>{albumData[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri : albumData[4].img2
            }}
          />
        </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    thumbnailContainerStyle: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    thumbnailStyle: {
      height: 70,
      width: 70,
      margin: 15,
      borderRadius: 70/ 2
      
    },
    headerContentStyle: {
      flexDirection: "column",
      //justifyContent: "space-around",
      paddingTop: 30,
      paddingLeft: 0
    },
    albums_name:{
      fontSize: 20,
      letterSpacing: 2
    },
    singer:{
      paddingTop: 8,
      fontSize: 15,
      letterSpacing: 1
    },
    cardContainerStyle: {
      
      shadowColor: "#CACACA",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      margin: 5
      
    },
    cardSectionStyle: {
      padding: 0,
      backgroundColor: "#fff",
      borderColor: "#CACACA",
      borderBottomWidth: 1,
      backgroundColor: "#CACACA"
    },
    imageStyle: {
      height: 300,
      width: null
    }
  });

  
  export default AlbumList;