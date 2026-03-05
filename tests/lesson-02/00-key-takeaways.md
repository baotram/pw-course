1. Git 
    - Viết bởi Linux Torvalds
    - là DVCS (Distributed version control system) lớn nhất thế giới
    - là một phần mềm cài trên máy local, sử dụng command line tool, công cụ quản lý phiên bản, đưa file vào git repository
    - phân biệt với GITLab, BitBucket, GitHub copilot : đây là dịch vụ online (hoạt động bằng host trên website) dùng để đưa code repository từ máy local lên lưu trữ và quản lý phiên bản
    - Three states of GIT:
        + Working directory: sau khi git init, mỗi một tạo file hay change file sẽ đi vào vùng làm việc
                             tạo repo github để liên kết với repo local (git remote add origin <url>)
        + Staging area: dùng câu lệnh git add để đưa code từ working directory vào vùng đệm
        + Repository: dùng câu lện git commit -m "" và git push origin main để đẩy code từ vùng staging sang repository

    - Git cấu hình:
        Trước khi commit cần đưa ra định danh bằng cách config user.name, user.email
            git config --global user.name "tram"
            git config --global user.mail "baotram11496@gmail.com"
            -> Hai lệnh này để đặt mặc định cho toàn bộ repository
            git config user.name "abc"
            git config user.email "abc123@gmail.com"
            -> Hai lệnh này phải gõ tại terminal của repo đó

    - Một số câu lệnh
            git status: xem trạng thái file (file xanh là đã ở staging, file đỏ là chưa)
            git log: kiểm tra danh sách commit

    - Git convention:
        <type> : <short_description>
        type: + chore: sửa file nhỏ lẻ, xoá file không dùng tới, chính tả...
              + feat: thêm tính năng mới test case mới
              + fix: sửa lỗi 1 test trước đó

        short_ description: mô tả ngắn gọn (50 ký tự) không dấu

    =>>> GIT simple flow:
    - Dùng global config: GIT init -> GIT config user -> GIT add -> GIT commit -> GIT push
    - Không dùng global config: GIT init -> GIT add -> GIT commit -> GIT push

2. JavaScript basic
    - Giúp browser hoạt động được (các chuyển động)
    - Bình thường JS hoạt động được do Browser engine support
    - Khi chạy trên máy tính thì cần NodeJS
    - JavaScript Hello,World!
        + console.log "Hello,World!" trên file 01-hello.js
        + chạy và quan sát kq: node <đường dẫn tới file>/01-hello.js

    - JavaScript basic:
        + comment: // , /* <đoạn code> */
        + variable: let <variable name> = <value>
        + constant: const <constant name> = <value>
        + data type: 8 types
            - primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
            - reference type: Object

            - Number: Số nguyên, Số thực, Vô hạn, Không phải số
            - String: "", '', ``
            - Boolean: true, false

            - typeof <variable> để trả ra biến có kiểu dữ liệu gì

        + Operators: 
            - Comparison Operators: 
                ● So sánh bằng == và === (== ép kiểu dữ liệu sau đó mới so sánh)
                ● So sánh không bằng != và !=== (!= ép kiểu dữ liệu sau đó mới so sánh)
                ● So sánh lớn hơn, nhỏ hơn: >, < , >=, <=

            - Logic  Operators: 
                ● && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
                ● || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

            - Unary Operators: prefix(tăng trước rồi trả về) and postfix(trả trước rồi tăng)

            - Mathematical Operators: +, -, *, /




        


