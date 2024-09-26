import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { OKXTonConnect } from "okxconnect";
import { Button, List, Placeholder, Text } from "@telegram-apps/telegram-ui";
import { DisplayData } from "@/components/DisplayData/DisplayData.tsx";

export const OkConnectPage: FC = () => {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("");

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

  const okxConnectHandle = useCallback(() => {
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
  }, [okxTonConnect]);

  useEffect(() => {
    const unsubscribe = okxTonConnect.onStatusChange((walletInfo) => {
      if (walletInfo) {
        setAddress(walletInfo.account.address);
        setChain(walletInfo.account.chain);
      }
    });

    return unsubscribe;
  }, [okxTonConnect]);

  if (!okxTonConnect.connected) {
    return (
      <Placeholder
        className="okx-connect-page__placeholder"
        header="Okx Connect"
        description={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>
              To display the data related to the Okx Connect, it is required to
              connect your wallet
            </Text>
            <Button mode="filled" size="s" onClick={okxConnectHandle}>
              Connect
            </Button>
          </div>
        }
      />
    );
  }

  return (
    <List>
      <DisplayData
        header="Account"
        rows={[
          { title: "Address", value: address },
          { title: "Chain", value: chain },
        ]}
      />
    </List>
  );
};
