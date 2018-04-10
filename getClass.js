function getClass(node,classes){
    for(var key in classes){
      var value = classes[key]
      if(value){
        node.classList.add(key)
      }else{
        node.classList.remove(key)
      }
    }
}

//优化
function getClass(node,classes){
    for(var key in classes){
      var value = classes[key]
      
      var methodName = value ? 'add' : 'remove'
      node.classList[methodName](key)
      /*if(value){
        node.classList.add(key)
      }else{
        node.classList.remove(key)
      }*/
    }
}