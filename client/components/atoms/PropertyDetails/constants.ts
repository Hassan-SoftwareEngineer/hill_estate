import { bedroom, checked, group, location, money } from "@/assets/icons";
import { PropertyDetailsProps } from "./types";

export const tabs = ["Cost breakdown", "Property detail", "Documents"];

export const DETAILS: PropertyDetailsProps[] = [
  {
    title: "PKR 35000,000",
    color: "text-foreground-accent",
  },
  {
    Icon : money,
    title: "564,100 Tokens Sold",
  },
  {
    Icon : group,
    title: "300 Investors",
  },
  {
    Icon : location,
    title: "Hill states",
  },
  {
    Icon : checked,
    title: "Rented",
  },
  {
    title: "Apartment",

  },
  {
    Icon : bedroom,
    title: "Bedroom",
  },
];
