import SocialIcons from "./SocialIcons";
import Container from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>0177934988</li>
            <li>engkuazrull@gmail.com</li>
          </ul>

          <ul>
            <li>About us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>

          {/* Social icons */}
          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
