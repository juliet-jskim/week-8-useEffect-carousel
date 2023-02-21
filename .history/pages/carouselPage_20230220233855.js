import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from "@/styles/CarouselPage.module.css"

export default function CarouselPage() {
    return (
        <>
        <main className={styles.main_container}>
             <Link href="/">Home</Link>
        <Carousel/>
        </main>
       
        </>
    )
}