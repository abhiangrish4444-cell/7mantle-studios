import { contactDetails } from '@/mocks/contact';

const details = [
  { id: 'email', icon: 'ri-mail-line', label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}` },
  { id: 'phone', icon: 'ri-phone-line', label: 'Phone', value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s/g, '')}` },
  { id: 'address', icon: 'ri-map-pin-2-line', label: 'Studio', value: contactDetails.address },
  { id: 'hours', icon: 'ri-time-line', label: 'Hours', value: contactDetails.hours },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-7">
        <h3 className="text-xl uppercase tracking-wide text-foreground-950">
          Studio details
        </h3>
        <ul className="mt-6 flex flex-col gap-5">
          {details.map((item) => (
            <li key={item.id} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg text-primary-800">
                <i className={item.icon}></i>
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-foreground-900 transition-colors hover:text-primary-700"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground-900">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <a
          href={contactDetails.linkedin}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-foreground-900/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-900 transition-colors hover:border-primary-500"
        >
          <i className="ri-linkedin-fill"></i>
          Connect on LinkedIn
        </a>
      </div>

      <div className="overflow-hidden rounded-lg border border-background-200">
        <iframe
          title="7Mantle Studios location map"
          src={contactDetails.mapEmbed}
          width="100%"
          height="280"
          loading="lazy"
          className="block h-[240px] w-full grayscale md:h-[280px]"
        ></iframe>
      </div>
    </div>
  );
}