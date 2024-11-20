import React, { useState, useEffect } from 'react'

export default function TestClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    return <div>Heure actuelle: {time}</div>
}