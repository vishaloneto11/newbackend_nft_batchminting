require("dotenv").config();
const {
  AccountId,
  PrivateKey,
  Client,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  TokenMintTransaction,
} = require("@hashgraph/sdk");

const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromStringECDSA(process.env.OPERATOR_PVKEY);
const client = Client.forTestnet().setOperator(operatorId, operatorKey);

const supplyKey = PrivateKey.generateECDSA();

async function main() {
  CID = [
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://",
    "ipfs://QmQ7QfegbWKpfuwUPGLptZzndy5Nbkgii4HCoDv9VCiSJ9",
    "ipfs://QmczcRUhFNJX8mQhkusx9DXdraRJhn6HLFKAC7wzrdh9xi",
    "ipfs://Qme1nJBN7TUJRzCVLZiSReeNtwKyNEpWFtNt1BSiDX3eQF",
    "ipfs://QmaS2KkL3ZqnYK4hZ6TkTxEhb5hUHyw6hS2X5vZTLRbJKj",
  ];

  let nftCreate = await new TokenCreateTransaction()
    .setTokenName("The World of NFT Oneto11")
    .setTokenSymbol("ONETO11WORLD")
    .setTokenType(TokenType.NonFungibleUnique)
    .setDecimals(0)
    .setInitialSupply(0)
    .setTreasuryAccountId(operatorId)
    .setSupplyType(TokenSupplyType.Finite)
    .setMaxSupply(CID.length)
    .setSupplyKey(supplyKey)
    .freezeWith(client);

  let nftCreateTxSign = await nftCreate.sign(operatorKey);
  let nftCreateSubmit = await nftCreateTxSign.execute(client);
  let nftCreateRx = await nftCreateSubmit.getReceipt(client);
  let tokenId = nftCreateRx.tokenId;
  console.log(`- Created NFT with Token ID: ${tokenId} \n`);

  // MINTING NEW BATCH OF NFTS FIRST
  space = [];

  for (var i = 0; i < CID.length; i++) {
    space[i] = await tokenMinterFcn(CID[i]);
    console.log(
      // `Created NFT ${tokenId} with serial: ${space[j]}`
      `Created NFT ${tokenId} with serial: ${space[i].serials[0].low}`
    );
  }

  async function tokenMinterFcn(CID) {
    let mintTx = await new TokenMintTransaction()
      .setTokenId(tokenId)
      .setMaxTransactionFee(3)
      .setMetadata([Buffer.from(CID)])
      .freezeWith(client);
    let mintTxSign = await mintTx.sign(supplyKey);
    let mintTxSubmit = await mintTxSign.execute(client);
    let mintRx = await mintTxSubmit.getReceipt(client);
    return mintRx;
  }
}
main();
