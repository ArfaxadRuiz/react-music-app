const initialState = [];

export default function libraryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SONG':
      // Evitar duplicados por ID
      if (state.some(song => song.idArtist === action.payload.idArtist)) {
        return state;
      }
      return [...state, action.payload];

    case 'REMOVE_SONG':
      return state.filter(song => song.idArtist !== action.payload);

    default:
      return state;
  }
}