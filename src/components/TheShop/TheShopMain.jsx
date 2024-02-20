import React, { useEffect } from "react";
import { useMortal } from "../../context/MortalContext";
import { Box, Button } from "@mui/material";

const TheShopMain = () => {
    const { mortalProduct, readMortalCombatProduct } = useMortal();

    useEffect(() => {
        readMortalCombatProduct();
    }, []);
    console.log(mortalProduct);

    if (!mortalProduct) {
        return <div>No mortalProduct available</div>;
    }
    return (
        <Box>
            <Box>
                <Box>
                    {mortalProduct.map((el) => (
                        <Box>
                            <Box>
                                <Button>NEW</Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TheShopMain;
