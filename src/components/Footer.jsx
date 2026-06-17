import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import logoImg from "../img/ui/logotamilloft.png";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61566605741854",
    label: "Facebook",
  },
  { icon: FaTwitter, href: "https://x.com/TamilLoft", label: "Twitter" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/tamilloft_official",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/tamilloft",
    label: "LinkedIn",
  },
];

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

const companyLinks = [
  { label: "About Us", href: "https://tamilloft.in/about" },
  { label: "Careers", href: "https://tamilloft.in/careers" },
  { label: "Blog", href: "https://tamilloft.in/blogs" },
  { label: "Contact", href: "https://tamilloft.in/contact" },
];

const contactInfo = [
  { icon: FaEnvelope, text: "tamilloftoffical@gmail.com" },
  { icon: FaPhone, text: "+91 8925356605" },
  { icon: FaMapMarkerAlt, text: "Tamil Nadu, India" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-3">Farmmi</h3>
            <p className="text-sm text-white/60 mb-5 leading-relaxed">
              Smart agriculture solutions through data, AI, and community.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-green hover:-translate-y-0.5 transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-sm text-white/60">
                  <Icon size={12} className="shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6 border-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/60 m-0">
            &copy; 2024 TamilLoft. All rights reserved.
          </p>
          <p className="text-sm text-white/60 m-0 flex items-center gap-2">
            Made with <FaHeart size={13} className="text-red-400" />
            <a
              href="#"
              className="inline-flex items-center no-underline"
              aria-label="TamilLoft Technologies">
              <img
                src={logoImg}
                alt="TamilLoft Technologies"
                height={70}
                width={70}
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
