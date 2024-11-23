import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  AccessibilityInfo,
} from "react-native";

export default function PlaylistsScreen() {
  const [selectedPlaylist, setSelectedPlaylist] = React.useState(null);
  const navigation = useNavigation();
  const playlistData = [
    {
      id: 1,
      title: "Ipsum sit nulla",
      author: "Ashley Scott",
      songCount: 12,
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e03d4b10f248a8aff36f4c4f576e21a3b47262b0a5a09c1945a96aa7453172d9?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
    },
    {
      id: 2,
      title: "Occaecat aliq",
      author: "Jose Garcia",
      songCount: 4,
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/62e744c67d27d65ba0a462b7e49cd4f4aa99afe554177a839c243ee42f15c900?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
    },
    // Thêm các playlist khác với id duy nhất
  ];

  const handlePlaylistSelect = (id) => {
    setSelectedPlaylist(id);
    AccessibilityInfo.announceForAccessibility(`Selected playlist ${id}`);
  };

  return (
    <ScrollView 
      style={styles.container}
      accessibilityRole="main"
      accessibilityLabel="Playlists screen"
    >
      <View 
        style={styles.headerContainer}
        accessibilityRole="banner"
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Library')}
          accessibilityRole="button"
          accessibilityLabel="Open menu"
        >
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf53779798d50f969f733d234cc48adf36db161c1f2fb4c0201ea3820a3707?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle} accessibilityRole="header">
          Playlists
        </Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Search playlists"
        >
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd635fdc2c930cd34105e8fe8aa39440726da5adba44b4f4ab08dc715a0702e2?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle} accessibilityRole="header">
          Your playlists
        </Text>

        {playlistData.map((playlist) => (
          <TouchableOpacity
            key={playlist.id} // Sử dụng id làm khóa
            style={styles.playlistItem}
            onPress={() => handlePlaylistSelect(playlist.id)}
            accessibilityRole="button"
            accessibilityLabel={`${playlist.title} by ${playlist.author}, ${playlist.songCount} songs`}
            accessibilityState={{ selected: selectedPlaylist === playlist.id }}
          >
            <View style={styles.playlistContent}>
              <Image
                source={{ uri: playlist.imageUri }}
                style={styles.playlistCover}
                accessibilityLabel={`Cover art for ${playlist.title}`}
              />
              <View style={styles.playlistInfo}>
                <Text style={styles.playlistTitle}>{playlist.title}</Text>
                <View style={styles.playlistDetails}>
                  <Text style={styles.authorText}>{playlist.author}</Text>
                  <Image
                    source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/48afe4c69a773e74547ce42790c36e3b69e2ab4638220670b31d1f96f8311826?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                    style={styles.separator}
                  />
                  <Text style={styles.songCount}>{playlist.songCount} songs</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`More options for ${playlist.title}`}
            >
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bb7cd13067744e61854ad7e5c462cb1be5098175ec490d43ec520808cc2e28a?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.moreIcon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.addButton}
          accessibilityRole="button"
          accessibilityLabel="Create new playlist"
        >
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6186b43d156e713c70ff59cba55335e74061bb578f9e6046f70b59f0664d02a5?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
            style={styles.addButtonImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  banner: {
    width: "100%",
    aspectRatio: 9.71,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "Open Sans",
    color: "rgba(23, 26, 31, 1)",
    fontWeight: "400",
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "700",
    color: "rgba(23, 26, 31, 1)",
    marginBottom: 20,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
    marginBottom: 16,
  },
  playlistContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  playlistCover: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  playlistInfo: {
    marginLeft: 12,
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    color: "rgba(23, 26, 31, 1)",
    marginBottom: 4,
  },
  playlistDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorText: {
    fontSize: 14,
    color: "rgba(144, 149, 160, 1)",
  },
  separator: {
    width: 12,
    height: 12,
    marginHorizontal: 12,
  },
  songCount: {
    fontSize: 14,
    color: "rgba(144, 149, 160, 1)",
  },
  moreIcon: {
    width: 20,
    height: 20,
  },
  addButton: {
    alignSelf: "flex-end",
    marginTop: 250,
  },
  addButtonImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
});