import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'Error',
    LOADING: "loading",
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        
    },
    reducers: {
        // setProducts(state, action) {
        //     //here state points to the initial state
        //     //actions points out to the action that are going to be performed 
        //     //action.payload points out to the state that is going to be updated
        //     state.data = action.payload;
        // },
        // setStatus(state, action){
        //     state.status = action.payload
        // }
        // remove(state, action) {
        //   return state.filter(item => item.id !== action.payload);
        // },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state, actions) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, actions) => {
            state.data = actions.payload
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, actions) => {
            state.status = STATUSES.ERROR;
        })
    }
    
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;



//Thunks

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json();
                return data;
})

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
            
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }