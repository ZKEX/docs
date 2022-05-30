// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ZKEX",
  tagline: "ZKEX",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ZKEX", // Usually your GitHub org/user name.
  projectName: "ZKEX", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // path: "/userdocs/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "",
          routeBasePath: "/userdocs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
          href: "https://zkex.com",
        },
        items: [
          // {
          //   href: "https://zkex.com",
          //   label: "Home",
          //   position: "left",
          //   target: "_self",
          //   className: "nav-link-btn",
          // },
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "userdocs",
          // },
          // { to: "/blog2", label: "Blog", position: "left" },

          {
            // type: "menu",
            to: "/userdocs/Concepts/Overview",
            label: " Help & Docs",
            position: "left",
            // docId: "userdocs",
          },

          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      // xfooter: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Introduction",
      //           to: "/docs/Introduction",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: "6b1a18be88692c3e0324585690151e87",
        indexName: "YOUR_INDEX_NAME",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: see doc section below
        appId: "YJNNA7Z7MU",
        // Optional: Algolia search parameters
        searchParameters: {},
        //... other Algolia params
      },
    }),
};

module.exports = config;
