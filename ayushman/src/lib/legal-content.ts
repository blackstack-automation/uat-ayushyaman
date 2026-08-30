export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  effective: string;
  highlights: { title: string; text: string }[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  slug: "privacy-policy",
  eyebrow: "Legal",
  title: "Privacy Policy",
  summary:
    "How Ayushman Surgicare collects, uses, protects and shares your personal and health information when you use our website or our clinical services.",
  updated: "29 August 2026",
  effective: "1 September 2026",
  highlights: [
    {
      title: "We collect what care requires",
      text: "Contact details when you book, and clinical information when you are treated. Nothing is collected for its own sake.",
    },
    {
      title: "Health records stay confidential",
      text: "Medical information is shared only with your treating team, or where the law compels disclosure.",
    },
    {
      title: "We never sell your data",
      text: "Your information is not sold, rented or traded to advertisers or data brokers under any circumstances.",
    },
    {
      title: "You can ask us to act",
      text: "Request a copy, a correction or an erasure of your data, and we will respond within thirty days.",
    },
  ],
  sections: [
    {
      id: "scope",
      title: "Scope of this policy",
      blocks: [
        {
          type: "p",
          text: "This policy applies to information collected through the Ayushman Surgicare website, our booking and enquiry forms, our telephone and messaging channels, and the clinical services delivered at our facilities and partner hospitals.",
        },
        {
          type: "p",
          text: "By using this website or engaging our services, you agree to the practices described here. If you do not agree, please discontinue use of the site and contact us before sharing any personal information.",
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      blocks: [
        {
          type: "p",
          text: "We collect information in three ways: what you give us directly, what is generated during your care, and what is captured automatically when you browse the site.",
        },
        {
          type: "ul",
          items: [
            "Identity and contact details — name, age, gender, phone number, email address and postal address.",
            "Appointment details — the speciality selected, preferred location, preferred time and the reason for your enquiry.",
            "Clinical information — symptoms, diagnoses, investigation reports, imaging, surgical notes, prescriptions and discharge summaries created during your treatment.",
            "Financial information — billing details, insurance policy and payer information, and instalment plan records where a no-cost EMI is arranged. Card and banking credentials are handled by our payment processors and never stored on our servers.",
            "Technical information — IP address, browser type, device type, referring page and pages visited, collected through cookies and similar technologies.",
          ],
        },
        {
          type: "note",
          text: "Health information is treated as sensitive personal data. It receives the strictest handling described in this policy and is never used for marketing.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How we use your information",
      blocks: [
        {
          type: "p",
          text: "We use your information only for purposes connected with providing, improving and administering care.",
        },
        {
          type: "ul",
          items: [
            "Scheduling consultations, confirming appointments and coordinating admissions and surgery.",
            "Delivering clinical care, including diagnosis, treatment planning and post-operative follow-up.",
            "Processing payments, raising invoices and settling insurance claims on your behalf.",
            "Responding to enquiries, complaints and requests for medical records.",
            "Sending appointment reminders and clinically relevant follow-up instructions.",
            "Meeting statutory, regulatory and accreditation obligations, including maintenance of medical records.",
            "Understanding aggregate site usage so we can improve navigation and content. This analysis uses de-identified data only.",
          ],
        },
      ],
    },
    {
      id: "health-records",
      title: "Health information and medical records",
      blocks: [
        {
          type: "p",
          text: "Your medical record is created and maintained by your treating clinicians. Access within our organisation is restricted to the clinical and administrative staff directly involved in your care, and every access is logged.",
        },
        {
          type: "p",
          text: "You may request a copy of your medical record at any time. We will provide it within the timelines set by applicable medical records regulations, ordinarily within seventy-two hours of a written request.",
        },
      ],
    },
    {
      id: "legal-basis",
      title: "Consent and legal basis",
      blocks: [
        {
          type: "p",
          text: "We process personal information on the basis of your consent, the necessity of performing the services you have requested, our legitimate interest in operating a safe clinical practice, and our obligations under applicable law.",
        },
        {
          type: "p",
          text: "Consent for a surgical procedure is obtained separately and specifically, in writing, after the procedure, its alternatives and its risks have been explained to you. Consent to this privacy policy is not a substitute for clinical consent.",
        },
        {
          type: "p",
          text: "You may withdraw consent for non-essential processing, such as marketing communications, at any time without affecting your access to care.",
        },
      ],
    },
    {
      id: "sharing",
      title: "When we share information",
      blocks: [
        {
          type: "p",
          text: "We share personal information only where it is necessary, and only with parties bound by confidentiality obligations.",
        },
        {
          type: "ul",
          items: [
            "Treating clinicians, surgeons, anaesthetists and partner hospitals involved in your care.",
            "Diagnostic laboratories and imaging centres processing your investigations.",
            "Insurers, third-party administrators and financing partners, where you have asked us to raise a claim or arrange an instalment plan.",
            "Service providers who host our systems, send our messages or process our payments, under written data-protection terms.",
            "Regulators, courts and law-enforcement authorities where disclosure is required by law or necessary to protect life.",
          ],
        },
        {
          type: "note",
          text: "We do not sell, rent or trade personal or health information. We do not share identifiable health information with advertisers.",
        },
      ],
    },
    {
      id: "security",
      title: "How we protect your information",
      blocks: [
        {
          type: "p",
          text: "We maintain administrative, physical and technical safeguards proportionate to the sensitivity of the information we hold.",
        },
        {
          type: "ul",
          items: [
            "Encryption of data in transit using industry-standard transport security.",
            "Role-based access control, so staff see only what their role requires.",
            "Audit logging of access to electronic medical records.",
            "Physical security and restricted access for paper records.",
            "Periodic security reviews, staff confidentiality training and vendor due diligence.",
          ],
        },
        {
          type: "p",
          text: "No system is perfectly secure. If a breach affects your information and is likely to cause you harm, we will notify you and the relevant authority without undue delay.",
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep information",
      blocks: [
        {
          type: "p",
          text: "Medical records are retained for the period required by applicable medical records regulations, which is ordinarily three years from the date of the last entry, and longer where a matter is under litigation or where the record relates to a minor.",
        },
        {
          type: "p",
          text: "Enquiry and marketing data is retained for twenty-four months from your last interaction with us, unless you ask us to delete it sooner. Financial records are retained for the period required by tax and accounting law.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your rights and choices",
      blocks: [
        {
          type: "p",
          text: "Subject to applicable law and to our record-keeping obligations, you may exercise the following rights.",
        },
        {
          type: "ul",
          items: [
            "Access — obtain confirmation of what we hold about you and a copy of it.",
            "Correction — have inaccurate or incomplete information rectified.",
            "Erasure — ask us to delete information we no longer have a lawful basis to keep.",
            "Withdrawal of consent — opt out of non-essential processing and marketing.",
            "Restriction and objection — ask us to pause certain processing while a concern is resolved.",
            "Grievance — escalate any concern to our Grievance Officer, who will respond within thirty days.",
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, write to us using the contact details at the end of this policy. We may ask you to verify your identity before we act.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies and tracking",
      blocks: [
        {
          type: "p",
          text: "We use strictly necessary cookies to operate the site, and analytics cookies to understand how visitors use it. Analytics data is aggregated and does not identify you individually.",
        },
        {
          type: "p",
          text: "You can refuse or delete cookies through your browser settings. Blocking strictly necessary cookies may prevent parts of the site, including the booking form, from working correctly.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "Third-party links and services",
      blocks: [
        {
          type: "p",
          text: "Our site may link to hospital partners, insurers, payment gateways and social media platforms. Those services operate under their own privacy policies, which we do not control. We encourage you to read them before sharing information.",
        },
      ],
    },
    {
      id: "children",
      title: "Children's privacy",
      blocks: [
        {
          type: "p",
          text: "We treat patients under the age of eighteen only with the consent of a parent or legal guardian. We do not knowingly collect information directly from children through this website. If you believe a child has provided information without guardian consent, contact us and we will delete it.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this policy to reflect changes in our practices or in the law. The revised version will be posted here with a new effective date. Where a change materially affects your rights, we will notify you directly.",
        },
      ],
    },
  ],
};

export const termsAndConditions: LegalDoc = {
  slug: "terms-and-conditions",
  eyebrow: "Legal",
  title: "Terms & Conditions",
  summary:
    "The terms that govern your use of the Ayushman Surgicare website and the healthcare services we arrange and deliver.",
  updated: "29 August 2026",
  effective: "1 September 2026",
  highlights: [
    {
      title: "Not for emergencies",
      text: "This site cannot handle medical emergencies. In a crisis, call your local emergency number or go to the nearest hospital.",
    },
    {
      title: "Information, not diagnosis",
      text: "Content on this site is general information. It does not replace a consultation with a qualified clinician.",
    },
    {
      title: "Quotes are estimates",
      text: "Surgical costs depend on findings, implants and length of stay. Final billing may differ from an initial estimate.",
    },
    {
      title: "You can cancel",
      text: "Consultations cancelled at least twenty-four hours ahead are rescheduled or refunded in full.",
    },
  ],
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these terms",
      blocks: [
        {
          type: "p",
          text: "By accessing this website, submitting an enquiry, booking a consultation or receiving treatment from Ayushman Surgicare, you agree to be bound by these terms and by our Privacy Policy.",
        },
        {
          type: "p",
          text: "If you are agreeing on behalf of another person, such as a patient in your care, you confirm that you are authorised to do so.",
        },
      ],
    },
    {
      id: "emergency",
      title: "Medical emergencies",
      blocks: [
        {
          type: "note",
          text: "This website is not monitored continuously and cannot be used to obtain urgent medical help. If you are experiencing a medical emergency, call your local emergency number or proceed to the nearest emergency department immediately.",
        },
        {
          type: "p",
          text: "Do not delay seeking emergency care because of information you have read here or a response you are waiting for from us.",
        },
      ],
    },
    {
      id: "not-medical-advice",
      title: "Information is not medical advice",
      blocks: [
        {
          type: "p",
          text: "Descriptions of conditions, procedures and recovery timelines on this site are provided for general education. They describe typical cases and cannot account for your history, comorbidities or examination findings.",
        },
        {
          type: "p",
          text: "No doctor-patient relationship is created by browsing this site or submitting an enquiry form. That relationship begins only when a clinician accepts you for consultation or treatment.",
        },
      ],
    },
    {
      id: "services",
      title: "Scope of our services",
      blocks: [
        {
          type: "p",
          text: "Ayushman Surgicare provides surgical consultation, diagnostics, day-care and inpatient surgical procedures across the specialities listed on this site, and coordinates admissions with partner hospitals where a procedure requires facilities we do not operate directly.",
        },
        {
          type: "p",
          text: "Where care is delivered at a partner hospital, that hospital's own policies on admission, visiting and discharge apply alongside these terms.",
        },
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility and accurate information",
      blocks: [
        {
          type: "p",
          text: "You must be at least eighteen years old to book on your own behalf. Patients under eighteen must be booked and accompanied by a parent or legal guardian.",
        },
        {
          type: "p",
          text: "You agree to provide accurate, current and complete information, including your medical history, current medication, allergies and prior surgeries. Clinical decisions depend on it, and withholding information may affect the safety and outcome of your treatment.",
        },
      ],
    },
    {
      id: "appointments",
      title: "Appointments and cancellations",
      blocks: [
        {
          type: "ul",
          items: [
            "A booking request is confirmed only when you receive a confirmation from us by call or message. A submitted form is not by itself a confirmed appointment.",
            "Consultations cancelled or rescheduled at least twenty-four hours in advance are rearranged at no charge, or refunded in full if paid.",
            "Cancellations inside twenty-four hours, and non-attendance without notice, may forfeit any consultation fee paid.",
            "Scheduled surgery may be postponed on clinical grounds, including a newly identified risk, an abnormal pre-operative investigation or an intercurrent infection. Patient safety takes precedence over scheduling.",
            "We may need to reschedule if a surgeon is called to an emergency. We will offer you the earliest alternative slot.",
          ],
        },
      ],
    },
    {
      id: "fees",
      title: "Fees, estimates and payment",
      blocks: [
        {
          type: "p",
          text: "Cost estimates issued before surgery are made in good faith on the information available at the time. Final charges may vary where the procedure is extended, additional implants or consumables are required, the length of stay changes, or an unforeseen clinical finding alters the plan.",
        },
        {
          type: "p",
          text: "Where a no-cost EMI facility is offered, it is provided by a third-party financing partner on that partner's own terms. Approval is at the partner's discretion, and you remain responsible for the instalments due under that agreement.",
        },
        {
          type: "p",
          text: "Payments must be made by the due date stated on your invoice. Discharge may be deferred while billing is being settled, except where deferral would be clinically unsafe.",
        },
      ],
    },
    {
      id: "insurance",
      title: "Insurance and third-party payers",
      blocks: [
        {
          type: "p",
          text: "We assist with cashless authorisation and claim documentation where your insurer or third-party administrator is on our panel. Approval, the sum authorised and any deduction are decided by your insurer, not by us.",
        },
        {
          type: "p",
          text: "You remain liable for any amount your insurer declines, disallows or deducts, including non-medical consumables and any excess or co-payment under your policy.",
        },
      ],
    },
    {
      id: "responsibilities",
      title: "Your responsibilities as a patient",
      blocks: [
        {
          type: "ul",
          items: [
            "Follow pre-operative instructions, including fasting, medication adjustment and pre-anaesthetic requirements.",
            "Disclose all current medication, supplements, allergies and prior adverse reactions.",
            "Attend scheduled follow-up appointments and complete prescribed post-operative care.",
            "Arrange an accompanying adult for day-care procedures and any procedure involving sedation.",
            "Treat our staff and other patients with respect. We may decline or discontinue non-emergency care where conduct is abusive or threatens the safety of others.",
          ],
        },
      ],
    },
    {
      id: "outcomes",
      title: "Clinical outcomes",
      blocks: [
        {
          type: "p",
          text: "Medicine is not an exact science. Our clinicians will exercise reasonable professional skill and care in line with accepted practice, but no surgical outcome can be guaranteed. Recovery times, cosmetic results and symptom relief vary between individuals.",
        },
        {
          type: "p",
          text: "The risks material to your procedure will be explained to you during the informed consent process, and you will have the opportunity to ask questions before you consent.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "The Ayushman Surgicare name, logo, site design, text, images and other materials are owned by us or licensed to us. You may view and print pages for personal, non-commercial use. Any other reproduction, distribution or adaptation requires our written permission.",
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      blocks: [
        {
          type: "p",
          text: "You agree not to use this site in any way that is unlawful or that interferes with its operation. In particular, you must not:",
        },
        {
          type: "ul",
          items: [
            "Submit false, misleading or another person's information without their authority.",
            "Attempt to gain unauthorised access to our systems, accounts or records.",
            "Introduce malware, or use automated tools to scrape or overload the site.",
            "Impersonate our staff or misrepresent an affiliation with us.",
            "Publish defamatory, harassing or unlawful content through any form or channel we provide.",
          ],
        },
      ],
    },
    {
      id: "liability",
      title: "Disclaimers and limitation of liability",
      blocks: [
        {
          type: "p",
          text: "This website is provided on an as-is basis. We do not warrant that it will be uninterrupted, error-free or free of harmful components, and we are not liable for loss arising from reliance on general information published here.",
        },
        {
          type: "p",
          text: "Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, for fraud, or for any liability that cannot lawfully be excluded. Subject to that, our aggregate liability arising from your use of this website is limited to the amount you have paid us for the service in question.",
        },
      ],
    },
    {
      id: "indemnity",
      title: "Indemnity",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify Ayushman Surgicare against claims, losses and reasonable costs arising from your breach of these terms, your misuse of the site, or information you have provided that is false or belongs to another person without their authority.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: "These terms are governed by the laws of India. Any dispute arising out of or in connection with them is subject to the exclusive jurisdiction of the courts at our registered office.",
        },
        {
          type: "p",
          text: "Before commencing proceedings, we ask that you raise the matter with our Grievance Officer so that we have an opportunity to resolve it directly.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may revise these terms from time to time. The current version is always the one published on this page, with its effective date shown above. Continued use of the site or our services after a revision constitutes acceptance of the revised terms.",
        },
      ],
    },
  ],
};

export const legalDocs = [privacyPolicy, termsAndConditions];
