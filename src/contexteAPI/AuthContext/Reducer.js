export const set_Loading ="SET_LOADING"
export const set_User = "SET_USER"
export const isLoged="SET_ISLOGGED"
export const logout="SET_LOGOUT"

const Reducer=(state,action)=>{

    switch(action.type){

        case set_Loading:
            return {
                ...state,
                loading : action.payload
            };
        case set_User:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case isLoged:
            return {
                ...state,
                isloged: !!state.user
            };
        case logout:
            return{
                ...state,
                user:null,
                isLoged: false,
                loading : false
            }    
        default:
            return state          
    }
}

export default Reducer;