export const string = (v) => {
  return (typeof v === 'string' && v.length <= 255)
};

export const required = (v) => {
  return (
    !(typeof v === 'string' && v.trim() === '') &&
    v !== undefined &&
    v !== null
  )
};

export const name = (v) => {
  return /^(?=.*[-a-zA-Zа-яА-Я\u00C0-\u017FA])[-a-zA-Zа-яА-Я\u00C0-\u017FA ]+$/.test(v)
};

export const email = (v) => {
  return /^[a-zA-Zа-яА-Я0-9.!#$%&’*+/=?^_`{|}~-]+@(?:[a-zA-Zа-яА-Я0-9-]+\.)+[a-zA-Zа-яА-Я0-9-]{2,63}$/.test(v)
};

export const phoneMinimumLength = (phone) => {
  if (/^04/.test(phone)) {
    return phone.length >= 10
  } else if (/^0/.test(phone)) {
    return phone.length >= 9
  } else if (/^\+324/.test(phone)) {
    return phone.length >= 12
  } else if (/^\+32/.test(phone)) {
    return phone.length >= 11
  } else {
    return phone.length >= 11
  }
};

export const phoneMaximumLength = (phone) => {
  if (/^04/.test(phone)) {
    return phone.length <= 10
  } else if (/^0/.test(phone)) {
    return phone.length <= 9
  } else if (/^\+324/.test(phone)) {
    return phone.length <= 12
  } else if (/^\+32/.test(phone)) {
    return phone.length <= 11
  } else {
    return phone.length <= 12
  }
};

export const phonePlus = (v) => {
  return /^\+?[^+]*$/.test(v)
};

export const phoneBelgiumPrefix = (v) => {
  return /^(\+32|0)/.test(v)
};

export const phoneOnlyNumbers = (v) => {
  return /^\+?[0-9]*$/.test(v)
};

export const phoneNoLetters = (v) => {
  return /^[-+()0-9]*$/.test(v)
};

export const domainCharacters = (v) => {
  return /^[-0-9a-z]+$/.test(v)
};

export const domainLength = (v) => {
  return v.length >= 2
};

export const password = (v) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\x20-\x7E]{6,32}$/.test(v)
};

export const passwordCharacters = (v) => {
  return /^[\x20-\x7E]+$/.test(v)
};

export const passwordMinimumLength = (v) => {
  return v.length >= 6
};

export const passwordMaximumLength = (v) => {
  return v.length <= 32
};

export const passwordIncludesDowncase = (v) => {
  return /[a-z]/.test(v)
};

export const passwordIncludesUpcase = (v) => {
  return /[A-Z]/.test(v)
};

export const passwordIncludesNumbers = (v) => {
  return /\d/.test(v)
};

export const alias = (v) => {
  return /[a-z0-9-]/.test(v)
};

export const ean = (v) => {
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

  return length === 18 && v.startsWith('54') && valid;
}

export const numberPrecision = (v, precision) => {
  return !(v.includes('.') && RegExp(`\\.\\d{${precision + 1}}`).test(v))
}

export const numberMaximum = (v, maximum) => {
  return v <= maximum
}

export const numberMinimum = (v, minimum) => {
  return v >= minimum
}

export const numberDot = (v) => {
  return (
    v.match(/\./gi) === null ||
    v.match(/\./gi).length <= 1
  )
}

export const numberMinus = (v) => {
  return (
    v === null ||
    v.lastIndexOf('-') <= 0
  )
}

export const numberDecimal = (v) => {
  return /^[0-9.\\-]{1,}$/.test(v)
}

export const numberWhole = (v) => {
  return (v % 1 === 0)
}

export const zipLimit = (v) => {
  return /^[0-9]{4}$/.test(v)
}

export const zipMinimum = (v) => {
  return numberMinimum(v, 1000)
}

export const vatStartBe0 = (v) => {
  return v.toLowerCase().startsWith('be0')
}

export const vat9Numbers = (v) => {
  return !/^be0\d{9}$/gi.test(v)
}

export const vat0 = (v) => {
  return /^be0000000000/gi.test(v)
}

export const vatStartEnterprise = (v) => {
  return /^[0,1]/.test(v)
}

export const vatEnterprise = (v) => {
  return !/^[0,1]\d{3}\.\d{3}\.\d{3}$/.test(v)
}
