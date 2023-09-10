import { useState } from "react"



export default function StateSunday() {
    const [color, setColor] = useState('#000000')
    // const color = '#000000';

    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const color_arr = ['#FFCC70', '#FFFADD', '#8ECDDD', '#22668D', '#AE445A', "#E25E3E"]

    const changeColor = () => {
        setColor(color_arr[randomInt(0, color_arr.length - 1)])
    }

    const [items, setItems] = useState([])
    const [content, setContent] = useState("");
    const addItem = () => {
        setItems([...items, content])
    }
    return (
        <>
            <h1>Test Git</h1>
            <h1>State in React</h1>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '40vh',
                width: '40vh',
                backgroundColor: color
            }}>
            </div>
            <button onClick={() => changeColor()}>Change color</button>
            <br />
            <input onChange={(ev) => {
                console.log("Change event")
                setContent(ev.target.value)
            }} onClick={() => {
                console.log("Event click")
            }} />
            <h1>Your input is: {content}</h1>
            <button onClick={() => addItem()}>Add Item</button>
            <h1>Currently, item list has {items.length} {items.length > 1 ? "items" : "item"}</h1>
            {items.map((item) => {
                return <p>{item}</p>
            })}
        </>
    )
}


// Ternary Operator
// a = 2;
// res = a > 1 ? "Larger" : "Equal or smaller"
// res = "Larger"