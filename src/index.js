/**
 * Determine the type of the provided argument.
 * @param {*} value
 * @return {string} string
 */
export const getType = value =>
  (typeof value === 'number' && isNaN(value) && 'nan') ||
  (value && value.nodeType === 3 && 'text') ||
  (value && value.nodeType === 1 && 'element') ||
  (value && /class/.test(value.toString()) && 'class') ||
  new RegExp('\\[object (.*)]').exec(toString.call(value))[1].toLowerCase()
