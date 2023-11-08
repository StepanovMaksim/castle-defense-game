import {useEffect} from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { modalSlice } from './store/reducers/UserSlice';
import { ModalGameOver, ModalStart } from './components/modal';
import { Guns } from './components/guns';
import ChargeFinish from './finishComponents/chargeFinish';
import {HeartRate} from './components/heart';
import { Birds, Crocodile} from './components/background';

function App() {
    const dispatch =  useAppDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    const {totalClick,
       count, 
       photo,
       photoBack,
       speedBum, 
       animCharge, 
       animBumNum, 
       lives, 
       lvlCharge, 
       modalStart,
       difficulty
      } = useAppSelector(state => state.modalReducer)
    const {timerBum1, 
      timerBum2, 
      timerBum3, 
      animationBum, 
      addPlayer,
      easyMode,
      hardMode,
      refresh
    } = modalSlice.actions;

    useEffect(() => {
    if (!modalStart) {
     const timer1 = setInterval(() => dispatch(timerBum1()), speedBum)
     const timer2 = setInterval(() => dispatch(timerBum2()), speedBum)
     const timer3 = setInterval(() => dispatch(timerBum3()), speedBum)
     const timer4 = setInterval(() => dispatch(addPlayer()), 10)
     const timer5 = setInterval(() => dispatch(animationBum()), 300)
     
    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
      clearInterval(timer4)
      clearInterval(timer5)
    }
  }
    }, [speedBum, modalStart])

  return (
    <div>
      
      <div className="App" style={{background: 'url(/background/background'+photoBack+'.png)'}}>
        {modalStart && <ModalStart easy={() => dispatch(easyMode())} hard = {() => dispatch(hardMode())}/>}
        <div className='click'>Нажатий: {totalClick}</div>
        <Birds />
        {lives > 0 ? 
        <HeartRate totalHeart = {lives} /> : 
        <ModalGameOver title1={'Вы проиграли!'} refresh={() => dispatch(refresh())}>
          <h2>Ваше количество нажатий: {totalClick}</h2>
          <h2>Наибольший вес ядра: {lvlCharge}</h2>

        </ModalGameOver>}
        <Guns 
          fireNumber={animBumNum === 1 ? animCharge%6+1 : 1}
          fireStyle='fire1'
        />
        <Guns 
          fireNumber={animBumNum === 2 ? animCharge%6+1 : 1}
          fireStyle='fire2'
        />
        <Guns 
          fireNumber={animBumNum === 3 ? animCharge%6+1 : 1}
          fireStyle='fire3'
        />
        <ChargeFinish />
        
        {/* {isLoading && <h1>Идет загрузка</h1> }
        {error && <h1>{error}</h1> }
        {JSON.stringify(users, null, 2)} */}
        
      </div>
      
    <Crocodile />
    <img className='castle' src={"/background/castle" + photo + ".png"} alt="" />
    
    </div>
  );
}

export default App;
