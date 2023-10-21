import { FC } from "react"

interface Heart {
    totalHeart: number
}

const createArray = (length: number) => [...Array(length)];

const Heart1 = () => {
    return (
        <div className="Heart">❤️</div>
    )
}

export const HeartRate: FC<Heart> = ({totalHeart}) => {
    return (
    <>
        {createArray(totalHeart).map((n, i) => <Heart1 key={i} />)}
    </>
    )    
}




