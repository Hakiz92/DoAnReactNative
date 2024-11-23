const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Kết nối cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sapassword',
    database: 'users',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Đăng ký người dùng
app.post('/api/register', (req, res) => {
    const { username, email, password, avatar, role = 'user' } = req.body;

    const sql = 'INSERT INTO users (username, email, password, avatar, role) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [username, email, password, avatar, role], (err, results) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'Username or email already exists' });
            }
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    });
});

// Đăng nhập người dùng
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT id, username, role, avatar FROM users WHERE username = ? AND password = ?';

    connection.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length > 0) {
            const user = results[0];
            res.json({
                userId: user.id,
                username: user.username,
                role: user.role,
                avatar: user.avatar,
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

// Lấy danh sách người dùng (trừ admin)
app.get('/api/users', (req, res) => {
    const sql = 'SELECT id, username, email, avatar, role FROM users WHERE role != "admin"';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json({ users: results });
    });
});
// Lấy thông tin người dùng theo ID
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT id, username, email, avatar, role FROM users WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length > 0) {
            res.json({ user: results[0] });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

//update
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, avatar } = req.body;
    const sql = "UPDATE users SET username = ?, email = ?, avatar = ? WHERE id = ?";
    connection.query(sql, [username, email, avatar, id], function (err, results) {
        if (err) {
            console.error('Error updating user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json({ message: 'User updated successfully' });
    });
});


// Xóa người dùng (không kiểm tra quyền admin)
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    });
});

// Khởi động server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
