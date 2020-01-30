const required = (v) => {
  return (
    !(typeof v === 'string' && v.trim() === '') &&
    v !== undefined &&
    v !== null
  )
};

const string = (v) => {
  return (typeof v === 'string' && v.length <= 255)
};

const name = (v) => {
  return /^(?=.*[-a-zA-Zа-яА-Я\u00C0-\u017FA])[-a-zA-Zа-яА-Я\u00C0-\u017FA ]+$/.test(v)
};

const email = (v) => {
  return /^[a-zA-Zа-яА-Я0-9.!#$%&’*+/=?^_`{|}~-]+@(?:[a-zA-Zа-яА-Я0-9-]+\.)+[a-zA-Zа-яА-Я0-9-]{2,63}$/.test(v)
};

const phoneMaximumLength = (v) => {
  return v.length !== 13
};

const phonePlus = (v) => {
  return /^\+?[^+]*$/.test(v)
};

const phoneNoLetters = (v) => {
  return /^[-+()0-9]*$/.test(v)
};

const domainCharacters = (v) => {
  return /^[-0-9a-z]+$/.test(v)
};

const domainLength = (v) => {
  return v.length >= 2
};

const password = (v) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\x20-\x7E]{6,32}$/.test(v)
};

const passwordCharacters = (v) => {
  return /^[\x20-\x7E]+$/.test(v)
};

const passwordMinimumLength = (v) => {
  return v.length >= 6
};

const passwordMaximumLength = (v) => {
  return v.length <= 32
};

const passwordIncludesDowncase = (v) => {
  return /[a-z]/.test(v)
};

const passwordIncludesUpcase = (v) => {
  return /[A-Z]/.test(v)
};

const passwordIncludesNumbers = (v) => {
  return /\d/.test(v)
};

const alias = (v) => {
  return /[a-z0-9-]/.test(v)
};

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

const numberWhole = (v) => {
  return (v % 1 === 0)
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
  required,
  string,
  name,
  email,
  phoneMaximumLength,
  phoneNoLetters,
  phonePlus,
  domainCharacters,
  domainLength,
  password,
  passwordCharacters,
  passwordMinimumLength,
  passwordMaximumLength,
  passwordIncludesDowncase,
  passwordIncludesUpcase,
  passwordIncludesNumbers,
  alias,
  ean,
  numberPrecision,
  numberMaximum,
  numberMinimum,
  numberDot,
  numberMinus,
  numberDecimal,
  numberWhole,
  zipLimit,
  zipMinimum,
  vatStartBe0,
  vat9Numbers,
  vat0,
  vatStartEnterprise,
  vatEnterprise,
}
