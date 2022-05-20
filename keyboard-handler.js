function handler(key, isCaps = false, isShift = false) {
    let obj={
        '1':'!',
        '2':'@',
        '3':'#',
        '4':'$',
        '5':'%',
        '6':'^',
        '7':'&',
        '8':'*',
        '9':'(',
        '0':')',
        '-':'_',
        '=':'+',
        '`':'~',
        '""':'""',
        ';':':',
        ',':'<',
        '.':'>',
        '/':'?',
        '+':'+',
        '-':'-',
        '*':'*'
    }
    
    if((isCaps || isShift) && typeof key === 'string' && typeof isCaps === 'boolean' && typeof isShift === 'boolean' && key.length === 1){
        if(isCaps) return key.toUpperCase()
        else if(isShift){
           return obj[key]
        }
    
   }else{return 'KeyError'}}