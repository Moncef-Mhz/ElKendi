import { Phone, MapPin, Mail } from "lucide-react";

const contactInfo = [
  {
    title: "Call us",
    icon: <Phone size={24} />,
    content: "+213 770 53 13 92",
  },
  {
    title: "Send us an Email",
    icon: <Mail size={24} />,
    content: "ahmed.mechbiche@elkendi.com",
  },
  {
    title: "Come to us",
    icon: <MapPin size={24} />,
    content:
      " N°19 Zone d’activité el Boustane, commune de Rahmania 16121 Alger –Algérie",
  },
];

const navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "Services",
  //   link: "/services",
  // },
  {
    name: "Contact",
    link: "/#contact",
  },
];

export { contactInfo, navlinks };
