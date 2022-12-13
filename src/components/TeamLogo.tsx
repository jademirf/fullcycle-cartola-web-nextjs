import { Box, BoxProps } from "@mui/system"
import Image from "next/image"
import { Label } from "./Label"


export type TeamLogoProps = BoxProps

export const TeamLogo = (props: TeamLogoProps) => {
  return (
    <Box
    {...props}
      sx={{display: "flex", flexDirection: "column", alignItems: "center", ...props.sx}}
    >
      <Image src="/img/my-team-logo.svg" alt="Logo do meu time" width={84.5} height={88.5} />
      <Label>Meu time FC</Label>
    </Box>
  )
}