const items = [];
const totalItem = (state = items, action) => {
    const item = action.payload;

    switch (action.type) {
        case "ADD": {
            var flag = true;
            console.log("before", state);
            state.map((e) => {
                console.log("item", e);
                if (e.id == item.date) {
                    flag = false;
                    e.items.push(item )
                    console.log("added", e.items)
                    return state;
                }
            })

            if (flag) {
                console.log('after', state)
                return [
                    {
                        id: item.date,
                        items: [ item ]
                    }, ...state
                ]
            }
            // else
                // return state
            break;
        }

        default: return state;
    }

}
export default totalItem;