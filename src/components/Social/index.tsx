import Link from "next/link";
import { Facebook, Instagram, LinkedIn } from "../SocialIcon";

const SOCIALS = [
  { title: "Facebook", icon: Facebook, url: "https://www.facebook.com/milcopias/" },
  { title: "Instagram", icon: Instagram, url: "https://www.instagram.com/milcopias/" },
  { title: "LinkedIn", icon: LinkedIn, url: "https://br.linkedin.com/company/mil-c%C3%B3pias" },
];

export function Social() {
  return (
    <ul className="flex flex-wrap">
      {SOCIALS.map(({ url, title, icon: Icon }) => (
        <li key={title}>
          <Link className="block p-1" href={url} aria-label={title}>
            <Icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
