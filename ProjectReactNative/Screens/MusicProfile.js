import * as React from "react";
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
function MusicProfile() {
    const navigation = useNavigation();
  const songs = [
    { image: require('../assets/Artist Profile/Image 66.png'), title: "Let you free", artist: "Ryan Young", plays: "68M", duration: "03:35" },
    { image: require('../assets/Artist Profile/Image 67.png'), title: "Blinding Lights", artist: "Ryan Young", plays: "93M", duration: "04:39" },
    { image: require('../assets/Artist Profile/Image 68.png'), title: "Levitating", artist: "Ryan Young", plays: "90", duration: "07:48" },
    { image: require('../assets/Artist Profile/Image 69.png'), title: "Astronaut in the Ocean", artist: "Ryan Young", plays: "23M", duration: "03:36" },
    { image: require('../assets/Artist Profile/Image 70.png'), title: "Dynamite", artist: "Ryan Young", plays: "10M", duration: "06:22" },
  ];

  const albums = [
    { id: "1", image: require("../assets/Artist Profile/Image 71.png"), updateText: 'ME \n Jessica Gonzalez' },
    { id: "2", image: require("../assets/Artist Profile/Image 72.png"), updateText: 'Magna nost \n Jessica Gonzalez' },
    { id: "3", image: require("../assets/Artist Profile/Image 77.png"), updateText: 'Proident \n Jessica Gonzalez' },
  ];
  const similiarArtists = [
    { id: "1", image: require("../assets/Artist Profile/Image 74.png"), updateText: 'Magna nost \n Jessica Gonzalez' },
    { id: "2", image: require("../assets/Artist Profile/Image 75.png"), updateText: 'Exercutatui \n Brian Harris' },
    { id: "3", image: require("../assets/Artist Profile/Image 76.png"), updateText: 'Tempor P \n Tyler Anony' },
  ];

  const renderAlbumItem = ({ item }) => (
    <View style={styles.chartItem}>
      <Image source={item.image} style={styles.profileImage1} />
      <Text style={styles.profileName}>
        <Text style={styles.boldText}>{item.updateText.split('\n')[0]}</Text>
        {'\n'}
        <Text style={styles.normalText}>{item.updateText.split('\n')[1]}</Text>
      </Text>
    </View>
  );

  const renderArtist = ({ item }) => (
    <View style={styles.chartItem}>
      <Image source={item.image} style={styles.profileImage1} />
      <Text style={styles.profileName}>
        <Text style={styles.boldText}>{item.updateText.split('\n')[0]}</Text>
        {'\n'}
        <Text style={styles.normalText}>{item.updateText.split('\n')[1]}</Text>
      </Text>
    </View>
  );

  const handleNavigateToAudioListingScreen = () => {
    navigation.navigate('AudioListingScreen');
  };
  return (
    <ScrollView contentContainerStyle={styles.container} accessibilityRole="main">
        <TouchableOpacity accessibilityLabel="Menu" onPress={handleNavigateToAudioListingScreen} style={{ paddingHorizontal: 20, paddingVertical: 14,}}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf53779798d50f969f733d234cc48adf36db161c1f2fb4c0201ea3820a3707?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
      <View style={styles.header} accessibilityRole="banner">
        <TouchableOpacity 
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Image 
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf53779798d50f969f733d234cc48adf36db161c1f2fb4c0201ea3820a3707?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={require('../assets/Artist Profile/Image 63.png')} 
          style={styles.profilePic}
          accessibilityLabel="Ryan Young's profile picture"
        />
        <Text style={styles.profileName} accessibilityRole="header">Ryan Young</Text>
        <Text style={styles.followerCount}>65.1K Followers</Text>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.followButton}
            accessibilityRole="button"
            accessibilityLabel="Follow Ryan Young"
          >
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          
          <View style={styles.iconButtons}>
            <TouchableOpacity 
              style={styles.iconButton}
              accessibilityRole="button" 
              accessibilityLabel="More options"
            >
              <Image  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/52fbd55f5ceb14cbc27129da39ca3c73be969b591ccc5bc05cb64d64cf2b0812?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconButton}
              accessibilityRole="button"
              accessibilityLabel="Share profile"
            >
              <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2454c5d8de1fe0e8f3fecc36f7ed6f0da745b602f117f6f6b2cb653d49d5ddf?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconButton}
              accessibilityRole="button"
              accessibilityLabel="Share profile"
            >
              <Image source={require("../assets/Artist Profile/Icon Button 4.png")} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.songsSection}>
        <Text style={styles.sectionTitle}>Songs</Text>
        <View style={styles.songsList}>
          {songs.map((song, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.songItem}
              accessibilityRole="button"
              accessibilityLabel={`Play ${song.title} by ${song.artist}`}
            >
              <Image source={song.image} style={styles.songArtwork} />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
                <View style={styles.songStats}>
                  <View style={styles.stat}>
                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f96b84a777734bf7668d691e92c55649a6a42b9dabc606df6cc46ff670f39641?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }} style={styles.statIcon} />
                    <Text style={styles.statText}>{song.plays}</Text>
                  </View>
                  <View style={styles.stat}>
                    <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/553a195cf5e9b9edd38c7ab5968581db52050ce7e8fa7a974a967b5e73fbc1d6?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }} style={styles.statIcon} />
                    <Text style={styles.statText}>{song.duration}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle} accessibilityRole="header">Albums</Text>
        <FlatList
          data={albums}
          renderItem={renderAlbumItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>

        <Text style={styles.sectionTitle} accessibilityRole="header">About</Text>
        <Image source={require('../assets/Artist Profile/Image 73.png')} />
        <Text style={styles.aboutText} accessibilityRole="article">
          Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor consequat voluptate duis irure. 
          Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit.
        </Text>
        <TouchableOpacity 
          style={styles.viewMoreButton}
          accessibilityRole="button"
          accessibilityLabel="View more about Ryan Young"
        >
          <Text style={styles.viewMoreText}>View more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle} accessibilityRole="header">Fans also like</Text>
        <FlatList
          data={similiarArtists}
          renderItem={renderArtist}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerBg: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePic: {
    width: 300,
    height: 300,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#171A1F',
  },
  profileName1: {
    marginTop: 8,
    fontSize: 14,
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Open Sans, sans-serif',
  },
  followerCount: {
    fontSize: 14,
    color: '#565E6C',
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  followButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9095A0',
  },
  followButtonText: {
    color: '#9095A0',
    fontSize: 16,
  },
  updateText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    color: 'rgba(144, 149, 160, 1)',
    fontWeight: '400',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'rgba(23, 26, 31, 1)',
  },
  normalText: {
    fontWeight: '400', // In thường
    fontSize: 14,
    color: 'rgba(23, 26, 31, 1)',
  },
  iconButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    marginTop: 20, marginBottom: 20,
  },
  songItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  songArtwork: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  songTitle: {
    fontSize: 16,
    color: '#171A1F',
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 14,
    color: '#565E6C',
  },
  songStats: {
    flexDirection: 'row',
    marginTop: 4,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  statText: {
    fontSize: 12,
    color: '#565E6C',
  },
  albumItem: {
    marginRight: 15,
    width: 140,
  },
  albumArtwork: {
    width: 140,
    height: 140,
    borderRadius: 4,
  },
  profileImage1: {
    width: 150,
    height: 150,
  },
  chartItem: {
    marginRight: 10, // Khoảng cách giữa các chartItem (hình ảnh và văn bản)
  },
  albumTitle: {
    fontSize: 14,
    color: '#171A1F',
    marginTop: 8,
  },
  albumArtist: {
    fontSize: 12,
    color: '#9095A0',
    marginTop: 4,
  },
  aboutText: {
    fontSize: 14,
    color: '#565E6C',
    lineHeight: 22,
  },
  viewMoreButton: {
    alignSelf: 'center',
    marginTop: 15,
  },
  viewMoreText: {
    color: '#9D45EF',
    fontSize: 14,
  },
  artistItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  artistName: {
    fontSize: 14,
    color: '#171A1F',
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navItem: {
    padding: 10,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default MusicProfile;