import { IUsers } from "../../models/IUsers"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";



// interface UseState {
//     users: IUsers[];
//     isLoading: boolean;
//     error: string;
// }


// const initialState: UseState = {
//     users: [],
//     isLoading: false,
//     error: '',
// }

interface UseState {
    photo: number;
    photoBack: number;
    modalStart: boolean;
    timer1: number;
    timer2: number;
    timer3: number;
    count:  number;
    nameGamer: string;
    leftPos1: number;
    leftPos2: number;
    leftPos3: number;
    topPos1: number;
    topPos2: number;
    topPos3: number;
    numBum: number;
    animBum1: boolean;
    animBum2: boolean;
    animBum3: boolean;
    animBumNum: number;
    animCharge: number;
    speedBum: number;
    clickCount1: number;
    clickCount2: number;
    clickCount3: number;
    lvlCharge: number;
    lives: number;
    animVzryv: boolean;
    animShot: boolean;
    animJadro: boolean;
    jadroPosLeft: number;
    jadroPosTop: number;
    timerBoom: number;
    timerLose: number;
    hole1: boolean;
    hole2: boolean;
    hole3: boolean;
    totalClick: number;
    difficulty: boolean;

}


const initialState: UseState = {
    photo: 0,
    photoBack: 0,
    modalStart: true,
    count: 4,
    timer1: 4.1,
    timer2: 4.1,
    timer3: 4.1,
    nameGamer: 'kalek',
    leftPos1: 430+(400* Math.sin(4)),
    leftPos2: 470+(400* Math.sin(4)),
    leftPos3: 400+(400* Math.sin(4)),
    topPos1: (400* Math.cos(4))+60,
    topPos2: (400* Math.cos(4))-90,
    topPos3: (400* Math.cos(4))-200,
    numBum: 0,
    animBum1: false,
    animBum2: false,
    animBum3: false,
    animBumNum: 0,
    animCharge:0,
    speedBum: 10,
    clickCount1: 5,
    clickCount2: 5,
    clickCount3: 5,
    lvlCharge: 5,
    lives: 5,
    animVzryv: false,
    animShot: true,
    animJadro: false,
    jadroPosLeft: 0,
    jadroPosTop: 0,
    timerBoom: 0,
    timerLose: 0,
    hole1: true,
    hole2: true,
    hole3: true,
    totalClick: 0,
    difficulty: false,
}

// interface UseStateModal {
//     modalStart: boolean;
// }

// const initialStateModal: UseStateModal = {
//     modalStart: true,
// }

export const modalSlice = createSlice({
    name: 'modalStart',
    initialState, 
    reducers: {
        addPlayer(state) {
            state.modalStart = false;
            if (state.count > 3200) {
               state.count = 4;
            }  else {
                state.count += (2 * Math.PI+0.5 / 180);
            }
            console.log(state.timer1)
            state.nameGamer = "hames"
            if (state.animVzryv == true) {
                state.timerLose += 1;
                if (state.timerLose > 80) {
                    state.animVzryv = false
                    state.timerLose = 0
                }
            
            }
            if (state.difficulty) {
                if (state.lvlCharge==6) state.speedBum = 8;
                if (state.lvlCharge==8) state.speedBum = 7;
                if (state.lvlCharge==10) state.speedBum = 6;
                if (state.lvlCharge==12) state.speedBum = 5;
                if (state.lvlCharge==15) state.speedBum = 4;
                if (state.lvlCharge==20) state.speedBum = 3;
            } else {
                if (state.lvlCharge==8) state.speedBum = 9;
                if (state.lvlCharge==10) state.speedBum = 8;
                if (state.lvlCharge==12) state.speedBum = 7;
                if (state.lvlCharge==15) state.speedBum = 6;
                if (state.lvlCharge==20) state.speedBum = 5;
            }
            if (state.lives < 1) state.photoBack = 5;
        },
        easyMode(state) {
            state.modalStart = false;
        },

        hardMode(state) {
            state.modalStart = false;
            state.difficulty = true;
        },

        timerBum1(state) {
            if (state.timer1 > 3200) {
                    state.photo += 1;
                   state.jadroPosLeft = state.leftPos1
                    state.jadroPosTop = state.topPos1
                    state.animVzryv = true 
                    state.timer1 = 4.1;
                    state.animBum1 = false
                    state.lives -= 1;
                    state.hole1 = true;
                
             }
             if (state.animBum1 == true) {
                if (state.clickCount1 < 1) {
                    if (state.timerBoom == 0) {
                        state.jadroPosLeft = state.leftPos1*1.5-40
                        state.jadroPosTop = state.topPos1-30
                        state.leftPos1 = -1000
                    }
                    
                    state.timerBoom += 1;
                    state.animJadro = true;
                    
                    if (state.timerBoom > 90) {
                        state.animJadro = false;
                        state.animBum1 = false;
                        state.timerBoom = 0;
                        state.clickCount1 = state.lvlCharge
                        state.timer1 = 4.1;
                    }
                }
                if (state.clickCount1 > 0) {
                    state.timer1 += (2 * Math.PI-0.5 / 180);
                    state.leftPos1 = 430+(400* Math.sin(state.timer1))
                    state.topPos1 = 60+(400* Math.cos(state.timer1))
                }
             }
            
        },
        timerBum2(state) {
            if (state.timer2 > 3200) {
                state.photo += 1;
                   state.jadroPosLeft = state.leftPos2
                    state.jadroPosTop = state.topPos2
                    state.animVzryv = true 
                    state.timer2 = 4.15;
                    state.animBum2 = false
                    state.lives -= 1;
                    state.hole2 = true;
                
             }
             if (state.animBum2 == true) {
                if (state.clickCount2 < 1) {
                    if (state.timerBoom == 0) {
                        state.jadroPosLeft = state.leftPos2+10
                        state.jadroPosTop = state.topPos2-30
                        state.leftPos2 = -1000
                    }
                    
                    state.timerBoom += 1;
                    state.animJadro = true;
                    
                    if (state.timerBoom > 90) {
                        state.animJadro = false;
                        state.animBum2 = false;
                        state.timerBoom = 0;
                        state.clickCount2 = state.lvlCharge
                        state.timer2 = 4.15;
                    }
                }
                if (state.clickCount2 > 0) {
                    state.timer2 += (2 * Math.PI-0.5 / 180);
                    state.leftPos2 = 470+(400* Math.sin(state.timer2))
                    state.topPos2 = -90+(400* Math.cos(state.timer2))
                }
             }
            
        },
        timerBum3(state) {
            if (state.timer3 > 3200) {
                state.photo += 1;
                   state.jadroPosLeft = state.leftPos3
                    state.jadroPosTop = state.topPos3
                    state.animVzryv = true 
                    state.timer3 = 4.1;
                    state.animBum3 = false
                    state.lives -= 1;
                    state.hole3 = true;
                
             } 
             if (state.animBum3 == true) {
                if (state.clickCount3 < 1) {
                    if (state.timerBoom == 0) {
                        state.jadroPosLeft = state.leftPos3+70
                        state.jadroPosTop = state.topPos3-20
                        state.leftPos3 = -1000
                    }
                    
                    state.timerBoom += 1;
                    state.animJadro = true;
                    
                    if (state.timerBoom > 90) {
                        state.animJadro = false;
                        state.animBum3 = false;
                        state.timerBoom = 0;
                        state.clickCount3 = state.lvlCharge
                        state.timer3 = 4.1;
                    }
                }
                if (state.clickCount3 > 0) {
                    state.timer3 += (2 * Math.PI-0.5 / 180);
                    state.leftPos3 = 400+(400* Math.sin(state.timer3))
                    state.topPos3 = -200+(400* Math.cos(state.timer3))
                }
             }
            
        },
        animationBum(state) {
            if (state.count > 1800 && state.count < 2800) {
                state.animCharge+=1;
            } else {
                state.animCharge = 0; 
            };
            if (state.count > 2800) {
                state.animShot = true;
            } else state.animShot = false;

            if (state.count>1780 && state.count<2000) {
                state.animBumNum = Math.floor(Math.random() * (4 - 1)) + 1;
            };
            if (state.animBumNum == 1 && state.count > 2800) state.animBum1 = true;
            if (state.animBumNum == 2 && state.count > 2800) state.animBum2 = true;
            if (state.animBumNum == 3 && state.count > 2800) state.animBum3 = true;
            
        },

        clickCharge1(state) {
            if (state.clickCount1 > 0) state.clickCount1 -= 1; 
            if (state.clickCount1 == 1) {
                state.lvlCharge +=1;
            }
            state.totalClick +=1;

        },

        clickCharge2(state) {
            if (state.clickCount2 > 0) state.clickCount2 -= 1; 
            if (state.clickCount2 == 1) {
                state.lvlCharge +=1;
                
            }
            state.totalClick +=1;
        },

        clickCharge3(state) {
            if (state.clickCount3 > 0) state.clickCount3 -= 1; 
            if (state.clickCount3 == 1) {
                state.lvlCharge +=1;
                
            }
            state.totalClick +=1;
        },
        refresh(state) {
            state.photo = 0;
            state.photoBack = 0;
            state.modalStart = true;
            state.count = 4;
            state.timer1 = 4.1;
            state.timer2 = 4.1;
            state.timer3 = 4.1;
            state.nameGamer = 'kalek';
            state.leftPos1 = 430+(400* Math.sin(4));
            state.leftPos2 = 470+(400* Math.sin(4));
            state.leftPos3 = 400+(400* Math.sin(4));
            state.topPos1 = (400* Math.cos(4))+60;
            state.topPos2 = (400* Math.cos(4))-90;
            state.topPos3 = (400* Math.cos(4))-200;
            state.numBum = 0;
            state.animBum1 = false;
            state.animBum2 = false;
            state.animBum3 = false;
            state.animBumNum = 0;
            state.animCharge =0;
            state.speedBum = 10;
            state.clickCount1 = 5;
            state.clickCount2 = 5;
            state.clickCount3 = 5;
            state.lvlCharge = 5;
            state.lives = 5;
            state.animVzryv = false;
            state.animShot = true;
            state.animJadro = false;
            state.jadroPosLeft = 0;
            state.jadroPosTop = 0;
            state.timerBoom = 0;
            state.timerLose = 0;
            state.hole1 = true;
            state.hole2 = true;
            state.hole3 = true;
            state.totalClick = 0;
            state.difficulty = false;
        }
    },
    
        
    // extraReducers: {
    // //     [fetchUsers.fulfilled.type] : (state, action: PayloadAction<IUsers[]>) => {
    // //         state.isLoading = false;
    // //         state.error = '';
    // //         state.users = action.payload;
    // //    },
    // //     [fetchUsers.pending.type] : (state) => {
    // //         state.isLoading = true;
    // //    },
    // //     [fetchUsers.rejected.type] : (state, action: PayloadAction<string>) => {
    // //         state.isLoading = false;
    // //         state.error = action.payload;
    // //    },

    // }
})


export default modalSlice.reducer