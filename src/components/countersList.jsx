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
        /*console.log('del', id)*/
        const newCounters = counters.filter(counter => counter.id !== id)
        /*console.log(newCounters)*/
        setCounters(newCounters)
    }

    const handleReset = () => {
        /*console.log('reset')*/
        setCounters(initialState)
    }

    const handleDecrement = (id) => {
        const updatetValueCounters = counters.map(counter => (counter.id === id) ? Object.assign({}, counter, counter.value = counter.value - 1) : counter)
         /*console.log(counter)*/
        setCounters(updatetValueCounters)
            /*console.log(updatetValueCounters)*/
    }

    const handleIncrement = (id) => {
        const updatetValueCounters = counters.map(counter => (counter.id === id) ? Object.assign({}, counter, counter.value = counter.value + 1) : counter)
        setCounters(updatetValueCounters)
    }

    /*const handleUpdate = () => {
        const updatedState = [
            {id:0, value:4, name: 'Ненужная вещ', price: 200},
            {id:1, value:3, name: 'Ложка'},
            {id:2, value:5, name: 'Вилка'},
            {id:3, value:3, name: 'Тарелка'},
            {id:4, value:1, name: 'Набор минималиста'}
        ]
        setCounters(updatedState)
    }*/

    return <>
        {counters.map(count=>
        <Counter 
            key = {count.id} 
            /*id = {count.id} 
            value = {count.value} 
            name = {count.name} */
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