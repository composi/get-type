import { getType } from '../src'

test("type of 'abc' should be 'string'.", function () {
  const type = getType('abc')
  expect(type).toBe('string')
})

test("type of 123 should be 'number'.", function () {
  const type = getType(123)
  expect(type).toBe('number')
})

test("type of boolean should be 'boolean'.", function () {
  let maybe = true
  const type = getType(maybe)
  expect(type).toBe('boolean')
})

test("type of null should be 'null'.", function () {
  let none = null
  const type = getType(none)
  expect(type).toBe('null')
})

test("type of undefined should be 'undefined'.", function () {
  let missingValue
  const type = getType(missingValue)
  expect(type).toBe('undefined')
})

test("type of NaN value should be 'nan'.", function () {
  let noNumber = 0 / 0
  const type = getType(noNumber)
  expect(type).toBe('nan')
})

test("type of NaN should be 'nan'.", function () {
  const type = getType(NaN)
  expect(type).toBe('nan')
})

test("type of String should be 'string'.", function () {
  const type = getType(String('text here'))
  expect(type).toBe('string')
})

test("type of Number should be 'sumber'.", function () {
  const type = getType(Number(123))
  expect(type).toBe('number')
})

test("type of Object should be 'object'.", function () {
  const type = getType(new Object())
  expect(type).toBe('object')
})

test("type of object literal should be 'object'.", function () {
  const type = getType({})
  expect(type).toBe('object')
})

test("type of Array should be 'array'.", function () {
  const type = getType(new Array())
  expect(type).toBe('array')
})

test("type of [] should be 'array'.", function () {
  const type = getType([])
  expect(type).toBe('array')
})

test("type of Date should be 'date'.", function () {
  const type = getType(new Date())
  expect(type).toBe('date')
})

test("type of Symbol should be 'symbol'.", function () {
  const type = getType(Symbol('abc'))
  expect(type).toBe('symbol')
})

test("type of RegExp should be 'regexp'.", function () {
  const type = getType(new RegExp(/.*/))
  expect(type).toBe('regexp')
})

test("type of Element should be 'element'.", function() {
  const elementNode = {
    nodeType: 1
  }
  const type = getType(elementNode)
  expect(type).toBe('element')
})

test("type of Text should be 'text'.", function() {
  const textNode = {
    nodeType: 3
  }
  const type = getType(textNode)
  expect(type).toBe('text')
})

test("type of Set should be 'set'.", function () {
  const set = new Set([1, 2, 3])
  expect(getType(set)).toBe('set')
})

test("type of Map should be 'map'.", function () {
  let john = { name: 'John Doe' },
    lily = { name: 'Lily Bush' },
    peter = { name: 'Peter Drucker' }

  const map = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
  ])
  expect(getType(map)).toBe('map')
})
