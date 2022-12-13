import { Paper, PaperProps } from "@mui/material"

export type SectionProps = PaperProps;

export const Section = (props: SectionProps) => {
  return <Paper variant="outlined" {...props} sx={{
    padding: (theme) => theme.spacing(2),
    ...props.sx,
  }}/>
}