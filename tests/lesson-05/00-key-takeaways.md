****** DOM - Document object model ****** 
- Một website ta nhìn thấy dưới dạng: các khối text, hình ảnh, liên kết, ô input,... 
- Máy tính sẽ nhìn ở dưới dạng cây có cấu trúc
- Ví dụ về thẻ:
    <option>United States</option>
    <img src="image.jpg" alt="Image description"/>
Trong đó với thẻ sau <option value="usa">United States</option>
    <option>: thẻ mở
    </option>: thẻ đóng
    value="usa" : attribute và value
    United States: text
 * Các thẻ tiêu chuẩn thường gặp:
    1. Thẻ Cấu Trúc khung trang
    2. Thẻ Bố Cục & Ngữ nghĩa
● <div>: Khối/container chung
● <header>, <footer>, <nav>
● <section>: Thẻ ngữ nghĩa
    3. Thẻ Nội Dung:
● <h1> đến <h6>: Tiêu đề
● <paragraph>: Đoạn văn
● <ul>, <ol>, <li>: Danh sách (ul: un-order list; ol: order list)
    4. Thẻ Tương Tác & Media:
● <a>: Liên kết
● <img>: Hình ảnh
    5. Thẻ Form (Quan trọng cho Testing):
● <form>: Biểu mẫu
● <input>: Ô nhập liệu (text, password,checkbox, radio, etc.)
● <button>: Nút bấm
● <select> và <option>: Dropdown
● <textarea>: Vùng văn bản nhiều dòng

****** Selector ****** 
- Automation = tương tác các phần tử trên trang web (input, fill, click,...) -> Selector là công cụ giúp ta tìm các phần tử để tương tác được.
- 3 loại selector thường dùng: 
● XPath
    ○ Dùng được trong hầu hết các trường hợp (99.99%)
    ○ Đa dạng, có khả năng tìm các phần tử khó
    ○ Hơi dài
    ○ VD: //button[normalize-space() = ‘Add to cart’]   
● CSS selector
    ○ Ngắn gọn, performance cao
    ○ Dùng cho các trường hợp dễ tìm.
    ○ Không linh hoạt bằng XPath
    ○ VD: .add-to-cart
● Playwright selector
    ○ Chỉ dùng riêng cho Playwright
    ○ Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
    ○ Hướng tới “giống người dùng đang nhìn thấy gì”
    ○ VD: page.getByText(“Add to cart”);
Thứ tự ưu tiên: Playwright selector > CSS Selector > XPath

* XPath selector:
● XPath = XML Path
● Có 2 loại:
    ○ Tuyệt đối: đi dọc theo cây DOM bắt đầu bởi 1 /
        - Bắt đầu từ root (gốc), dùng dấu / (Ví dụ: /html/body/div/input)
        - Phải viết đầy đủ đường dẫn từ root
        - Dễ bị lỗi khi cấu trúc HTML thay đổi
        - Ít linh hoạt
    ○ Tương đối: tìm dựa vào đặc tính bắt đầu bởi 2 //
        - Bắt đầu từ bất kỳ đâu trong DOM, dùng //(Ví dụ: //input[@id=’user’])
        - Bắt đầu bằng //
        - Tìm element ở bất kỳ vị trí nào
        - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
        - Nên dùng trong thực tế


****** Playwright basic syntax ****** 
- Cách tương tác với các phần tử
- Viết một test
- Tổ chứ thành các step
- Tương tác cơ bản: Navigation, Fill, Click

● test: Đơn vị cơ bản để khai báo một test
test('<tên test>', async ({ page }) => {
// Code của test
});

● step: Đơn vị nhỏ hơn test, để khai báo từng step của test case

await test.step('Tên step', async () => {
// Code here
});

------

test('<tên test>', async ({ page }) => {
await test.step('Tên step', async () => {
// Code here
});
});

* Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.
● Navigate
await page.goto('https://pw-practice.playwrightvn.com/');
● Locate
Sử dụng page.locator(“<selector>”) để chọn phần tử trên trang
VD: page.locator(“//input[@id=’email’]”)
● Click
- Single click: await page.locator("//button").click();
- Double click: await page.locator("//button").dblclick();

- Click chuột phải: 
page.locator("//button").click({
    button: 'right'
})

-Click chuột kèm bấm phím khác
page.locator("").click({
    modifiers: ['Shift'],
})

● Input
- fill: Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');
- pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright Viet Nam', {
delay: 100,});

● Radio/checkbox
- Lấy giá trị hiện tại đang là check hay không:
const isChecked =
page.locator("//input").isChecked();
- Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);

● Select
- await page.locator('//select[@id=”country”]').selectOption({label: 'USA' })

● Upload file
- await page.locator("//input[@id='profile']").setInputFile("<file-path>");

