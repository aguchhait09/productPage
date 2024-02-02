import { Box, Container, List, ListItem } from "@mui/material"
import Link from "next/link"

const Footer = () => {
  return (
    <Container fixed>
        <Box>
            <List>
                <ListItem>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                </ListItem>
            </List>
        </Box>
    </Container>
  )
}

export default Footer