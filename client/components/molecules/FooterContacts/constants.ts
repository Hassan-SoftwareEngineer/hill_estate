import { call, email, location } from "@/assets/icons";
import { FooterContactsProps } from "./types";

export const FOOTER_CONTACTS : FooterContactsProps [] = [
    {
        Icon : call,
        title : "Phone",
        contact : "+123 456 7890"
    },
    {
        Icon : email,
        title : "Email",
        contact : "example@gmail.com"
    },
    {
        Icon : location,
        title : "Location",
        contact : "123, Main Street, New York, USA"
    }
]