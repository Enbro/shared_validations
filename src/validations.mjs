const ean = (v) => {
  const length = v.length
  const checkSum = v
    .split('')
    .splice(0, length - 1)
    .reverse()
    .map((n) => parseInt(n, 10) || 0)
    .map((n, i) => (i % 2 === 0 ? n * 3 : n * 1))
    .reduce((acc, n) => acc += n, 0);
  const checkDigit = parseInt(v.toString()[length - 1], 10)
  const valid = (10 - (checkSum % 10)) % 10 === checkDigit

  if (
    length === 18 &&
    v.startsWith('54') &&
    valid
  ) {
    return true
  } else {
    return false
  }

  return result;
}

const numberPrecision = (v, precision) => {
  if (
    v === null ||
    precision === undefined ||
    !(v.includes('.') && RegExp(`\\.\\d{${precision + 1}}`).test(v))
  ) {
    return true
  } else {
    return false
  }
}

const numberMaximum = (v, maximum) => {
  if (
    v === null ||
    maximum === undefined ||
    v <= maximum
  ) {
    return true
  } else {
    return false
  }
}

const numberMinimum = (v, minimum) => {
  if (
    v === null ||
    minimum === undefined ||
    v >= minimum
  ) {
    return true
  } else {
    return false
  }
}

const numberDot = (v) => {
  if ( 
    v === null ||
    v.match(/\./gi) === null ||
    v.match(/\./gi).length <= 1
  ) {
    return true
  } else {
    return false
  }
}

const numberMinus = (v) => {
  if ( 
    v === null ||
    v.lastIndexOf('-') <= 0
  ) {
    return true
  } else {
    return false
  }
}

const numberDecimal = (v) => {
  if ( 
    v === null ||
    /^[0-9.\\-]{1,}$/.test(v)
  ) {
    return true
  } else {
    return false
  }
}

const zipLimit = (v) => {
  if (/^[0-9]{4}$/.test(v)) {
    return true
  } else {
    return false
  }
}

const zipMinimum = (v) => {
  return numberMinimum(v, 1000)
}

const vatStartBe0 = (v) => {
  return v.toLowerCase().startsWith('be0')
}

const vat9Numbers = (v) => {
  return !/^be0\d{9}$/gi.test(v)
}

const vat0 = (v) => {
  return /^be0000000000/gi.test(v)
}

const vatStartEnterprise = (v) => {
  return /^[0,1]/.test(v)
}

const vatEnterprise = (v) => {
  return !/^[0,1]\d{3}\.\d{3}\.\d{3}$/.test(v)
}

export default {
  ean,
  numberPrecision,
  numberMaximum,
  numberMinimum,
  numberDot,
  numberMinus,
  numberDecimal,
  zipLimit,
  zipMinimum,
  vatStartBe0,
  vat9Numbers,
  vat0,
  vatStartEnterprise,
  vatEnterprise,
}
