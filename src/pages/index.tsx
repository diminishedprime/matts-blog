import { graphql } from "gatsby";
import React from "react";

import Bio from "../components/bio";
import { StyledLink } from "../components/common";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PostEntry = ({
  node: {
    fields: { slug },
    excerpt,
    frontmatter: { title = slug, date }
  }
}) => {
  return (
    <div key={slug}>
      <h3>
        <StyledLink to={slug}>{title}</StyledLink>
      </h3>
      <small>{date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: excerpt
        }}
      />
    </div>
  );
};

export default ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    },
    allMarkdownRemark: { edges: posts }
  },
  location
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Bio />
    {posts.map(PostEntry)}
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
