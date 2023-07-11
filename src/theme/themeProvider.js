"use client";

import { ConfigProvider } from "antd";
import theme from "./theme.json";

const ThemeProvider = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
