import * as React from "react";
import { Link } from "gatsby";
import { get } from "lodash";
import { Header, Container, Segment, Icon, Label, Button, Grid, Card, Image, Item, Comment } from "semantic-ui-react";
import HeaderBar from "./../components/Header/Header";
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection, Site } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import BackButton from "../components/backButton";
import { DiscussionEmbed } from "disqus-react";
import { withLayout, LayoutProps } from "../components/Layout";
import { graphql } from "gatsby";

interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
    site: Site
  };
}

const BlogPostPage = (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post;
  const avatar = frontmatter.author.avatar.children[0] as ImageSharp;

  const tags = props.data.post.frontmatter.tags
    .map((tag) => <Label key={tag}><Link to={`/blog/tags/${tag}/`}>{tag}</Link></Label>);

  const recents = props.data.recents.edges
    .map(({ node }) => {
      const recentAvatar = node.frontmatter.author.avatar.children[0] as ImageSharp;
      const recentCover = get(node, "frontmatter.image.children.0.fixed", {});
      const extra = (
        <Comment.Group>
          <Comment>
            <Comment.Avatar
              src={recentAvatar.fixed.src}
              srcSet={recentAvatar.fixed.srcSet}
            />
            <Comment.Content>
              <Comment.Author style={{ fontWeight: 400 }}>
                {node.frontmatter.author.id}
              </Comment.Author>
              <Comment.Metadata style={{ margin: 0 }}>
                {node.timeToRead} min read
              </Comment.Metadata>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      );

      return (
        <div key={node.fields.slug} style={{ paddingBottom: "1em" }}>
          <Card as={Link}
            to={node.fields.slug}
            image={recentCover}
            header={node.frontmatter.title}
            extra={extra}
          />
        </div>
      );
    });

  const cover = get(frontmatter, "image.children.0.fixed", {});
  const coverImage = {
    backgroundColor: frontmatter.bgColor,
    backgroundImage: "url(" + {...cover}.src + ")",
  };
  return (
    <div className="site-sections">
      {/* <Segment vertical style={{ border: "none" }}>
        <Item.Group>
          <Item>
            <Item.Image size="tiny"
              src={avatar.fixed.src}
              srcSet={avatar.fixed.srcSet}
              circular
            />
            <Item.Content>
              <Item.Description>{frontmatter.author.id}</Item.Description>
              <Item.Meta>{frontmatter.author.bio}</Item.Meta>
              <Item.Extra>{frontmatter.updatedDate} - {timeToRead} min read</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment> */}
      {/* Make the Image below have fixed ratio */}
      {/* <Image {...cover} fluid /> */}
      <div className="article-coverImage" style={coverImage}></div>
      <div className="site-spacer"></div>
      <div className="site-container">
        <div className="ui stackable grid">
          <div className="sixteen wide column">
            <Header as="h1">{frontmatter.title}</Header>
            <Header as="h3">{frontmatter.subtitle}</Header>
            <p>{frontmatter.description}</p>
            {/* <div>{tags}</div> */}
          </div>
        </div>
      </div>
      <div className="site-spacer"></div>
      <div className="site-container">
        <div class="ui stackable grid">
          <div class="eight wide column">
            <h2>Target Audience</h2>
            <p>{frontmatter.targetAudience}</p>
            <h2>Date and Work Duration</h2>
            <p>{frontmatter.dateDuration}</p>
          </div>
          <div class="eight wide column">
            <h2>My Role</h2>
            <h3>{frontmatter.myRole}</h3>
            <p>{frontmatter.myRoleDesc}</p>
          </div>
        </div>
        <div class="ui divider"></div>
      </div>
      {/* Article content goes here */}
      <div className="site-container">
        <div className="ui stackable grid">
          <div className="sixteen wide column" dangerouslySetInnerHTML={{
            __html: html,
          }}></div>
        </div>
      </div>

      {/* Comments section */}

      {/* {props.data.site
        && props.data.site.siteMetadata
        && props.data.site.siteMetadata.disqus
        && <Segment vertical>
          <DiscussionEmbed shortname={props.data.site.siteMetadata.disqus} config={{}} />
        </Segment>
      } */}

      {/* <Segment vertical>
        <Grid padded centered>
          {recents}
        </Grid>
      </Segment> */}
    </div>
  );
};

export default withLayout(BlogPostPage);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
  site: site {
    siteMetadata {
        disqus
    }
  }
  post: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    timeToRead
    fields {
      slug
    }
    frontmatter {
      tags
      author {
        id
        bio
        twitter
        avatar {
          children {
            ... on ImageSharp {
              fixed(width: 80, height: 80, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
      title
      subtitle
      description
      updatedDate(formatString: "MMM D, YYYY")
      targetAudience
      dateDuration
      myRole
      myRoleDesc
      bgColor
      image {
        children {
          ... on ImageSharp {
            fixed(width: 900, height: 300, quality: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
  recents: allMarkdownRemark(
    filter: {
      fields: {slug: {ne: $slug}}
      frontmatter: {draft: {ne: true}},
      fileAbsolutePath: {regex: "/blog/"},
    },
    sort: {order: DESC, fields: [frontmatter___updatedDate]},
    limit: 4
  ) {
    edges {
      node {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          image {
            children {
              ... on ImageSharp {
                fixed(width: 300, height: 100) {
                  src
                  srcSet
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  fixed(width: 36, height: 36) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
