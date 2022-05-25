function peopleWithAgeDrink(old) {
    let str='';
    if(old<14)str='toddy'
    else if(old<18)str='coke'
    else if(old<21) str='beer'
    else if(old>=21) str='whisky'
    return 'drink'+' '+str;
  };
