// import React from "react";
// import { useTodos } from "../customHooks/useTodos";

// export const TodosContext = React.createContext()

// export const TodosContextsProvider = ({ children }) => {
//     const {
//         todos,
//         AddNewTodo,
//         DeleteTodo,
//         ChangeTodoStatus,
//         DeleteAllTodos
//       } = useTodos()

//       return (
//         <TodosContext.Provider value={
//             {
//                 todos,
//                 AddNewTodo,
//                 DeleteTodo,
//                 ChangeTodoStatus,
//                 DeleteAllTodos
//               }
//         }>

//                 { children }

//         </TodosContext.Provider>
//       )
//     }