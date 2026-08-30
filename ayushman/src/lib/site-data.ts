export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href?: string; items: NavLink[] };

export const topbarMenus: NavGroup[] = [
  {
    label: "For Patients",
    items: [
      { label: "Consultation", href: "/for-patients/consultation" },
      { label: "Insurance", href: "/for-patients/insurance" },
      { label: "Care Buddy", href: "/for-patients/care-buddy" },
      { label: "FAQ's", href: "/for-patients/faqs" },
      { label: "Support", href: "/for-patients/support" },
      { label: "No Cost EMI", href: "/for-patients/no-cost-emi" },
    ],
  },
  {
    label: "For Doctors",
    items: [
      { label: "Join Our Network", href: "/for-doctors/join-network" },
      { label: "Refer a Patient", href: "/for-doctors/refer-patient" },
      { label: "CME Programs", href: "/for-doctors/cme-programs" },
      { label: "Resources", href: "/for-doctors/resources" },
    ],
  },
  {
    label: "For Hospitals",
    items: [
      { label: "Partnerships", href: "/for-hospitals/partnerships" },
      { label: "Equipment Supply", href: "/for-hospitals/equipment-supply" },
      { label: "Training Programs", href: "/for-hospitals/training-programs" },
    ],
  },
  {
    label: "Our Company",
    items: [
      { label: "About Us", href: "/our-company/about-us" },
      { label: "Press Release", href: "/our-company/press-release" },
      { label: "Blogs", href: "/our-company/blogs" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/our-company/careers" },
    ],
  },
];

export const specialties: NavGroup[] = [
  {
    label: "Proctology",
    href: "/proctology",
    items: [
      "Piles Treatment",
      "Fistula Treatment",
      "Fissure Treatment",
      "Pilonidal Sinus Treatment",
      "Rectal Prolapse",
    ].map((label) => ({
      label,
      href: `/proctology/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Laparoscopy",
    href: "/laparoscopy",
    items: [
      "Hernia Treatment",
      "Gallstones Treatment",
      "Appendicitis",
      "Inguinal Hernia Treatment",
      "Umbilical Hernia Treatment",
    ].map((label) => ({
      label,
      href: `/laparoscopy/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Gynaecology",
    href: "/gynaecology",
    items: [
      "Surgical Abortion",
      "MTP",
      "Ectopic Pregnancy Treatment",
      "Molar Pregnancy Treatment",
      "Uterus Removal",
      "Ovarian Cyst",
      "Miscarriage Treatment",
      "Bartholin Cyst Treatment",
      "Endometriosis Treatment",
      "Adenomyosis Treatment",
      "PCOS-PCOD Treatment",
      "Pregnancy Care",
      "Laser Vaginal Tightening",
      "Hymenoplasty",
      "Vaginoplasty",
      "Labiaplasty",
      "Vaginal Wart Removal",
    ].map((label) => ({
      label,
      href: `/gynaecology/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "ENT",
    href: "/ent",
    items: [
      "Tympanoplasty",
      "Adenoidectomy",
      "Sinus Treatment",
      "Septoplasty",
      "Mastoidectomy",
      "FESS Surgery",
      "Thyroidectomy",
      "Tonsillectomy",
      "Stapedectomy",
      "Myringotomy",
      "Throat Surgery",
      "Ear Surgery",
      "Vocal Cord Polyps",
      "Nasal Polyps",
      "Turbinate Reduction",
    ].map((label) => ({
      label,
      href: `/ent/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Urology",
    href: "/urology",
    items: [
      "Circumcision",
      "Stapler Circumcision",
      "Kidney Stones Treatment",
      "Hydrocele",
      "ESWL",
      "RIRS",
      "PCNL",
      "URSL",
      "Enlarged Prostate",
      "Frenuloplasty Surgery",
      "Balanitis",
      "Balanoposthitis",
      "Paraphimosis",
      "Foreskin Infection",
      "Prostatectomy",
      "Tight Foreskin",
      "Phimosis",
      "Swollen Penis",
      "Corn Removal",
      "Vasectomy",
      "Testicular Torsion",
      "Epididymal Cyst",
      "Toenail Removal",
    ].map((label) => ({
      label,
      href: `/urology/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Vascular",
    href: "/vascular",
    items: [
      "Varicose Veins Treatment",
      "Varicocele Treatment",
      "DVT Treatment",
      "Diabetic Foot Ulcer Treatment",
      "Uterine Fibroids",
    ].map((label) => ({
      label,
      href: `/vascular/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Aesthetics",
    href: "/aesthetics",
    items: [
      "Gynecomastia",
      "Liposuction",
      "Lipoma Surgery",
      "Hair Transplant",
      "Sebaceous Cyst Surgery",
      "Rhinoplasty",
      "Axillary Breast",
      "Tummy Tuck",
      "Breast Lump",
      "Double Chin",
      "Buccal Fat",
      "Earlobe Repair",
      "Blepharoplasty",
      "Beard Transplant",
      "Cleft Lip",
    ].map((label) => ({
      label,
      href: `/aesthetics/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Orthopedics",
    href: "/orthopedics",
    items: [
      "Knee Replacement",
      "Carpal Tunnel Syndrome",
      "ACL Tear Treatment",
      "Meniscus Tear Treatment",
      "Hip Replacement Surgery",
      "Spine Surgery",
      "Shoulder Dislocation",
      "Shoulder Replacement",
      "Rotator Cuff Repair",
      "Arthroscopy Surgery",
      "Knee Arthroscopy",
      "Shoulder Arthroscopy",
      "Total Knee Replacement",
    ].map((label) => ({
      label,
      href: `/orthopedics/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Ophthalmology",
    href: "/ophthalmology",
    items: [
      "Lasik Eye Surgery",
      "Cataract Surgery",
      "Retinal Detachment",
      "Glaucoma Treatment",
      "Squint Surgery",
      "Diabetic Retinopathy",
      "Vitrectomy",
      "PRK Lasik",
      "SMILE Lasik Surgery",
      "FEMTO Lasik Surgery",
      "ICL Surgery",
      "Contoura Vision",
      "Phaco Surgery",
    ].map((label) => ({
      label,
      href: `/ophthalmology/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Fertility",
    href: "/fertility",
    items: [
      "IVF Treatment",
      "IUI Treatment",
      "Female Infertility",
      "Male Infertility",
      "Egg Freezing",
    ].map((label) => ({
      label,
      href: `/fertility/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Weight Loss",
    href: "/weight-loss",
    items: ["Bariatric Surgery", "Intragastric Balloon"].map((label) => ({
      label,
      href: `/weight-loss/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Dermatology",
    href: "/dermatology",
    items: ["Derma Fillers", "Vampire Facial", "Face Threadlift"].map((label) => ({
      label,
      href: `/dermatology/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "Dentistry",
    href: "/dentistry",
    items: ["Dental Implant Surgery", "Dental Braces", "Teeth Aligners"].map(
      (label) => ({
        label,
        href: `/dentistry/${label.toLowerCase().replace(/\s+/g, "-")}`,
      }),
    ),
  },
];

export const heroStats = [
  { value: 50, suffix: "+", label: "Expert Doctors" },
  { value: 15, suffix: "+", label: "Partner Hospitals" },
  { value: 12, suffix: "+", label: "Specialities" },
  { value: 90, suffix: "", label: "Days Care Buddy Support" },
];

export const footerColumns: NavGroup[] = [
  {
    label: "Surgeries",
    items: [
      { label: "Laser Surgery", href: "/proctology" },
      { label: "Laparoscopy Surgery", href: "/laparoscopy" },
      { label: "Cosmetic Surgery", href: "/aesthetics" },
      { label: "Ear, Nose & Throat", href: "/ent" },
      { label: "Eye Surgery", href: "/ophthalmology" },
      { label: "Weight Loss Surgery", href: "/weight-loss" },
      { label: "Orthopedic Surgery", href: "/orthopedics" },
      { label: "Vein Surgery", href: "/vascular" },
    ],
  },
  {
    label: "Specialties",
    items: [
      "Proctology",
      "Laparoscopy",
      "Gynaecology",
      "ENT",
      "Urology",
      "Vascular",
      "Orthopedics",
      "Ophthalmology",
      "Fertility",
    ].map((label) => ({
      label,
      href: `/${label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    label: "For Patients",
    items: [
      { label: "Consultation", href: "/for-patients/consultation" },
      { label: "Insurance", href: "/for-patients/insurance" },
      { label: "FAQs", href: "/for-patients/faqs" },
      { label: "Support", href: "/for-patients/support" },
      { label: "No Cost EMI", href: "/for-patients/no-cost-emi" },
    ],
  },
  {
    label: "For Doctors",
    items: [
      { label: "Join Our Network", href: "/for-doctors/join-network" },
      { label: "Refer a Patient", href: "/for-doctors/refer-patient" },
      { label: "CME Programs", href: "/for-doctors/cme-programs" },
      { label: "Resources", href: "/for-doctors/resources" },
    ],
  },
  {
    label: "Our Company",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/our-company/about-us" },
      { label: "Blogs", href: "/our-company/blogs" },
      { label: "Press Release", href: "/our-company/press-release" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
];

export const siteContact = {
  email: "ayushmansurgicare@gmail.com",
  phones: ["+91 70369 43189", "+91 73961 12346"],
  address:
    "H.No. 2-1-54/18, Flat No. 202, 2nd Floor, Bitla Residency, Venkateshwara Colony, Uppal, Hyderabad, Telangana – 500039",
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ayushman_surgicare", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/ayushman_surgicare", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/@ayushman_surgicare", icon: "youtube" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ayushman-surgicare/", icon: "linkedin" },
] as const;
