import { graphql, Link } from "gatsby";
import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import MjhScales from "../components/mjh-scales";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "mjh-scales": MjhScales
  }
}).Compiler;

const StyledNextPrevious = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const NextPrevious = ({ previous, next }) => (
  <StyledNextPrevious>
    <li>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </Link>
      )}
    </li>
    <li>
      {next && (
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      )}
    </li>
  </StyledNextPrevious>
);

export default ({
  data: {
    markdownRemark: {
      htmlAst,
      excerpt,
      frontmatter: { title, date, seo = [] },
      tableOfContents
    },
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  pageContext: { previous, next }
}) => (
  <Layout title={siteTitle}>
    <SEO title={title} description={excerpt} keywords={seo} />
    <h1>{title}</h1>
    <p>{date}</p>
    <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
    {renderAst(htmlAst)}
    <hr />
    <Bio />
    <NextPrevious previous={previous} next={next} />
  </Layout>
);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        seo
      }
    }
  }
`;
