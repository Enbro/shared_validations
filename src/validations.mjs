const ean = (v) => {
  let result = false;
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

  if (length === 18 && valid) { result = true }

  return result;
}

export default {
  ean
}
