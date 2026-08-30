export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  /** Tailwind bg-* class used as an image placeholder (e.g. "bg-amber-100"). */
  image?: string;
  /** Tailwind bg-* class used as a color-only placeholder when no image is provided. */
  imageColor?: string;
  /** Specialty slugs this post is relevant to (for "related reading"). */
  specialties?: string[];
};

export const blogCategories = [
  "All",
  "Surgery Guides",
  "Patient Stories",
  "Insurance",
  "Care Buddy",
  "Recovery Tips",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "laser-piles-surgery-what-to-expect",
    category: "Surgery Guides",
    date: "26 Aug 2026",
    readTime: "6 min read",
    title: "Laser Piles Surgery: What Actually Happens on the Day",
    desc: "From admission to discharge in a few hours — here's a step-by-step look at a laser haemorrhoidoplasty and what recovery feels like in the first week.",
    image: "/assets/blog1.png",
    specialties: ["proctology"],
  },
  {
    slug: "piles-fissure-or-fistula-difference",
    category: "Surgery Guides",
    date: "19 Aug 2026",
    readTime: "5 min read",
    title: "Piles, Fissure or Fistula? How to Tell the Difference",
    desc: "Bleeding, pain and discharge can all point to different conditions. Here's a plain-language guide to what each one feels like and when to see a proctologist.",
    image: "/assets/blog2.png",
    specialties: ["proctology"],
  },
  {
    slug: "knee-replacement-surgery-guide",
    category: "Surgery Guides",
    date: "20 Aug 2026",
    readTime: "8 min read",
    title: "Everything You Need to Know About Knee Replacement Surgery",
    desc: "Knee replacement is one of India's most common orthopaedic surgeries. Here's a complete guide to understanding when you need it, what to expect, and recovery timelines.",
    image: "/assets/blog3.png",
    specialties: ["orthopedics"],
  },
  {
    slug: "care-buddy-breakdown",
    category: "Care Buddy",
    date: "12 Aug 2026",
    readTime: "6 min read",
    title: "What Does a 90-Day Care Buddy Do? A Complete Breakdown",
    desc: "The Care Buddy program is Ayushman Surgicare's most distinctive offering. Here's exactly what your coordinator does from Day 0 to Day 90.",
    image: "/assets/blog4.png",
  },
  {
    slug: "life-after-fistula-surgery-recovery",
    category: "Recovery Tips",
    date: "8 Aug 2026",
    readTime: "6 min read",
    title: "Life After Fistula Surgery: A Week-by-Week Recovery Guide",
    desc: "Sphincter-sparing fistula surgery has come a long way. Here's what wound care, sitz baths and follow-up look like over the weeks that follow.",
    image: "/assets/blog5.png",
    specialties: ["proctology"],
  },
  {
    slug: "pmjay-ayushman-bharat-guide",
    category: "Insurance",
    date: "5 Aug 2026",
    readTime: "5 min read",
    title: "How to Use Ayushman Bharat for Major Surgery: A Step-by-Step Guide",
    desc: "India's PMJAY scheme covers up to ₹5 lakh per family per year. Learn how to use it for knee replacement, cardiac surgery, and other major procedures.",
    image: "/assets/blog6.png",
  },
  {
    slug: "rajesh-journey-chronic-knee-pain",
    category: "Patient Stories",
    date: "28 Jul 2026",
    readTime: "4 min read",
    title: "Rajesh's Journey: From Chronic Knee Pain to Running Again",
    desc: "Rajesh Kumar, 58, had been living with severe knee arthritis for 4 years. Here's how Ayushman Surgicare helped him go from barely walking to running again.",
    image: "/assets/blog7.png",
    specialties: ["orthopedics"],
  },
  {
    slug: "physiotherapy-knee-replacement-weeks-2-4",
    category: "Recovery Tips",
    date: "20 Jul 2026",
    readTime: "6 min read",
    title: "Physiotherapy After Knee Replacement: What Week 2–4 Looks Like",
    desc: "The first month after knee replacement surgery is critical for long-term mobility. Here's exactly what physiotherapy looks like and how to make the most of it.",
    image: "/assets/blog8.png",
    specialties: ["orthopedics"],
  },
  {
    slug: "bariatric-surgery-india-guide",
    category: "Surgery Guides",
    date: "10 Jul 2026",
    readTime: "10 min read",
    title: "Bariatric Surgery in India: Types, Costs, and What to Expect",
    desc: "Bariatric surgery has a high success rate for patients with severe obesity. This guide covers types, costs, insurance, and how to choose the right procedure.",
    image: "/assets/blog9.png",
    specialties: ["weight-loss"],
  },
  {
    slug: "gallbladder-stone-removal-guide",
    category: "Surgery Guides",
    date: "2 Jul 2026",
    readTime: "7 min read",
    title: "Gallbladder Stone Removal: Laparoscopic Surgery Explained",
    desc: "Most gallstone surgeries in India are now keyhole procedures with a next-day discharge. Here's how the surgery works, what recovery looks like, and when to see a surgeon.",
    image: "/assets/blog10.png",
    specialties: ["laparoscopy"],
  },
  {
    slug: "cashless-vs-reimbursement-claims",
    category: "Insurance",
    date: "24 Jun 2026",
    readTime: "6 min read",
    title: "Cashless vs Reimbursement Claims: Which Should You Choose?",
    desc: "Understanding the difference between cashless and reimbursement claims can save you weeks of paperwork. Here's how each works and how our team handles the process for you.",
    image: "/assets/blog11.png",
  },
  {
    slug: "meera-hernia-repair-story",
    category: "Patient Stories",
    date: "18 Jun 2026",
    readTime: "5 min read",
    title: "Meera's Story: Back to Teaching Two Weeks After Hernia Repair",
    desc: "Meera, 44, put off her hernia surgery for over a year. Here's how a coordinated day-care procedure got her back to the classroom faster than she expected.",
    image: "/assets/blog12.png",
    specialties: ["laparoscopy"],
  },
  {
    slug: "preparing-for-surgery-checklist",
    category: "Recovery Tips",
    date: "9 Jun 2026",
    readTime: "6 min read",
    title: "The Week Before Surgery: A Practical Preparation Checklist",
    desc: "From fasting instructions to arranging help at home, the days before surgery matter. Use this checklist to walk into your procedure calm and fully prepared.",
    image: "/assets/blog13.png",
  },
  {
    slug: "care-buddy-family-communication",
    category: "Care Buddy",
    date: "1 Jun 2026",
    readTime: "4 min read",
    title: "How Your Care Buddy Keeps Family Updated During Surgery",
    desc: "Waiting during a loved one's surgery is stressful. Your Care Buddy relays updates from the OT, explains next steps, and is the single point of contact for the whole family.",
    image: "/assets/blog14.png",
  },
  {
    slug: "spine-surgery-myths",
    category: "Surgery Guides",
    date: "22 May 2026",
    readTime: "8 min read",
    title: "5 Myths About Spine Surgery — And What's Actually True",
    desc: "\"Spine surgery causes paralysis.\" \"You'll never bend again.\" We asked spine surgeons to separate the persistent myths from the medical reality.",
    image: "/assets/blog15.png",
    specialties: ["orthopedics"],
  },
  {
    slug: "ayushman-bharat-eligibility-check",
    category: "Insurance",
    date: "13 May 2026",
    readTime: "5 min read",
    title: "Are You Eligible for Ayushman Bharat? How to Check in 5 Minutes",
    desc: "Millions of families are covered under PMJAY without knowing it. Here's how to check your eligibility, find your card, and confirm which hospitals accept it.",
    image: "/assets/blog16.png",
  },
  {
    slug: "knee-replacement-recovery-month-2-3",
    category: "Recovery Tips",
    date: "3 May 2026",
    readTime: "7 min read",
    title: "Knee Replacement Recovery: What Months 2 and 3 Look Like",
    desc: "The early weeks get all the attention, but months two and three are when you rebuild strength and confidence. Here's a realistic look at this phase of recovery.",
    image: "/assets/blog17.png",
    specialties: ["orthopedics"],
  },
  {
    slug: "anil-cataract-surgery-story",
    category: "Patient Stories",
    date: "25 Apr 2026",
    readTime: "4 min read",
    title: "Anil's Story: Reading Again the Day After Cataract Surgery",
    desc: "Anil, 67, had stopped driving because of cloudy vision. A 20-minute cataract procedure changed that — here's how the day unfolded, from admission to discharge.",
    image: "/assets/blog18.png",
    specialties: ["ophthalmology"],
  },
];

/** Posts relevant to a specialty, topped up with recent posts to `count`. */
export function relatedPosts(specialtySlug: string, count = 3): BlogPost[] {
  const tagged = blogPosts.filter((p) => p.specialties?.includes(specialtySlug));
  const rest = blogPosts.filter((p) => !tagged.includes(p));
  return [...tagged, ...rest].slice(0, count);
}
