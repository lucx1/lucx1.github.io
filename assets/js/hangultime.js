var d2 = new Date();
var koreantime = new Array();
var twodigityear = 0;
cktd();
var firsttimeout = 1000 - d2.getMilliseconds();
setTimeout(cktd, firsttimeout);
window.setInterval(cktd, 1000);
function cktd() {
	var d = new Date();
	if (d.getHours() < 12) {
		koreantime[0] = "오전 ";
	} else {
		koreantime[0] = "오후 ";
	}
	if (d.getHours() == 1 || d.getHours() == 13) {
		koreantime[1] = "한시 ";
	} else if (d.getHours() == 2 || d.getHours() == 14) {
		koreantime[1] = "둘시 ";
	} else if (d.getHours() == 3 || d.getHours() == 15) {
		koreantime[1] = "셋시 ";
	} else if (d.getHours() == 4 || d.getHours() == 16) {
		koreantime[1] = "넷시 ";
	} else if (d.getHours() == 5 || d.getHours() == 17) {
		koreantime[1] = "다섯시 ";
	} else if (d.getHours() == 6 || d.getHours() == 18) {
		koreantime[1] = "여섯시 ";
	} else if (d.getHours() == 7 || d.getHours() == 19) {
		koreantime[1] = "일곱시 ";
	} else if (d.getHours() == 8 || d.getHours() == 20) {
		koreantime[1] = "여덟시 ";
	} else if (d.getHours() == 9 || d.getHours() == 21) {
		koreantime[1] = "아홉시 ";
	} else if (d.getHours() == 10 || d.getHours() == 22) {
		koreantime[1] = "열시 ";
	} else if (d.getHours() == 11 || d.getHours() == 23) {
		koreantime[1] = "열한시 ";
	} else if (d.getHours() == 12 || d.getHours() == 0) {
		koreantime[1] = "열둘시 ";
	}
	if (d.getMinutes() == 0) {
		koreantime[2] = "";
	} else {
		koreantime[2] = sinonumpt1(d.getMinutes()) + "분 ";
	}
	if (d.getSeconds() == 0) {
		koreantime[3] = "";
	} else {
		koreantime[3] = sinonumpt1(d.getSeconds()) + "초 ";
	}
	if (d.getFullYear() >= 2200) {
		koreantime[4] = "이천이백"
	} else if (d.getFullYear() >= 2100) {
		koreantime[4] = "이천일백"
	} else if (d.getFullYear() >= 2000) {
		koreantime[4] = "이천"
	} else {
		alert("Check your system time! I was returned a date before 2000...");
	}
	twodigityear = d.getFullYear();
	do {
		twodigityear = twodigityear - 100;
	} while (twodigityear > 99);
	if (twodigityear == 0) {
		koreantime[4] = koreantime[4] + "년 ";
	} else {
		koreantime[4] = koreantime[4] + sinonumpt1(twodigityear) + "년 ";
	}
	koreantime[5] = sinonumpt1(d.getMonth() + 1) + "월 ";
	koreantime[6] = sinonumpt1(d.getDate()) + "일 ";
	if (d.getDay() == 0) {
		koreantime[7] = "일요일 ";
	} else if (d.getDay() == 1) {
		koreantime[7] = "월요일 ";
	} else if (d.getDay() == 2) {
		koreantime[7] = "화요일 ";
	} else if (d.getDay() == 3) {
		koreantime[7] = "수요일 ";
	} else if (d.getDay() == 4) {
		koreantime[7] = "목요일 ";
	} else if (d.getDay() == 5) {
		koreantime[7] = "금요일 ";
	} else if (d.getDay() == 6) {
		koreantime[7] = "토요일 ";
	}
	document.getElementById("koreandt").innerHTML = "오늘은 " + koreantime[4] + koreantime[5] + koreantime[6] + koreantime[7] + "입니다.<br>지금은 " + koreantime[0] + koreantime[1] + koreantime[2] + koreantime[3] + "입니다.";
}
function sinonumpt1(x) {
	if (x < 10) {
		return sinonumpt2(x);
	} else {
		if (x.toString().charAt(0) == "1") {
			if (x.toString().charAt(1) == "0") {
				return "십";
			} else {
				return "십" + sinonumpt2(parseInt(x.toString().charAt(1)));
			}
		} else {
			if (x.toString().charAt(1) == "0") {
				return sinonumpt2(parseInt(x.toString().charAt(0))) + "십";
			} else {
				return sinonumpt2(parseInt(x.toString().charAt(0))) + "십" + sinonumpt2(parseInt(x.toString().charAt(1)));
			}
		}
	}
}
function sinonumpt2(y) {
	if (y == 1) {
		return "일";
	} else if (y == 2) {
		return "이";
	} else if (y == 3) {
		return "삼";
	} else if (y == 4) {
		return "사";
	} else if (y == 5) {
		return "오";
	} else if (y == 6) {
		return "육";
	} else if (y == 7) {
		return "칠";
	} else if (y == 8) {
		return "팔";
	} else if (y == 9) {
		return "구";
	}
}
