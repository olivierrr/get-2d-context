
;(function(root, factory) {   

  // AMD   
  if (typeof define === 'function' && define.amd){
    define('progressbar', [], function(){   
      return factory()   
    })
  }

  // browserify    
  else if (typeof module !== 'undefined' && module.exports){    
    module.exports = factory()   
  }

  // Browser globals   
  else{   
    root.get2dContext = factory()   
  }

})(this, function(){

  function get2dContext(elem, opts){
    var canvas = getCanvas(elem)
    applyOpts(opts, canvas)
    setSizeEqualToParent(canvas)
    return getContext(canvas)
  }

  function getCanvas(elem){
    if(elem && (elem.tagName == 'CANVAS' || elem.nodeName == 'CANVAS')){
      return elem
    }else if(elem && (elem.tagName || elem.nodeName)){
      return appendNewCanvasAt(elem)
    }else{
      return appendNewCanvasAt(document.body)
    }
  }

  function getContext(canvas){
    if(!canvas.getContext || !canvas.getContext('2d')){
      return false
    }else{
      return canvas.getContext('2d')
    }
  }

  function applyOpts(opts, canvas){

    var deafultOpts = {
      fullscreen: false,
      responsive: true
    }

    opts = extend(deafultOpts, (opts || {}))

    if(opts.responsive === true){
      window.addEventListener('resize', setSizeEqualToParent.bind(null, canvas))
    }

    if(opts.fullscreen === true){
      document.body.style.margin = 0
      document.body.style.padding = 0
      document.body.style.overflow = 'hidden'
      document.body.style.width = window.innerWidth + 'px'
      document.body.style.height = window.innerHeight + 'px'
    }
  }

  function appendNewCanvasAt(elem){
    var canvas = document.createElement('canvas')
    elem.appendChild(canvas)
    return canvas
  }

  function setSizeEqualToParent(elem){
    elem.width = elem.parentNode.offsetWidth
    elem.height = elem.parentNode.offsetHeight    
  }

  function extend(defaults, options){
    var extended = {}
      , prop
    for(prop in defaults){
      if(Object.prototype.hasOwnProperty.call(defaults, prop)){
        extended[prop] = defaults[prop]
      }
    }
    for(prop in options){
      if(Object.prototype.hasOwnProperty.call(options, prop)){
        extended[prop] = options[prop]
      }
    }
    return extended
  }

  return get2dContext
})
