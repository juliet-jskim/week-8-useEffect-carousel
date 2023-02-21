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
        <main className={main_container}>
            <div className={styles.home_link}>
                <Link  style={{ textDecoration: 'none',  color: 'rgb(192, 225, 255)' }} href="/">Home</Link>
            </div>
            <div className={styles.use_effect_two}>
                <div>
                    UseEffect Two
                </div>
                <div>
                    {number}
                </div>
            </div>
        </main>
            
            
        </>
    )

}