export default function Sunday(props) {

    const arr = ["Hello", "World", "I'm", "React"]
    const n = 4.24;
    const string = "Hello Son"
    const map_items = {
        "title": "Hello 1",
        "content": "World 2"
    }

    const fn = () => {
        console.log("Hello world")
    }

    return (
        <>
            <h1>Hello world</h1>
            <Comp array={arr} number={n} string={string} map_items={map_items} fn={fn} />
            <ChildrenWrapper>
                <p>This is children wrapper content</p>
                <p>New paragraph</p>
                <p>
                    {arr.map((item) => {
                        return <p>{item}</p>
                    })}
                </p>
            </ChildrenWrapper>
        </>
    )
}

function ChildrenWrapper(props) {

    

    return (
        <>
            <h1>Wrapper</h1>
            {props.children}
        </>
    )
}

function Comp(props) {

    return (
        <>
            {props.array.map(function (item) { // for-each loop
                return <p>{item}</p>
            })}
            <br />
            {props.number}
            <br />
            {props.string}
            <br />
            {props.map_items.title} - {props.map_items.content}
            <br />
            <Btn fn={props.fn} />
        </>
    )
}

function Btn(props) {
    return (<button onClick={props.fn}>Hello</button>)
}

