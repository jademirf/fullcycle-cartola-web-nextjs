import { Box, Button } from '@mui/material'
import type { NextPage } from 'next'
import { MatchResult } from '../../components/MatchResult'
import { Page } from '../../components/Page'


const ListMatchesPage: NextPage = () => {
  return (
    <Page>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center',
      }}>
        <MatchResult match={{team_a: 'Brasil', team_b: 'Argentina'}} />
        <MatchResult match={{team_a: 'Brasil', team_b: 'Argentina'}} />
      </Box>
    </Page>
  )
}

export default ListMatchesPage