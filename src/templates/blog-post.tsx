import {graphql, Link} from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const StyledNextPrevious = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const NextPrevious = ({previous, next}) => (
  <StyledNextPrevious>
    <li>
      {previous && (
        <Link to={previous.fields.slug} rel='prev'>
          ← {previous.frontmatter.title}
        </Link>
      )}
    </li>
    <li>
      {next && (
        <Link to={next.fields.slug} rel='next'>
          {next.frontmatter.title} →
        </Link>
      )}
    </li>
  </StyledNextPrevious>
);

export default ({
  data: {
    markdownRemark: {
      excerpt,
      frontmatter: {title, date},
      html,
      tableOfContents,
    },
    site: {
      siteMetadata: {title: siteTitle},
    },
  },
  pageContext: {previous, next},
  location,
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO title={title} description={excerpt} />
    <h1>{title}</h1>
    <p>{date}</p>
    <div dangerouslySetInnerHTML={{__html: tableOfContents}} />
    <div dangerouslySetInnerHTML={{__html: html}} />
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
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
