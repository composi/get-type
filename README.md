# @composi/get-type

This function creates an RFC4122 version 4 compliant uuid. The type is string. Each uuid will have 36 characters.

## Install

```
npm install --save-dev @composi/get-type
```

## Using

To get the type of primitive types:

```javascript
import getType from '@composi/get-type'

const str = 'This is text'
getType(str) // returns 'String'

const num = 123
getType(num) // returns 'Number'

let maybe = true
getType(maybe) // returns 'Boolean'

let none = null
getType(none) // returns 'Null'

let missingValue
getType(missingValue) // returns 'Undefined'

let noNumber = 0/0
getType(noNumber) // returns 'NaN'

getType(NaN) // returns 'NaN'
```

Getting types of objects:

```javascript
import getType from '@composi/get-type'

getType(String('text here')) // returns 'String'

getType(Number(123)) // returns 'Number'

getType(new Object()) // returns 'Object'

getType({}) // returns 'Object'

getType(new Array()) // returns 'Array'

getType([]) // returns 'Array'

getType (new Date()) // returns 'Date'

getType(Symbol(123)) // returns 'Symbol'

getType(new RegExp(/.*/)) // returns 'RegExp'
```
