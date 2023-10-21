

export const Crocodile = () => {
    return (
        <img 
            className="crocodile"
            src="background/crocodile.gif"/>
    )
}


export const Hole = ({leftPos, botPos, scale}: any) => {
    return (
        <img 
            className="hole"
            src="background/hole.png"
            style={{left: leftPos, bottom: botPos, scale: scale}}
            />
    )
}

export const Birds = () => {
    return (
        <img 
            className="birds"
            src="background/birds.gif"/>
    )
}