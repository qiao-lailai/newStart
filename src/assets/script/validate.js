
/**
 * @desc 验证手机号
 * @param {string} phone
 * @return {Boolean}
 * */ 
export function validatePhone(phone){
    if(!phone) return false;
    const reg = /^[1][3-9][0-9]{9}$/;
    return reg.test(phone);
}


/**
 * @desc 验证固话
 * @param {string} telphone
 * @return {Boolean}
 * */ 
export function validateTelphone(telphone){
    if(!telphone) return false;
    const reg = /0\d{2,3}-\d{7,8}/;
    return reg.test(telphone);
}


/**
 * @desc 验证身份证 (最后一位大小写都可以)
 * @param {string} idCard
 * @return {Boolean}
 * */ 
export function validateIdCard(idCard){
    if(!idCard) return false;
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(idCard);
}


/**
 * @desc 验证邮箱
 * @param {string} email
 * @return {Boolean}
 * */ 
export function validateEmail(email){
    if(!email) return false;
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}


/**
 * @desc 验证中文
 * @param {string} value
 * @return {Boolean}
 * */ 
export function validateName(value){
    if(!value) return false;
    const reg = /^[\u0391-\uFFE5A-Za-z]+$/;
    return reg.test(value);
}


/**
 * @desc 验证字母和数字组合（必须是6-20位）
 * @param {string} value
 * @return {Boolean}
 * */ 
export function validateLetterAndNumber(value){
    if(!value) return false;
    const reg = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/;
    return reg.test(value);
}


