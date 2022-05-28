var number = function(busStops){
    return busStops.reduce((acc,a)=>acc+a[0]-a[1],0)
  }