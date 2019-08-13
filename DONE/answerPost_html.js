// total 33 question
function answerResponse() {
    var response = { "responder": "", "start": "", "end":""};
    //response.responder的部分，是否要抓主程式的登陸識別號token或身份id?
    response.start = period_start(); // 反饋上傳時間
    let status;
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s1" + j).checked) {
            response.q1 = window.btoa(document.getElementById("s1" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s2" + j).checked) {
            response.q2 = window.btoa(document.getElementById("s2" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s3" + j).checked) {
            response.q3 = window.btoa(document.getElementById("s3" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s4" + j).checked) {
            response.q4 = window.btoa(document.getElementById("s4" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s5" + j).checked) {
            response.q5 = window.btoa(document.getElementById("s5" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s6" + j).checked) {
            response.q6 = window.btoa(document.getElementById("s6" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s7" + j).checked) {
            response.q7 = window.btoa(document.getElementById("s7" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s8" + j).checked) {
            response.q8 = window.btoa(document.getElementById("s8" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s9" + j).checked) {
            response.q9 = window.btoa(document.getElementById("s9" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s10" + j).checked) {
            response.q10 = window.btoa(document.getElementById("s10" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s11" + j).checked) {
            response.q11 = window.btoa(document.getElementById("s11" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s12" + j).checked) {
            response.q12 = window.btoa(document.getElementById("s12" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s13" + j).checked) {
            response.q13 = window.btoa(document.getElementById("s13" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s14" + j).checked) {
            response.q14 = window.btoa(document.getElementById("s14" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s15" + j).checked) {
            response.q15 = window.btoa(document.getElementById("s15" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s16" + j).checked) {
            response.q16 = window.btoa(document.getElementById("s16" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s17" + j).checked) {
            response.q17 = window.btoa(document.getElementById("s17" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s18" + j).checked) {
            response.q18 = window.btoa(document.getElementById("s18" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s19" + j).checked) {
            response.q19 = window.btoa(document.getElementById("s19" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    status = false;
    for (var j = 1; j < 6; j++) {
        if (document.getElementById("s20" + j).checked) {
            response.q20 = window.btoa(document.getElementById("s20" + j).value);
            status = true;
        }
    }
    if (status == false) {
        alert("未完成");
        return 0;
    }
    response.end = period_start();
    var myJSON = JSON.stringify(response);
    alert(myJSON);
    HTTPPostData("Post.aspx?id=answerResponse", myJSON);
}

function period_start() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date = today.getDate();
    month = today.getMonth() + 1;
    date = checkTime(date);
    month = checkTime(month);
    year = today.getFullYear();
    dateString = year + "-" + month + "-" + date + "T" + h + ":" + m + ":" + s + ".000Z";
    //document.getElementById('start_time').value = dateString;
    alert(dateString);
    return dateString;
}

function checkTime(i) {
    if (i < 10)
        i = "0" + i;  // add zero in front of numbers < 10
    return i;
} // end function