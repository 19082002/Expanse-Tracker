let balance={total:0,income:0,expense:0};
const item = JSON.parse(localStorage.getItem('blns'));
if (item) {
 balance=item
}
 const totalmoney=(state=balance,action)=>{
    const value=action.payload;
    switch(action.type){
        case "INCREMENT":{
            state.total=state.total+value;
            state.income=state.income+value;
             localStorage.removeItem('blns')
                localStorage.setItem('blns', JSON.stringify(state));
                return state;
        }
        case "DECREMENT":{
            state.total=state.total-value;
            state.expense=state.expense+value;
             localStorage.removeItem('blns')
                localStorage.setItem('blns', JSON.stringify(state));
                return state;
        }
        case "DELINC":{
            state.total=state.total-value;
            state.income=state.income-value;
             localStorage.removeItem('blns')
                localStorage.setItem('blns', JSON.stringify(state));
                return state;
        }
        case "DELEX":{
            state.total=state.total+value;
            state.expense=state.expense-value;
             localStorage.removeItem('blns')
                localStorage.setItem('blns', JSON.stringify(state));
                return state;
        }
        default:  localStorage.removeItem('blns')
                localStorage.setItem('blns', JSON.stringify(state));
                return state;;
    }
}
export default  totalmoney;