var statistics;

$(document).ready(function() {
    getStatistics();
    getProfileInfo();
});

function getProfileInfo() {
    $.ajax({
        type: 'GET',
        url: SERVER_URL+'get-user-info.php',
        dataType: 'text',
        cache: false,
        success: function(a) {
            if (a < 0) {
                // Error
            } else {
                var userInfo = JSON.parse(a);
                var name = userInfo["name"];
                if (name == "") {
                    name = "Nama tidak diketahui";
                }
                var nim = userInfo["nim"];
                if (nim == "") {
                    nim = "NIM tidak diketahui";
                }
                $("#name").html(name);
                $("#nim").html(nim);
            }
        }
    });
}

function getStatistics() {
    $.ajax({
        type: 'GET',
        url: SERVER_URL+'get-statistics.php',
        dataType: 'text',
        cache: false,
        success: function(a) {
            statistics = JSON.parse(a);
            displayStatistics(0);
        }
    });
}

function displayStatistics(index) {
    if (index >= statistics.length) {
        return;
    }
    var statistic = statistics[index];
    $.ajax({
        type: 'GET',
        url: SERVER_URL+'get-bab-name.php',
        data: {'bab-id': statistic["bab_id"]},
        dataType: 'text',
        cache: false,
        success: function(a) {
            var babName = a;
            if (babName.length > 10) {
                babName = babName.substr(0, 10);
            }
            $.ajax({
                type: 'GET',
                url: SERVER_URL+'get-question-count.php',
                data: {'bab-id': statistic["bab_id"]},
                dataType: 'text',
                cache: false,
                success: function(a) {
                    var questionCount = parseInt(a);
                    var correctQuestionsCount = statistic["correct_answers"];
                    var windowWidth = window.innerWidth;
                    var progress = questionCount*windowWidth/correctQuestionsCount;
                    if (progress == 0) {
                        progress = 10;
                    }
                    console.log("Question count: "+questionCount);
                    console.log("Correct count: "+correctQuestionsCount);
                    console.log("Window width: "+windowWidth);
                    console.log("Progress: "+progress);
                    var backgrounds = [
                        "linear-gradient(to right, #13c2e9, #f645fa)",
                        "linear-gradient(to right, #f12711, #f5ae19)",
                        "linear-gradient(to right, #825fc1, #2ebe91)",
                        "linear-gradient(to right, #01958b, #38ef7d)",
                        "linear-gradient(to right, #01958b, #38ef7d)",
                        "linear-gradient(to right, #1a2080, #26cfce)"
                    ];
                    var bgIndex = getRandomInt(0, backgrounds.length-1);
                    var background = backgrounds[bgIndex];
                    $("#statistics").append(""+
                        "<div style='width: calc(100% - 60px); margin-top: 5px; margin-left: 30px; margin-right: 30px; display: flex; flex-flow: row nowrap; height: 40px;'>" +
                            "<div style='width: 100px; display: flex; flex-flow: row nowrap; align-items: center;'>" +
                                "<div style='color: black; margin-left: 5px; margin-right: 5px;'>"+babName+"</div>"+
                            "</div>"+
                            "<div style='background-image: "+background+"; height: 100%; width: "+progress+"px;'></div>"+
                        "</div>"
                    );
                    displayStatistics(index+1);
                }
            });
        }
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function editProfile() {
    window.location.href = "edit-profile.html";
}

function showProfile() {
    $("#profile").css("display", "flex");
    $("#statistics-container").hide();
    $("#profile-tab").css("background-color", "#838483").css("color", "white");
    $("#statistics-tab").css("background-color", "white").css("color", "#444444");
}

function showStatistics() {
    $("#statistics-container").css("display", "flex");
    $("#profile").hide();
    $("#profile-tab").css("background-color", "white").css("color", "#444444");
    $("#statistics-tab").css("background-color", "#838483").css("color", "white");
}