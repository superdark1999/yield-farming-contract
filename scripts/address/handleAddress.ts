import path from "path";
import fs from "fs";

const pathToAddress = path.join(__dirname, "./address.json");

export const getAllAddresses = (chainId?: any) => {
  const addressFileContent = JSON.parse(
    fs.readFileSync(pathToAddress, "utf-8")
  );

  const addressList = addressFileContent[chainId];
  return addressList;
};

export const getAddress = (contractName: string, chainId?: any) => {
  const addressFileContent = JSON.parse(
    fs.readFileSync(pathToAddress, "utf-8")
  );

  const address = addressFileContent[chainId][contractName];
  return address;
};

export const setAddress = (
  contractName: string,
  address: string,
  chainId?: any
) => {
  const addressFileContent = JSON.parse(
    fs.readFileSync(pathToAddress, "utf-8")
  );

  addressFileContent[chainId][contractName] = address;

  fs.writeFileSync(pathToAddress, JSON.stringify(addressFileContent), "utf-8");
};
