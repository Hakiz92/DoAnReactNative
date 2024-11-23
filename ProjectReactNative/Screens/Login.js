import React, { useState, useContext } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../Screens/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Thêm trạng thái loading
    const navigation = useNavigation();
    const { setUser } = useContext(UserContext); // Lấy setUser từ UserContext

    const handleLogin = async () => {
        if (!username || !password) {
            alert('Please fill all fields.');
            return;
        }

        setLoading(true); // Bắt đầu hiển thị spinner

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            
            // Kiểm tra nếu response trả về đúng
            if (response.ok) {
                console.log(data); // In dữ liệu trả về từ API để kiểm tra

                setUser({
                    username: data.username,  // Đảm bảo dữ liệu trả về có username
                    avatar: data.avatar,      // Đảm bảo dữ liệu trả về có avatar
                    role: data.role,          // Đảm bảo dữ liệu trả về có role
                });

                // Điều hướng dựa vào role
                if (data.role === 'admin') {
                    navigation.navigate("BottomTabNavigator", { username: data.username, avatar: data.avatar });
                } else {
                    navigation.navigate("BottomTabNavigator", { username: data.username, avatar: data.avatar });
                }

                setUsername(""); // Reset giá trị
                setPassword(""); // Reset giá trị
            } else {
                alert(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        } finally {
            setLoading(false); // Kết thúc hiển thị spinner
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginBottom: 20 }}>
                <Image source={require("../assets/Image20.png")} style={{ height: 200, width: '100%' }} />
                <Icon
                    name='arrow-left'
                    size={24}
                    color="#000"
                    onPress={() => { navigation.navigate("LaunchScreen") }}
                    style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}
                />
            </View>

            <View style={{ padding: 20 }}>
                <View style={{ marginBottom: 40 }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>
                        Welcome
                    </Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                        <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your username"
                            style={{ flex: 1 }}
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                        <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry
                            style={{ flex: 1 }}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="blue" />
                ) : (
                    <TouchableOpacity
                        style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                        onPress={handleLogin}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        You don't have an account? Sign Up Here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
