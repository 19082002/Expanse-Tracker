// const 
const graph={
    save : [0,0,0,0,0,0,0,0,0,0,0,0],
    income:[0,0,0,0,0,0,0,0,0],
    expense:[0,0,0,0,0,0,0,0,0]
}
const monthSave = (state = graph, action) => {
    const value = action.payload;
    // console.log('val', value);
    if (typeof value !== 'undefined') {
        // console.log('val', value);
        const amnt = value.val;
        const month = value.date-1;
        const type=value.catg;

        switch (action.type) {
            case "INCR": {
                // console.log('state', state);
                state.save[month] = state.save[month] + amnt;
                state.income[type] = state.income[type]+amnt;
                return state
            }
            case "DECR": {
                // console.log('state', state);
                state.save[month] = state.save[month] - amnt;
                state.expense[type] = state.expense[type]+amnt
                return state
            }
            default: return state;
        }
    }
    else return state;
}
export default monthSave;