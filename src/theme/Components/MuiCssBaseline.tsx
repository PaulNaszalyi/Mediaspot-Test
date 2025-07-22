import { Components, keyframes, Theme } from "@mui/material";

export const customTooltipAppearing = keyframes`0% {opacity: 0} 100% {opacity: 1}`;

const EuclideRegular = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-Regular.woff2') format('woff2'), url('EuclidCircularB-Regular.woff') format('woff')",
  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
};
const EuclideLight = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-Light.woff2') format('woff2'), url('EuclidCircularB-Light.woff') format('woff')",
  fontWeight: "300",
  fontStyle: "normal",
  fontDisplay: "swap",
};
const EuclideMedium = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-Medium.woff2') format('woff2'), url('EuclidCircularB-Medium.woff') format('woff')",
  fontWeight: "500",
  fontStyle: "normal",
  fontDisplay: "swap",
};
const EuclideSemibold = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-SemiBold.woff2') format('woff2'), url('EuclidCircularB-SemiBold.woff') format('woff')",
  fontWeight: "600",
  fontStyle: "normal",
  fontDisplay: "swap",
};
const EuclideBold = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-Bold.woff2') format('woff2'), url('EuclidCircularB-Bold.woff') format('woff')",
  fontWeight: "bold",
  fontStyle: "normal",
  fontDisplay: "swap",
};
const EuclideLightItalic = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-LightItalic.woff2') format('woff2'), url('EuclidCircularB-LightItalic.woff') format('woff')",
  fontWeight: "300",
  fontStyle: "italic",
  fontDisplay: "swap",
};
const EuclideRegularItalic = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-Italic.woff2') format('woff2'), url('EuclidCircularB-Italic.woff') format('woff')",
  fontWeight: "normal",
  fontStyle: "italic",
  fontDisplay: "swap",
};
const EuclideMediumItalic = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-MediumItalic.woff2') format('woff2'), url('EuclidCircularB-MediumItalic.woff') format('woff')",
  fontWeight: "500",
  fontStyle: "italic",
  fontDisplay: "swap",
};
const EuclideSemiboldItalic = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-SemiBoldItalic.woff2') format('woff2'), url('EuclidCircularB-SemiBoldItalic.woff') format('woff')",
  fontWeight: "600",
  fontStyle: "italic",
  fontDisplay: "swap",
};
const EuclideBoldItalic = {
  fontFamily: "Euclid Circular B",
  src: "url('./fonts/EuclidCircularB-BoldItalic.woff2') format('woff2'), url('EuclidCircularB-BoldItalic.woff') format('woff')",
  fontWeight: "bold",
  fontStyle: "italic",
  fontDisplay: "swap",
};

const MuiCssBaseline: NonNullable<Components<Theme>["MuiCssBaseline"]> = {
  styleOverrides: (theme) => ({
    html: [
      { "@font-face": EuclideLight },
      { "@font-face": EuclideRegular },
      { "@font-face": EuclideMedium },
      { "@font-face": EuclideSemibold },
      { "@font-face": EuclideBold },
      { "@font-face": EuclideLightItalic },
      { "@font-face": EuclideRegularItalic },
      { "@font-face": EuclideMediumItalic },
      { "@font-face": EuclideSemiboldItalic },
      { "@font-face": EuclideBoldItalic },
    ],
    figure: {
      padding: 0,
      margin: 0,
    },
    "ol, ul": {
      paddingLeft: 0,
      marginBottom: 0,
    },
    ul: {
      listStyle: "none",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
      cursor: "pointer",
    },
    button: {
      appearance: "none",
      ...theme.typography.button,
    },
    img: {
      maxWidth: "100%",
    },
    "::-webkit-scrollbar": {
      display: "none",
    },
    "html, body, .MuiDrawer-paper": {
      scrollbarWidth: "thin",
    },
    ".MuiCalendarPicker-root": {
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 4,
      ".MuiPickersDay-today": {
        "&:not(.Mui-selected)": {
          borderColor: "transparent",
          color: theme.palette.primary.text,
        },
      },
      ".MuiPickersDay-root": {
        color: theme.palette.text.secondary,
        transition: "all .3s",
        "&.hover": {
          boxShadow: `inset 0px 0px 0px 150px ${theme.palette.backgroundAlpha.hover}`,
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            boxShadow: `inset 0px 0px 0px 150px ${theme.palette.backgroundAlpha.hover}`,
          },
        },
      },
    },
    ".__floater__arrow": {
      opacity: 0,
      svg: {
        polygon: {
          fill: "#303049",
        },
      },
      animation: `${customTooltipAppearing} .3s .5s forwards`,
    },
    ".react-joyride__overlay": {
      height: "100vh !important",
    },
  }),
};

export default MuiCssBaseline;
