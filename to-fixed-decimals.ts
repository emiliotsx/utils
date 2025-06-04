const toFixedDecimals = (number: number, precision?: number): number => {
  precision = 5
  return +(+(Math.round(+(number + 'e' + precision)) + 'e' + -precision)).toFixed(precision)
}

export default toFixedDecimals