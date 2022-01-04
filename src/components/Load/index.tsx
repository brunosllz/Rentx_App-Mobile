import React from "react";
import { useTheme } from "styled-components";

import { ActivityIndicator } from "react-native";

export function Load() {
    const theme = useTheme();

    return (
        <ActivityIndicator
            size={24}
            color={theme.COLORS.background_secondary}
        />
    );
}