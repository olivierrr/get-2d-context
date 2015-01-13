## usage

#### use [stack.gl packages](http://stack.gl) instead!

```js
var container = document.querySelector('#myContainer')

var options = {
    responsive: true,
    fullscreen: false
}

// a canvas will be appended to container
// if container is left unspecified the default container is document.body
// the width and height of canvas is equal to container
var ctx = get2dContext(container, options)

if(!ctx) {
    // canvas is not supported on this device
} else {
    // magic!!1
}
```

##options

* ##### responsive
   - is true by default
   - keeps canvas.width and .height equal to container
 
* ##### fullscreen
   - is false by default
   - use only when container === document.body
   - sets document.body.width = window.innerWidth && .height = window.innerHeigght
   - applies css styles to document.body (overflow: 'hidden', margin: 0, padding: 0)
