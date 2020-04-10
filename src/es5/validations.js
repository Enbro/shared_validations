"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceDecimalLength = exports.vatEnterprise = exports.vatStartEnterprise = exports.vat0 = exports.vat9Numbers = exports.vatStartBe0 = exports.zipMinimum = exports.zipLimit = exports.numberWhole = exports.numberDecimal = exports.numberMinus = exports.numberDot = exports.numberMinimum = exports.numberMaximum = exports.numberPrecision = exports.ean = exports.alias = exports.passwordIncludesNumbers = exports.passwordIncludesUpcase = exports.passwordIncludesDowncase = exports.passwordMaximumLength = exports.passwordMinimumLength = exports.passwordCharacters = exports.password = exports.domainLength = exports.domainCharacters = exports.phoneNoLetters = exports.phoneOnlyNumbers = exports.phoneBelgiumPrefix = exports.phonePlus = exports.phoneMaximumLength = exports.phoneMinimumLength = exports.email = exports.name = exports.required = exports.string = void 0;

var string = function string(v) {
  return typeof v === 'string' && v.length <= 255;
};

exports.string = string;

var required = function required(v) {
  return !(typeof v === 'string' && v.trim() === '') && v !== undefined && v !== null;
};

exports.required = required;

var name = function name(v) {
  return /^(?=.*[-a-zA-Zа-яА-Я\u00C0-\u017FA])[-a-zA-Zа-яА-Я\u00C0-\u017FA ]+$/.test(v);
};

exports.name = name;

var email = function email(v) {
  return /^[a-zA-Zа-яА-Я0-9.!#$%&’*+/=?^_`{|}~-]+@(?:[a-zA-Zа-яА-Я0-9-]+\.)+[a-zA-Zа-яА-Я0-9-]{2,63}$/.test(v);
};

exports.email = email;

var phoneMinimumLength = function phoneMinimumLength(phone) {
  if (/^04/.test(phone)) {
    return phone.length >= 10;
  } else if (/^0/.test(phone)) {
    return phone.length >= 9;
  } else if (/^\+324/.test(phone)) {
    return phone.length >= 12;
  } else if (/^\+32/.test(phone)) {
    return phone.length >= 11;
  } else {
    return phone.length >= 11;
  }
};

exports.phoneMinimumLength = phoneMinimumLength;

var phoneMaximumLength = function phoneMaximumLength(phone) {
  if (/^04/.test(phone)) {
    return phone.length <= 10;
  } else if (/^0/.test(phone)) {
    return phone.length <= 9;
  } else if (/^\+324/.test(phone)) {
    return phone.length <= 12;
  } else if (/^\+32/.test(phone)) {
    return phone.length <= 11;
  } else {
    return phone.length <= 12;
  }
};

exports.phoneMaximumLength = phoneMaximumLength;

var phonePlus = function phonePlus(v) {
  return /^\+?[^+]*$/.test(v);
};

exports.phonePlus = phonePlus;

var phoneBelgiumPrefix = function phoneBelgiumPrefix(v) {
  return /^(\+32|0)/.test(v);
};

exports.phoneBelgiumPrefix = phoneBelgiumPrefix;

var phoneOnlyNumbers = function phoneOnlyNumbers(v) {
  return /^\+?[0-9]*$/.test(v);
};

exports.phoneOnlyNumbers = phoneOnlyNumbers;

var phoneNoLetters = function phoneNoLetters(v) {
  return /^[-+()0-9]*$/.test(v);
};

exports.phoneNoLetters = phoneNoLetters;

var domainCharacters = function domainCharacters(v) {
  return /^[-0-9a-z]+$/.test(v);
};

exports.domainCharacters = domainCharacters;

var domainLength = function domainLength(v) {
  return v.length >= 2;
};

exports.domainLength = domainLength;

var password = function password(v) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\x20-\x7E]{6,32}$/.test(v);
};

exports.password = password;

var passwordCharacters = function passwordCharacters(v) {
  return /^[\x20-\x7E]+$/.test(v);
};

exports.passwordCharacters = passwordCharacters;

var passwordMinimumLength = function passwordMinimumLength(v) {
  return v.length >= 6;
};

exports.passwordMinimumLength = passwordMinimumLength;

var passwordMaximumLength = function passwordMaximumLength(v) {
  return v.length <= 32;
};

exports.passwordMaximumLength = passwordMaximumLength;

var passwordIncludesDowncase = function passwordIncludesDowncase(v) {
  return /[a-z]/.test(v);
};

exports.passwordIncludesDowncase = passwordIncludesDowncase;

var passwordIncludesUpcase = function passwordIncludesUpcase(v) {
  return /[A-Z]/.test(v);
};

exports.passwordIncludesUpcase = passwordIncludesUpcase;

var passwordIncludesNumbers = function passwordIncludesNumbers(v) {
  return /\d/.test(v);
};

exports.passwordIncludesNumbers = passwordIncludesNumbers;

var alias = function alias(v) {
  return /[a-z0-9-]/.test(v);
};

exports.alias = alias;

var ean = function ean(v) {
  var length = v.length;
  var checkSum = v.split('').splice(0, length - 1).reverse().map(function (n) {
    return parseInt(n, 10) || 0;
  }).map(function (n, i) {
    return i % 2 === 0 ? n * 3 : n * 1;
  }).reduce(function (acc, n) {
    return acc += n;
  }, 0);
  var checkDigit = parseInt(v.toString()[length - 1], 10);
  var valid = (10 - checkSum % 10) % 10 === checkDigit;
  return length === 18 && v.startsWith('54') && valid;
};

exports.ean = ean;

var numberPrecision = function numberPrecision(v, precision) {
  return !(v.includes('.') && RegExp("\\.\\d{".concat(precision + 1, "}")).test(v));
};

exports.numberPrecision = numberPrecision;

var numberMaximum = function numberMaximum(v, maximum) {
  return v <= maximum;
};

exports.numberMaximum = numberMaximum;

var numberMinimum = function numberMinimum(v, minimum) {
  return v >= minimum;
};

exports.numberMinimum = numberMinimum;

var numberDot = function numberDot(v) {
  return v.match(/\./gi) === null || v.match(/\./gi).length <= 1;
};

exports.numberDot = numberDot;

var numberMinus = function numberMinus(v) {
  return v === null || v.lastIndexOf('-') <= 0;
};

exports.numberMinus = numberMinus;

var numberDecimal = function numberDecimal(v) {
  return /^[0-9.\\-]{1,}$/.test(v);
};

exports.numberDecimal = numberDecimal;

var numberWhole = function numberWhole(v) {
  return v % 1 === 0;
};

exports.numberWhole = numberWhole;

var zipLimit = function zipLimit(v) {
  return /^[0-9]{4}$/.test(v);
};

exports.zipLimit = zipLimit;

var zipMinimum = function zipMinimum(v) {
  return numberMinimum(v, 1000);
};

exports.zipMinimum = zipMinimum;

var vatStartBe0 = function vatStartBe0(v) {
  return v.toLowerCase().startsWith('be0');
};

exports.vatStartBe0 = vatStartBe0;

var vat9Numbers = function vat9Numbers(v) {
  return !/^be0\d{9}$/gi.test(v);
};

exports.vat9Numbers = vat9Numbers;

var vat0 = function vat0(v) {
  return /^be0000000000/gi.test(v);
};

exports.vat0 = vat0;

var vatStartEnterprise = function vatStartEnterprise(v) {
  return /^[0,1]/.test(v);
};

exports.vatStartEnterprise = vatStartEnterprise;

var vatEnterprise = function vatEnterprise(v) {
  return !/^[0,1]\d{3}\.\d{3}\.\d{3}$/.test(v);
};

exports.vatEnterprise = vatEnterprise;

var priceDecimalLength = function priceDecimalLength(v) {
  var splited = v.split(/[,.]/);

  if (splited.length > 2) {
    return false;
  }

  var decimals = splited[splited.length - 1];
  return decimals.length < 6;
};

exports.priceDecimalLength = priceDecimalLength;