import React, {useState} from "react"
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: 'Ненужная вещ'},
        {id:1, value:0, name: 'Ложка'},
        {id:2, value:0, name: 'Вилка'},
        {id:3, value:0, name: 'Тарелка'},
        {id:4, value:0, name: 'Набор минималиста'}
    ]

    const [counters, setCounters] = useState(initialState)

    const hendlerDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleDecrement = (id) => {
        const updatetValueCounters = counters.map(counter => (counter.id === id) ?
         Object.assign({}, counter, counter.value = counter.value - 1) : counter)
        setCounters(updatetValueCounters)
    }

    const handleIncrement = (id) => {
        const updatetValueCounters = counters.map(counter => (counter.id === id) ? Object.assign({}, counter, counter.value = counter.value + 1) : counter)
        setCounters(updatetValueCounters)
    }

    return <>
        {counters.map(count=>
        <Counter 
            key = {count.id} 
            onDelete = {hendlerDelete}
            onIncrement = {handleIncrement}
            onDecrement = {handleDecrement}
            {...count}>
        </Counter>
        )}
        <button className = 'btn btn-primary btn-sm m-2' onClick = {handleReset}>Сброс</button>
    </>
}

export default CountersList