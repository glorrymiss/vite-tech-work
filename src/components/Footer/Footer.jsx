import {
  FooterBack,
  LinkNetworks,
  List,
  // StyledLink,
  Text,
} from "./Footer.styled";
import { FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <FooterBack>
      <List>
        <Text>contacts ~</Text>
        <LinkNetworks target="_blank" to="https://t.me/glorry_miss">
          <FaTelegramPlane />
        </LinkNetworks>
        <LinkNetworks
          target="_blank"
          t0="https://www.linkedin.com/in/yuliia-zherebetska/"
        >
          <RiLinkedinFill />
        </LinkNetworks>
      </List>
    </FooterBack>
  );
};
