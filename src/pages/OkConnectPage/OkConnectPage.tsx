import { FC, useEffect, useMemo, useState } from "react";
import { OKXTonConnect } from "okxconnect";

export const OkConnectPage: FC = () => {
  const [address, setAddress] = useState("No linked wallet");

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

  useEffect(() => {
    if (okxTonConnect?.connected && okxTonConnect?.account?.address) {
      setAddress(okxTonConnect?.account?.address);
    }
  }, [okxTonConnect?.connected, okxTonConnect?.account?.address]);

  return (
    <div>
      <h2>OkConnectPage</h2>
      <button
        onClick={() => {
          console.log("okxTonConnect", okxTonConnect);

          okxTonConnect
            .connect({
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

      <div>address: {address}</div>
    </div>
  );
};
