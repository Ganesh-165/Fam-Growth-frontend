import React, { Children, useState } from 'react';
import { createContext } from 'react';

const DataContext=createContext()

export function DataProvier(){
    const [accessToken,setAccessToken]=useState("")
    return (
        <DataContext.Provider value={{accessToken,setAccessToken}}>
            {Children}
        </DataContext.Provider>
    )
}

