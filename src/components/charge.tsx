import { FC } from "react"


interface ChangeProps {
    children: React.ReactNode,
    leftPos: string,
    topPos: string,
    chargeNumber: number,
    clickCharge: () => void,
}

interface VzryvProps {
    classNameProps: string,
    link: string,
    leftPos: string,
    topPos: string,
    scale?: string
}

export const Charge: FC<ChangeProps> = ({leftPos, topPos, chargeNumber, clickCharge, children}) => {
    return (
        <button 
            className={"charge"+chargeNumber}
            style={{
                left: leftPos, 
                top: topPos
            }}
            onClick={clickCharge}
        >{children}</button>
    )
}


export const Vzryv: FC<VzryvProps> = ({leftPos, topPos, scale, link, classNameProps}) => {
    return (
        <img 
            className={classNameProps}
            src={link}
            style={{
                left: leftPos, 
                top: topPos,
                scale: scale,
            }}
        />
    )
}


