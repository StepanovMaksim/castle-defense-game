
import { Charge, Vzryv } from "../components/charge";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { modalSlice } from "../store/reducers/UserSlice";

    
function ChargeFinish() {
    const dispatch =  useAppDispatch();
    const {
        leftPos1, 
        leftPos2, 
        leftPos3, 
        topPos1,
        topPos2,
        topPos3,
        animBum1,
        animBum2,
        animBum3,
        clickCount1,
        clickCount2,
        clickCount3,
        animShot,
        jadroPosLeft,
        jadroPosTop,
        animJadro,
    } = useAppSelector(state => state.modalReducer)
  //  const {} = modalSlice.actions;
  //  const {clickCount1, clickCount2, clickCount3} = useAppSelector(state => state.chargeReducer)
    const {clickCharge1, clickCharge2, clickCharge3} = modalSlice.actions
    
    return (
        <div>
            {animShot && animBum1 && <Vzryv
                classNameProps="Vzryv"
                link="guns/vzryv-pushka.gif"
                leftPos={'145px'}
                topPos={"-250px"}
            /> }

            {animShot && animBum2 && <Vzryv
                classNameProps="Vzryv"
                link="guns/vzryv-pushka.gif"
                leftPos={'185px'}
                topPos={"-410px"}
            /> }
            
            {animShot && animBum3 && <Vzryv
                classNameProps="Vzryv"
                link="guns/vzryv-pushka.gif"
                leftPos={'170px'}
                topPos={"-515px"}
                scale="0.8"
            /> }
            
            {animJadro && <Vzryv
                classNameProps="Vzryv-jadro"
                link="guns/vzryv-jadro.gif"
                leftPos={jadroPosLeft + 'px'}
                topPos={jadroPosTop + "px"}
                scale={animBum3 ? "0.7" : "1" }
            /> }
            {!animShot && <Charge 
                children={clickCount1}
                leftPos={animBum1 ? 1.5*leftPos1+'px' : '-150px'}
                topPos={animBum1 ? topPos1+'px' : "1105px"}
                chargeNumber={1}
                clickCharge={() => dispatch(clickCharge1())}
            /> }
            {!animShot && <Charge 
                children={clickCount2}
                leftPos={animBum2 ? leftPos2+'px' : '-200px'}
                topPos={animBum2 ? topPos2+'px' : '4100px'}
                chargeNumber={2}
                clickCharge={() => dispatch(clickCharge2())}
            /> }
            {!animShot && <Charge 
                children={clickCount3}
                leftPos={animBum3 ? leftPos3+'px' : '-1030px'}
                topPos={animBum3 ? topPos3+'px' : '7000px'}
                chargeNumber={3}
                clickCharge={() => dispatch(clickCharge3())}
            /> }
        </div>
    )
}

export default ChargeFinish;