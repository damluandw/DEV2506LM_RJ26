function checkBlank(val, id) {
    if (val == "" || val == null) {
        $(id).siblings('.err-blank').show();
    } else {
        $(id).siblings('.err-blank').hide();
    }
}

$('#submit').on('click', (e) => {
    // $('#form').on('submit',(e) => {
    // $('#form').submit((e) => {
    e.preventDefault();
    var name = $('#name').val()
    var email = $('#email').val()
    var phone = $('#phone').val()
    var content = $('#content').val()
    //kiểm tra họ tên có trống hay không

    checkBlank(name, "#name");


    //kiểm tra email có trống hay không 
    //và có đúng định dạng hay không
    checkBlank(email, "#email");
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
        $("#email").siblings('.err-email').hide();
    } else {
        $("#email").siblings('.err-email').show();
    }
    //kiểm tra số điện thoại có trống hay không 
    //và có đúng định dạng hay không
    checkBlank(phone, "#phone");
    var regexPhone = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;

    if (regexPhone.test(phone)) {
        $("#phone").siblings('.err-phone').hide();
    } else {
        $("#phone").siblings('.err-phone').show();
    }

    //kiểm tra nội dung có trống hay không
    checkBlank(content, "#content");
})

