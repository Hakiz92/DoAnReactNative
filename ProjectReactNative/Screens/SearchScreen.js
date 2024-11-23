import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  // Mảng chứa các từ ban đầu
  const words = [
    { id: '1', text: 'Me' },
    { id: '2', text: 'me illum id aliquip' },
    { id: '3', text: 'me lorem' },
    { id: '4', text: 'Me Gonzalez' },
    { id: '5', text: 'Me irure esse' },
    { id: '5', text: 'Me Exercutatuib' },
    { id: '5', text: 'Me Sint aliquip duis deseru' },
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);

  // Xử lý thay đổi text input
  const handleSearch = (text) => {
    setSearchText(text);

    // Chỉ lọc khi có input
    if (text) {
      const filtered = words.filter((word) =>
        word.text.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredWords(filtered);
    } else {
      setFilteredWords([]); // Nếu input rỗng, xóa danh sách
    }
  };

  const handleWordPress = (word) => {
    // Chuyển sang màn hình SearchScreen2 và truyền dữ liệu từ
    navigation.navigate('SearchScreen2', { word });
  };

  const renderWord = ({ item }) => (
    <TouchableOpacity
      style={styles.wordItem}
      onPress={() => handleWordPress(item.text)}
    >
      <Text style={styles.wordText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Words</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={searchText}
        onChangeText={handleSearch}
      />
      {filteredWords.length > 0 && ( // Chỉ hiển thị FlatList khi có từ
        <FlatList
          data={filteredWords}
          renderItem={renderWord}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No results found</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  wordItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  wordText: {
    fontSize: 18,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default SearchScreen;
