
interface PlayerProps {
    onCreate: () => void;
    playerValue: string;

}


const AddPlayer = ({onCreate, playerValue}: PlayerProps) => {
    const submitHandler = (event: any) => {
        onCreate();
        event.preventDefault();
        console.log()
    }
    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                className="playerName"
                placeholder="Введите имя"
            />
            <button type='submit'
                className="addPlayer">Создать</button>
        </form>
    )
}


export default AddPlayer;