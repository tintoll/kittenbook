var userName = prompt('Hello, what\'s your name?');

if(!userName) {
    userName = prompt('You didn\'t enter a name, what\'s your name?');
}
var phoneNumber = prompt('Hello '+ userName +', What\'s your phone number?');
var phoneNumberPattern = /1?-?\(?([0-9]{3})[\-\)][0-9]{3}-[0-9]{4}/;

//전화번호에서 캡쳐된 값얻기
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
var areaCode = phoneMatches[1];
var userLocation = areaCodes[areaCode];

var output = '<h1>Hello, '+userName+'!</h1>';

//폰번호가 정상적인가
if(phoneNumberPattern.test(phoneNumber)) {
    output = output + '<p>'+ projectName+ ' '+versionNumber+
        ' viewed on : '+currentTime + '</p>';

} else {
    output = output + '<h2> That phone number is invalid : '+phoneNumber;
}

document.body.innerHTML = output;