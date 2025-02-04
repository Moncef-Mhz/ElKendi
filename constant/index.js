import { Phone, MapPin, Mail } from "lucide-react";

const contactInfo = [
  {
    title: "Appelez-nous",
    icon: <Phone size={24} />,
    content: "+213 770 53 13 92",
  },
  {
    title: "Envoyez-nous un message",
    icon: <Mail size={24} />,
    content: "ahmed.mechbiche@elkendi.com",
  },
  {
    title: "Venez nous voir",
    icon: <MapPin size={24} />,
    content:
      "N°19 Zone d’activité El Boustane, commune de Rahmania 16121 Alger – Algérie",
  },
];

const navlinks = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Category",
    link: "/cateogry",
  },
  {
    name: "À Propos",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

export { contactInfo, navlinks };
