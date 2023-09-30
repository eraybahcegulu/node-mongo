const express = require ('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.json()); 

app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/ChatApp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB bağlantı hatası'));
db.once('open', function () {
    console.log('MongoDB bağlantısı başarılı');
});

const messageSchema = new mongoose.Schema({
    content: String,
    sender : String,
    timestamp: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    password: String,
    name: String,
    surname: String,
    messages: [messageSchema],
},{ collection: 'users' });

const User = mongoose.model('User', userSchema);

const addUserMessage = async (email, messageContent, messageSender) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Kullanıcı bulunamadı.');
            return;
        }
        user.messages.push({ content: messageContent, sender: messageSender});
        await user.save();
        console.log('Mesaj başarıyla eklendi.');
    } catch (error) {
        console.error('Hata:', error.message);
    }
};

app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'public/css')));

app.set('views', path.join(__dirname, 'public/views'));
app.use(express.static(path.join(__dirname, 'public/views')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'public/html', 'login.html'));
})

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname,'public/html', 'register.html'));
})

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname,'public/views', 'home.ejs'));
})

app.post('/register', async (req, res) => {
    try {
        const { email, password, name, surname} = req.body;

        const newUser = new User({
            email: email,
            password: password,
            name: name,
            surname: surname,

        });

        await newUser.save();

        const successMessage = 'Kayıt başarılı';
        res.render('register', { success: successMessage, error: undefined });
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            const errorMessage = 'Bu email zaten kayıtlı';
            res.render('register', { error: errorMessage, success: undefined });
        } else {
            const errorMessage = 'Hata';
            res.render('register', { error: errorMessage, success: undefined });
        }
    }
});

app.post('/home', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password });

        if (user) {
            const users = await User.find();
            res.render('home', { user ,users });

        } else {
            const errorMessage = 'Email veya şifre yanlış';
            res.render('login', { error: errorMessage, success: undefined });
        }
    } catch (err) {
        console.error(err);
        const errorMessage = 'Giriş sırasında bir hata oluştu';
        res.render('login', { error: errorMessage });
    }
});

app.post('/sendMessage', (req, res) => {
    const selectedEmail = req.body.selectedEmail;
    const selectedMessage = req.body.selectedMessage;
    const userLoggedInEmail = req.body.userLoggedInEmail;

    addUserMessage(selectedEmail , selectedMessage, userLoggedInEmail);

    const successMessage = 'Mesaj gönderildi';
    res.json({ success: successMessage });
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
  });

