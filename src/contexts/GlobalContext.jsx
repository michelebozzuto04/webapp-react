import { createContext, useState, useContext } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {

    const [loading, setLoading] = useState(true);

    return (
        <GlobalContext.Provider value={{
            loading,
            setLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }