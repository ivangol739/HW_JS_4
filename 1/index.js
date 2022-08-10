function getPasswordChecker(password) {
    let truepass = password;
    return function passwordCheck(checkpass) {
        if (checkpass === truepass) {
            return true
        } else {
            return false
        }
    }
}

const checkPass = getPasswordChecker('1234')
console.log(checkPass('1234'))
console.log(checkPass('1233'))