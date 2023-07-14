"use client";

import ThemeProvider from "../../theme/themeProvider";
import { theme } from "antd";

import themeProvided from "./theme/theme.json";
import LoginForm from "./components/loginForm";
import LoginText from "./components/loginTexts";

const App = () => {
  const { token } = theme.useToken();

  const styles = {
    backgroundLinearColor: {
      backgroundImage: `linear-gradient(to right, ${token.colorLink + "bb"}, ${
        token.colorLink + "aa"
      } 50%, #fffffffa 50%, #fffffffa 100%) `,
    },
  };

  const bodyStyles = {
    padding: 0,
    backgroundImage: `linear-gradient(to right, ${token.colorLink + "bb"}, ${
      token.colorLink + "bb"
    }`,
  };

  return (
    <ThemeProvider theme={themeProvided}>
      <div className="bg-[url('/lgu_imgs/bgOverlay.png')] bg-cover w-full">
        <div className=" h-screen " style={styles.backgroundLinearColor}>
          <img
            src="/lgu_imgs/logo.png"
            width={900}
            className=" fixed -right-32 opacity-5 -bottom-32"
            alt="sevilla_logo"
          />
          <div
            style={bodyStyles}
            className=" shadow-2xl shadow-black/40 p-0  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-loginBaseWidth w-loginMdWidth rounded-3xl"
          >
            <div className=" flex flex-row rounded-3xl bg-[url('/lgu_imgs/bgOverlay.png')]">
              <LoginForm />
              <LoginText />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default App;
