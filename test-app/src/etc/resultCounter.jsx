import React, {useState, useEffect} from "react";
import UseCounter from "./useCounter";

const MAX_VALUE = 10

function resultCount(props) {
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = UseCounter(0)

    useEffect(() => {
        setIsFull(count >= MAX_VALUE)
    }, [count])

    return (
        <div>
            <p>{`총 ${count} 명`}</p>
            <button onClick={increaseCount} disabled={isFull}>증가</button>
            <button onClick={decreaseCount}>감소</button>

            {isFull && <p style={{color:'red'}}> 정원이 가득찼습니다.</p>}
        </div>
    )

}

export default ResultCount