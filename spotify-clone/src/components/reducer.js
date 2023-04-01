export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQB-p-SC41Rx9Cjlqz5ObOoMPa4MxQMoeKeboSyMizLFLSLR35uSDcC16EdwEOke1jSDXHhWFmM_1DgY60tXc_4wzCEkPF9NQGSIUN37hFWBeKMEwYbUNz3bxF0oUlvnJiiifBcabLtiZXaMeonZHBbbPweVlsIqgMhVPd__0n_iJtjNgLqYK-yE7fv8m5Dq6q0AH2Brz5ELSO2cBsAVIw",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
