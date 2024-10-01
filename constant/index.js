import { Phone, MapPin, Mail } from "lucide-react";

const contactInfo = [
  {
    title: "Appelez-nous",
    icon: <Phone size={24} />,
    content: "+213 770 53 13 92",
  },
  {
    title: "Envoyez-nous un Email",
    icon: <Mail size={24} />,
    content: "cp.kendi@elkendi.com",
  },
  {
    title: "Venez à nous",
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
