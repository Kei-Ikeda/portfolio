import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextItemWrap, TextItemTitle, Text } from '@/components/profile/share';

import { NestDetailsText } from '@/components/profile/nestDetailsText';

const Wrap = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  overflow: 'hidden',
}));

const Title = styled(Typography)(({ theme }) => ({
  background: '#1A192B',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const CatTitle = styled(Typography)(({ theme }) => ({
  background: '#8b8a9a',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const TextArea = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const careers = [
'Gunma University of Health and Welfare',
'Caregiver',
'Association for After-school Child Care-workers',
'April the First, 2019 Web designer, Coder',
'Dec the First, 2019 PHP Engineer',
'Aug the First, 2020 React Engineer'
] 

const Profile = () => {
  return (
    <Wrap>
      <Title variant='h2'>Profile</Title>
      <CatTitle variant='h3'>About</CatTitle>
      <TextArea>
        <TextItemWrap>
          <TextItemTitle variant='body1'>Name:</TextItemTitle>
          <Text variant='body2'>Kei IKeda</Text>
        </TextItemWrap>
        <NestDetailsText title="Career" nestTexts={careers} />
          <TextItemWrap>
            <TextItemTitle variant='body1'>Occupation:</TextItemTitle>
            <Text variant='body2'>
              FrontEnd Engineer, FrontEnd dev team Leader
            </Text>
          </TextItemWrap>
          <TextItemWrap>
            <TextItemTitle variant='body1'>Side Business:</TextItemTitle>
            <Text variant='body2'>
              Web design, Coding, Create small apps, Dev instructor
            </Text>
          </TextItemWrap>
      </TextArea>
      <CatTitle variant='h3'>Skills</CatTitle>
      <TextArea>
        <TextItemWrap>
          <TextItemTitle variant='body1'>Languages / Frameworks:</TextItemTitle>
          <Text variant='body2'>
            HTML/CSS ( SCSS ), React, TypeScript, Next.js, JavaScript, JQuery,
            PHP, Laravel, WP, Node.js, MySQL, etc...
          </Text>
        </TextItemWrap>
        <TextItemWrap>
          <TextItemTitle variant='body1'>Library:</TextItemTitle>
          <Text variant='body2'>
            Redux ( Redux Toolkit ), Mui, React Hook Form, React Query, React
            Frow, React-testing-library, ImageMagick, etc...
          </Text>
        </TextItemWrap>
        <TextItemWrap>
          <TextItemTitle variant='body1'>
            Server / Infrastructure /CI:
          </TextItemTitle>
          <Text variant='body2'>
            Linux, Apache, AWS, CDK, GithubAction, etc...
          </Text>
        </TextItemWrap>
        <TextItemWrap>
          <TextItemTitle variant='body1'>Application / Tools:</TextItemTitle>
          <Text variant='body2'>
            VScode, Git, GitHub, docker, fish, Sourcetree, DBeaver,Slack,
            Backlog, GitHubProjects, Google workspace, Figma, Photoshop,
            Illustrator, premiere, etc...
          </Text>
        </TextItemWrap>
        <TextItemWrap>
          <TextItemTitle variant='body1'>Other:</TextItemTitle>
          <Text variant='body2'>
            Web direction, Dev direction, FrontEndSoftwareDesign, Team building,
            Workshop instructor
          </Text>
        </TextItemWrap>
      </TextArea>
    </Wrap>
  );
};

export { Profile };
