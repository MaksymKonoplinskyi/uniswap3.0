import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xC03544Ed7E965A1aF337d9cfb49a9f50cB463021"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/0E3RzfF5ueQc69NQExg3FqKvK4Ila5wE",
  },
};