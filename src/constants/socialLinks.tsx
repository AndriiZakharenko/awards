import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

export enum SocialLink {
  Discord = "https://discord.com",
  Twitter = "https://twitter.com",
  Youtube = "https://youtube.com",
  Medium = "https://medium.com",
}

interface SocialLinkItem {
  href: SocialLink;
  icon: JSX.Element;
}

export const socialLinks: SocialLinkItem[] = [
  { href: SocialLink.Discord, icon: <FaDiscord /> },
  { href: SocialLink.Twitter, icon: <FaTwitter /> },
  { href: SocialLink.Youtube, icon: <FaYoutube /> },
  { href: SocialLink.Medium, icon: <FaMedium /> },
];
