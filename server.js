// node.js v18.12.1
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 공개 폴더 설정
// * public > css 접근 시 '/css/style.css'
app.use(express.static(path.resolve(__dirname, 'public')));
// * 가상경로 지정할 경우
// app.use('/static', express.static(path.resolve(__dirname, 'public', 'static')));

// 루트 폴더 및 시작페이지 설정
app.get('/*', (req, res) => res.sendFile(path.resolve('public', 'index.html')));

// 서버 구동 -------------------------
app.listen(port, () => console.log('Server running 3000 port...'));
