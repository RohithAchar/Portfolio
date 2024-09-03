import {
  faDiscord,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center">
      <li className="mr-5 text-xs shrink-0 text-primary">
        <a href="" className="block hover:text-slate-200 w-6 opacity-60">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0 text-primary">
        <a href="" className="block hover:text-slate-200 w-6 opacity-60">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0 text-primary">
        <a href="" className="block hover:text-slate-200 w-6 opacity-60">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0 text-primary">
        <a href="" className="block hover:text-slate-200 w-6 opacity-60">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
