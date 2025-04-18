import { DiscordIcon, HomeIcon, MEIcon, TwitterIcon } from "./svgIcons";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.s7ns.io/chapel-of-s7ns" rel="noreferrer">
            <HomeIcon /> Home
          </a>
        </li>
        <li>
          <a
            href="https://magiceden.io/marketplace/s7ns_lust"
            target="_blank"
            rel="noreferrer"
          >
            <MEIcon /> magic eden
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/s7ns_"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon /> twitter
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/xugGg2yp6R"
            target="_blank"
            rel="noreferrer"
          >
            <DiscordIcon /> discord
          </a>
        </li>
      </ul>
    </footer>
  );
}
