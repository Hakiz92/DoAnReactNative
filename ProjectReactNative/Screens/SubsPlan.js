import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  AccessibilityInfo,
  ImageBackground,
} from "react-native";

export default function PremiumSubscription() {
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    AccessibilityInfo.announceForAccessibility("Successfully subscribed to Premium");
  };

  const handleBackHome = () => {
    AccessibilityInfo.announceForAccessibility("Navigating back to home");
    navigation.navigate("PremiumScreen");
  };

  return (
    <ScrollView 
      accessible={true}
      accessibilityLabel="Premium subscription page"
      style={styles.container}
    >
      <View style={styles.view1}>
        <ImageBackground
          accessible={true}
          accessibilityLabel="Background image"
          resizeMode="cover"
          source={{uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbc8b9e9b4ff3c2c127ca1191c3e896474ec5a4d33573e60ced73145639b2d87?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a"}}
          style={styles.image1}
        >
           <View style={styles.view3}>
              <Text 
                accessibilityRole="header"
                style={styles.headerText}
              >
              Premium Subscription
              </Text>
            </View>
            <FlatList
  data={[
    { id: '1', source: require('../assets/Subscription Plans/Container 110.png') },
    { id: '2', source: require('../assets/Subscription Plans/Container 112.png') },
  ]}
  renderItem={({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={item.source}
        style={styles.featureImage}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={`Image ${item.id}`}
      />
    </View>
  )}
  keyExtractor={(item) => item.id}
  horizontal={true} // Hiển thị theo chiều ngang
  showsHorizontalScrollIndicator={false}
/>
<TouchableOpacity 
  onPress={handleBackHome}
  style={[styles.backButton, { marginTop: 15, alignSelf: 'center' }]} // marginTop và căn giữa
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Go back to home"
>
  <Text style={styles.backButtonText}>Back home</Text>
</TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
  },
  image1: {
    aspectRatio: 0.46,
    width: "100%",
    paddingBottom: 48,
  },
  image2: {
    width: "100%",
    aspectRatio: 9.71,
  },
  view2: {
    marginTop: 72,
    width: "100%",
    paddingHorizontal: 43,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Poppins",
    fontWeight: "700",
    lineHeight: 48,
    textAlign: "center",
    marginTop: 48,
    marginBottom: 48
  },
  premiumCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 36,
    width: "100%",
    marginTop: 24,
  },
  premiumHeader: {
    marginBottom: 20,
  },
  premiumTitle: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "700",
    color: "#171A1F",
  },
  freeTrialBadge: {
    backgroundColor: "rgba(255, 122, 226, 0.1)",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  freeTrialText: {
    color: "#FF7AE2",
    fontSize: 12,
    fontFamily: "Open Sans",
  },
  priceText: {
    fontSize: 16,
    fontFamily: "Open Sans",
    fontWeight: "700",
    color: "#171A1F",
    marginTop: 8,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  featureIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  featureText: {
    fontSize: 14,
    fontFamily: "Open Sans",
    color: "#171A1F",
  },
  subscribeButton: {
    backgroundColor: "#FF7AE2",
    borderRadius: 22,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
  },
  subscribeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 4,
    paddingVertical: 9,
    paddingHorizontal: 70,
    marginTop: 5
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Open Sans",
  },
});