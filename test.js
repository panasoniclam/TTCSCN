const ADD_USER = payload =>({
    type:"ADD_USER",
    payload
  })
  const UPDATE_USER = payload =>({
    type:"UPDATE_USER",
    payload
  })
  const DELETE_USER = payload=>({
    type:"DELETE_USER",
    payload
  })
  let id =0 ;
  const myReducer = (state,action)=>{
    switch(action.type){
      case "ADD_USER":
        return{
          [
          ...state,
          id:id++,
          name:action.payload.name,
          job:action.payload.job
          ]
        }
        case "UPDATE_USER":
        return state.map(user=>{
          if(user.id !== action.payload.id){
            return user
          }else{
            ...state,
              name:action.payload.name,
                job:action.payload.job
          }
        })
        case "DELETE_USER":
        return stata.filter(user=> user.id !== action.id)
        default:
        break;
    }
    return state ;
  }
  const ASYNC_ADD_USER = (payload)=> dispatch =>{
    console.log('adding')
    setTimeout((
      dispatch(ADD_USER(payload))
    ),Math.floor(Math.random()*2000))
  }
  const ASYNC_UPDATE_USER = payload => dispatch=>{
    setTimeout((
      dispatch(UPDATE_USER(payload))
    ),Math.floor(Math.random()))
  }
  const ASYNC_DELETE_USER = payload => dispatch=>{
    
  }
  const asynfunc = store => next =>action =>{
    if(typeof action === 'function'){
      action(next)
    }
    next(action)
  }
  const logger = store => next => action=>{
    if(action.payload){ action.payload.name="ffhfksjfhks"}
    return next(action)
  }
  const loggerOne = store => next=> action=>{
    console.log(action.type)
    return next(action)
  }
  const {createStore,applyMiddware} = Redux ;
  const store = creatStore(myReducer,[],applyMiddware(asynfunc,logger))
  
  store.dispatch(ASYNC_ADD_USER({name:"djdjdj",job:"ddkahdka"}))
  store.dispatch(ASYNC_UPDATE_USER({name:"dhdd",job:"djdjjdgja"}))
  store.dispatch(ADD_USER({name:"djdjdjkd",job:"djdjdj"}))
  console.log(store.getState())
  store.Subcribe()
  
  
  
  
  
  
  
  
  
  
  
  