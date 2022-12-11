import { AppBar, Box, Button, Toolbar } from "@mui/material"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"


export type NavbarItemProps = LinkProps

export const NavBarItem = (props: PropsWithChildren<NavbarItemProps>) => {
  // @ts-expect-error
  return <Button sx={{
    color: "white",
  }} component={Link} {...props} />
}

export const Navbar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: 'none', boxShadow: 'none'}}>
        <Toolbar>
          <Image src="/img/logo.png" width={315} height={58} alt="cartola full cycle logo" priority={true} />
          <Box sx={{flexGrow: 1}}>
            <NavBarItem href="/">Home</NavBarItem>
            <NavBarItem href="/players">Escalação</NavBarItem>
            <NavBarItem href="/matches">Jogos</NavBarItem>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}