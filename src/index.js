/**
 * Determine the type of the provided argument.
 * @param {*} value
 * @return {string} string
 */
export function getType(value) {
  // Trap for NaN:
  if (typeof value === 'number' && isNaN(value)) {
    return 'NaN'
  } else {
    return new RegExp('\\[object (.*)]').exec(toString.call(value))[1]
  }
}
