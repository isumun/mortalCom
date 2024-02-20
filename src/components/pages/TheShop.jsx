import React from "react";

import TheShopMain from "../TheShop/TheShopMain";
import TheShopMainHeader from "../TheShop/TheShopHeader";
import TheShopMainBlock from "../TheShop/TheShopMainBlock";
import TheShopGetOver from "../TheShop/TheShopGetOver";
import TheShopSave from "../TheShop/TheShopSave";

const TheShop = () => {
    return (
        <div>
            <TheShopMainHeader />
            <TheShopMainBlock />
            <TheShopMain />
            <TheShopGetOver />
            <TheShopSave />
        </div>
    );
};

export default TheShop;
