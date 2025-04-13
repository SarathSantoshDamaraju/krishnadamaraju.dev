import BLOG from '@/blog.config'
import {
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinBoxLine,
} from 'react-icons/ri'
import {
  SiHashnode,
  SiMedium,
  SiDevdotto,
  SiProducthunt,
  SiNpm,
  SiStackoverflow,
} from 'react-icons/si'

const iconMap = {
  Twitter: <RiTwitterXLine size={20} />,
  Github: <RiGithubLine size={20} />,
  Linkedin: <RiLinkedinBoxLine size={20} />,
  HashNode: <SiHashnode size={20} />,
  Medium: <SiMedium size={20} />,
  'Dev.to': <SiDevdotto size={20} />,
  'Product Hunt': <SiProducthunt size={20} />,
  npm: <SiNpm size={20} />,
  SO: <SiStackoverflow size={20} />
}

const Footer = ({ fullWidth }) => {
  const d = new Date();
  const y = d.getFullYear();
  const from = +BLOG.since;

  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? "max-w-2xl px-4" : "px-4 md:px-24"
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {BLOG.socials.map((each) => (
              <a
                key={each.name}
                href={each.link}
                className="text-gray-500 hover:text-[#cb734d] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={each.name}
              >
                {iconMap[each.name]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
