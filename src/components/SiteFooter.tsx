import { contact, profile, socials } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-neutral-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-10">
        <p className="text-[11px] tracking-[0.15em] text-neutral-400">
          LA OSS JOBBE SAMMEN
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="font-serif text-3xl font-light sm:text-4xl"
        >
          {contact.email}
        </a>

        <div className="mt-6 flex gap-6 text-sm text-neutral-500">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="hover:text-neutral-900">
              {social.label}
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-neutral-400">
          © {new Date().getFullYear()} {profile.name}. Alle rettigheter forbeholdt.
        </p>
      </div>
    </footer>
  );
}
