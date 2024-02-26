import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import Likeslice from "./Likeslice";
import searchslice from "./searchslice";


// Load state from local storage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("reduxState");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// Save state to local storage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("reduxState", serializedState);
//   } catch {
//     // ignore write errors
//   }
// };

// const persistedState = loadState();


const store=configureStore({
  reducer:{
 
    cart:cartslice,
    like:Likeslice,
    searchBar:searchslice,
  },
  // preloadedState: persistedState // Set initial state from local storage

})

// store.subscribe(() => {
//   saveState(store.getState()); // Save state to local storage on every state change
// });

export default store;