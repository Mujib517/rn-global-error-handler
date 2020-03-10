import React from "react";
import { Button } from "react-native";

export default () => {
    const onBtnPress = () => {
        throw new Error("Failed!");
    };

    return <Button onPress={onBtnPress} title="Click Me"></Button>
}