import React from "react";
import { useWeavy, WyChat } from "@weavy/uikit-react";

export function WeavyComponent() {
    useWeavy({
        url: "https://6e3fcad84c754a09a6ef01774ecabec9.weavy.io",
        tokenFactory: async () => "wyu_vw52Abttueff3NBxT4yGhoty4gSYtd4EHUWB"
    });

    return <WyChat uid="wyuidchat"></WyChat>;
}
