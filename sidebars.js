/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    // {
    //   type: "doc",
    //   id: "intro",
    //   label: "intro",
    // },
    {
      type: "doc",
      id: "Overview",
      label: "Overview",
    },
    {
      type: "doc",
      id: "HowZKEXWorks",
      label: "HowZKEXWorks",
    },
    {
      type: "doc",
      id: "SupportedChainsAndCoins",
      label: "SupportedChainsAndCoins",
    },
    {
      type: "doc",
      id: "L2Wallet",
      label: "L2Wallet",
    },
    {
      type: "doc",
      id: "Trading",
      label: "Trading",
    },
    {
      type: "doc",
      id: "Fees",
      label: "Fees",
    },
    {
      type: "doc",
      id: "Security",
      label: "Security",
    },
    {
      type: "doc",
      id: "Tokenomics",
      label: "Tokenomics",
    },
    {
      type: "doc",
      id: "WhitePaper",
      label: "WhitePaper",
    },
    {
      type: "doc",
      id: "index",
      label: "index",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
