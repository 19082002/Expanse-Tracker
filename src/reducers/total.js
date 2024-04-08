const balance={total:0,income:0,expense:0};

 const totalmoney=(state=balance,action)=>{
    const value=action.payload;
    switch(action.type){
        case "INCREMENT":{
            state.total=state.total+value;
            state.income=state.income+value;
            return state
        }
        case "DECREMENT":{
            state.total=state.total-value;
            state.expense=state.expense+value;
            return state
        }
        default: return state;
    }
}
export default  totalmoney;