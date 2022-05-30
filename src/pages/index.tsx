import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return null;
}

export default function Home(props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    props.history.replace("/userdocs/Concepts/Overview");
  }, []);
  return null;
}
