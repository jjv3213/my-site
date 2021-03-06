import { PageMetaTags } from '@/components/Seo/PageMetaTags';
import { HorizontalDivider } from '../components/Divider';
import GitHubList from '../components/GitHub/List';
import MediumList from '../components/Medium/List';
import { PageContainer } from '../components/Page/PageContainer';
import { Code } from '../components/Typography/Code';
import { ExternalLink } from '../components/Typography/ExternalLink';
import { PageTitle } from '../components/Typography/PageTitle';
import { Paragraph } from '../components/Typography/Paragraph';
import { SectionTitle } from '../components/Typography/SectionTitle';

export default function About() {
  return (
    <PageContainer>
      <PageMetaTags />
      <PageTitle>About me 👨‍💻</PageTitle>
      <Paragraph>
        I am a software engineer working on all-things-web. I am a curious
        person and I love to learn how things work, and why they are made the
        way they are. Most of my experience are with React and front-end
        development, but I like to strengthen fundamentals and concepts to allow
        me to learn other things easier, even if they are not necessarily
        closely related to front-end development. Feel free to{' '}
        <ExternalLink href="https://twitter.com/jackyef__">
          shoot me a DM/tweet on Twitter
        </ExternalLink>{' '}
        if you want to chat!
      </Paragraph>

      <Paragraph>
        I am currently based in Jakarta, Indonesia (🇮🇩) and working here as
        well, but I am open to remote roles across the globe.
      </Paragraph>
      <HorizontalDivider />

      <SectionTitle>Professional summary 💼</SectionTitle>
      <Paragraph>
        I am currently working at{' '}
        <ExternalLink href="https://www.stickermule.com">
          Sticker Mule
        </ExternalLink>
        , tinkering around with the web stuffs.
      </Paragraph>
      <HorizontalDivider />
      <Paragraph>
        From 2017 to the end of October 2020, I worked with JavaScript at{' '}
        <ExternalLink href="https://www.tokopedia.com">Tokopedia</ExternalLink>{' '}
        in the web platform team. Since July 2019, I have been part of the core
        team, working on things that help other developers in their work such
        as: development toolings, CIs, and monitoring tools. I also tinker
        around with build processes and maintain Tokopedia&apos;s web platform
        monorepo that houses 20+ services and 30+ reusable packages to which 80+
        developers are contributing daily.
      </Paragraph>
      <Paragraph>
        Before moving to the core team, I was part of the mobile web team. My
        day-to-day tasks included collaborating with backend engineers, product
        owners and designers to ship features and products in a timely manner.
      </Paragraph>
      <Paragraph>
        At Tokopedia, I work mostly with React, Node, TypeScript, GraphQL and
        Apollo.
      </Paragraph>
      <HorizontalDivider />

      <SectionTitle>I write, kinda ✍️</SectionTitle>
      <Paragraph>
        I have always been a curious person. I love to learn things and
        understand how they work. Sometimes if I find the discovery interesting,
        I try to write an article about them to share them!
      </Paragraph>
      <Paragraph>
        I have mostly been writing on{' '}
        <ExternalLink href="https://medium.com/@jackyef">Medium</ExternalLink>,
        but I am currently thinking of publishing my writing on my own blog. If
        you are reading this right now, hopefully I have published some writings
        on this site by then!
      </Paragraph>
      <Paragraph>Here are some of my writings on Medium.</Paragraph>
      <MediumList />
      <HorizontalDivider />

      <SectionTitle>I build stuffs 🛠️</SectionTitle>
      <Paragraph>
        Sometimes, I feel motivated to build stuffs. Some are just for fun and
        learning, some are actually kind of helpful. A lot are abandoned because
        I got sidetracked (don’t we all? 😅). I published some of them as open
        source projects on{' '}
        <ExternalLink href="https://github.com/jackyef">GitHub</ExternalLink>. I
        also contribute to open source libraries when I could.
        <GitHubList />
      </Paragraph>
      <HorizontalDivider />

      <SectionTitle>I speak too, sometimes 🎤</SectionTitle>
      <Paragraph>
        During the course of my career, I have been fortunate enough to be given
        some opportunities to give talks about web development and its
        ecosystem, both for internal and external audience. In 2020, I have
        given 5 internal talks at Tokopedia. I have also given 2 external talks
        representing Tokopedia at{' '}
        <ExternalLink href="https://start-summit.com/schedule/">
          START Summit
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href="https://developersonair.withgoogle.com/events/partnersforumid">
          web.dev partners forum
        </ExternalLink>{' '}
        this year.
      </Paragraph>
      <Paragraph>
        In the future, I am hoping to be more active in the community, giving
        more talks about the web. Who knows, I might add a <Code>/talk</Code>{' '}
        page on this site with the materials if it turns out to be a good idea!
      </Paragraph>
      <HorizontalDivider />
    </PageContainer>
  );
}
