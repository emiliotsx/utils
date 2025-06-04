import { format } from 'date-fns'

const formatDate = (value: string, separator = '/'): string => {
  if (!value) return ''

  const date = new Date(value)
  return format(date, `dd${separator}MM${separator}yyyy`)
}

export default formatDate