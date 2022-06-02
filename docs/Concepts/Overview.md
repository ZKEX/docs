---
sidebar_position: 1
---

# 📔 Overview

## What is ZKEX?

**ZKEX is a decentralized L2 multi-chain order book exchange (DEX), build on three ZK-rollups: zkLink, Starkware, and zkSync.**

**Users will be able to trade assets from multiple chains with a similar experience as on Binance or Coinbase, but instead, ZKEX will be decentralized, trust minimized, and non-custodial, with transactions secured with zero-knowledge proofs.**

Note: ZKEX is currently under development in preparation for devnet demo launch. These User Docs give an initial conceptual overview of the platform, and will be updated when the demo is ready.

**ZKEX only has the following official channels:**

- Website: https://zkex.com
- Twitter: https://twitter.com/ZKEX_Official
- Discord: https://discord.gg/ctDAYrrNTH
- Blog: https://zkex.medium.com

## Core Concepts

### L1 Networks

A Layer1 (L1) network is the underlying blockchain infrastructure. They are self-contained ecosystems that handle transactions, security, consensus, and data availability - for this reason trading on L1 is known as being ‘on-chain’.

For example, Ethereum or Solana are both L1 protocols, with their own different advantages.

### L2 Networks

A Layer2 (L2) network is a network built on top of one of more L1 blockchains. They rely on the underlying L1 network for security and data availability, but process transactions at higher scale on separate infrastructure - for this reason trading on L2 is known as being ‘off-chain’.

There are many types of L2 networks, with zero-knowledge rollups considered to be one of the most promising for enhanced scalability, privacy, and security.

### Zero-knowledge Rollups

A zero-knowledge rollup (ZK-rollup) is a way of using mathematics to verify the outcome of a transaction, and compress transaction data down to a minimum. A proof is generated, which is double-checked for judgement, after which the trade is confirmed as being successful, and written to the underlying L1 blockchain.

The advantages of this method are that it enables higher scalability (and lower gas fees), fast finality, and a high level guarantee that the transaction has not been faked or tampered with.

You can read more about ZK-Rollups in the <u>**[Security](Security.md)**</u> section.

### Order Book Matching Engine

A central limit order book (CLOB) is essentially a meeting place for buyers and sellers to be matched together to fulfil their trades. Although it works in a similar way as a centralised order book exchange, ZKEX’s order book is decentralized and permissionless, meaning there is no middle party, and the matching and execution is automated.

You can read more about order books in the <u>**[Trading](Trading.md)**</u> section.

## Issues With Decentralized Exchanges

A decentralized exchange (DEX) is a trading marketplace that allows secure peer to peer trading without any overseeing authority or custody of assets. An algorithm (in the form of code in a self-executing smart contract), rather than a middle party, checks to make sure both the buyer and seller complete their side of the trade on the platform.

Crypto traders on DEXes often encounter limited functionality while stuck on a single chain, volatile liquidity, and high gas fees.

### Limited functionality:

- Isolated blockchains: If someone has USDC on the ETH-20 network, but would like to trade on another chain, they can’t make the trade directly. Instead they would need to bridge their funds over using a separate service, which can be tedious, subject to extra fees, and potentially unsafe.
- Fewer trading strategies: Limit orders are missing from most DEXes, which prevents automated trading.

### Losses on Automated Market Maker (AMM) exchanges:

- Impermanent Loss: When assets inside a liquidity pool change in value, it often creates a discrepancy in asset prices. AMM liquidity pools rebalance the value of the assets, but this often causes a net loss in value for people contributing assets to the liquidity pool.
- Slippage: If the price of a token you are trading changes while you are in the process of purchasing it, you would get a different rate than you intended. This may happen because of limited liquidity in an AMM that dynamically changes the value of the tokens as a supply of one is depleted. Alternatively, this could be caused by the token changing in value in the time it takes the transaction to be confirmed.
- Maximal Extractable Value (MEV): The majority of MEV is conducted as hidden arbitrage in the form of Front/Back running and Sandwich attacks. Bad actors can extract profits by changing the order of transactions in a block, or inserting their own trades to push up or down prices.

### High costs and fees

- Gas fees: Some DEX protocols run inefficient smart contracts to oversee transactions, resulting in high gas fees, especially for multi step processes.
- Lack of micro-transactions: Due to gas fees, orders need to be above a certain value for transactions to be efficient.
