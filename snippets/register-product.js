const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/[YOUR-API-KEY]");
const wallet = new ethers.Wallet("[YOUR-PRIVATE-KEY]", provider);

const contractAddress = "0x[YourContractAddress]";
const contractABI = [/* ABI array */];
const farmilyContract = new ethers.Contract(contractAddress, contractABI, wallet);

async function registerProduct(productId, batchNumber, origin) {
  const tx = await farmilyContract.registerProduct(productId, batchNumber, origin, { gasLimit: 300000 });
  await tx.wait();
  console.log(`Product ${batchNumber} registered successfully! Transaction: ${tx.hash}`);
}

registerProduct("66f9af768996b012253fedbb", "CARROTS-001-2024", "Neymar’s Farms");
