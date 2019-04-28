import {graphql, StaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const BioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RoundImage = styled(Image)`
  margin-right: 1em;
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
`;

const Bio = ({
  site: {
    siteMetadata: {author, social},
  },
  avatar: {
    childImageSharp: {fixed},
  },
}) => (
  <BioWrapper>
    <RoundImage
      fixed={fixed}
      alt={author}
      img-style={{borderRadius: '100%', margin: 'auto'}}
    />
    <p>
      Written by <strong> {author} </strong> who lives and works in Mountain
      View, CA.{' '}
      <a href={`https://twitter.com/${social.twitter}`}>Follow me on Twitter</a>
    </p>
  </BioWrapper>
);

export default () => <StaticQuery query={bioQuery} render={Bio} />;

const bioQuery = graphql`
  query {
    avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;
