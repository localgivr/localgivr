
export function handleErrors(errors) {
  var errString = ""
  errors.forEach(
    e => { errString += e.error + " " }
  )
  return errString
}
