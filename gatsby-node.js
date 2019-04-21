const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const orgPagesQuery = `
{
    allOrgContent(
           limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
`;

const markdownPagesQuery = `
{
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
    ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
    }
}
`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const orgBlogPost = path.resolve(`./src/templates/org-post.tsx`);

  // markdown blog posts.
  const {
    data: {
      allMarkdownRemark: { edges: posts }
    }
  } = await graphql(markdownPagesQuery);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    });
  });

  const {
    data: {
      allOrgContent: { edges: orgPosts }
    }
  } = await graphql(orgPagesQuery);
  orgPosts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: orgBlogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode
    });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
