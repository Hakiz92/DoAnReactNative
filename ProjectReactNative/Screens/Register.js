import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);  // Trạng thái checkbox
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(''); // State cho link ảnh
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    const handleRegister = async () => {
        console.log(email);  // Kiểm tra email nhập vào console
        if (!validateEmail(email)) {
            alert('Invalid email format', 'Please enter a valid email address.');
            return;
        }

        if (user && email && password && avatar && isChecked) { // Kiểm tra điều kiện
            try {
                const response = await fetch('http://localhost:4000/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: user, email, password, avatar }), // Bao gồm avatar
                });

                const data = await response.json();

                if (response.ok) {
                    console.log(data);
                    navigation.navigate("AudioListingScreen", { avatar }); // Pass avatar URL
                    alert("Register successfully!");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to register. Please try again.');
            }
        } else {
            alert('Please fill all fields and agree to the terms.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Biểu tượng mũi tên */}
            <View style={styles.arrowIcon}>
                <Icon
                    name='arrow-left'
                    size={24}
                    color="#000"
                    onPress={() => { navigation.navigate("Login") }}
                />
            </View>

            {/* Hình ảnh và văn bản chào mừng */}
            <View style={styles.welcomeContainer}>
                <Image
                    source={require('../assets/Image 19.png')}
                    style={styles.welcomeImage}
                />
                <Text style={styles.welcomeText}>
                    Nice to see you
                </Text>
                <Text style={styles.createAccountText}>
                    Create your account
                </Text>
            </View>

            {/* Form */}
            <View>
                {/* Input cho username với icon */}
                <View style={styles.inputContainer}>
                    <Icon name="user" size={20} color="gray" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your username"
                        style={styles.input}
                        value={user}
                        onChangeText={setUser}
                    />
                </View>

                {/* Input cho email */}
                <View style={styles.inputContainer}>
                    <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Input cho password */}
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="gray" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* Input cho link ảnh */}
                <View style={styles.inputContainer}>
                    <Icon name="image" size={20} color="gray" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your avatar link"
                        style={styles.input}
                        value={avatar}
                        onChangeText={setAvatar}
                    />
                </View>
            </View>

            {/* Checkbox và điều khoản */}
            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={styles.checkboxText}>
                    I agree with <Text style={styles.termsText}>Terms & Conditions</Text>
                </Text>
            </View>

            {/* Nút Continue */}
            <View>
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleRegister}
                >
                    <Text style={styles.continueButtonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    arrowIcon: {
        marginBottom: 20,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    welcomeImage: {
        width: 100,
        height: 100,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    createAccountText: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    checkboxText: {
        marginLeft: 10,
    },
    termsText: {
        color: '#ED6263',
        textDecorationLine: 'underline',
    },
    continueButton: {
        width: '94%',
        marginLeft: 16,
        marginTop: 11,
        backgroundColor: 'rgb(34, 200, 247)',
        paddingVertical: 11,
        borderRadius: 20,
    },
    continueButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Register;