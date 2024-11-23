import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState, useRef } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, ScrollView, Animated } from "react-native";

function PlayAudio() {
    const navigation = useNavigation();
    const slideAnim = useRef(new Animated.Value(0)).current;

  const songData = {
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    currentTime: "0:06",
    totalTime: "3:08",
    likes: "12K",
    comments: "450"
  };

  const handlePlayPress = () => {
    Animated.timing(slideAnim, {
      toValue: 1000,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('PlayListDetail'); // Điều hướng chính xác
    });
  };
  

  return (
   <ScrollView>
     <View style={styles.container} accessibilityRole="main">
      <ImageBackground
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="Album artwork background"
        source={require("../assets/Play an Audio/Image 58.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.playerControls}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Play music"
            accessibilityRole="button"
            accessibilityHint="Plays or pauses the current track"
            style={styles.playButton}
           
          >
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Additional controls"
            accessibilityRole="button"
            onPress={handlePlayPress}
          >
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/efa1cc4f4ae00867541e45178cefc334f252bc9b7125a4966a9b64e6242a9e76?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.controlIcon}
              accessible={false}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.songInfo}>
            <Text
              style={styles.title}
              accessibilityRole="header"
              accessibilityLabel={`Now playing ${songData.title}`}
            >
              {songData.title}
            </Text>
            <Text
              style={styles.artist}
              accessibilityLabel={`By artist ${songData.artist}`}
            >
              {songData.artist}
            </Text>
          </View>

          <View style={styles.progressContainer}>
          <Image
              resizeMode="contain"
              source={require("../assets/Play an Audio/Group 4.png")}
              style={styles.progressImage}
              accessible={true}
              accessibilityLabel="Progress image"
            />
            <View style={styles.timeInfo}>
              <Text style={styles.timeText}>{songData.currentTime}</Text>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/67fdcc87453b30bfd6bc27a4283da5ed4e99ca62a693c41bedd15a4b568f5403?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.progressBar}
                accessible={true}
                accessibilityLabel={`Progress ${songData.currentTime} of ${songData.totalTime}`}
              />
              <Text style={styles.timeText}>{songData.totalTime}</Text>
            </View>

            <View style={styles.controlsContainer}>
              <View style={styles.mediaControls}>
              <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Shuffle"
                  accessibilityRole="button"
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2454c5d8de1fe0e8f3fecc36f7ed6f0da745b602f117f6f6b2cb653d49d5ddf?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                    style={styles.controlButton}
                    accessible={false}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Previous track"
                  accessibilityRole="button"
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/662560d25dc779f30fe9709f844a5dd211bf9588696ea5ee8e0e681d3260ff28?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                    style={styles.controlButton}
                    accessible={false}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Play or pause"
                  accessibilityRole="button"
                >
                  <Image
                    resizeMode="contain"
                   source={require("../assets/Play an Audio/Icon Button 3.png")}
                    style={styles.mainPlayButton}
                    accessible={false}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Next track"
                  accessibilityRole="button"
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c2aaf8b2b64baa92de54c88d4468d394c84fc97682772fb09cac472230b3136?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                    style={styles.controlButton}
                    accessible={false}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="More options"
                  accessibilityRole="button"
                >
                  <Image
                    resizeMode="contain"
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/52fbd55f5ceb14cbc27129da39ca3c73be969b591ccc5bc05cb64d64cf2b0812?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                    style={styles.optionsButton}
                    accessible={false}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.socialContainer}>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Image
                  resizeMode="contain"
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f6c4f7d438b9c4f391ebdbd77398fc071a6ebbb10c3b92b58ceb862119d970e?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                  style={styles.socialIcon}
                  accessible={true}
                  accessibilityLabel={`${songData.likes} likes`}
                />
                <Text style={styles.statText}>{songData.likes}</Text>
              </View>

              <View style={styles.statItem}>
                <Image
                  resizeMode="contain"
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/68730635a57981ba7dd46b2d30370a818baa591a8134c0737ccdd06ff9d005a1?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                  style={styles.socialIcon}
                  accessible={true}
                  accessibilityLabel={`${songData.comments} comments`}
                />
                <Text style={styles.statText}>{songData.comments}</Text>
              </View>
            </View>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Share"
              accessibilityRole="button"
            >
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa37710a8dd4dd9b1405cec049646d60348ce89191a4a30c9c587434ad348183?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.shareIcon}
                accessible={false}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  backgroundImage: {
    position: "relative",
    display: "flex",
    aspectRatio: 0.46,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  visualizer: {
    position: "relative",
    display: "flex",
    width: "100%",
    aspectRatio: 9.71,
  },
  playerControls: {
    position: "relative",
    display: "flex",
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playButton: {
    padding: 8,
  },
  playText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  controlIcon: {
    width: 24,
    aspectRatio: 1,
  },
  contentContainer: {
    borderRadius: 4,
    marginTop: 370,
    padding: 20,
    paddingBottom: 49,
  },
  songInfo: {
    marginBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "700",
  },
  artist: {
    color: "#DEE1E6",
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "400",
  },
  progressContainer: {
    display: "flex",
    gap: 36,
  },
  timeInfo: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "400",
  },
  progressBar: {
    marginHorizontal: 10,
    width: 200,
    height: 10,
  },
  controlsContainer: {
    flex: 1,
  },
  totalTime: {
    color: "#9095A0",
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "400",
  },
  mediaControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  controlButton: {
    width: 32,
    aspectRatio: 1,
  },
  mainPlayButton: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
  },
  optionsButton: {
    width: 28,
    aspectRatio: 1,
  },
  socialContainer: {
    marginTop: 47,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 24,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  socialIcon: {
    width: 24,
    aspectRatio: 1,
  },
  statText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "400",
  },
  shareIcon: {
    width: 24,
    aspectRatio: 1,
  },
});

export default PlayAudio;