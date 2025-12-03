import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { IDL as GameIDL } from "../idl/coinflip";
import GameIDLJson from "../idl/coinflip.json";

export interface GlobalPool
{
  superAdmin: PublicKey; // 32
  loyaltyWallet: PublicKey; // 8
  loyaltyFee: anchor.BN; // 8
  totalRound: anchor.BN; // 8
}

export interface AccountData
{
  name: String;
  nftMint: PublicKey;
}

export interface GameData
{
  playTime: anchor.BN; // 8
  amount: anchor.BN; // 8
  rewardAmount: anchor.BN; // 8
  setNum: anchor.BN; // 8
  rand: anchor.BN; // 8
}

export interface PlayerPool
{
  // 8 + 104 = 112
  player: PublicKey; // 32
  round: anchor.BN; // 8
  gameData: GameData; // 40
  winTimes: anchor.BN; // 8
  receivedReward: anchor.BN; // 8
  claimableReward: anchor.BN; // 8
}

export const PLAYER_POOL_SIZE = 112;
export const LAMPORTS = 1000000000;
export const GLOBAL_AUTHORITY_SEED = "global-authority";
export const VAULT_AUTHORITY_SEED = "vault-authority";
export const PLAYER_POOL_SEED = "player-pool";

export const RPC_MAINNET = "https://quiet-aged-frog.solana-mainnet.quiknode.pro/6a56c0f12de472ff85a245955e5ff33d99704b1a/"
export const RPC_DEVNET = "https://delicate-withered-theorem.solana-devnet.quiknode.pro/0399d35b8b5de1ba358bd014f584ba88d7709bcf/";
export const RPC_CURRENT = RPC_MAINNET;

export const PROGRAM_ID = GameIDLJson.metadata.address;

export const NONCE = "4QUPibxi";

export const DISCORD_COINFLIP_NORMAL_CHANNELID = "1034779571637198858";
export const DISCORD_COINFLIP_ADMIN_CHANNELID = "1034452457599807528";

export interface HistoryItem
{
  address: string;
  bet_amount: number;
  block_hash: number;
  block_timestamp: number;
  signature: string;
  type: number;
  win: number;
}
