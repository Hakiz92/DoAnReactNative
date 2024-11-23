import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const PremiumScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook navigation

  return (
    <ScrollView>
      <View accessible={true} accessibilityRole="main" style={styles.container}>
        <ImageBackground
          accessible={true}
          accessibilityLabel="Background image"
          source={require('../assets/Launch Screen - Premium/Image 112.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <Image
              accessible={true}
              accessibilityLabel="App logo"
              source={require('../assets/Launch Screen - Premium/Image 113.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <View accessible={true} accessibilityRole="text" style={styles.textContainer}>
              <Text style={styles.headerText}>
                Welcome to{'\n'}Premium
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SubsPlan"); // Điều hướng tới màn hình Register
              }}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel=""
              style={styles.createAccountButton}
            >
              <Text style={styles.buttonText}>Start Listening</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LaunchScreen"); // Điều hướng tới màn hình Login
              }}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel=""
              style={styles.existingAccountButton}
            >
              <Text style={styles.existingAccountButtonText}>Back To Home</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 480,
    width: '100%',
    alignItems: 'stretch',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    aspectRatio: 0.46,
  },
  content: {
    flex: 1,
    paddingBottom: 48,
    alignItems: 'stretch',
  },
  logoContainer: {
    width: '100%',
    aspectRatio: 9.71,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 36,
    width: 105,
    maxWidth: '100%',
    aspectRatio: 1.48,
    borderRadius: 4,
  },
  textContainer: {
    alignSelf: 'center',
    marginTop: 275,
    width: 242,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    lineHeight: 56,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  createAccountButton: {
    borderRadius: 26,
    marginTop: 138,
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 70,
    backgroundColor: 'rgba(157, 69, 239, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: '600',
  },
  existingAccountButton: {
    borderRadius: 26,
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 69,
    borderColor: 'rgba(157, 69, 239, 1)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  existingAccountButtonText: {
    color: 'rgba(157, 69, 239, 1)',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PremiumScreen;
