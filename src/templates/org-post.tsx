import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default ({
  data: {
    orgContent: {
      html,
      meta: { title, date }
    },
    site: {
      siteMetadata: { title: siteTitle }
    }
  }
}) => (
  <Layout title={siteTitle}>
    <h1>{title}</h1>
    <small>{date}</small>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

export const pageQuery = graphql`
  query OrgBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    orgContent(fields: { slug: { eq: $slug } }) {
      html
      meta {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
