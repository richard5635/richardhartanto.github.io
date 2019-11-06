import * as React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import HeaderBar from "../components/Header/Header";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Card,
} from "semantic-ui-react";
import avatar from "./../../data/avatars/me.png";
import logo from "./../../data/icons/logo.svg";

const IndexPage = (props: LayoutProps) =>
  <div className="page">
    {/* Master head */}
    <Container className="stackable grid work-container intro">
      <Container className="eight wide column">
        <p>Richard Hartanto is a graduate student in UTokyo focusing on computer vision and interaction design. 
          Currently a computer vision intern at Pretia. 
          Loves streaming comedy and relaxing in onsen.</p>
        <div className="icons">
          <Icon className="large" name="twitter"></Icon>
          <Icon className="large" name="linkedin"></Icon>
          <Icon className="large" name="dribble"></Icon>
          <Icon className="large" name="github"></Icon>
        </div>
      </Container>
      <Container className = "two wide column"></Container>
      <Container className= "three wide column">
        <img className="ui img avatar" src={avatar}></img>
      </Container>
      <Container className = "three wide column"></Container>
    </Container>
    <Container className="stackable grid work-container">
      <Container className="eight wide column">
        <h2 className="ui header text--uppercase">
          Side Projects
        </h2>
        <p>
          I love creating digital products that connect to reality.
        </p>
      </Container>
      <Container className="eight wide column" >
      <Card key="/blog/2017-04-18--welcoming/"
            fluid
            image="/static/1687ff8f3ef6dfcb7c7674f9248bf6af/7ef6a/pexels-photo-253092.jpg"
            header="Welcoming"
            description="none"
          />
      </Container>
    </Container>
    <Container className="stackable grid work-container">
      <Container className="ten wide column"></Container>
      <Container className="six wide column">
        <h2 className="ui header text--uppercase">
          Internship Projects
        </h2>
        <p>
          I interned at several startups mainly focusing on front-end development.
        </p>
      </Container>
    </Container>
    <Container className="stackable grid work-container">
      <Container className="eight wide column">
        <h2 className="ui header text--uppercase">
          School Projects
        </h2>
        <p>
          I interned at several startups mainly focusing on front-end development.
        </p>
      </Container>
      <Container className="eight wide column">Put cards here.</Container>
    </Container>
    <Container className="stackable grid work-container">
      <Container className="eight wide column">
        <h2 className="ui header text--uppercase">
          Recent Activities
        </h2>
        <ul>
          <li>Working on my Graduate School thesis on Computer Vision.</li>
          <li>Participated in IDEO Tokyo’s startup makeathon.</li>
          <li>My team won an honorable mention award in SICF20 with InWoFumu.</li>
          <li>Started interning at Pretia as Computer Vision Engineer.</li>
          <li>Exhibited an Interactive Storytelling Installation in Jakarta.</li>
        </ul>
      </Container>
      <Container className="eight wide column"></Container>
    </Container>
    <Container className="stackable grid work-container">
      <Container className="eight wide column">Put cards here.</Container>
      <Container className="eight wide column">
        <h2 className="ui header text--uppercase">
          Get In Touch
        </h2>
        <p>Do you happen to be in Tokyo? Let’s talk, I know good cafes.</p>
        <p>Here is my resume.</p>
        <p>You can also contact me through the media below.</p>
      </Container>
    </Container>

    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">Gatsby 2.0 - Starter kit</Header>
        <Header inverted as="h2">Typescript - Jest - Semantic UI</Header>
        <Button primary size="huge">Get started!</Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
