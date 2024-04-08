export const incnum=(value)=>{
    return {
        type:"INCREMENT",
        payload:value
    }
}
export const decnum=(value)=>{
    return {
        type:"DECREMENT",
        payload:value
    }
}
export const incr=(val,date,catg)=>{
    return {
        type:"INCR",
        payload:{val,date,catg}
    }
}
export const decr=(val,date,catg)=>{
    return {
        type:"DECR",
        payload:{val,date,catg}
    }
}
export const additem=(item)=>{
    return {
        type:"ADD",
        payload : item
    }
}
export const removeitem=(item)=>{
    return {
        type:"REMOVE",
        payload : item
    }

}