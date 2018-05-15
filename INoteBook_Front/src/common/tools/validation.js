let isNotNull= function (val) {
  let flag = false;
  if(val) {
    flag = true;
  }
  return flag;
};

let isMail = function () {

};

let isPhoneNum = function () {

};

let isPassword = function (val) {
  let flag = false;
  var reg = new RegExp("^(?![\\\\d]+$)(?![a-zA-Z]+$)(?![^\\\\da-zA-Z]+$).{6,20}$");
  if(reg.test(val)) {
    flag = true;
  }
  return flag;
};

export default {
  isNotNull,
  isMail,
  isPhoneNum,
  isPassword
}
