import React from 'react'

let abc = {
    ho: 1,
    va: 2,
    ten: 3
}
export const App2 = () => {
    let a = {...abc, que: 5}
    return  a.que
}
