const isTrue = (param: any) => {
  if (typeof param === 'string') {
    return ((param != '') && (param != '0') && (param.toLowerCase() != 'false'))// ? true : false;
  } else {
    return Boolean(param)
  }
}

export default isTrue