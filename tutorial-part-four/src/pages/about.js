import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// For now, keep in mind that only pages can make page queries. 
// 上記のようなページクエリはpages以下、ページでのみ使用可能