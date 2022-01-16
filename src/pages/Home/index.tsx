import { useState } from "react";

export function Home(){
    const [count, setCount] = useState(0);
    
    const handleSetCount = () => {
        setCount(oldState => oldState + 1);
    }
    
    return (
        <div>
            <span>{count}</span>
            <button type="button" onClick={handleSetCount}>Clique aqui</button>
        </div>
    )
}