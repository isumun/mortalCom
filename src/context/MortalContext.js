import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const mortalContext = createContext();
export const useMortal = () => useContext(mortalContext);

const MortalContext = ({ children }) => {
    let API_MORTAL = "http://localhost:3000/mortal";

    const [mortalProduct, setMortalProduct] = useState([]);

    async function addMortalCombatPlus(newMortalCombotProduct) {
        await axios.post(API_MORTAL, newMortalCombotProduct);
    }

    async function readMortalCombatProduct() {
        const { mortal } = await axios(API_MORTAL);
        setMortalProduct(mortal);
    }

    console.log(mortalProduct);

    const values = {
        addMortalCombatPlus,
        mortalProduct,
        readMortalCombatProduct,
    };
    return (
        <mortalContext.Provider value={values}>
            {children}
        </mortalContext.Provider>
    );
};

export default MortalContext;
