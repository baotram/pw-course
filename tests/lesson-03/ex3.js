const console = require("node:console");
// a. Lặp từ 1 tới 100
console.log("a. Lặp từ 1 tới 100");

for (var i = 0; i < 100; i++) {
    console.log(i);
}

// b. Trong mỗi vòng lặp, in ra: số chẵn, lẻ
console.log("b. Trong mỗi vòng lặp, in ra: số chẵn, lẻ");
for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log("Số ", i, "là số chẵn");
    } else console.log("Số ", i, "là số lẻ");
}