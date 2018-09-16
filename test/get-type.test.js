import { getType } from '../src'

test("type of 'abc' should be 'String'.", function () {
  const type = getType('abc')
  expect(type).toBe('String')
})

test("type of 123 should be 'Number'.", function () {
  const type = getType(123)
  expect(type).toBe('Number')
})

test("type of boolean should be 'Boolean'.", function () {
  let maybe = true
  const type = getType(maybe)
  expect(type).toBe('Boolean')
})

test("type of null should be 'Null'.", function () {
  let none = null
  const type = getType(none)
  expect(type).toBe('Null')
})

test("type of undefined should be 'Undefined'.", function () {
  let missingValue
  const type = getType(missingValue)
  expect(type).toBe('Undefined')
})

test("type of NaN value should be 'NaN'.", function () {
  let noNumber = 0 / 0
  const type = getType(noNumber)
  expect(type).toBe('NaN')
})

test("type of NaN should be 'NaN'.", function () {
  const type = getType(NaN)
  expect(type).toBe('NaN')
})

test("type of String should be 'String'.", function () {
  const type = getType(String('text here'))
  expect(type).toBe('String')
})

test("type of Number should be 'Number'.", function () {
  const type = getType(Number(123))
  expect(type).toBe('Number')
})

test("type of Object should be 'Object'.", function () {
  const type = getType(new Object())
  expect(type).toBe('Object')
})

test("type of object literal should be 'Object'.", function () {
  const type = getType({})
  expect(type).toBe('Object')
})

test("type of Array should be 'Array'.", function () {
  const type = getType(new Array())
  expect(type).toBe('Array')
})

test("type of [] should be 'Array'.", function () {
  const type = getType([])
  expect(type).toBe('Array')
})

test("type of Date should be 'Date'.", function () {
  const type = getType(new Date())
  expect(type).toBe('Date')
})

test("type of Symbol should be 'Symbol'.", function () {
  const type = getType(Symbol('abc'))
  expect(type).toBe('Symbol')
})

test("type of RegExp should be 'RegExp'.", function () {
  const type = getType(new RegExp(/.*/))
  expect(type).toBe('RegExp')
})
