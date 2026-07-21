import { bio, contact, linkedin, services } from "@/data/portfolio";
import Logo from "./Logo";
import Portrait from "./Portrait";

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-8 sm:px-10">
      <h1 className="mx-auto flex max-w-5xl justify-center">
        <Logo />
      </h1>

      <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <div className="order-2 flex flex-col gap-10 text-center lg:order-1 lg:text-left">
          <InfoBlock eyebrow={bio.eyebrow}>
            <p className="max-w-[22ch] text-sm leading-relaxed text-neutral-600">
              {bio.paragraph}
            </p>
          </InfoBlock>
        </div>

        <div className="order-1 lg:order-2">
          <Portrait />
        </div>

        <div className="order-3 flex flex-col gap-10 text-center lg:items-end lg:text-right">
          <InfoBlock eyebrow={contact.eyebrow} align="right">
            <p className="text-sm leading-relaxed text-neutral-600">
              {contact.location}
              <br />
              {contact.email}
              <br />
              {contact.phone}
              <br />
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-neutral-900"
              >
                LinkedIn
              </a>
            </p>
          </InfoBlock>

          <InfoBlock eyebrow={services.eyebrow} align="right">
            <ul className="text-sm leading-relaxed text-neutral-600">
              {services.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBlock>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  eyebrow,
  children,
  align = "left",
}: {
  eyebrow: string;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        align === "right" ? "lg:items-end" : "lg:items-start"
      }`}
    >
      <p className="text-[11px] tracking-[0.15em] text-neutral-400">
        {eyebrow.toUpperCase()}
      </p>
      {children}
    </div>
  );
}
