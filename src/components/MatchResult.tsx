
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image'
import { Match, TeamsImagesMap } from '../util/models';


const ResultContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  width: '400px',
  backgroundColor: theme.palette.background.default,
  alignItems: 'center',
  border: 'none !important',
  boxShadow: 'none'
}))

const ResultItem = styled(Box)(({theme}) => ({
  display: 'flex',
  height: '65px',
  alignItems: 'center',
}))

type FlagProps = {
  src: string;
  alt: string;
}

const Flag = ({src, alt}: FlagProps) => {
  return <Image src={src} alt={alt} width={121} height={76} />
}

type MatchResultProps = {
  match: Match;
}

export const MatchResult = ({match}: MatchResultProps) => {
  return (
    <Box display="flex">
      <Flag src={TeamsImagesMap[match.team_a]} alt={match.team_a} />
      <ResultContainer>
        <ResultItem width={"150px"} justifyContent="flex-end">
          <Typography variant="h6">{match.team_a}</Typography>
        </ResultItem>
        <ResultItem width={"100px"} justifyContent="center" position="relative">
          <Box sx={{position: "absolute", top: 1, fontSize: '0.6rem'}}>13/12/2022 - 00:00h</Box>
          <Typography variant="h6">1-0</Typography>
        </ResultItem>
        <ResultItem width={"150px"} justifyContent="flex-start">
          <Typography variant="h6">{match.team_b}</Typography>
        </ResultItem>
      </ResultContainer>
      <Flag src={TeamsImagesMap[match.team_b]} alt={match.team_b} />
    </Box>
  )
}