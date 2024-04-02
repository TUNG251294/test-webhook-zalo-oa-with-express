const path = require('path');

const express = require("express");
const app = express();

app.use(express.json()); // Sử dụng middleware để phân tích cú pháp dữ liệu JSON
// Đặt công cụ template engine là EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index"); // Render tệp HTML sử dụng EJS
});
app.post('/test-webhook-zalo-oa-with-express.vercel.app/', (req, res) => {
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