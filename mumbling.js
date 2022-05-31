function accum(s) {
	return [...s].map((x,i)=>x.toUpperCase()+x.toLowerCase().repeat(i)).join('-')
}
console.log(accum('ZpglnRxqenU'))