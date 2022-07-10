import React from "react";

const nums = (a, b) => a + b

export class Sum extends React.Component {
    render(){
        return <h2>The sum is {nums(2, 5)}</h2>
    }
}