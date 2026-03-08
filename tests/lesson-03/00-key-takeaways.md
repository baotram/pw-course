1. GIT
*Undo
- thay đổi commit mới nhất: git commit --amend -m"feat: correct comment"
- chuyển file từ vùng staging sang vùng working: git restored --staged <file>
- chuyển tất cả file từ vùng staging sang vùng working: git restored -- staged .
- chuyển file từ vùng commit cuối sang vùng stage: git reset --soft HEAD~1
- chuyển file từ vùng commit cuối sang vùng working: git reset HEAD~1
Note: commit đầu tiên không thể bị reset, chỉ có thể xoá file .git rồi commit lại 
*Branching
- xem list branch: git branch
- tạo nhánh mới: git branch <branch_name>
- switch nhánh: git checkout <branch_name>
- tạo nhánh mới + switch nhánh luôn: git checkout -b <branch_name>
- delete nhánh (phải đứng ở nhánh khác): git branch -d <branch_name>
- push nhánh lên repo online: git push origin <branch_name>
- delete nhánh online: git push -d origin <branch_name>
*.gitignore
- chỉ định file và thư mục nào không được theo dõi (untracked)

2. JavaScript:
- câu điều kiện 
if (<điều kiện>) {
// code...
}
- vòng lặp:
 for (<khởi tạo>;<điều kiện lặp>;<cập nhật>){
    //code
 }

 khởi tạo: chạy 1 lần duy nhất khi vòng lặp bắt đầu
 điều kiện lặp: nếu đúng thì chạy lệnh tiếp, không thì dừng
 cập nhật: chạy cuối mỗi vòng lặp