import { FC } from "react"

interface StateGuns {
    fireNumber: Number,
    fireStyle: string
}



export const Guns: FC<StateGuns> = ({fireNumber, fireStyle}) => {
    return (
        <div className={fireStyle}>
            <img src={"guns/fire" + fireNumber + ".png"} />
        </div>
    )
    
}