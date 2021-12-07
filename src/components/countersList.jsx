import React, {useState} from "react"
import Counter from "./counter"

const CountersList = () => {
    const [counters, setCounters] = useState([
        {id:0, value:0, name: 'Ненужная вещ'},
        {id:1, value:0, name: 'Ложка'},
        {id:2, value:0, name: 'Вилка'},
        {id:3, value:0, name: 'Тарелка'},
        {id:4, value:1, name: 'Набор минималиста'}
    ])

    const hendlerDelete = () => {
        console.log('del')
    }

    return <>
        {counters.map(count=>
        <Counter key = {count.id} value = {count.value} name = {count.name} onDelete = {hendlerDelete}>
        </Counter>
        )}
    </>
}

export default CountersList