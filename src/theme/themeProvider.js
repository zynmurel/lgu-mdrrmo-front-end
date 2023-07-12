"use client";

import { ConfigProvider } from "antd";

const ThemeProvider = ({ children, theme }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
