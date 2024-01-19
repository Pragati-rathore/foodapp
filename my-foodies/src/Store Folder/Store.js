import { configureStore } from '@reduxjs/toolkit';
import NavBarSlice from "./Slice Folder/NavBarSlice"
import AddressTypeSlice from './Slice Folder/AddressTypeSlice';

const Store =configureStore({
  reducer:{
    NavBarChng :NavBarSlice,
    AddressTypeShowSlice:AddressTypeSlice

  }
})
export default Store;