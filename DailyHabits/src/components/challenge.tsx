import React from 'react'
import { useState } from 'react'







function Challenge({ initialtime }) {

    const [time, setTime] = useState(initialtime)




    function start() {setInterval(() => {

        setTime(time => time - 1)

     

    }, 1000);
    }

    



    return (

        <div>

            <h1>{time}</h1>
            <button onClick={start}>Start</button>
            <button >Stop</button>
            <button>Reset</button>

        </div>
    )
}

export default Challenge