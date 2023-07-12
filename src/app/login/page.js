"use client";

import ThemeProvider from "@/theme/themeProvider";
import { theme, Divider } from "antd";

import themeProvided from "./theme/theme.json";
import LoginCard from "./components/loginCard";

const App = () => {
  const { token } = theme.useToken();

  const styles = {
    backgroundLinearColor: {
      backgroundImage: `linear-gradient(to right, ${token.colorLink + "dd"}, ${
        token.colorLink + "cc"
      } 50%, white 50%, white 100%) `,
    },
    dividerStyle: { borderColor: "white", margin: 0 },
  };

  return (
    <ThemeProvider theme={themeProvided}>
      <div className="bg-[url('/some.png')] bg-cover w-full">
        <div className=" h-screen" style={styles.backgroundLinearColor}>
          <div className="p-5 absolute bottom-0 w-1/2">
            <p className="m-0 text-7xl font-semibold text-white">
              LGU<span className=" font-extralight"> - MDRRMO</span>
            </p>
            <Divider style={styles.dividerStyle} orientation="left">
              <p className=" text-white text-xl font-light">Some words</p>
            </Divider>
          </div>
          <LoginCard />
        </div>
      </div>
    </ThemeProvider>
  );
};
export default App;
