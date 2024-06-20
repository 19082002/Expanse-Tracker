// const 
let graph 
const item = JSON.parse(localStorage.getItem('graphs'));
if (item) {
    graph = item
}
else{
 graph = {
    save: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    income: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    expense: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}
}

const monthSave = (state = graph, action) => {
    const value = action.payload;
    // console.log('val', value);
    if (typeof value !== 'undefined') {
        // console.log('val', value);
        const amnt = value.val;
        const month = value.date - 1;
        const type = value.catg;

        switch (action.type) {
            case "INCR": {
                // console.log('state', state);
                state.save[month] = state.save[month] + amnt;
                state.income[type] = state.income[type] + amnt;
                localStorage.removeItem('graphs')
                localStorage.setItem('graphs', JSON.stringify(state));
                return state;
            }
            case "DECR": {
                // console.log('state', state);
                state.save[month] = state.save[month] - amnt;
                state.expense[type] = state.expense[type] + amnt
                localStorage.removeItem('graphs')
                localStorage.setItem('graphs', JSON.stringify(state));
                return state;
            }
            case "DELINCR": {
                // console.log('state', state);
                state.save[month] = state.save[month] - amnt;
                state.income[type] = state.income[type] - amnt;
                localStorage.removeItem('graphs')
                localStorage.setItem('graphs', JSON.stringify(state));
                return state;
            }
            case "DELDECR": {
                // console.log('state', state);
                state.save[month] = state.save[month] + amnt;
                state.expense[type] = state.expense[type] - amnt
                localStorage.removeItem('graphs')
                localStorage.setItem('graphs', JSON.stringify(state));
                console.log("expense", state)
                return state;
            }
            default: localStorage.removeItem('graphs')
                localStorage.setItem('graphs', JSON.stringify(state));
                return state;
        }
    }
    else localStorage.removeItem('graphs')
    localStorage.setItem('graphs', JSON.stringify(state));
    return state;
}
export default monthSave;