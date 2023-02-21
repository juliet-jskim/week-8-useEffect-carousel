import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "@/styles/UseEffectThree.module.css"


export default function UseEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(()=> {
        setValue(value + 10)
    }, [number])

    return(
        <>
        <main className={styles.main_container}>
            <div className={styles.home_link}>
                <Link  style={{ textDecoration: 'none',  color: 'white' }} href="/">Home</Link>
            </div>
            <div className={styles.use_effect_three}>
                    <div>
                    <button className={ styles.button} style={{ borderRadius: "1rem",  color: 'white',backgroundColor: 'rgba(240, 248, 255, 0.24)' }} onClick={() => setNumber(number +1)}>Click Me</button>
                    </div>
                    <div>
                        UseEffect Three
                    </div>
                    <div>
                        {value}
                    </div>
            </div>
            
        </main>
        
        </>
    )
}