import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlayListDetail = () => {
  const navigation = useNavigation();

  const handleNavigateToAudioListingScreen = () => {
    navigation.navigate('AudioListingScreen');
  };

  const handleNavigateToPlayAudio = () => {
    navigation.navigate('PlayAudio');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity accessibilityLabel="Menu" onPress={handleNavigateToAudioListingScreen}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf53779798d50f969f733d234cc48adf36db161c1f2fb4c0201ea3820a3707?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Search">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd635fdc2c930cd34105e8fe8aa39440726da5adba44b4f4ab08dc715a0702e2?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#fff'}}>
        <Image 
          source={require('../assets/Home - Audio Listing/Container 31.png')}
          style={[styles.playlistImage, {marginRight: 5}]}  // Thêm marginRight để tăng khoảng cách
          resizeMode="contain"
          accessibilityLabel="Playlist cover image"
        />
        <View style={styles.playlistDetails}>
          <Text style={styles.playlistTitle}>Top 50 - Canada</Text>
          <View style={styles.playlistStats}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0545001d5b44ce510b014a0e3d026b61d0f51dd62dcce7da9609fb8643ab55?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.statsIcon}
              resizeMode="contain"
            />
            <Text style={styles.statsText}>1,234</Text>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/48afe4c69a773e74547ce42790c36e3b69e2ab4638220670b31d1f96f8311826?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.statsIcon}
              resizeMode="contain"
            />
            <Text style={styles.statsText}>05:10:18</Text>
          </View>
          <Text style={styles.playlistDescription}>Daily chart-toppers update</Text>
        </View>
      </View>

      <View style={styles.playlistInfo}>
        <View style={styles.playlistActions}>
          <TouchableOpacity accessibilityLabel="Like playlist">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/217c93aa98b9765be1b01ce1adee95353347de3a989b84bc4ea57179dac4bbee?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.actionIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Share playlist">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/11a53df41cee5c72a19c75a187d076b340038864a0c4d767a8d4be43c0756784?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.actionIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.playlistControls}>
          <TouchableOpacity accessibilityLabel="Shuffle play">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2454c5d8de1fe0e8f3fecc36f7ed6f0da745b602f117f6f6b2cb653d49d5ddf?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.controlIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Play">
            <Image style={{width: 30, height: 30}}
              source={require('../assets/Playlist Details - Audio Listing/Icon Button 2.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.songList}>
        {[
          { image: require('../assets/Playlist Details - Audio Listing/Image 51.png'), title: "FLOWER", artist: "Jessica Gonzalez", plays: "2,1M", duration: "3:36" },
          { image: require('../assets/Playlist Details - Audio Listing/Image 52.png'), title: "Shape of You", artist: "Anthony Taylor", plays: "68M", duration: "03:35" },
          { image: require('../assets/Playlist Details - Audio Listing/Image 53.png'), title: "Blinding Lights", artist: "Brian Bailey", plays: "93M", duration: "04:39" },
          { image: require('../assets/Playlist Details - Audio Listing/Image 54.png'), title: "Levitating", artist: "Anthony Taylor", plays: "9M", duration: "07:48" },
          { image: require('../assets/Playlist Details - Audio Listing/Image 55.png'), title: "Astronaut in the Ocean", artist: "Pedro Moreno", plays: "23M", duration: "3:36" },
          { image: require('../assets/Playlist Details - Audio Listing/Image 56.png'), title: "Dynamite", artist: "Elena Jimenez", plays: "10M", duration: "06:22" }
        ].map((song, index) => (
          <View key={index} style={styles.songItem}>
            <Image
              source={song.image}  // Dùng hình ảnh từ thư mục nội bộ thay vì URL
              style={styles.songImage}
              resizeMode="contain"
              accessibilityLabel={`${song.title} album cover`}
            />
            <View style={styles.songInfo}>
              <View style={styles.songTitleArtist}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
              <TouchableOpacity accessibilityLabel={`Options for ${song.title}`}>
                <Image
                  source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e594bda992f4ff15c52002ac6b2cefb92df7b4cf8b9a5e2df632538d8765ccd0?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                  style={styles.songOptionsIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.songStats}>
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f96b84a777734bf7668d691e92c55649a6a42b9dabc606df6cc46ff670f39641?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.songStatsIcon}
                resizeMode="contain"
              />
              <Text style={styles.songStatsText}>{song.plays}</Text>
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/553a195cf5e9b9edd38c7ab5968581db52050ce7e8fa7a974a967b5e73fbc1d6?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.songStatsIcon}
                resizeMode="contain"
              />
              <Text style={styles.songStatsText}>{song.duration}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.nowPlaying}>
        <TouchableOpacity style={styles.nowPlaying} onPress={handleNavigateToPlayAudio}>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbcbc031b1b016e935e1af96aaaf9155f8335ff173af5c7ac1ae2a9859c62a38?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
            style={styles.nowPlayingImage}
            resizeMode="contain"
            accessibilityLabel="Now playing album cover"
          />
          <View style={styles.nowPlayingInfo}>
            <Text style={styles.nowPlayingTitle}>FLOWER</Text>
            <View style={styles.nowPlayingArtist}>
              <Text style={styles.nowPlayingArtistText}>Me</Text>
              <Image
                source={require('../assets/Playlist Details - Audio Listing/Image 51.png')}
                style={styles.nowPlayingArtistIcon}
                resizeMode="contain"
              />
              <Text style={styles.nowPlayingArtistText}>Jessica Gonzalez</Text>
            </View>
          </View>
          <View style={styles.nowPlayingControls}>
            <TouchableOpacity accessibilityLabel="Previous track">
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/42d2cf12b3b99c0913fcf85bcb70f7f4060be8146a46a059c451893a537873b5?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.nowPlayingControlIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Play/Pause">
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d5c2ed23924934e286600169c65ac2eb082bd36d42baf7aae571fed714f682d?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.nowPlayingControlIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
  },
  headerImage: {
    width: '100%',
    aspectRatio: 9.71,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  icon: {
    width: 24,
    aspectRatio: 1,
  },
  playlistInfo: {
    paddingHorizontal: 20,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playlistImage: {
    width: 136,
    aspectRatio: 1,
    borderRadius: 4,
  },
  playlistActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionIcon: {
    width: 20,
    aspectRatio: 1,
  },
  playlistDetails: {
    marginTop: 27,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171A1F',
    fontFamily: 'Poppins, sans-serif',
  },
  playlistStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statsIcon: {
    width: 16,
    aspectRatio: 1,
    marginRight: 8,
  },
  statsText: {
    fontSize: 14,
    color: '#565E6C',
    fontFamily: 'Open Sans, sans-serif',
    marginRight: 8,
  },
  playlistDescription: {
    fontSize: 14,
    color: '#565E6C',
    fontFamily: 'Open Sans, sans-serif',
    marginTop: 4,
  },
  playlistControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controlIcon: {
    width: 24,
    aspectRatio: 1,
  },
  playIcon: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 26,
  },
  songList: {
    marginTop: 24,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  songImage: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  songTitleArtist: {
    flexDirection: 'column',
  },
  songTitle: {
    fontSize: 16,
    color: '#171A1F',
    fontFamily: 'Open Sans, sans-serif',
  },
  songArtist: {
    fontSize: 12,
    color: '#565E6C',
    fontFamily: 'Open Sans, sans-serif',
  },
  songOptionsIcon: {
    width: 20,
    aspectRatio: 1,
    marginTop: 22,
  },
  songStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songStatsIcon: {
    width: 12,
    aspectRatio: 1,
    marginRight: 4,
  },
  songStatsText: {
    fontSize: 12,
    color: '#565E6C',
    fontFamily: 'Open Sans, sans-serif',
    marginRight: 8,
  },
  nowPlaying: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#000',
  },
  nowPlayingImage: {
    width: 48,
    aspectRatio: 1,
    borderRadius: 4,
  },
  nowPlayingInfo: {
    flex: 1,
    marginLeft: 12,
  },
  nowPlayingTitle: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Open Sans, sans-serif',
  },
  nowPlayingArtist: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nowPlayingArtistText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Open Sans, sans-serif',
  },
  nowPlayingArtistIcon: {
    width: 12,
    aspectRatio: 1,
    marginHorizontal: 8,
  },
  nowPlayingControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nowPlayingControlIcon: {
    width: 24,
    aspectRatio: 1,
    marginLeft: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  tabBarIcon: {
    width: 24,
    aspectRatio: 1,
  },
});

export default PlayListDetail;