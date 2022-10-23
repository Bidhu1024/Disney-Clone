import {createSlice} from '@reduxjs/toolkit'
import Recommends from './../../components/Recommends';
import NewDisney from './../../components/NewDisney';
import Originals from './../../components/Originals';
import Trending from './../../components/Trending';
const initialState={
    Recommends:null,
    NewDisney : null,
    Originals:null,
    Trending:null,

};

const movieSlice = createSlice({

    name:'movie',
    initialState,
    reducer:{
        setMovies:(state,action)=>{

            state.Recommends = action.payload.Recommends
            state.NewDisney = action.payload.NewDisney
            state.Originals = action.payload.Originals
            state.Trending = action.payload.Trending


        }
    }
})
export const {setMovies} = movieSlice.actions
export const selectRecommend = state =>state.movie.Recommend
export const selectNewDisney = state =>state.movie.NewDisney
export const selectOriginals = state =>state.movie.Originals
export const selectTrending = state =>state.movie.Trending

export default movieSlice.reducer;