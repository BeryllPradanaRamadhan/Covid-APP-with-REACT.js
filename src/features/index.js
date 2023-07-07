import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/constants/provinces";

const caseSlice = createSlice({
    name: "Case Slice",
    initialState: {
        provinces: data.provinces,
    },
    reducers: {
        updateCase: (state, action) => {
            const { provinsi, status, jumlah } = action.payload;
            const index = state.provinces.findIndex(
                (item) => item.kota === provinsi
              );
              const foundProvinsi = state.provinces.find(
                (item) => item.kota === provinsi
              );
          
              if (status === "kasus") {
                state.provinces[index] = {
                  ...foundProvinsi,
                  kasus: parseInt(foundProvinsi.kasus) + parseInt(jumlah),
                };
              } else if (status === "sembuh") {
                state.provinces[index] = {
                  ...foundProvinsi,
                  sembuh: parseInt(foundProvinsi.sembuh) + parseInt(jumlah),
                };
              } else if (status === "meninggal") {
                state.provinces[index] = {
                  ...foundProvinsi,
                  meninggal: parseInt(foundProvinsi.meninggal) + parseInt(jumlah),
                };
              } else if (status === "dirawat") {
                state.provinces[index] = {
                  ...foundProvinsi,
                  dirawat: parseInt(foundProvinsi.dirawat) + parseInt(jumlah),
                };
              }
        }
    }
})

const caseReducer = caseSlice.reducer;


export const { updateCase } = caseSlice.actions;
export default caseReducer;