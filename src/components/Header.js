import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import Container from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Button } from "./styles/Button.styled"


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='huddle logo' />
          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Placerat duis ultricies lacus sed turpis tincidunt id.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg'/>
        </Flex>
      </Container>
    </StyledHeader>
  )
}