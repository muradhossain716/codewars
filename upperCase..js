String.prototype.isUpperCase = function() {
    let result=true;
    let str=this;
    str.replace(/' '/g, '').split('').map(x=>{if(x.charCodeAt(0)>=97)result= false})
    return result
  }
  //another solution 
  String.prototype.isUpperCase = function() {
      return this.toUpperCase()===this
    }