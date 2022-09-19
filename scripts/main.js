function send() {
    var arr = document.getElementsByTagName('input');
    var ten = arr[0].value;
    var ho = arr[1].value;
    var email = arr[2].value;
    var matKhau = arr[3].value;
    var check1 = arr[4].checked;
    var check2 = arr[5].checked;
    if (ten == '' || ho == '' || email == '' || matKhau == '') {
        alert('Vui lòng điền đầy đủ thông tin vào các mục');
        return;
    }
    if (check1 || check2) {

    } else { 
    alert('Đọc kỹ hai ô checkbox và chọn ít nhất một trong hai');
        return;
}
var choice = confirm('Cảm ơn thông tin của bạn');
if (choice == 1){
        alert('Đã gởi thông tin của bạn');

}
}