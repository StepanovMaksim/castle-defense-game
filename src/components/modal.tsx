import { FC } from "react"
import AddPlayer from "./createPlayer"


interface StateModal {
    title: string,
    children: React.ReactNode
}

const Modal: FC<StateModal> = ({title, children}) => {
    return (
        <>
            <div className="modalBack"/>
            <div className="modalWindow">
                <h1>{title}</h1>
                {children}
            </div> 
        </>
    )
} 

export const ModalGameOver = ({title1, children, refresh}: any) => {
    return (
        <Modal
            title={title1}
        >
            {children}
            <button onClick={refresh}>Попробовать еще</button>
        </Modal>
    )
}

export const ModalStart = ({easy, hard}: any) => {
    return (
        <>
        <div className="modalBack"/>
        <div className="modalWindow">
            <h2>Выберите уровень сложности</h2>
            <button onClick={easy}>Нормальный</button>
            <button onClick={hard}>Сложный</button>
        </div>
        </>
    )
}