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

getType(String('text here')) // returns 'string'

getType(Number(123)) // returns 'number'

getType(new Object()) // returns 'object'

getType({}) // returns 'object'

getType(new Array()) // returns 'array'

getType([]) // returns 'Aarray'

getType (new Date()) // returns 'date'

getType(Symbol(123)) // returns 'symbol'

getType(new RegExp(/.*/)) // returns 'regEexp'

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
getType(Rectangle) // returns 'class

getType(new Rectangle(50,200)) // returns 'object'
```
