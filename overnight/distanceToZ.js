function distanceToZ(a){
    const chaRactor = ['a','b','c','d'	,'e',	'f'	,'g',	'h',	'i'	,'j',	'k'	,'l'	,'m',	'n',	'o',	'p'	,'q'	,'r'	,'s'	,'t'	,'u'	,'v'	,'w',	'x'	,'y','z',' ']
     const result   =[]
     a.map((value1,index)=>{
           const temp = 25-value1 
           result.push(chaRactor[temp])
          
     })
     console.log(result.join(''))
     
}

distanceToZ([18, 21, 14, 14, 11, -1, 3, 11, 8, 14, 22])