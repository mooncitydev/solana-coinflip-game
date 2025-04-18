import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Coinflip } from "../target/types/coinflip";

describe("coinflip", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Coinflip as Program<Coinflip>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
