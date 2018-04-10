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