import React, { useState, useContext } from 'react'; 
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, AccessibilityInfo, TextInput, FlatList, Modal, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from '../Screens/UserContext';

export default function Feed() {
  const { height } = Dimensions.get('window');
  const [likes, setLikes] = useState(20);
  const [comments, setComments] = useState([
    { id: '1', avatar: require('../assets/Feed - Comment on an Audio/Avatar 8.png'), name: 'Sally Rooney', comment: 'Do cuiis cul 😍', likes: 2 },
    { id: '2', avatar: require('../assets/Feed - Comment on an Audio/Avatar 9.png'), name: 'Jason', comment: 'Minim magna ex.', likes: 0 },
    { id: '3', avatar: require('../assets/Feed - Comment on an Audio/Avatar 11.png'), name: 'Michael Key', comment: '@Jason Smith Deserunt officia consectetur adipis', likes: 1 },
    { id: '4', avatar: require('../assets/Feed - Comment on an Audio/Avatar 8.png'), name: 'Liam Pham', comment: 'Commodo', likes: 0 },
    { id: '5', avatar: require('../assets/Feed - Comment on an Audio/Avatar 8.png'), name: 'Sally Rooney', comment: 'Esse consequat cillum.', likes: 3 },
  ]);
  
  const [shares, setShares] = useState(1);
  const [newComment, setNewComment] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const { user } = useContext(UserContext);
  
  const feedData = [
    {
      id: 1,
      author: {
        name: "Jessica Gonzalez",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/eae779a83a912d3dc2a8fa5cad88e261a5f0b794f9019ff77a7522d6670a6fa8?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
        verified: true
      },
      timeAgo: "3d",
      track: {
        title: "FLOWER",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/51273c51bbcf40396fbb7110944c5c88a7b8fa04faa704a75c94dbf430dc0f50?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
        likes: 125,
        duration: "05:15"
      },
      engagement: {
        likes: 20,
        comments: 3,
        shares: 1
      }
    },
    {
      id: 2,
      author: {
        name: "William King",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/0574b89dc6208494c706ba55ac2274cda60b42b5f9b8f262fe592ce450ef463f?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
        verified: true
      },
      timeAgo: "5d",
      track: {
        title: "Me",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/91809631f44863b648e8d8e764c5da0d5f565e5ae99d32235e4b1549e3dee3cc?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
        likes: 245,
        duration: "05:15"
      },
      engagement: {
        likes: 45,
        comments: 9,
        shares: 2
      }
    }
  ];

  const handleLike = () => {
    setLikes(prev => prev + 1);
    AccessibilityInfo.announceForAccessibility('Post liked');
  };

  const handleShare = () => {
    setShares(prev => prev + 1);
    AccessibilityInfo.announceForAccessibility('Post shared');
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        {
          id: Math.random().toString(),
          name: user.username, // Lấy từ UserContext
          comment: newComment,
          likes: 0,
          avatar: user.avatar, // Lấy từ UserContext
        },
      ]);
      setNewComment('');
    }
  };
  
  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      {/* Kiểm tra avatar */}
      {item.avatar && (
        <Image source={item.avatar} style={styles.commentAvatar} />
      )}
      <View>
        <Text style={styles.commentAuthor}>{item.name}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
      </View>
    </View>
  );
  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderPost = (post) => (
    <View
      key={post.id}
      style={styles.postContainer}
      accessible={true}
      accessibilityRole="article"
      accessibilityLabel={`Post by ${post.author.name}`}
    >
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: post.author.avatar }}
          style={styles.avatar}
          accessible={true}
          accessibilityLabel={`${post.author.name}'s avatar`}
        />
        <View style={styles.headerInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.authorName}>{post.author.name}</Text>
            {post.author.verified && (
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffd8220e0cf1e58c4f61afb6f4365ecfda405a5b1d61f504527b0416fdcff9ed?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a" }}
                style={styles.verifiedBadge}
                accessible={true}
                accessibilityLabel="Verified user badge"
              />
            )}
          </View>
          <View style={styles.postInfo}>
            <Text style={styles.postType}>Posted a track</Text>
            <Text style={styles.timeAgo}>{post.timeAgo}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.trackContainer}
        accessibilityRole="button"
        accessibilityLabel={`Play ${post.track.title}`}
        accessibilityHint="Double tap to play track"
      >
        <ImageBackground
          source={{ uri: post.track.image }}
          style={styles.trackImage}
          accessible={true}
          accessibilityLabel={`Track artwork for ${post.track.title}`}
        >
          <View style={styles.trackInfo}>
            <View style={styles.titleContainer}>
              <Text style={styles.trackTitle}>{post.track.title}</Text>
              <Text style={styles.artistName}>{post.author.name}</Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statText}>{post.track.likes}</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statText}>{post.track.duration}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.engagementContainer}>
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.view20}
            onPress={handleLike}
            accessibilityRole="button"
            accessibilityLabel={`Like. Currently ${likes} likes`}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9069b736baf0e37beb3d36e85b8801352f64192993857cd0692d162d2f932d67?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
              }}
              style={styles.image7}
            />
            <View style={styles.view21}>
              <Text>{likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionItem}
            accessibilityRole="button"
            accessibilityLabel={`Comment. Currently ${comments.length} comments`}
            onPress={toggleModal}
          >
            <Image
              source={{uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5fbb6d54a16d23dab7db8f44d5b50052ad2f1529186587d61d7af3a103c4fc1?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a"}}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>{comments.length}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.view24}
            onPress={handleShare}
            accessibilityRole="button"
            accessibilityLabel={`Share. Currently ${shares} shares`}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac87e0e353078c765acdaeb503e437d694665ac2558b7758bf97501672b61863?placeholderIfAbsent=true&apiKey=246443a9ddb849499eacf4ea5891bc1a",
              }}
              style={styles.image9}
            />
            <View style={styles.view25}>
              <Text>{shares}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
      visible={isModalVisible}
      animationType="slide"
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderComment} // Render comments with avatars
        />
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
            accessible={true}
            accessibilityLabel="Add a comment"
          />
          <TouchableOpacity onPress={addComment} accessible={true} accessibilityLabel="Post comment">
            <Text style={styles.postCommentButton}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {feedData.map(renderPost)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 15, paddingBottom: 15 },
  postContainer: { backgroundColor: "#fff", marginBottom: 20, borderRadius: 10, padding: 10 },
  headerContainer: { flexDirection: "row", marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  headerInfo: { marginLeft: 10, flex: 1 },
  nameContainer: { flexDirection: "row", alignItems: "center" },
  authorName: { fontWeight: "bold", fontSize: 16 },
  verifiedBadge: { width: 15, height: 15, marginLeft: 5 },
  postInfo: { flexDirection: "row", justifyContent: "space-between" },
  postType: { fontSize: 12, color: "#888" },
  timeAgo: { fontSize: 12, color: "#888" },
  trackContainer: { marginVertical: 10 },
  trackImage: { height: 200, justifyContent: "flex-end", padding: 10 },
  trackInfo: { backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 10 },
  titleContainer: { flexDirection: "row", justifyContent: "space-between" },
  trackTitle: { fontSize: 18, color: "#fff" },
  artistName: { fontSize: 12, color: "#fff" },
  statsContainer: { flexDirection: "row" },
  stat: { marginRight: 15 },
  statText: { color: "#fff" },
  engagementContainer: { flexDirection: "row", justifyContent: "space-between" },
  actions: { flexDirection: "row" },
  view20: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  image7: { width: 20, height: 20 },
  view21: { marginLeft: 5 },
  actionItem: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  actionIcon: { width: 20, height: 20 },
  actionText: { marginLeft: 5 },
  view24: { flexDirection: "row", alignItems: "center" },
  image9: { width: 20, height: 20 },
  view25: { marginLeft: 5 },
  modalContainer: { padding: 15, flex: 1, justifyContent: 'center', alignItems: 'center' },
  closeButton: { alignSelf: 'flex-end', padding: 10 },
  closeButtonText: { color: 'blue' },
  commentContainer: { flexDirection: "row",  // Đặt thành 'row' để các phần tử nằm ngang
    marginBottom: 10,
    alignItems: 'center', },
  commentAuthor: { fontWeight: "bold",
    marginRight: 10, },
  commentText: { color: "#888",
    flex: 1, },
  commentInputContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  commentInput: { flex: 1, borderBottomWidth: 1, marginRight: 10 },
  postCommentButton: { color: "blue" },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10, 
  }
});