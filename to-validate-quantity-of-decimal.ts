const toValidateQuantityOfDecimales = (number: number): boolean => {
  if (!number) return false
  const decimals = +(number.toString().split('.')[1])
  return (Array.from(decimals.toString()).length > 5)
}

export default toValidateQuantityOfDecimales