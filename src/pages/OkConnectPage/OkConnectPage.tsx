import { FC, useMemo } from "react";
import { OKXTonConnect } from "okxconnect";

export const OkConnectPage: FC = () => {
  const okxTonConnect = useMemo(
    () =>
      new OKXTonConnect({
        metaData: {
          name: "NanonFish",
          icon: "https://playeroneworld.s3.ap-southeast-1.amazonaws.com/test/happyaqugame.png",
        },
      }),
    []
  );

  return (
    <div>
      <h2>OkConnectPage</h2>
      <button
        onClick={() => {
          // const okxTonConnect = new OKXTonConnect({
          //   metaData: {
          //     name: "NanonFish",
          //     icon: "https://playeroneworld.s3.ap-southeast-1.amazonaws.com/test/happyaqugame.png",
          //   },
          // });

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
    </div>
  );
};

//   // okxTon的链接
//   async okxTonConnectHandle():Promise<boolean> {
//     try {
//         const okxTonConnect = new OKXTonConnectSDK.OKXTonConnect({
//             metaData: {
//                 name: "NanonFish",
//                 icon: "https://playeroneworld.s3.ap-southeast-1.amazonaws.com/test/happyaqugame.png"
//             }
//         });
//         console.log("okxTonConnect:" , okxTonConnect);
//         await okxTonConnect.connect({
//             redirect: "https://t.me/NanonFishBot/NanonFish",
//             openUniversalLink: true
//         });
//         return true;
//     } catch (error) {
//         if (error.code === OKXTonConnectSDK.OKX_CONNECT_ERROR_CODES.USER_REJECTS_ERROR) {
//             alert('User reject');
//         } else if (error.code === OKXTonConnectSDK.OKX_CONNECT_ERROR_CODES.ALREADY_CONNECTED_ERROR) {
//             alert('Already connected');
//         } else {
//             alert('Unknown error happened');
//         }
//         return false;
//     }

// }
