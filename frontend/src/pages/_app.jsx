import "../styles/style.scss";
import Wallet from "../components/wallet/Wallet";
import { ToastContainer } from "react-toastify";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

function RaffleApp({ Component, pageProps }) {
  return (
    <Wallet>
      <WalletModalProvider>
        <Component {...pageProps} />
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ fontSize: 14 }} 
        />
      </WalletModalProvider>
    </Wallet>
  );
}

export default RaffleApp;
