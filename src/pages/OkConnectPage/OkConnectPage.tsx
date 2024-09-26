import { FC, useEffect, useMemo, useState } from "react";
import { OKXTonConnect } from "okxconnect";

export const OkConnectPage: FC = () => {
  const [address, setAddress] = useState("No linked wallet");

  const [count, setCount] = useState(0);

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

    console.log("count", count);
    console.log("okxTonConnect?.account", okxTonConnect?.account);
    console.log("okxTonConnect?.wallet", okxTonConnect?.wallet);
  }, [
    okxTonConnect,
    okxTonConnect?.connected,
    okxTonConnect?.account?.address,
    count,
  ]);

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
      <div>connected: {okxTonConnect?.connected}</div>

      <button onClick={() => setCount((p) => p + 1)}>count</button>
    </div>
  );
};
