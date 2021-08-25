
interface Actions {
    type : string,
    payload : number
}
const initialState : number = 0;
export default function reducer (state : number = initialState , actions : Actions) : any {
    switch (actions.type)
    {
        case 'add' : 
            return state + actions.payload;
        case 'subtract' : return state - actions.payload;
        case 'multiply' : return state * actions.payload;
        default :return  state
    }
}