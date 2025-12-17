import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FooterSocialLinksProps } from "./types";

export const SOCIAL_LINKS: FooterSocialLinksProps[] = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: RiTwitterXFill, href: '#', label: 'X' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' }
];