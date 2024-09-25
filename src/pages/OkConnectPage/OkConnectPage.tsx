import { FC, useMemo } from "react";
import { OKXTonConnect } from "okxconnect";

export const OkConnectPage: FC = () => {
  const okxTonConnect = useMemo(
    () =>
      new OKXTonConnect({
        metaData: {
          name: "TrialMiniApp",
          icon: "https://ton.vote/logo.png",
        },
      }),
    []
  );

  const okxTonAccount = useMemo(
    () => okxTonConnect?.account || null,
    [okxTonConnect]
  );

  return (
    <div>
      <h2>OkConnectPage</h2>
      <button
        onClick={() => {
          console.log("okxTonConnect", okxTonConnect.connect);

          okxTonConnect
            .connect({
              redirect: "tg://resolve",
              openUniversalLink: true,
            })
            // .connect()
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

      {okxTonAccount && <div>{okxTonAccount.address}</div>}
    </div>
  );
};
