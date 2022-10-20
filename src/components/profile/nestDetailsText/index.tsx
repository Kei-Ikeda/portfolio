import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { TextItemWrap, TextItemTitle } from '@/components/profile/share';

const NestText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'nestLevel',
})<{ nestLevel?: number }>(({ theme, nestLevel }) => ({
  paddingLeft: nestLevel && theme.spacing(nestLevel),
  '::before': {
    content: '"> "',
  },
}));

interface props {
  title: string;
  nestTexts: string[];
}

const NestDetailsText: React.FC<props> = ({ title, nestTexts }) => {



  return (
    <TextItemWrap>
      <TextItemTitle variant='body1'>{title}:</TextItemTitle>
      {nestTexts.map((text, index) => {
        return (
          <NestText variant='body2' nestLevel={index} key={text}>
            {text}
          </NestText>
        );
      })}
    </TextItemWrap>
  );
};

export { NestDetailsText };
