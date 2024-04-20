let items = [];
const item = JSON.parse(localStorage.getItem('items'));
if (item) {
 items=item
}
const totalItem = (state = items, action) => {
    const item = action.payload;

    switch (action.type) {
        case "ADD": {
            var flag = true;

            state.map((e) => {

                if (e.id == item.date) {
                    flag = false;
                    e.items.push(item)
                    localStorage.removeItem('items')
                    localStorage.setItem('items', JSON.stringify(state));
                    return state;
                }
            })

            if (flag) {

                if (state.length == 0) {
                    state= [
                        {
                            id: item.date,
                            items: [item]
                        }
                    ]
                }
                else {
                    var temp = {
                        id: item.date,
                        items: [item]
                    }

                    for (var i = 0; i < state.length; i++) {
                        if (flag === true) {
                            if (i == 0 && state[i].id < temp.id) {
                                flag = false;
                                return [
                                    {
                                        id: item.date,
                                        items: [item]
                                    }, ...state
                                ]
                            }
                            else if (i > 0 && state[i].id < temp.id && state[i - 1].id > temp.id) {
                                flag = false;
                                temp = state[i];
                                state[i] = {
                                    id: item.date,
                                    items: [item]
                                }
                            }

                        }
                        else if (flag === false) {
                            var st = state[i];
                            state[i] = temp;
                            temp = st;
                        }
                    }

                    state.push(temp);
                    
                }
                localStorage.removeItem('items')
                localStorage.setItem('items', JSON.stringify(state));
                return state;

            }

            break;
        }
        case "DELETE": {
            state.map((e) => {
                e.items = e.items.filter((it) => {
                
                    return it !== item ? item : null
                })
            })
            
            return state;
        }

        default: return state;
    }

}
export default totalItem;