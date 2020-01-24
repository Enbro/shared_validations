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

  if (length === 18 && valid) {
    return true
  } else {
    return false
  }

  return result;
}

const constants = () => {
  return $constants
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

export default {
  ean,
  numberPrecision,
  numberMaximum,
  numberMinimum,
  numberDot,
  numberMinus,
  numberDecimal
}
