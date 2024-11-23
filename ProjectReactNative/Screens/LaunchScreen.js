import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const LaunchScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook navigation

  return (
    <ScrollView>
      <View accessible={true} accessibilityRole="main" style={styles.container}>
        <ImageBackground
          accessible={true}
          accessibilityLabel="Background image"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6dc21e8d519790146c30192c7f275af6a0b914da4daae3acf5d18ac8a0587ce?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <Image
              accessible={true}
              accessibilityLabel="App logo"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b307e9a6e14e2b0dd53ab2263386170300ee8f0727d876971fdef65f96bbb69e?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
              style={styles.logo}
              resizeMode="contain"
            />
            <View accessible={true} accessibilityRole="text" style={styles.textContainer}>
              <Text style={styles.headerText}>
                Your music{'\n'}Your artists
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register"); // Điều hướng tới màn hình Register
              }}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Create an account"
              style={styles.createAccountButton}
            >
              <Text style={styles.buttonText}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login"); // Điều hướng tới màn hình Login
              }}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="I already have an account"
              style={styles.existingAccountButton}
            >
              <Text style={styles.existingAccountButtonText}>I already have an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.premiumButton}
            onPress={() => navigation.navigate('PremiumScreen')}
          >
            <Text style={styles.premiumButtonText}>Go to Premium</Text>
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
    borderColor: 'rgba(157, 69, 239, 1)', // Assuming this is the color of createAccountButton
    backgroundColor: 'rgba(157, 69, 239, 1)', // Add background color to match createAccountButton
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  existingAccountButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: '600',
  },
  premiumButton: {
    borderRadius: 26,
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 69,
    backgroundColor: 'rgba(255, 215, 0, 1)', // Example color for the premium button
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumButtonText: {
    color: 'rgba(0, 0, 0, 1)', // Example text color for the premium button
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LaunchScreen;
