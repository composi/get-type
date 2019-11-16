/**
 * Determine the type of the provided argument.
 * @param {*} value
 * @return {string} string
 */
export function getType(value) {
  // Trap for NaN:
  if (typeof value === 'number' && isNaN(value)) {
    return 'nan'
  } else if (value && value.nodeType === 3) {
    return 'text'
  } else if (value && value.nodeType === 1) {
    return 'element'
  } else if (value && /class/.test(value.toString())) {
    return 'class'
  } else {
    return new RegExp('\\[object (.*)]')
      .exec(toString.call(value))[1]
      .toLowerCase()
  }
}
