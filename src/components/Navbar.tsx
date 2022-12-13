import { AppBar, Avatar, Box, Button, Chip, Toolbar } from "@mui/material"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"


export type NavbarItemProps = LinkProps & {showUnderline: boolean}

export const NavBarItem = (props: PropsWithChildren<NavbarItemProps>) => {

  const {showUnderline, ...linkProps} = props

  // @ts-expect-error
  return <Button component={Link} 
          sx={{
            color: "white",
            display: 'inline-block',
            textAlign: 'center',
            '&::after': (theme) => ({
              content: '""',
              borderBottom: showUnderline ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
              width: '100%',
              display: 'block',
            }),
          }} 
          {...props} 
        />
}

export const Navbar = () => {
  const router = useRouter()
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: 'none', boxShadow: 'none'}}>
        <Toolbar>
          <Image src="/img/logo.png" width={315} height={58} alt="cartola full cycle logo" priority={true} />
          <Box sx={{ flexGrow: 1, ml: (theme) => theme.spacing(4) }}>
            <NavBarItem href="/" showUnderline={router.pathname === "/"}>Home</NavBarItem>
            <NavBarItem href="/players" showUnderline={router.pathname === "/players"} >Escalação</NavBarItem>
            <NavBarItem href="/matches" showUnderline={["/matches", "/matches/[id]"].includes(router.pathname)}>Jogos</NavBarItem>
          </Box>
          <Chip label="300" avatar={<Avatar>C$</Avatar>} color="secondary" />
        </Toolbar>
      </AppBar>
    </Box>
  )
}