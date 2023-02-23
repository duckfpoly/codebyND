mở terminal hoặc cmd lên kiểm tra xem npm đã cài chưa bằng cách gõ câu lệnh "npm -v" 
( nếu cài rồi thì bỏ qua và chuyển đến dòng 5 )
nếu chưa cài thì truy cập https://nodejs.org/en/download/ tải xuống và cài đặt 
sau khi cài xong
mở terminal gõ "npm init"
tạo file db.json
tạo sẵn dữ liệu trong db.json: 
{
  "products": [
    {
      "id": 1, 
      "name": "Product 1",
      "price": 1000
    }
  ]
}
copy "start": "json-server --watch db.json" vào phần "scripts" trong file package.json
mở terminal và chạy "npm i json-server" 
sau khi chạy xong câu lệnh trên thì chạy tiếp "npm start" 
=> mở link api trong trình duyệt http://localhost:3000/products
* Lưu ý:
  - Thực hiện trong folder project đang thao tác
  - Trong file db.json tên mảng như nào thì trên url ghi như vậy !


****************************************************************

- Thực hiện lấy toàn bộ dữ liệu
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((response) => {});

- Thực hiện thêm dữ liệu
const data = {
  name: document.querySelector("#name").value,
  price: document.querySelector("#price").value,
};
fetch("http://localhost:3000/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

- Thực hiện sửa dữ liệu
const data = {
  name: document.querySelector("#name").value,
  price: document.querySelector("#price").value,
};
fetch(`http://localhost:3000/products/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

- Thực hiện xoá dữ liệu
fetch(`http://localhost:3000/products/${id}`, {
  method: "DELETE",
});