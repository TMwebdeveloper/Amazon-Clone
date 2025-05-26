// // import React, { useState, createContext, useContext } from "react"

// // const colorContext = createContext()

// // export const useColor =()=>{
// //     return useContext(colorContext)
// // }

// // export const ThemeProvider=(children) =>{
// //     const [color,setcolor] =useState("light")

// //     const colorToggler =()=>{
// //         setcolor((pre) =>pre==="light"? "dark":"")
// //     }

// //     return (
// //       <colorContext.Provider value={{ color, colorToggler }}>
// //         {children}
// //       </colorContext.Provider>
// //     );
// // }