import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap';

interface Props {
    initialValue?: number
}

const MAXIMUN_COUNT = 10


export const CounterEffect = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue)
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = (e: any) => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))
        if (counter >= MAXIMUN_COUNT - 1) e.target.disabled = true
    }

    useEffect(() => {

        if (counter < 10) return;
        console.log('%cSe llego al valor máximo', 'color: gray; font-size: 16px;')

        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, durations: 0.2, ease: 'ease.out' })
        tl.to(counterElement.current, { y: 0, duration: 0.4, ease: 'bounce.out' })

    }, [counter])


    return (
        <>
            <h3>CounterEffect</h3>
            <h1 ref={counterElement}>{counter}</h1>
            <button onClick={(e) => handleClick(e)}>+1</button>
        </>
    )
}
