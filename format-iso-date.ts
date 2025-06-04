import { format } from 'date-fns'

const formatISODate = (value: string, separator = '/'): string => {
  if (!value) return ''

  const date = new Date(value)
  return format(date, `yyyy${separator}MM${separator}dd`)
}

export default formatISODate