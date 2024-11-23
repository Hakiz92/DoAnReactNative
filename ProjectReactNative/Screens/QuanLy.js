import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuanLy = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái hiển thị Modal
  const [selectedUserId, setSelectedUserId] = useState(null); // ID của người dùng cần xóa

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Bắt đầu trạng thái loading
      try {
        // Gửi yêu cầu GET đến API
        const response = await axios.get('http://localhost:4000/api/users');
        console.log("Response data:", response.data); // In ra dữ liệu nhận được từ API
        setUsers(response.data.users); // Cập nhật lại danh sách người dùng
      } catch (error) {
        console.error('Error fetching users:', error);
        alert("Có lỗi xảy ra trong quá trình lấy người dùng.");
      } finally {
        setLoading(false); // Kết thúc trạng thái loading
      }
    };

    fetchUsers();
  }, []); // Chỉ chạy 1 lần khi component load

  const handleUpdate = (userId) => {
    // Chuyển hướng đến màn hình cập nhật người dùng và truyền ID người dùng
    navigation.navigate('CapNhatUser', { userId });
  };

  const handleDelete = async () => {
    if (!selectedUserId) return;
    setLoading(true); // Bắt đầu trạng thái loading
    try {
      // Gửi yêu cầu DELETE đến API
      const response = await axios.delete(`http://localhost:4000/api/users/${selectedUserId}`);
      if (response.status === 200) {
        // Lọc lại danh sách người dùng sau khi xóa
        setUsers(users.filter(user => user.id !== selectedUserId));
        alert("Người dùng đã được xóa thành công!");
        setIsModalVisible(false); // Ẩn modal sau khi xóa thành công
      } else {
        alert("Không thể xóa người dùng.");
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Có lỗi xảy ra trong quá trình xóa người dùng.");
    } finally {
      setLoading(false); // Kết thúc trạng thái loading
    }
  };

  const confirmDelete = (userId) => {
    setSelectedUserId(userId); // Lưu ID người dùng cần xóa
    setIsModalVisible(true); // Hiển thị modal
  };

  return (
    <View style={styles.container}>
      {/* Biểu tượng mũi tên */}
      <View style={{ marginBottom: 20 }}>
        <Icon
          name='arrow-left'
          size={24}
          color="#000"
          onPress={() => { navigation.goBack() }}
        />
      </View>
      <Text style={styles.title}>Quản lý thông tin</Text>
      {/* Hiển thị danh sách người dùng */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.username}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleUpdate(item.id)}>
                <Text style={styles.updateButton}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {loading && <Text>Đang tải dữ liệu...</Text>}

      {/* Modal xác nhận xóa */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Xác nhận</Text>
            <Text>Bạn có chắc chắn muốn xóa người dùng này?</Text>
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Hủy</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleDelete}
              >
                <Text style={styles.confirmButtonText}>Đồng ý</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  updateButton: {
    color: 'blue',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  confirmButton: {
    backgroundColor: '#ff5252',
  },
  cancelButtonText: {
    color: '#000',
  },
  confirmButtonText: {
    color: '#fff',
  },
});

export default QuanLy;
