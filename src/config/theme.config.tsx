import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { ReactText } from "react";

interface ThemeConfigProps {
  children: JSX.Element;
}

export enum ThemPallet {
  bg = "#23272c",
  bg2 = "#36383b",
  purple = "#37d717",
  font_main = '"Poppins" , monospace ',
  error_main = "#dc0404",
  bg_error_main = "rgba(243,67,54,0.1)",
  success_main = "#00be03",
  bg_success_main = "rgba(182,187,186,0.1)",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemPallet.bg,
    },
    primary: {
      main: ThemPallet.purple,
    },
    secondary: {
      main: ThemPallet.bg2,
    },
  },
  typography: {
    fontFamily: ThemPallet.font_main,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.7em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemPallet.error_main}`,
          background: ThemPallet.bg_error_main,
        },
        standardSuccess: {
          border: `1px solid ${ThemPallet.success_main}`,
          background: ThemPallet.bg_success_main,
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeConfigProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
