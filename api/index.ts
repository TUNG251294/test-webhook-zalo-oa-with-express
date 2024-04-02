const express = require("express");
const app = express();

app.use(express.json()); // Sử dụng middleware để phân tích cú pháp dữ liệu JSON

app.post('/webhook', (req, res) => {
  // Kiểm tra xem có nhận được POST request từ bên thứ ba không
  if (req.body) {
    // Xử lý logic tại đây khi nhận được POST request
    console.log('Nhận được POST request:');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    res.status(200).send('Đã nhận được POST request');
  } else {
    res.status(400).send('Không nhận được POST request');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});