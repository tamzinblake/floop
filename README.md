## floop

Functional for-loop implementation in JS

Allows you to write for loops without those pesky semicolons

## Installation

```bash
npm install floop
```

## Usage

```javascript
var floop = require('floop')
floop(initialization ,condition ,final_expression ,body ,context)
```

Examples:

```javscript
;(function () {
  var i
  function initialization () {
    i = 0
  }

  function condition () {
    return i < 2
  }

  function final_expression () {
    i++
  }

  function body () {
    console.log(i)
  }
  
  floop(initialization ,condition ,final_expression ,body)
})()
```

```javascript
var context = {}
function initialization (context) {
  context.i = 0
  context.sum = 0
}

function condition (context) {
  context.i < 2
}

function final_expression (context) {
  context.i++
}

function body (context) {
  context.sum += i
  return context.sum
}

floop(initialization ,condition ,final_expression ,body ,context)
```  

## License

MIT License
