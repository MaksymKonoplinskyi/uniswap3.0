import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x7B7927991429de0e2319796507957c4C02Ecbedc"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/0E3RzfF5ueQc69NQExg3FqKvK4Ila5wE",
  },
};