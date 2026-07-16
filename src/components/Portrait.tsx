import Image from "next/image";

export default function Portrait() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-56 max-w-full overflow-hidden rounded-[999px] border border-neutral-200 bg-accent-soft sm:w-64">
      <Image
        src="/images/portrait.png"
        alt="Portrett"
        fill
        sizes="(min-width: 640px) 16rem, 14rem"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}
