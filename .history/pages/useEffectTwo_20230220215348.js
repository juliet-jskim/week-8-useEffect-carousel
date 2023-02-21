import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/UseEffectTwo.module.css"


export default function UseEffectTwo(){

    const[number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <>
            <div>
                <Link href="/">Home</Link>
            </div>
            
            <div>
                UseEffect Two
            </div>
            <div>
                {number}
            </div>
        </>
    )

}