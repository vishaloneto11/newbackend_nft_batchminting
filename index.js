require("dotenv").config();
const {AccountId,PrivateKey,Client,TokenCreateTransaction,TokenType,TokenSupplyType,TokenMintTransaction} = require("@hashgraph/sdk");

const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromStringECDSA(process.env.OPERATOR_PVKEY);
const client = Client.forTestnet().setOperator(operatorId, operatorKey);

const supplyKey = PrivateKey.generateECDSA()



async function main() {
	
	CID = [
        "ipfs://Qma2NgrWcPgFErxQvM3oybMUofQmEbR2HH1SCEYR9XEPpp",
"ipfs://QmSRhYaDkqVPKf4cJoQxXWkKkthMRU4AuqUAg6yGZC6MCc",
"ipfs://QmRLCS6ybdTRGaJeyr9rV3QAtSvnAtHRhScsYQhpgLyX1a",
"ipfs://Qmc3iXMYVKxrXadDQZsQuQycAE5C79tqDzuSAZxX5pLBGe",
"ipfs://QmNePAkpHdynvf6keQhLVEyB9DUH9WxBajb5ceS9vyGDue",
"ipfs://QmPKpHYVb7SVWqpgSvoKzRr1F9yZ5mw5ek2aocS2xYCxZB",
"ipfs://QmYbX3hVJqVcQKTPEUE3yPVVp5DatbEXvoqPad8Ysbj5dE",
"ipfs://QmTUXcFvNQmAc1F9GSmspVz4YNgBgHXoateaNkHYp2NGrZ",
"ipfs://Qme5yyqy7Ab4TCfcyVDE1oqhHDqmTmVZamKEyKd5uDcZFG",
"ipfs://QmdYeMVRUAPpCCFcYn5E4aeaCvTsd7pCgjyDjMvNXN12Lu",
"ipfs://QmaAma2pU6gG2tFHJwc1kKmheE1z4FGGohyicFAT8CEaYR",
"ipfs://QmconMUpYN88ghjtWModKH3vF3wJWK8dLWCkj1uNPuXdEf",
"ipfs://Qma7Mu3N7gUXkS3qTyEGUc1euHmeQGbHsEbAEdZSRV3yqN",
"ipfs://QmSrsywmymyYiN2QYUvEjC3hVfbPSfniN5ynwefVqY8dWq",
"ipfs://Qmc4vgK4CRxdWxjVTeeBghDRmE4NKE6aBo2ngzbHN6cSif",
"ipfs://QmRoZYrjc8PsxnxBSFnpmp6nDkNkoG4p7YcEz5CHgcTDpc",
"ipfs://Qmev73BHrKGZ62LeFZ6sMBS1xMeXunmqaPN7gTtJ8E4Y7T",
"ipfs://QmVo63YbZJp5ha6SZyYK46F3qjGp56a4F5ueT9JasMdK93",
"ipfs://QmYPEdqc7prSm17nyTmPZ5TUBWoYUcCz5eAYYo8UnmtfFn",
"ipfs://Qmdp3g7GB9V6tKHAha4JzysMarQV93HnM18ntskXyw1sWc",
"ipfs://QmZxnjea1dJNE4WUaJU9t1AXnWqDRbKFjVsJL99XzDZ4wo",
"ipfs://QmXBChVTDBRfJ4W8g1mNfgWX53BfBLzE814mo8gc4wuLBr",
"ipfs://QmZYu4xotwAXFZvESF2st8b3en35FTQXRCxFg53Vaq2LAM",
"ipfs://QmWjksL1VfSAZVkW1EiFT6zZeE6CUTe4jeoLoY1Bv6dwyw",
"ipfs://Qmb6noDLojn2BCBGzdaFDsgidA6qKZ5PrC5q9osan5GbYk",
"ipfs://QmWtioAvnGFZEQTPS1PffJWvpggJbPPRq7Tur8mm2cUBCU",
"ipfs://QmbV4WqgjqNCn1YhjLtqCJxkDFGkRpraC6kpaa2dsut2Fd",
"ipfs://QmSXJiE2yE6TkKzeVrttPn7EbHcNsC98NxG4xUqQVe1SBc",
"ipfs://QmVzV7QZhGqLiUYZMqnq4y7bVizj2MQ3PyZBP5edxREP1U",
"ipfs://QmVmSHyNbH8ym4oGW1VdCNFp91q8gKzbNCxrEDgSXTR4sn",
"ipfs://QmQJJu3rWbVCypBJAU5K2gtLtPQqRE92ojjKssKBzmWmQR",
"ipfs://QmY2Pe9gXEt74QRznMWHLW7AMBsMUCXEFjyYmU8bv2sVvU",
"ipfs://Qmcp6kSz3EYxg3jhczRKXRyt9MN5e9xUcoQxPxDyFymv99",
"ipfs://QmcikhSrqP2Ud2tfsQWDtFiewsaT3prxkGRtJkqZh1LEug",
"ipfs://QmVzkTApTAHqskkUKtRLutumkYGCyeQdgkjPpTpoytnk5s",
"ipfs://QmZzv8DyX7RfwmCDcZ4DFjyTgNs7BaCbfFb8XXftBn1eEM",
"ipfs://QmbjWFoExe9DYAAYgbHhPmM4EMWzTBYA7vLcpBGqkgBi3m",
"ipfs://Qmd32gBb5JgnrUkMcgYBCjfLtywc2iXWnT2pweY81LYyof",
"ipfs://QmPM6XW9CLvcUr5kNeg9Arac95ns34xqSht61h2pi5aB4H",
"ipfs://QmWSX2CqNdtLbnninunZjp6phNMjsSSDyUhD1omNwYzo3P",
"ipfs://QmYjcrmSg2r8vPjrntu4wMC84Fx2fyMAcDX8Astj1UtMnY",
"ipfs://QmXED79xxZmWc6Tux1WgpNuy2rvH3Jc3RH3wmHv6tzykpw",
"ipfs://QmTtURLw7TeZTQpymuUGoSWsvKNCcJgxBUq7FAAhkjam6E",
"ipfs://QmXwo4PeNcY9BBiu1kdBGazByCVMCtV2Lgo8kU6tQa7Prt",
"ipfs://QmfH1bTMG9f56SD5QcL2bfqmCmUL1LZkEEHHovuQHLAvQb",
"ipfs://QmedjpWfgHwGqu3aXTuW3AmYYXjhuaJ2m3nP5EKoWxTJCm",
"ipfs://Qma1BZKdbffBHTw8ZaajKWVrwpihvCFU6wAh2PXBqcdQcS",
"ipfs://QmVCjwRRzdvxCmVS1JZjtmZ88E8sfZCuA68cLSQpu6Edmy",
"ipfs://QmQMtsGEtBMVfJ6sHt76nsSekf8nJ4HE2adZYC8AAyokH4",
"ipfs://QmRb52KFhng2whwyz82d4QUsCxSMTMveQNhkw41uZJRQmb",


        ];
		 
	let nftCreate = await new TokenCreateTransaction()
		.setTokenName("THE SPHERA WORLD")
		.setTokenSymbol("SPHERA")
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