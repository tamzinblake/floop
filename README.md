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
floop(condition ,body ,final_expression ,initialization ,context)
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
  
  floop(condition ,body ,final_expression ,initialization)
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

  floop(condition ,body ,final_expression ,initialization ,context)
```

```javascript
;(function () {
  var i = 0
  floop( function () { i < 5 }
       , function () { console.log(i) }
       , function () { i++ }
       )
})()
```

```javascript
//nice minimal syntax
;(function () {
  var i = 0
  floop(function () { i < 5 }, function () {
    console.log(i)
    i++
  })
})()
```

```javascript
//loops forever
floop()
```

## License

MIT License

## Final note

Seriously, never use this.
