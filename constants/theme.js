import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLOURS = { 
    // base theme colours
    primary: "#0B5345", // forest green
    secondary : "#606d87", // grey

    // other colours
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGrey: "#eff2f5",
    grey: "#BEC1D2",
    lightGreen: "#38d17d",
    yellow: "#faf19d"
};

export const SIZES = {
    // global sizing
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizing
    mainTitle: 50,
    header1: 30,
    header2: 22,
    header3: 16,
    header4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    mainTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.mainTitle, lineHeight: 55 },
    header1: { fontFamily: "Roboto-Black", fontSize: SIZES.header1, lineHeight: 36 },
    header2: { fontFamily: "Roboto-Bold", fontSize: SIZES.header2, lineHeight: 30 },
    header3: { fontFamily: "Roboto-Bold", fontSize: SIZES.header3, lineHeight: 22 },
    header4: { fontFamily: "Roboto-Bold", fontSize: SIZES.header4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLOURS, SIZES, FONTS };

export default appTheme;