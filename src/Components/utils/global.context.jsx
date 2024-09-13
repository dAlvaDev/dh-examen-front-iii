import {createContext} from 'react';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    // Aqui deberan implementar la logica propia del Context utilizando el hook useMemo

    return (
        <ContextProvider value={{}}>
            {children}
        </ContextProvider>
    );
};