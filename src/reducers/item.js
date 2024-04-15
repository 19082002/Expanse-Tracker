const items = [];
const totalItem = (state = items, action) => {
    const item = action.payload;

    switch (action.type) {
        case "ADD": {
            var flag = true;
            // console.log("before", state);
            state.map((e) => {
                // console.log("item", e);
                if (e.id == item.date) {
                    flag = false;
                    e.items.push(item )
                    // console.log("added", e.items)
                    return state;
                }
            })

            if (flag) {
                // console.log('after', state)
                if(state.length==0){
                    return [
                        {
                            id: item.date,
                            items: [ item ]
                        }, ...state
                    ]
                }
                else{
                    var temp={
                        id: item.date,
                        items: [ item ]
                    }
                    // console.log('stdt',state[0].id, 'ttdt',temp.id,'cmp',state[0].id<temp.id)
                    for(var i = 0; i < state.length; i++){
                        if(flag===true ){
                            if(i==0 && state[i].id<temp.id){
                                flag = false;
                                return [
                                    {
                                        id: item.date,
                                        items: [ item ]
                                    }, ...state
                                ]
                            }
                           else if( i >0 && state[i].id < temp.id && state[i-1].id > temp.id){
                                flag=false;
                                temp=state[i];
                                state[i]= {
                                    id: item.date,
                                    items: [ item ]
                                }
                            }
                            // else{}
                            
                            // console.log("opo");
                        }
                        else if(flag ===false){
                            var st=state[i];
                            state[i]=temp;
                            temp=st;
                        }
                    }
                    // state[i]=temp;
                    state.push(temp);
                    return state;
                }
                
                
            }
            // else
                // return state
            break;
        }

        default: return state;
    }

}
export default totalItem;