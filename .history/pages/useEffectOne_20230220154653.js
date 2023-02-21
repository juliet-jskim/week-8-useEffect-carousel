import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "@/styles/UseEffectOne.module.css"

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return(
        <>
        <div className={styles.home_link}>
             <Link href="/">Home</Link>
        </div>
       
        <div>
            useEffectOne
        </div>
        <div>
            {number}
        </div>
        </>
    )
}