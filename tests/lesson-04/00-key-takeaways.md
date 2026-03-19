1. Array - là kiểu dữ liệu để lưu trữ một danh sách có thứ tự các giá trị:

* Array giống như một danh sách đánh số - mỗi phần tử có index bắt đầu từ 0

* Khai báo:
- Cách 1: Array literal 
let traiCay = ["Xoài","Cam","Táo"];
let hocSinh = []; 
let diemSo = [8, 9, 6.5];

- Cách 2: new Array ()
let traiCay = new Array["Xoài","Cam","Táo"];
+ Thực tế: Cách 1 (Array Literal) được dùng gần như 100% vì ngắn gọn hơn.

+ Array có thể chưa nhiều kiểu dữ liệu khác nhau
let honHop = ["Lan", 22, true, null, { lop: "WEB01" }];
-> Hợp lệ nhưng trong thực tế nên giữ các phần tử cùng kiểu để dễ xử lý

* Truy xuất dữ liệu trong Array:
- Lấy phần tử theo index:
    let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
    console.log(monHoc[0]); // "Toán" — phần tử đầu tiên
    console.log(monHoc[2]); // "Hoá" — phần tử thứ 3
    console.log(monHoc[4]); // "Tin" — phần tử cuối cùng
    console.log(monHoc[5]); // undefined — không tồn tại
- Lấy phần tử cuối cùng:
    let cuoi = monHoc[monHoc.length - 1];

- Đếm số phần tử:
    console.log(monHoc.length); // 5

- Gán giá trị theo index:
monHoc[1] = "Vật lý";
console.log(monHoc); // ["Toán", "Vật lý", "Hoá", "Anh", "Tin"]

* Thêm xoá phần tử
Thêm cuối: .push(argument) → cuối mảng
Xoá cuối: .pop() ← cuối mảng
Thêm đầu: .unshift(argument) → đầu mảng
Xoá đầu: .shift() ← đầu mảng

* Kết hợp array với vòng lặp


2. Function - khối lệnh được đặt tên, có thẻ gọi lại nhiều lần mà không cần viết lại code
function tenHam(){
// các dòng lệnh bên trong
}

* Quy tắc đặt tên hàm:
camelCase: tinhTong, layDuLieu,..
nên bắt đầu bằng động từ diển tả hành động mà hàm thực hiện
* Gọi hàm: tên hàm + ()
Ví dụ: 
function veDuong() {
console.log("──────────");
}

veDuong();
console.log("Phần 1: Giới thiệu");
veDuong();
console.log("Phần 2: Nội dung");
veDuong();

Kết quả:
──────────
Phần 1: Giới thiệu
──────────
Phần 2: Nội dung
──────────

* Function với tham số:
function chao(ten) {
    console.log("Xin chao " + ten + "!");
}

chao("Lan"); // "Xin chào Lan!"
chao("Minh"); // "Xin chào Minh!"
chao("Hoa"); // "Xin chào Hoa!"

- Parameter và Argument: 
Parameter: tên biến đặt trong () function
Argument: gía trị thật khi gọi function đăt trong ()

- Nhiều tham số

function gioiThieu(ten, tuoi) {
    console.log("Xin chao toi la " + ten + ", toi " + tuoi + " tuoi!");
}

gioiThieu("Lan, 20); // "Xin chào toi la Lan, toi 20 tuoi!"

- Nếu thiếu argument -> undefined

* Function có gía trị trả về: return
- Không có return - chỉ "làm"
- Có return - làm xong trả kết quả
-----> ví dụ: 
function tinhTong(a, b) {
return a + b; // trả kết quả về cho nơi gọi
}
let ketQua = tinhTong(3, 5);
console.log(ketQua); // 8

// Dùng trực tiếp trong biểu thức
console.log(tinhTong(10, 20) * 2); // 60
- return - dừng hàm ngay lập tức
-----> ví dụ: 
function kiemTraTuoi(tuoi) {
if (tuoi < 0) {
return "Tuổi không hợp lệ"; // dừng hàm tại đây
}
return "Tuổi của bạn là " + tuoi;
}
console.log(kiemTraTuoi(-5)); // "Tuổi không hợp lệ"
console.log(kiemTraTuoi(20)); // "Tuổi của bạn là 20"

3. Object là kiểu dữ liệu để lưu trữ một tập hợp key-value
Object giống như một hồ sơ - mỗi mục trong hồ sơ có tên (key)và nội dung (value)
   Ví dụ: 
   let sinhVien = {
hoTen: "Nguyễn Văn A",
tuoi: 20,
lop: "WEB01"
};
* Khai báo
- C1: Object Literal (phổ biến nhất)
let xe = {
hang: "Toyota",
mau: "Trắng",
namSanXuat: 2023
};
- C2: new Object()
let xe = new Object();
xe.hang = "Toyota";
xe.mau = "Trắng";
xe.namSanXuat = 2023;

Note: quy tắc đặt tên key
- key không cần đặt trong "" nếu không có dấu cách or ký tự đặc biệt
- key có dấu cách hoặc có ký tự đặc biệt phải đặt trong ""

* Truy xuất dữ liệu trong object
C1: Dot notation
let sinhVien = {hoTen: "Lan", tuoi: 20};
console.log(sinhVien.hoTen); // "Lan"
console.log(sinhVien.tuoi); // 22

C2: Bracket notation
console.log(sinhVien["hoTen"]); // "Lan"

Note: dùng bracket notation khi key có dấu cách hoặc ký tự đặc biệt hoặc key là biến

VD: let obj = { "full name": "Lan" };
console.log(obj["full name"]);

VD2: let keyName = "hoTen";
console.log(sinhVien[keyName]); // "Lan"

* Gán gía trị cho object:

