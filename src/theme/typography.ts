import { TypographyOptions } from "@mui/material/styles/createTypography";

export const defaultFontFamily = ["Euclid Circular B", "Inter", "Helvetica Neue", "Arial", "sans-serif"].join(",");

const typography: TypographyOptions = {
  fontFamily: defaultFontFamily,
  fontSize: 14,
  h1: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    fontWeight: 700,
    "@media(max-width:1281px)": {
      fontSize: "2.5rem",
      lineHeight: "3rem",
    },
  },
  h2: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
    fontWeight: 700,
    "@media(max-width:1281px)": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 500,
    "@media(max-width:1281px)": {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    fontWeight: 500,
    "@media(max-width:1281px)": {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
    },
  },
  h5: {
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    fontWeight: 500,
    "@media(max-width:1281px)": {
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
  },
  h6: {
    fontSize: "0.625rem",
    lineHeight: "0.75rem",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 1,
    "@media(max-width:1281px)": {
      fontSize: ".5rem",
      lineHeight: ".75rem",
    },
  },
  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    "@media(max-width:1281px)": {
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
  },
  subtitle2: {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    "@media(max-width:1281px)": {
      fontSize: ".875rem",
      lineHeight: "1rem",
    },
  },
  body1: {
    fontSize: "0.938rem",
    lineHeight: "1.25rem",
    "@media(max-width:1281px)": {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  },

  body2: {
    fontSize: ".813rem",
    lineHeight: "1rem",
    "@media(max-width:1281px)": {
      fontSize: ".75rem",
      lineHeight: ".75rem",
    },
  },
  button: {
    fontSize: "0.938rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    textTransform: "none",
    "@media(max-width:1281px)": {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  },
  buttonLarge: {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    // "@media(max-width:1281px)": {
    //   fontSize: "1rem",
    //   lineHeight: "1.25rem",
    // },
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    buttonLarge: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonLarge?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonLarge: true;
    body1: true;
    body2: true;
  }

  interface TypographyPropsColorOverrides {
    white: true;
    transparency: true;
  }
}

export default typography;
