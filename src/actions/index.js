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
export const delex=(value)=>{
    return {
        type:"DELEX",
        payload:value
    }
}
export const delinc=(value)=>{
    return {
        type:"DELINC",
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
export const delincr=(val,date,catg)=>{
    return {
        type:"DELINCR",
        payload:{val,date,catg}
    }
}
export const deldecr=(val,date,catg)=>{
    return {
        type:"DELDECR",
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
        type:"DELETE",
        payload : item
    }

}