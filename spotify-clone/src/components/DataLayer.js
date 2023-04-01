import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(StateContext);
