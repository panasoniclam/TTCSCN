 
 


// const array = [1,2,3,4,5];
// const test = array.filter(x=>x%2===0);
// console.log(test)


// const test = function(a,b){
//     this.a = a;
//     this.b= b;
// }
// test.prototype.mothod = function(){
//     return this.a+this.b
// }
// const a = new test(3,4);
// console.log(a.mothod())


// const array = [1,2,3,4,5]
// const test  = array.filter(x=>x%2===0)
// const a = test.reduce((a,b)=>a+b)
// console.log(a)




// const Sum = function(array=[]){
//     this.array = array ;
// }
// Sum.prototype.add= function(){
//     let a = [];
//      this.array.filter(x=>{
//         if(x%2===0){
//             a.push(x)
//         }
//     } )
//     return a.reduce((a,b)=>a+b)
// }
// const tong = new Sum([1,2,3,4,5,6])
// console.log(tong.add())

// let person ={
//     name:"lamnn",
//     subname:"nguyen",
//     get fullname(){
//         return this.name + ' ' + this.subname;
//     },
//     set fullname(fullname){
//         let pars = fullname.split(' ');
//         console.log(typeof pars)
//          this.name = pars[0] ;
//          this.subname = pars[1];

//     }
// }
// console.log(person.fullname ="dd dd")


// const profiles = new Map()
// profiles.set("aaa","AAA")
// profiles.set("bbb","BBB")

// const add = (a,b,cb)=>{
//     setTimeout(()=>{
//           if(typeof a != 'number' || typeof b!= 'number'){
//                  let err = "loi roi ku";
//                 return cb(undefined,err)
//              }
//              return cb(a+b,undefined)
//     },1000)
// }

// add(2,"3",(result,err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })
// console.log("sjsjjs")



// let add = (a,b,cb)=>{

//     setTimeout(()=>{
//         if(typeof a !== 'number'|| typeof b!== 'number'){
//             return cb(new Error('loi paramater phai la so'),false) ;
//         }
//         else{
//             return cb(false,a+b)
//         }
//     },1000)
// }
// let mul = (a,b,cb)=>{
//     setTimeout(()=>{
//         if(typeof a !== 'number'|| typeof b!== 'number'){
//             return cb(new Error('loi paramater phai la so'),false) ;
//         }
//         else{
//             return cb(false,a*b)
//         }
//     },1000)
// }
// let device = (a,b,cb)=>{
//     setTimeout(()=>{
//         if(typeof a !== 'number'|| typeof b!== 'number'){
//             return cb(new Error('loi paramater phai la so'),false) ;
//         }
//        else if(  b==0){
//            return cb(new Error('so chia khong duoc phep = 0'))
//        }else{
//            return cb(false,a/b)
//        }
//     },1000)
// }
//    let squase = (a,b,h)=> {
//      add(a,b,(err,result)=>{
//          if(err){
//              return err
//          }else{
//              mul(result,2,(err,result)=>{
//                  if(err){
//                      return err ;
//                  }else{
//                       device(result,h,(err,result)=>{
//                           if(err){
//                               return err ;
//                           }else{
//                               console.log(result)
//                           }
//                       })
//                  }
//              })
//          }
//      })
//   }


let add = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return rejects(new Error('loi '))
            }
            else {
                return resolve(a + b);
            }
        }, 1000)
    })
}
let mul = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return rejects(new Error('loi '))
            }
            else {
                return resolve(a *b);
            }
        }, 1000)
    })
}
let device =(a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return rejects(new Error('loi '))
            }
            else if(b==0){
                return rejects(new Error('loi chia 0'))
            }
            else{
                return resolve(a/b) ;
            }
        }, 1000)
    })
}

let funacsync = async ()=>{
    let A = await add(1,2);
    let B = await mul(A,2);
    let C = await device(B,3) ;
    console.log(C)
}

// const array = [1,2,3,4,5] ;
// function test(){
//     let sum  = 0;
//     for(let value of arguments){
//         sum+=value ;
//     }
//     return sum ;
// }
// console.log(test(...array))
//...spead --> tach phan tu cua mang
//...rest  --> gop cac phan tu thanh mot mang
 


// const array  = [1,2,3,4,5] ;
// function test(){
//     let sum  = 0 ;
//     for(let i=0;i<array.length;i++){
//         sum+=i
//     }
//     return sum
// }

// function test1(){
//     let sum = 0 ;
//     for(let value of arguments){
//         sum+=value
//     }
//     return sum
// }
// function lamnn(toan,van,anh,...rest){
//    return (toan*2+van*2 + anh + test1(...rest) ) / (rest.length+5) ;
// }
// console.log(lamnn(10,10,10,9,6,7,8))


// const u23vn = [
//     "bat han so",
//     "nguyen cong phuong",
//     "ha duc chinh",
//     "luong xunong truong",
//     "nguyen van quyet",
// ]
// const  [coach,caption,...player]= u23vn ;


// class Test{
//     constructor(arr){
//         this.arr = arr;
//     }
//     sum(){
//         return this.arr.reduce((a,b)=>a+b)
//     }
// }
// const array = [1,2,3,4,5]
// const  test = new Test(array)
// console.log(test.sum())

//  const array = [1,2,3,4,5] ;
//  const sum  = array.reduce((a,b)=>a+b) ;
//  console.log(sum)

const array = [1,2,3,4,5];
function Test(){
    let sum  = 0;
    for(let value of arguments){
        sum+=value
    }
    return sum
};
 const obj1 = {
     name:"sjsjjs",
     job:"djjdjd"
 }
 const obj2 = {
     name:"dddd",
     job:"dfkfkkgds"
 }
 const merge = (...obj)=>({...obj}) ;
 const object = merge(obj1,obj2)
 

 const base = fields => (req,res,key)=>{
     if(req[fields] && req[fields][key])  return false ;
     res.status(500).send({
         status:500,
         result:'error permission' + key
     })
     return true
 }
//  module.exports = (req,res,next)=>{
//      const authorizationHeader = req.headers.authorization ;
//      let result ;
//      if(authorizationHeader){
//          const token = req.authorization.split(' ')[1] ;
//      }
//  }

const e = '1 2 3 4 5';
function aa(str){
    let string = str.split(' ');
    let myarr = [] ;
    for(let i=0;i<string.length;i++){
        myarr.push(parseInt(string[i])) ;
    }
    return myarr.reduce((a,b)=>a+b) ;
}
 const rr = e.verify("ddd","dd","dd") ;
 console.log(rr)