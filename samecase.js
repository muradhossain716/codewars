function sameCase(a, b){
    if(a.toLowerCase()?.charCodeAt(0)>=97&&a?.toLowerCase().charCodeAt(0)<=122&&b?.toLowerCase().charCodeAt(0)>=97&&b?.toLowerCase().charCodeAt(0)<=122){
      if(a.charCodeAt(0)>=97&&a.charCodeAt(0)<=122&&b.charCodeAt(0)>=97&&b.charCodeAt(0)<=122)return 1
      else if(a.charCodeAt(0)>=65&&a.charCodeAt(0)<=90&&b.charCodeAt(0)>=65&&b.charCodeAt(0)<=90)return 1
      else{return 0}
    }
    return -1;
  }