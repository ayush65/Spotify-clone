export  const initialState = {

    user: null,
    playlists: [] ,
    playing: false,
    item: null,
    //token: '1pYUYRkUJjWCuuq8vZaGgy97FyCRzNo7JusaTYbCJSnXwzcyqOzdRlvbw6FKyDZj5XU1bsLKFqcg7bnu2_L-oqB3JDF7ugmT91BnQdy4VqMmR4ek9id4C4GRIw_cwKIW1W7GIW5lN35CbrkgmsGHYky_1u_gfe1sBELNc6XD_cbdcOlv',


};



const reducer = (state , action )  => {


    console.log(action);

    switch(action.type) {

        case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
        
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      default:
        return state;

    }

}


export default reducer;
