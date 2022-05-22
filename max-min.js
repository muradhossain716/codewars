let list=[-52, 56, 30, 29, -54, 0, -110]
let min = function(list){
    
    return Math.max(...list);
}

let max = function(list){
    
    return Math.min(...list);
}
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([-52, 56, 30, 29, -54, 0, -110]))