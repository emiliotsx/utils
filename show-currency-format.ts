const showCurrencyFormat = (value: number): string => {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(value)
}

export default showCurrencyFormat
