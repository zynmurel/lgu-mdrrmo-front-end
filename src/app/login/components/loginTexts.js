import { Image, Divider, theme } from "antd";
const LoginText = () => {
  const { token } = theme.useToken();

  const styles = {
    backgroundLinearColor: {
      backgroundImage: `linear-gradient(to right, ${token.colorLink + "bb"}, ${
        token.colorLink + "bb"
      }`,
    },
    dividerStyle: { borderColor: "white", margin: 0 },
  };
  return (
    <div
      style={styles.backgroundLinearColor}
      className=" hidden lg:flex flex-col justify-center items-center  p-20 flex-1 bg-cover text-white rounded-r-3xl"
    >
      <div className=" border-2 border-white border-solid rounded-full">
        <Image
          src="/lgu_imgs/logo.png"
          preview={false}
          width={150}
          alt="sevilla_logo_bg"
        />
      </div>
      <p className=" font-semibold text-6xl m-0 mt-5">SEVILLA</p>
      <Divider style={styles.dividerStyle}>
        <p className="m-0 text-2xl font-semibold text-white">
          LGU<span className=" font-extralight"> - MDRRMO</span>
        </p>
      </Divider>
      <p className=" text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        ultricies, eros vel sagittis volutpat, mauris dolor lacinia quam, eget
        mollis erat nulla dignissim elit. Phasellus condimentum ultricies odio
        id auctor.
      </p>
    </div>
  );
};

export default LoginText;
