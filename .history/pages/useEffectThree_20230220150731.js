import { useEffect, useState } from "react"

export default function UseEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(()=> {
        setValue(value + 10)
    }, [number])

    return(
        <>
        <Link href="/">Home</Link>
        <div>
            <button onClick={() => setNumber(nuber +1)}>Click Me</button>
        </div>
        <div>
            UseEffect Three
        </div>
        </>
    )
}