import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const API_BASE_URL = 'https://api.example.com';

const SearchScreen2 = () => {
  const tracks = [
    { id: 1, image: require('../assets/Audio Listing - Search Results/Image 83.png'), title: 'Me', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '03:36', imageId: '1' },
    { id: 2, image: require('../assets/Audio Listing - Search Results/Image 84.png'), title: 'Me Inc', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', imageId: '2' }, 
    { id: 3, image: require('../assets/Audio Listing - Search Results/Image 86.png'), title: 'Dozz me', artist: 'Brian Bailey', plays: '93M', duration: '04:39', imageId: '3' },
    { id: 4, image: require('../assets/Audio Listing - Search Results/Image 87.png'), title: 'Eastss me', artist: 'Anthony Taylor', plays: '9M', duration: '07:48', imageId: '4' },
    { id: 5, image: require('../assets/Audio Listing - Search Results/Image 88.png'), title: 'Me Ali', artist: 'Pedro Moreno', plays: '23M', duration: '03:36', imageId: '5' },
    { id: 6, image: require('../assets/Audio Listing - Search Results/Image 89.png'), title: 'Me quis a', artist: 'Elena Jimenez', plays: '10M', duration: '06:22', imageId: '6' },
    { id: 6, image: require('../assets/Audio Listing - Search Results/Image 90.png'), title: 'Me light', artist: 'John Smith', plays: '81M', duration: '05:15', imageId: '7' },
  ];

  const [activeTab, setActiveTab] = React.useState('all');

  return (
    <ScrollView style={styles.container} accessible={true} accessibilityRole="main" accessibilityLabel="Music Player">
      <TouchableOpacity 
        style={styles.searchBar}
        accessible={true}
        accessibilityRole="searchbox"
        accessibilityLabel="Search music"
        accessibilityHint="Double tap to search for music"
      >
        <Text style={styles.searchText}>Me</Text>
        <Image 
          source={{ uri: `${API_BASE_URL}/icons/search.png` }}
          style={styles.searchIcon}
          accessible={false}
        />
      </TouchableOpacity>

      <View style={styles.tabContainer} accessibilityRole="tablist">
        {['All', 'Tracks', 'Albums', 'Artists'].map(tab => (
          <TouchableOpacity
            key={tab.toLowerCase()}
            style={[styles.tab, activeTab === tab.toLowerCase() && styles.activeTab]}
            onPress={() => setActiveTab(tab.toLowerCase())}
            accessible={true}
            accessibilityRole="tab"
            accessibilityState={{selected: activeTab === tab.toLowerCase()}}
            accessibilityLabel={`${tab} tab`}
          >
            <Text style={[styles.tabText, activeTab === tab.toLowerCase() && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.artistProfile}>
        <Image 
          source={ require('../assets/Audio Listing - Search Results/Image 85.png') }
          style={styles.artistImage}
          accessible={true}
          accessibilityLabel="Artist profile picture"
        />
        <View style={styles.artistInfo}>
          <Text style={styles.artistName}>Mer Watson</Text>
          <View style={styles.followersContainer}>
            <Image 
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/adfd723dde6b9b6ac493e2abc3581ccf21101924261ba7a04d66e89a2cb50388?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a", }}
              style={styles.followersIcon}
              accessible={false}
            />
            <Text style={styles.followersText}>1.234K Followers</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.followButton}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Follow artist"
          accessibilityHint="Double tap to follow this artist"
        >
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trackList} accessibilityRole="list">
        {tracks.map(track => (
          <TouchableOpacity
            key={track.id}
            style={styles.trackItem}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel={`Play ${track.title} by ${track.artist}`}
            accessibilityHint="Double tap to play this track"
          >
           <Image 
        source={track.image}
        style={styles.trackImage}
        accessible={false}
      />
            <View style={styles.trackInfo}>
              <Text style={styles.trackTitle}>{track.title}</Text>
              <Text style={styles.trackArtist}>{track.artist}</Text>
              <View style={styles.trackStats}>
                <Image 
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f96b84a777734bf7668d691e92c55649a6a42b9dabc606df6cc46ff670f39641?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                  style={styles.statsIcon}
                  accessible={false}
                />
                <Text style={styles.statsText}>{track.plays}</Text>
                <Image 
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/553a195cf5e9b9edd38c7ab5968581db52050ce7e8fa7a974a967b5e73fbc1d6?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                  style={styles.statsIcon}
                  accessible={false}
                />
                <Text style={styles.statsText}>{track.duration}</Text>
                <Image
                resizeMode="contain"
                source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/855ad18cadafa418b3aabaa512bdab0b6d06a3927b7494a78fdd2191a1528e6c?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",}}
                style={styles.image2}
            />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    padding: 15,
    marginTop: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#BCB1CA',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    color: '#565E6C',
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#9D45EF',
  },
  tabText: {
    color: '#565E6C',
    fontSize: 16,
  },
  activeTabText: {
    color: '#9D45EF',
    fontWeight: 'bold',
  },
  artistProfile: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  artistInfo: {
    marginLeft: 15,
    flex: 1,
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#171A1F',
  },
  followersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  followersIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  followersText: {
    color: '#909590',
    fontSize: 14,
  },
  followButton: {
    borderWidth: 1,
    borderColor: '#909590',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  followButtonText: {
    color: '#909590',
    fontSize: 14,
  },
  trackList: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  image2: {
    width: 20,
    aspectRatio: 1,
    marginLeft: 'auto', // Đẩy hình ảnh sang bên phải
  },
  trackInfo: {
    marginLeft: 15,
    flex: 1,
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171A1F',
  },
  trackArtist: {
    fontSize: 14,
    color: '#565E6C',
    marginTop: 2,
  },
  trackStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between', // Đẩy phần tử ra hai đầu
  },
  statsIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  statsText: {
    fontSize: 12,
    color: '#565E6C',
    marginRight: 15,
  },
  playbackControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    marginTop: 20,
  },
  controlIcon: {
    width: 40,
    height: 40,
  },
});

export default SearchScreen2;