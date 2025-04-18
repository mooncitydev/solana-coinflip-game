import {Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import { web3 } from "@project-serum/anchor";
import { NETWORK } from "../config";
import {DISCORD_COINFLIP_ADMIN_CHANNELID, DISCORD_COINFLIP_NORMAL_CHANNELID, RPC_CURRENT} from "./type";
import axios from "axios";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";

export const solConnection = new web3.Connection(RPC_CURRENT, "confirmed");

export const getSolbalance = async (wallet: PublicKey) =>
{
  try
  {
    const balance = await solConnection.getBalance(wallet);
    return balance / LAMPORTS_PER_SOL;
  }
  catch (error)
  {
    console.log(error);
    return 0;
  }
};

export const getNetworkFromConnection: (connection: Connection) => WalletAdapterNetwork.Devnet | WalletAdapterNetwork.Mainnet = (connection: Connection) => {
    // @ts-ignore
    return connection._rpcEndpoint.includes('devnet') ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet;
}

export const getWalletPartiallyHidden = (walletAddress: PublicKey | null) => {
    const walletStr = walletAddress!.toString();
    const walletStart = walletStr.slice(0, 4);
    const walletEnd = walletStr.slice(-4);
    return `${walletStart}...${walletEnd}`
}

export const postWinOrLoseToDiscordAPI = async (userWallet: PublicKey, isWon: boolean, betAmount: any, connection: Connection) => {
    const wonEmoji = `<a:deezkits_confetti:1029282324170407936>`;
    const catPartyEmoji = `<a:deezkitsparty2:1029282335549558804>`;

    let message = ``;

    if (isWon)
    {
        message += `WOW! what a flip! \nA cool Kit just **Won** \`${betAmount*2}\` SOL ${wonEmoji} with a bet of \`${betAmount}\``;
    }
    else
    {
        message += `A Kit almost won \`${betAmount}\` SOL, better flip next time ${catPartyEmoji}`;
    }

    message += `\n\n> Wallet: \`${getWalletPartiallyHidden(userWallet)}\` \n`;

    await postToDiscordApi(message, DISCORD_COINFLIP_NORMAL_CHANNELID, getNetworkFromConnection(connection));
}

export const postWithdrawToDiscordAPI = async (userWallet: PublicKey | null, balance: any, connection: Connection, bankBalance: any, txSignature: string) => {
    let message = `\`${userWallet!.toString()}\``;
    message += `\n> Is asking to withdraw \`${balance}\` SOL`;
    message += `\n> Bank Balance \`${bankBalance}\` SOL`;

    const sigLink = `[${txSignature}](https://solscan.io/tx/${txSignature})`;
    message += `\n> Tx Signature: ${sigLink}`;

    await postToDiscordApi(message, DISCORD_COINFLIP_ADMIN_CHANNELID, getNetworkFromConnection(connection)); // coinflip/slots-admin
}

export const postToDiscordApi = async (message: string, channelId: string, network: string) => {
  return await axios.post("https://api.servica.io/extorio/apis/general",
      {
        method: "postDiscordDeezCoinFlip",
        params:
            {
              token: "tok41462952672239",
              channelId: channelId,
              message: message,
              network: network
            },
      });
}

export const filterError = (error: number) =>
{
  switch (error) {
    case 6000:
      return "Invalid Player Pool Owner";
    case 6001:
      return "Invalid Admin to Withdraw";
    case 6002:
      return "Invalid Reward Vault to receive";
    case 6003:
      return "Insufficient Bank SOL Balance";
    case 6004:
      return "Transaction failed, not enough balance";
    default:
      return "Unknown Error";
  }
};
