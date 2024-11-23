import React, { useState, useContext } from 'react';
import { ScrollView, View, StyleSheet, Image, Modal, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../Screens/UserContext';

const AudioListingScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    // Cập nhật trạng thái người dùng nếu cần
    alert("Logged out!");
    navigation.navigate("Login");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleDatabaseManage = () => {
    if (user.role === 'admin') {  // Kiểm tra nếu người dùng là admin
      toggleModal();  // Đóng modal
      navigation.navigate('QuanLy');  // Chuyển hướng đến màn hình quản lý cơ sở dữ liệu
    } else {
      alert("You need to be admin to use this function!");  // Nếu không phải admin thì thông báo
    }
  };
  const imageSuggestion = [
    require('../assets/Home - Audio Listing/Container 26.png'),
    require('../assets/Home - Audio Listing/Container 27.png'),
  ];
  const chartData = [
    { id: '1', image: require('../assets/Home - Audio Listing/Container 31.png'), updateText: 'Daily chart-toppers \n update' },
    { id: '2', image: require('../assets/Home - Audio Listing/Container 32.png'), updateText: 'Daily chart-toppers \n update' },
    { id: '3', image: require('../assets/Home - Audio Listing/Container 33.png'), updateText: 'Daily chart-toppers \n update' },
  ];
  const profiles = [
    { id: "1", image: require("../assets/Home - Audio Listing/Image 39.png"), updateText: "Jennifer Wilson" },
    { id: "2", image: require("../assets/Home - Audio Listing/Image 40.png"), updateText: "Elizabeth Hall" },
    { id: "3", image: require("../assets/Home - Audio Listing/Image 41.png"), updateText: "Anthony Charlie" },
  ];
  const trendingData = [
    { id: '1', image: require('../assets/Home - Audio Listing/Image 45.png'), updateText: 'ME \n Jessica Gonzalez' },
    { id: '2', image: require('../assets/Home - Audio Listing/Image 46.png'), updateText: 'Magna nost \n Brian Thomas' },
    { id: '3', image: require('../assets/Home - Audio Listing/Image 47.png'), updateText: 'Magna nost \n Christopher' },
  ];

  const renderProfileItem = ({ item }) => (
    <View style={styles.profileItem}>
      <Image source={item.image} style={styles.chartImage} />
      <Text style={styles.profileName}>{item.updateText}</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  const handleNavigateToPlayListDetail = () => {
    navigation.navigate('PlayListDetail');
  };
  const handleNavigateToMusicProfile = () => {
    navigation.navigate('MusicProfile');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("AudioListingScreen")}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d05a785f83bbf52253d4947a6df09103c8c69c4b1ca90b77ae7c1deecf8567e1?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <View style={styles.rightIcons}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc4961ce9f3f141a5959ccd2abe9ed7fc07f71769d3b7ea548cc46cff175a83c?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.icon}
              />
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  resizeMode="contain"
                  source={{ uri: "https://static.fandomspot.com/images/08/48721/02-dawnbringer-yone-lol-splash-image.jpg" }}
                  style={styles.profileIcon}
                />
              </TouchableOpacity>
              <Modal
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={toggleModal}
                transparent={true}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>You want</Text>
                    <Button title="Log out" onPress={handleLogout} />
                    <Button title="Cancel" onPress={toggleModal} />
                    <Button
                      title="Database Manage"
                      onPress={handleDatabaseManage} />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>

        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.name}>{user.username}</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f4bf2536b38547e20127dc942b69b0d4118744c290a4934bb191fc0a871f9ad?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
            style={styles.searchIcon}
            accessibilityLabel="Search"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="What you want to listen to"
            placeholderTextColor="rgba(188, 193, 202, 1)"
            accessibilityLabel="Search for music"
          />
        </View>

        <Text style={styles.sectionTitle}>Suggestions for you</Text>
        <FlatList
          data={imageSuggestion}
          renderItem={({ item }) => <Image source={item} style={styles.image} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity onPress={handleNavigateToPlayListDetail}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Charts</Text>
            <Image source={require("../assets/Home - Audio Listing/See all.png")} style={styles.seeAllImage} />
          </View>
        </TouchableOpacity>
        <FlatList
          data={chartData}
          renderItem={({ item }) => (
            <View style={styles.chartItem}>
              <Image source={item.image} style={styles.chartImage} />
              <Text style={styles.updateText}>
                <Text style={styles.boldText}>Daily chart-toppers</Text>
                {'\n'}
                update
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
        />

        <TouchableOpacity onPress={handleNavigateToMusicProfile}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Artists</Text>
            <Image source={require("../assets/Home - Audio Listing/See all.png")} style={styles.seeAllImage} />
          </View>
        </TouchableOpacity>
        <FlatList
          data={profiles}
          renderItem={renderProfileItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
    alignItems: 'center',
    marginTop: 12,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 28,
    aspectRatio: 1,
  },
  profileIcon: {
    width: 36,
    aspectRatio: 1,
    borderRadius: 18,
  },
  greetingContainer: {
    marginTop: 36,
  },
  greeting: {
    color: 'rgba(86, 94, 108, 1)',
    fontSize: 16,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    lineHeight: 32,
  },
  name: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 24,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    borderColor: 'rgba(188, 193, 202, 1)',
    borderWidth: 1,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  searchIcon: {
    width: 20,
    aspectRatio: 1,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    lineHeight: 32,
  },
  sectionTitle: {
    color: 'rgba(23, 26, 31, 1)',
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    marginTop: 20, marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  seeAllImage: {
    alignSelf: 'center',
  },
  seeAllText: {
    color: 'rgba(144, 149, 160, 1)',
    fontSize: 14,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    textAlign: 'right',
  },
  chartItem: {
    marginRight: 10, // Khoảng cách giữa các chartItem (hình ảnh và văn bản)
  },
  chartImage: {
    justifyContent: 'space-between'
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
  profileItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  profileImage1: {
    width: 150,
    height: 150,
    marginRight: 10
  },
  profileName: {
    marginTop: 8,
    fontSize: 14,
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Open Sans, sans-serif',
  },
  followButton: {
    marginTop: 8,
    backgroundColor: 'black',
    borderRadius: 18,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Open Sans, sans-serif',
  },
});

export default AudioListingScreen;