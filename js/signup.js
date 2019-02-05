function login() {
    window.location.href = "login.html";
}

function signup() {
    var name = $("#name").val();
    var birthdayText = $("#birthday").val();
    var birthday = getDate(birthdayText);
    var address = $("#address").val();
    var phone = $("#phone").val();
    var parentPhone = $("#parent-phone").val();
    var gender = 0;
    if ($("#gender-female").prop("checked")) {
        gender = 1;
    }
    var graduateText = $("#graduate").val();
    var graduate = getDate(graduateText);
    var schoolName = $("#school-name").val();
    var schoolAddress = $("#school-address").val();
    var major = $("#major").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var course = 0;
    if ($("#course-2").prop("checked")) {
        course = 1;
    } else if ($("#course-3").prop("checked")) {
        course = 2;
    } else if ($("#course-4").prop("checked")) {
        course = 3;
    } else if ($("#course-5").prop("checked")) {
        course = 4;
    } else if ($("#course-6").prop("checked")) {
        course = 5;
    } else if ($("#course-7").prop("checked")) {
        course = 6;
    } else if ($("#course-8").prop("checked")) {
        course = 7;
    }
    if (name == "" || address == "" || phone == "" || parentPhone == "" || schoolName == "" || schoolAddress == "" || major == "" || email == "" || password == "") {
        show("Mohon isi semua data");
        return;
    }
    showLoadingDialog("Mendaftarkan...");
    $.ajax({
        type: 'GET',
        url: SERVER_URL+'signup.php',
        data: {'name': name, 'birthday': birthday, 'address': address, 'phone': phone, 'parent-phone': parentPhone, 'gender': gender, 'graduate': graduate, 'school-name': schoolName, 'school-address': schoolAddress, 'major': major, 'email': email, 'password': password, 'course': course},
        dataType: 'text',
        cache: false,
        success: function(a) {
            console.log(a);
            hideLoadingDialog();
            window.location.href = "profile.html";
        }
    });
}

function openDatePicker() {
    $("#birthday").datepicker();
}

function getDate(text) {
    var day = parseInt(text.split("-")[2]);
    var month = parseInt(text.split("-")[1])-1;
    var year = parseInt(text.split("-")[0]);
    var date = new Date();
    date.setDate(day);
    date.setMonth(month, day);
    date.setFullYear(year, month, day);
    var dateMillis = date.getTime();
    return dateMillis;
}