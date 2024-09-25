import { FC } from "react";
import { OKXTonConnect } from "okxconnect";

export const OkConnectPage: FC = () => {
  return (
    <div>
      <h2>OkConnectPage</h2>
      <button
        onClick={() => {
          const okxTonConnect = new OKXTonConnect({
            metaData: {
              name: "TrialMiniApp",
              icon: "https://ton.vote/logo.png",
            },
          });

          console.log("okxTonConnect", okxTonConnect.provider);

          okxTonConnect
            .connect({
              // redirect: "tg://t.me/Elara007Bot/trial",
              redirect: "tg://resolve",
              openUniversalLink: true,
            })
            .then((res) => {
              console.log("tg-res", res);
            })
            .catch((error) => {
              console.log("tg-error", error);
            });
        }}
      >
        Connect
      </button>
    </div>
  );
};
