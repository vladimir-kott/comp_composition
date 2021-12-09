import React, {useState} from "react"

const Counter = (props) => {
    /*console.log(props)*/

    const {value} = props


    const formatCount = () => {
        return value === 0 ? 'empty' : value
    }

    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }

    const hendleIncrement = () => {
        /*console.log('+')*/
        //setValue((prevState) => prevState + 1)
        props.onIncrement(props.id)
    }

    const hendleDecrement = () => {
        /*console.log('-')*/
        //setValue((prevState) => prevState - 1)
        props.onDecrement(props.id)
    }

    return (
    <div> 
        <span>{props.name}</span>
        <span className={getBadgeClasses()}>{formatCount()}</span>
        <button className='btn btn-primary btn-sm m-2' onClick={hendleIncrement}>+</button>
        <button className='btn btn-primary btn-sm m-2' onClick={hendleDecrement}>-</button>
        <button className='btn btn-danger btn-sm m-2' onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>)
}

export default Counter