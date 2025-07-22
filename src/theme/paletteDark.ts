import { PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#2D6CE1", //former: #3368F4
    mainHover: "#3773E2", //former: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #3368F4
    mainPressed: "#2B67D6", //former: rgba(0, 53, 194, 0.1)
    text: "#4C8BFF", // former: "#4194FD"
    contrastText: "#FFFFFF",
    dark: "#141C35",
    alpha: "rgba(45, 108, 225, 0.15)", //former: "rgba(51, 104, 244, 0.15)",
    alphaHover: "rgba(45, 108, 225, 0.2)", //former: "rgba(0, 53, 194, 0.2)",
    alphaPressed: "rgba(45, 108, 225, 0.1)", //former: "rgba(0, 53, 194, 0.1)",
  },

  success: {
    main: "#1FC19A",
    mainHover: "#35E9BD",
    dark: "#0C4034", // onMain-Text
    alpha: "rgba(31, 193, 154, 0.25)",
    alphaHover: "rgba(31, 193, 154, 0.2)",
    alphaPressed: "rgba(31, 193, 154, 0.1)",
  },
  warning: {
    main: "#FCA464",
    mainHover: "#FFBE8F",
    dark: "#40220C", // onMain-Text
    alpha: "rgba(252, 164, 100, 0.15)",
    alphaHover: "rgba(252, 164, 100, 0.2)",
    alphaPressed: "rgba(252, 164, 100, 0.1)",
  },
  error: {
    main: "#ED6273",
    mainHover: "#FB8E9B",
    dark: "#40160C", // onMain-Text
    alpha: "rgba(237, 98, 115, 0.15)",
    alphaHover: "rgba(237, 98, 115, 0.2)",
    alphaPressed: "rgba(237, 98, 115, 0.1)",
  },
  info: {
    // aka purple
    main: "#A36EF9",
    mainHover: "#BA8BFC",
    dark: "#210C75", // onMain-Text
    alpha: "rgba(126, 63, 245, 0.15)",
    alphaHover: "rgba(126, 63, 245, 0.2)",
    alphaPressed: "rgba(126, 63, 245, 0.1)",
  },
  accent: {
    // aka yellow
    main: "#F7C035",
    mainHover: "#F9D372",
    contrastText: "#0E0E1B",
    alpha: "rgba(247, 192, 53, 0.15)",
    alphaHover: "rgba(247, 192, 53, 0.20)",
    alphaPressed: "rgba(247, 192, 53, 0.10)",
  },
  text: {
    primary: "#EFEFEF",
    secondary: "#9999AD",
    tier: "#7D7D96",
    placeholder: "#636369",
    disabled: "#363645",
    inverted: "#FFFFFF",
  },
  divider: "rgba(194, 194, 214, 0.1)",
  background: {
    page: "#020203",
    default: "#101018", //surface:01 former: #0E0E1B
    paper: "#181824", //surface:00 //former: "#14141F"
    200: "#202030", //former: "#161622"
    300: "#28283D", //former: #22222B
    400: "#303049", //former: #3B3B4E
    inverted: "#FFFFFF",
    alphaHover: "rgba(194, 194, 214, 0.08)", //former: rgba(255, 255, 255, 0.08)
  },
  backgroundAlpha: {
    main: "rgba(194, 194, 214, 0.06)", // former white 0.05
    hover: "rgba(194, 194, 214, 0.10)", // former white 0.08
    pressed: "rgba(194, 194, 214, 0.08)", // former white 0.03
    border: "rgba(194, 194, 214, 0.1)", // former white 0.1
    borderFocus: "rgba(194, 194, 214, 0.2)", // former white 0.2
  },
  //@TODO : industrialize + Figma
  backgroundBoldAlpha: {
    main: "rgba(194, 194, 214, 0.2)",
    hover: "rgba(194, 194, 214, 0.3)",
    pressed: "rgba(194, 194, 214, 0.15)",
    border: "rgba(194, 194, 214, 0.3)",
    borderFocus: "rgba(194, 194, 214, 0.4)",
  },
  absolute: {
    white: "#FFF",
    black: "#000",
  },
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    page: string;
    200: string;
    300: string;
    400: string;
    alphaHover: string;
    inverted: string;
  }

  interface TypeText {
    tier: string;
    placeholder: string;
    inverted: string;
  }

  interface Palette {
    accent: {
      main: string;
      mainHover: string;
      contrastText: string;
      alpha: string;
      alphaHover: string;
      alphaPressed: string;
    };
    backgroundAlpha: {
      main: string;
      hover: string;
      pressed: string;
      border: string;
      borderFocus: string;
    };
    backgroundBoldAlpha: {
      main: string;
      hover: string;
      pressed: string;
      border: string;
      borderFocus: string;
    };
    absolute: {
      white: string;
      black: string;
    };
  }

  interface PaletteOptions {
    accent: {
      main: string;
      mainHover: string;
      contrastText: string;
      alpha: string;
      alphaHover: string;
      alphaPressed: string;
    };
    backgroundAlpha: {
      main: string;
      hover: string;
      pressed: string;
      border: string;
      borderFocus: string;
    };
    backgroundBoldAlpha: {
      main: string;
      hover: string;
      pressed: string;
      border: string;
      borderFocus: string;
    };
    absolute: {
      white: string;
      black: string;
    };
  }

  interface PaletteColor {
    text?: string;
    mainHover?: string;
    mainPressed?: string;
    alpha?: string;
    alphaHover?: string;
    alphaPressed?: string;
  }
  interface SimplePaletteColorOptions {
    text?: string;
    mainHover?: string;
    mainPressed?: string;
    alpha?: string;
    alphaHover?: string;
    alphaPressed?: string;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    accent: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accent: true;
  }
}

export default palette;
