import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

class BlogPostTemplate extends React.Component {
  public render() {
    const post = this.props.data.orgContent;
    const { title, date } = post.meta;

    return (
      <Layout>
        <h1>{title}</h1>
        <small>{date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query OrgBlogPostBySlug($slug: String!) {
    orgContent(fields: { slug: { eq: $slug } }) {
      html
      meta {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
