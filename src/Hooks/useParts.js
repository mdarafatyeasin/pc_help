import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        const url = 'partsData.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])
    return [parts, setParts]
}
export default useParts