import React, { useState } from "react";
                 // { useState } : Hooks 을 사용할때 추가해줘야 한다
function UseCounter(initValue) {
    const [count, setCount] = useState(initValue)

    const increaseCount = () => {
        setCount((count) => count + 1)
    }

    const decreaseCount = () => {
        setCount((count) => Math.max(count-1, 0))
    }

    return [count, increaseCount, decreaseCount]

}

export default UseCounter