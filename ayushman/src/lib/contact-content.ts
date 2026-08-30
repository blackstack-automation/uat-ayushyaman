import { siteContact } from "@/lib/site-data";

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteContact.address,
)}&output=embed`;

export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  siteContact.address,
)}`;

/** What happens after an enquiry is submitted — sets expectations, reduces drop-off. */
export const nextSteps = [
  {
    title: "We call you back",
    text: "A care coordinator reaches out to understand your symptoms and answer first questions.",
  },
  {
    title: "You meet the right specialist",
    text: "We match you to a surgeon for your condition and book a consultation at your preferred time.",
  },
  {
    title: "You get a clear plan",
    text: "Diagnosis, treatment options, a written cost estimate and insurance guidance — before you commit.",
  },
];

/** Trust signals. Each is a claim the business can stand behind. */
export const trustPoints = [
  {
    icon: "shield" as const,
    title: "Vetted specialists",
    text: "Every surgeon on our panel is board-certified and credential-checked before joining.",
  },
  {
    icon: "rupee" as const,
    title: "Transparent estimates",
    text: "A written cost estimate before admission. No surprise line items at discharge.",
  },
  {
    icon: "card" as const,
    title: "Insurance & no-cost EMI",
    text: "Cashless claim support with panel insurers, and instalment plans where you need them.",
  },
  {
    icon: "lock" as const,
    title: "Confidential by default",
    text: "Your records are seen only by your treating team. We never sell or share your data.",
  },
  {
    icon: "pulse" as const,
    title: "Follow-up included",
    text: "Post-operative review and recovery guidance are part of the treatment, not an add-on.",
  },
  {
    icon: "badge" as const,
    title: "Second opinions welcome",
    text: "Bring us a diagnosis from elsewhere and we will review it with you, free of charge.",
  },
];
