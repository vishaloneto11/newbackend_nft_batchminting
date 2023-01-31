require("dotenv").config();
const {AccountId,PrivateKey,Client,TokenCreateTransaction,TokenType,TokenSupplyType,TokenMintTransaction} = require("@hashgraph/sdk");

const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromStringECDSA(process.env.OPERATOR_PVKEY);
const client = Client.forTestnet().setOperator(operatorId, operatorKey);
// const supplyKey = PrivateKey.generateECDSA();
const supplyKey = PrivateKey.generateECDSA()

// CID = [
// 	"ipfs://QmeupL81dtiiqRfddqpjhB9LWQMTJzhQYS8cotg7vmpXrw",
// ];


async function main() {
	
	CID = [
        "ipfs://QmeupL81dtiiqRfddqpjhB9LWQMTJzhQYS8cotg7vmpXrw",
        "ipfs://QmVtdADvcA2R7BUreLLutoAGbwqfCFCWqSgaMrhPdAzAJw",
        "ipfs://QmejmjiiiTX26nh1TNDfnMtenHEa1DGkXAq2DFkU7X5bfc",
        "ipfs://QmU3Yp6M8MLxUpDh2ae36hA4QXq3DREYmAFvTsQPFusHqi",
        "ipfs://QmeSnpCHTHaWd2bnRYeKEyZzmpYTxjVavmedoBf9ejqa8o",

        ];
		 
	let nftCreate = await new TokenCreateTransaction()
		.setTokenName("THE SPACE COLLECTION OF KING")
		.setTokenSymbol("SPACE")
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
		console.log(`Created NFT ${tokenId} with serial: ${space[i].serials[0].low}`);
	}
	
	
	
    
	async function tokenMinterFcn(CID) {
		let mintTx = await  new TokenMintTransaction()
			.setTokenId(tokenId)
            .setMaxTransactionFee(3)
			.setMetadata([Buffer.from(CID)])
			.freezeWith(client);
		let mintTxSign = await mintTx.sign(supplyKey);
		let mintTxSubmit = await mintTxSign.execute(client);
		let mintRx = await mintTxSubmit.getReceipt(client);
        return mintRx
	}
	
  
	

}
main();