// import { create } from 'zustand';

// const useStoreServices = create((set) => ({
//   services: [],
//   addService: (data) => {
//     set((state) => {
//       {
//         const addData = Array.from(new Set([...state.services, data]));
//         let checkID = addData.filter((item) => item.ser_id == data.ser_id);
//         return{
//             ...state,
//             services: checkID
//         }
//       }
//     });
//   },
// }));

// export default useStoreServices;


import { create } from 'zustand'

const useStoreServices = create((set) => ({
  count: 1,
  services: [],

  inc: () => set((state) => ({ count: state.count + 1 })),
  addService: (data) => {
    set((state) => {
      {
        const addData = Array.from(new Set([...state.services, data]));
        const customData = addData.map((item) => {
          return {
            ser_id: item.ser_id,
            qty: 1,
            price: item.price,
          }
        })
        return {
          ...state,
          services: customData
        }
      }
    });
  },
}))

export default useStoreServices