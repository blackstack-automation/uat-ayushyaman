/**
 * Structured, patient-facing content for specialty treatment pages.
 * One entry per treatment, rendered by `TreatmentTemplate`.
 *
 * Slugs must match the hrefs generated in `site-data.ts`.
 */

export type TreatmentFaq = { question: string; answer: string };

export type Testimonial = {
  quote: string;
  name: string;
  /** Procedure this patient had. */
  procedure: string;
  location?: string;
};

export type Treatment = {
  slug: string;
  title: string;
  /** Falls back to `title` for the <title> tag. */
  metaTitle?: string;
  metaDescription: string;
  /** Overview paragraphs shown under "Understanding {title}". */
  overview: string[];
  commonSigns: string[];
  faqs: TreatmentFaq[];
};

export type Specialty = {
  slug: string;
  label: string;
  blurb: string;
  treatments: Treatment[];
  testimonials: Testimonial[];
};

const proctology: Specialty = {
  slug: "proctology",
  label: "Proctology",
  blurb:
    "Discreet, expert treatment for piles, fissure, fistula, pilonidal sinus and rectal prolapse — mostly with same-day laser procedures and a 90-day Care Buddy through recovery.",
  testimonials: [
    {
      quote:
        "I had put off seeing a doctor about piles for two years out of embarrassment. The consultation was matter-of-fact and kind, the laser procedure was done by lunchtime, and I was back at my desk in three days.",
      name: "Sandeep R.",
      procedure: "Laser Piles Surgery",
      location: "Hyderabad",
    },
    {
      quote:
        "My fistula had come back twice before. This time they did an MRI first, explained exactly which technique they'd use to protect the muscle, and my Care Buddy checked on my dressings every few days. Six months on, no recurrence.",
      name: "Imran K.",
      procedure: "Fistula Surgery (LIFT)",
      location: "Secunderabad",
    },
    {
      quote:
        "The fissure pain was unbearable every morning. After the day-care procedure it settled within a fortnight. What I appreciated most was that nobody rushed me — they answered every question before I agreed to surgery.",
      name: "Lakshmi P.",
      procedure: "Fissure Treatment",
      location: "Uppal",
    },
    {
      quote:
        "My pilonidal sinus had been drained twice at other places and kept coming back. The laser procedure here left just two tiny wounds. I was sitting comfortably within a week and it hasn't returned in eight months.",
      name: "Rohit M.",
      procedure: "Laser Pilonidal Sinus Surgery",
      location: "Kompally",
    },
    {
      quote:
        "At 71 I was nervous about surgery for the prolapse. The team walked my daughter and me through both options, chose the keyhole repair, and the Care Buddy arranged my physiotherapy afterwards. I finally feel normal again.",
      name: "Sarojini D.",
      procedure: "Laparoscopic Rectopexy",
      location: "Nacharam",
    },
    {
      quote:
        "The cashless approval was the part I was dreading, but they handled the whole insurance file. I just turned up, had the piles procedure, and went home the same evening with a clear recovery plan.",
      name: "Arjun V.",
      procedure: "Stapler Piles Surgery",
      location: "LB Nagar",
    },
  ],
  treatments: [
    {
      slug: "piles-treatment",
      title: "Piles Treatment",
      metaTitle: "Piles (Haemorrhoid) Treatment & Laser Surgery",
      metaDescription:
        "Laser and stapled day-care treatment for piles (haemorrhoids) with minimal pain, same-day discharge, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "Piles — also called haemorrhoids — are swollen blood vessels in and around the anus and lower rectum. They are very common and usually follow straining during bowel movements, long hours of sitting, pregnancy or a low-fibre diet.",
        "Most piles settle with dietary changes and medication. When they bleed persistently, prolapse or cause ongoing pain, a short day-care procedure — laser haemorrhoidoplasty or stapled haemorrhoidopexy — shrinks or removes the piles with minimal cutting and a same-day discharge for most patients.",
        "Ayushman Surgicare coordinates your proctologist consultation, the pre-operative tests, the hospital and insurance, and your Care Buddy follows your recovery for a full 90 days.",
      ],
      commonSigns: [
        "Bright red bleeding during bowel movements",
        "A lump or swelling near the anus",
        "Itching or irritation around the anus",
        "Pain or discomfort, especially when sitting",
        "Mucus discharge after passing stool",
        "A feeling of incomplete evacuation",
      ],
      faqs: [
        {
          question: "Is laser piles surgery painful?",
          answer:
            "The procedure is done under spinal or general anaesthesia, so you feel nothing during surgery. Laser treatment causes far less post-operative pain than conventional surgery, and most discomfort is well controlled with oral medication for a few days.",
        },
        {
          question: "How soon can I return to work?",
          answer:
            "Most patients go home the same day and return to desk work within 2–3 days. Avoid heavy lifting and prolonged sitting for about a week.",
        },
        {
          question: "Will the piles come back?",
          answer:
            "Recurrence is uncommon after a properly performed procedure, especially if you keep to a high-fibre diet, stay hydrated and avoid straining. Your surgeon will give you a simple prevention plan.",
        },
        {
          question: "Is this covered by insurance?",
          answer:
            "Yes. Piles surgery is covered under most private health insurance plans and government schemes such as Ayushman Bharat. Our team checks your eligibility and handles the cashless paperwork.",
        },
      ],
    },
    {
      slug: "fistula-treatment",
      title: "Fistula Treatment",
      metaTitle: "Anal Fistula Treatment (LIFT, Laser & Seton)",
      metaDescription:
        "Sphincter-sparing anal fistula surgery — LIFT, laser (FiLaC) and seton — guided by MRI, with insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "An anal fistula is a small tunnel that forms between the inside of the anal canal and the skin near the anus, usually after an untreated or recurrent anal abscess. It rarely heals on its own and tends to flare up again and again.",
        "Treatment depends on how the tract runs in relation to the sphincter muscles. Options range from a simple fistulotomy to sphincter-sparing techniques such as LIFT, laser (FiLaC) or a seton, chosen to clear the infection while protecting continence.",
        "Your proctologist confirms the anatomy with an MRI or endoanal ultrasound before surgery. Ayushman Surgicare arranges the imaging, the specialist, the hospital and insurance, with 90 days of Care Buddy follow-up.",
      ],
      commonSigns: [
        "Recurrent boil-like swelling near the anus",
        "Pus or blood discharge that stains underwear",
        "Throbbing pain that eases after the discharge",
        "Skin irritation or itching around the opening",
        "A visible opening in the skin near the anus",
        "Low-grade fever during flare-ups",
      ],
      faqs: [
        {
          question: "Can a fistula heal without surgery?",
          answer:
            "Anal fistulas very rarely close on their own because the tract stays lined and repeatedly infected. Medication can settle a flare-up, but surgery is almost always needed for a lasting cure.",
        },
        {
          question: "Will surgery affect bowel control?",
          answer:
            "Modern sphincter-sparing techniques (LIFT, laser, seton) are specifically designed to protect the muscles that control continence. Your surgeon selects the approach based on your MRI findings to keep this risk very low.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most patients go home within a day and return to routine work in 1–2 weeks. Complex or high fistulas heal more slowly and need regular dressing and follow-up.",
        },
        {
          question: "Might I need more than one operation?",
          answer:
            "Complex fistulas are sometimes treated in stages — for example a seton first, then a definitive procedure. Your surgeon will explain the plan clearly at consultation.",
        },
      ],
    },
    {
      slug: "fissure-treatment",
      title: "Fissure Treatment",
      metaTitle: "Anal Fissure Treatment & Laser Sphincterotomy",
      metaDescription:
        "Treatment for chronic anal fissure — medical management and quick day-care laser sphincterotomy — with insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "An anal fissure is a small tear in the lining of the anal canal, most often caused by passing a hard or large stool. It produces sharp pain during and after bowel movements and can bleed.",
        "Fresh fissures usually heal with a high-fibre diet, stool softeners and medicated ointments. Chronic fissures that have not healed in 6–8 weeks are treated with a quick day-care procedure — laser or lateral internal sphincterotomy — that relaxes the muscle spasm so the tear can heal.",
        "Ayushman Surgicare coordinates the proctology consultation, the procedure, the hospital and insurance, and your Care Buddy checks in through recovery.",
      ],
      commonSigns: [
        "Sharp, burning pain during bowel movements",
        "Pain that lingers for minutes to hours afterwards",
        "Bright red blood on the stool or toilet paper",
        "A visible crack in the skin around the anus",
        "A small skin tag near the fissure",
        "Spasm or tightness of the anal muscle",
      ],
      faqs: [
        {
          question: "Do all fissures need surgery?",
          answer:
            "No. Most acute fissures heal within a few weeks with diet changes, sitz baths and prescribed ointments. Surgery is considered only for chronic fissures that fail conservative treatment.",
        },
        {
          question: "How does the procedure relieve the pain?",
          answer:
            "A chronic fissure won't heal because the anal muscle is in spasm and reducing blood supply to the tear. The procedure releases a tiny portion of that muscle, restoring blood flow so the fissure heals — usually within 2–3 weeks.",
        },
        {
          question: "Is it a day-care procedure?",
          answer:
            "Yes. It takes about 15–20 minutes under anaesthesia and most patients are discharged the same day, back to work in 2–3 days.",
        },
        {
          question: "Will it affect continence?",
          answer:
            "The amount of muscle released is very small and carefully measured. Lasting continence problems are rare with an experienced proctologist.",
        },
      ],
    },
    {
      slug: "pilonidal-sinus-treatment",
      title: "Pilonidal Sinus Treatment",
      metaTitle: "Pilonidal Sinus Treatment (Laser & Endoscopic)",
      metaDescription:
        "Minimally invasive pilonidal sinus surgery — laser pilonidoplasty and EPSiT — with quicker return to sitting, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "A pilonidal sinus is a small cavity or tunnel in the skin near the top of the buttock cleft, usually containing hair and debris. It commonly affects young adults who sit for long periods and can become painful and infected.",
        "Once a pilonidal sinus has caused repeated infections it needs surgery. Minimally invasive options — laser pilonidoplasty (SiLaC) or endoscopic pilonidal sinus treatment (EPSiT) — clear the tract through tiny openings, with far less pain and a much quicker return to sitting than traditional open excision.",
        "Ayushman Surgicare arranges the surgeon, the hospital, insurance and pre-operative tests, and your Care Buddy supports wound care and follow-up for 90 days.",
      ],
      commonSigns: [
        "Pain or tenderness at the top of the buttock cleft",
        "Swelling or a lump in the area",
        "Discharge of pus or blood, sometimes foul-smelling",
        "One or more small pits or openings in the skin",
        "Recurring abscesses in the same spot",
        "Discomfort when sitting or bending",
      ],
      faqs: [
        {
          question: "Why does a pilonidal sinus keep coming back?",
          answer:
            "Loose hairs get driven into the skin and set up a chronic tract that traps debris and infection. Traditional wide excision has a notable recurrence rate; minimally invasive laser or endoscopic techniques clear the tract while preserving healthy tissue and lowering recurrence.",
        },
        {
          question: "How long until I can sit normally?",
          answer:
            "After laser or endoscopic treatment most patients are back to light sitting within a few days and normal activity in 1–2 weeks. Open excision with an unstitched wound takes considerably longer.",
        },
        {
          question: "Will I need dressings at home?",
          answer:
            "Minimally invasive procedures leave tiny wounds that need only simple care. Your Care Buddy will guide you and arrange a nurse visit if required.",
        },
        {
          question: "How do I prevent recurrence?",
          answer:
            "Keep the area clean and hair-free (trimming or laser hair reduction), avoid sitting for very long unbroken stretches, and attend your follow-up reviews.",
        },
      ],
    },
    {
      slug: "rectal-prolapse",
      title: "Rectal Prolapse",
      metaTitle: "Rectal Prolapse Surgery (Laparoscopic Rectopexy)",
      metaDescription:
        "Surgery for rectal prolapse — laparoscopic rectopexy and perineal repair — with colorectal specialists, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "Rectal prolapse is when part or all of the rectum slides down and protrudes through the anus. It is most common in older adults, particularly women, and in people with a long history of constipation and straining.",
        "Prolapse does not improve without surgery. The rectum is fixed back into position either through the abdomen (laparoscopic rectopexy, often the most durable option) or through the anus (perineal repair, suited to frailer patients). Your surgeon recommends the approach based on your age, fitness and the degree of prolapse.",
        "Ayushman Surgicare coordinates the colorectal specialist, diagnostics, hospital and insurance, and your Care Buddy follows bowel recovery and pelvic-floor rehabilitation for 90 days.",
      ],
      commonSigns: [
        "A mass or bulge coming out of the anus, especially when straining",
        "Needing to push the rectum back in by hand",
        "Leakage of stool or mucus",
        "A feeling of incomplete or blocked evacuation",
        "Constipation alternating with urgency",
        "Bleeding or irritation from the exposed tissue",
      ],
      faqs: [
        {
          question: "Is rectal prolapse the same as piles?",
          answer:
            "No, although they can look similar. Piles are swollen blood vessels; rectal prolapse is a full-thickness slippage of the rectal wall. A proctology examination distinguishes them and determines the right treatment.",
        },
        {
          question: "Can I avoid surgery?",
          answer:
            "Diet, fibre and pelvic-floor exercises help with symptoms and are useful before and after surgery, but they cannot correct an established prolapse. Surgical repair is the definitive treatment.",
        },
        {
          question: "Which repair is better — abdominal or perineal?",
          answer:
            "Laparoscopic rectopexy through the abdomen generally has the lowest recurrence and is preferred for fit patients. A perineal repair is less invasive and better suited to older or higher-risk patients. Your surgeon will weigh these factors with you.",
        },
        {
          question: "How long is the hospital stay?",
          answer:
            "Laparoscopic rectopexy usually needs a 1–3 day stay with return to normal activity in 3–4 weeks. Perineal procedures often allow a shorter stay.",
        },
      ],
    },
  ],
};

const laparoscopy: Specialty = {
  slug: "laparoscopy",
  label: "Laparoscopy",
  blurb:
    "Keyhole surgery for hernia, gallstones and appendicitis — three or four tiny incisions, less pain, a faster return to work and a 90-day Care Buddy through recovery.",
  testimonials: [
    {
      quote:
        "The gallbladder attacks always hit at night. Within a week of my first consultation the keyhole surgery was done and I was home the next morning. Three months on, I eat everything I used to.",
      name: "Kavya S.",
      procedure: "Laparoscopic Gallbladder Removal",
      location: "Miyapur",
    },
    {
      quote:
        "I'd lived with the groin bulge for years, assuming surgery meant a long layoff. The keyhole repair had me back at work in four days and back at the gym in a month.",
      name: "Naveen T.",
      procedure: "Laparoscopic Inguinal Hernia Repair",
      location: "Kukatpally",
    },
    {
      quote:
        "My son's appendix pain started on a Sunday. The team arranged the scan, the surgeon and the cashless approval within a few hours, and he was operated on the same evening.",
      name: "Meena R.",
      procedure: "Emergency Appendicectomy",
      location: "Uppal",
    },
    {
      quote:
        "The umbilical hernia had slowly got bigger after my second pregnancy. The repair took under an hour, the scar is tiny, and my Care Buddy checked in through the whole first month.",
      name: "Deepika N.",
      procedure: "Umbilical Hernia Repair",
      location: "Malkajgiri",
    },
    {
      quote:
        "What I feared most was the insurance runaround. They filed everything, got the cashless approval before admission, and I never had to argue with the TPA once.",
      name: "Suresh B.",
      procedure: "Laparoscopic Gallbladder Removal",
      location: "Dilsukhnagar",
    },
    {
      quote:
        "Both sides needed repair. Doing it laparoscopically in one sitting meant one recovery instead of two. I was walking properly the next day.",
      name: "Anwar H.",
      procedure: "Bilateral Inguinal Hernia Repair",
      location: "Tolichowki",
    },
  ],
  treatments: [
    {
      slug: "hernia-treatment",
      title: "Hernia Treatment",
      metaTitle: "Laparoscopic Hernia Repair (Mesh Surgery)",
      metaDescription:
        "Keyhole hernia repair with soft mesh for groin, umbilical and incisional hernias — less pain, quick return to work, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "A hernia occurs when an organ or fatty tissue pushes through a weak spot in the surrounding muscle wall — most often in the groin, around the navel, or at the site of a previous surgical scar. It shows up as a bulge that may come and go.",
        "Hernias do not heal on their own and tend to enlarge over time. The standard treatment is a laparoscopic (keyhole) repair, where the defect is closed and reinforced with a soft mesh through three small incisions — with far less pain and a quicker return to work than open surgery.",
        "Ayushman Surgicare coordinates your surgeon consultation, pre-operative tests, hospital and insurance, and your Care Buddy follows recovery for a full 90 days.",
      ],
      commonSigns: [
        "A visible bulge in the groin, abdomen or near a scar",
        "The bulge disappears when you lie down",
        "Aching or dragging discomfort, worse by evening",
        "Pain when lifting, coughing or straining",
        "A feeling of pressure or heaviness",
        "Sudden severe pain with a hard, tender lump — seek urgent care",
      ],
      faqs: [
        {
          question: "Can a hernia be treated without surgery?",
          answer:
            "No. A truss or belt may briefly ease symptoms, but only surgery repairs the muscle defect. Delaying repair raises the small risk of the hernia becoming trapped (strangulated), which is an emergency.",
        },
        {
          question: "Is the mesh safe?",
          answer:
            "Modern lightweight meshes are well tolerated and dramatically lower the chance of the hernia coming back compared with stitch-only repair. Your surgeon will discuss the mesh used in your case.",
        },
        {
          question: "How soon can I get back to normal?",
          answer:
            "Most people return to desk work in 3–5 days after keyhole repair and to full activity, including gym and heavy lifting, in 3–4 weeks.",
        },
        {
          question: "Will it recur?",
          answer:
            "Recurrence after a properly done laparoscopic mesh repair is uncommon — in the low single-digit percentages. Maintaining a healthy weight and avoiding heavy straining helps.",
        },
      ],
    },
    {
      slug: "gallstones-treatment",
      title: "Gallstones Treatment",
      metaTitle: "Gallstones & Laparoscopic Gallbladder Removal",
      metaDescription:
        "Keyhole gallbladder removal (laparoscopic cholecystectomy) for symptomatic gallstones — same or next-day discharge, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "Gallstones are hard deposits that form in the gallbladder, a small organ under the liver that stores bile. They are very common and often cause no trouble — but when a stone blocks the flow of bile, it triggers pain, nausea and sometimes infection.",
        "Once gallstones have caused symptoms, the reliable treatment is laparoscopic cholecystectomy — keyhole removal of the whole gallbladder through four small incisions. Most patients are discharged within 24 hours and digest normally without it.",
        "Ayushman Surgicare arranges the ultrasound, blood tests, surgeon, hospital and insurance, with 90 days of Care Buddy follow-up.",
      ],
      commonSigns: [
        "Sudden, intense pain in the upper-right abdomen",
        "Pain spreading to the back or right shoulder blade",
        "Nausea or vomiting, especially after fatty meals",
        "Bloating and indigestion",
        "Fever or chills — may signal infection",
        "Yellowing of the eyes or skin — seek prompt care",
      ],
      faqs: [
        {
          question: "Can I keep my gallbladder and just remove the stones?",
          answer:
            "Stones almost always come back if the gallbladder is left in place, so surgeons remove the whole organ. You can live and eat normally without a gallbladder — bile simply flows directly from the liver into the intestine.",
        },
        {
          question: "Do all gallstones need surgery?",
          answer:
            "Silent stones found by chance usually need no treatment. Surgery is advised once stones cause pain, inflammation or blockage.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Keyhole gallbladder removal usually means a same-day or next-day discharge and a return to routine work within a week.",
        },
        {
          question: "Will my digestion change?",
          answer:
            "A minority of people notice looser stools or sensitivity to very fatty food for a few weeks. This normally settles as the body adjusts.",
        },
      ],
    },
    {
      slug: "appendicitis",
      title: "Appendicitis",
      metaTitle: "Appendicitis Treatment & Laparoscopic Appendicectomy",
      metaDescription:
        "Prompt keyhole removal of an inflamed appendix (laparoscopic appendicectomy) with fast-tracked admission, insurance support and Care Buddy recovery follow-up.",
      overview: [
        "Appendicitis is inflammation of the appendix, a small pouch attached to the large intestine. It typically starts as vague pain around the navel that moves to the lower-right abdomen and steadily worsens over hours.",
        "Appendicitis is a surgical emergency — an inflamed appendix can burst. The treatment is laparoscopic appendicectomy, keyhole removal of the appendix, usually done within hours of diagnosis. Recovery from an uncomplicated case is quick.",
        "Ayushman Surgicare fast-tracks the scan, surgeon and hospital admission, handles the insurance, and your Care Buddy supports recovery afterwards.",
      ],
      commonSigns: [
        "Pain that begins near the navel and shifts to the lower right",
        "Pain that worsens with movement, coughing or walking",
        "Loss of appetite",
        "Nausea or vomiting soon after the pain starts",
        "Low-grade fever",
        "A tender, rigid lower-right abdomen",
      ],
      faqs: [
        {
          question: "Can appendicitis be treated with antibiotics alone?",
          answer:
            "Selected early, uncomplicated cases can be managed with antibiotics, but the appendix can flare again. Surgery remains the definitive treatment and is strongly advised if there is any sign of complication.",
        },
        {
          question: "How urgent is the surgery?",
          answer:
            "It should be done promptly — usually the same day — to reduce the risk of the appendix perforating.",
        },
        {
          question: "How long will I be in hospital?",
          answer:
            "For an uncomplicated keyhole appendicectomy, typically 1–2 days, with a return to normal activity in 1–2 weeks.",
        },
        {
          question: "Is it covered by insurance?",
          answer:
            "Yes. Emergency appendicectomy is covered under virtually all health insurance plans and government schemes. Our team handles the cashless paperwork even at short notice.",
        },
      ],
    },
    {
      slug: "inguinal-hernia-treatment",
      title: "Inguinal Hernia Treatment",
      metaTitle: "Inguinal (Groin) Hernia Repair — Laparoscopic TEP / TAPP",
      metaDescription:
        "Keyhole inguinal hernia repair (TEP / TAPP) with mesh — ideal for bilateral and recurrent hernias, with less groin pain, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "An inguinal hernia is a bulge in the groin where abdominal contents push through the inguinal canal. It is the most common type of hernia, particularly in men, and often follows heavy lifting, chronic cough or straining.",
        "The modern repair is laparoscopic — TEP or TAPP — placing a mesh behind the muscle wall through three small cuts. This approach is especially good for hernias on both sides and for returning to activity quickly, with less groin discomfort than open surgery.",
        "Ayushman Surgicare coordinates the surgeon, tests, hospital and insurance, with 90 days of Care Buddy follow-up.",
      ],
      commonSigns: [
        "A bulge in the groin or scrotum, more obvious when standing",
        "The bulge eases when you lie down or push it in",
        "A dragging or burning ache in the groin",
        "Discomfort that worsens through the day or with exertion",
        "A heavy or full feeling in the groin",
        "Sudden hard, painful swelling that won't reduce — emergency",
      ],
      faqs: [
        {
          question: "Is keyhole better than open repair for a groin hernia?",
          answer:
            "For bilateral hernias, recurrent hernias and people keen to return to activity fast, laparoscopic repair generally causes less pain and quicker recovery. For a simple one-sided hernia both approaches work well; your surgeon will advise.",
        },
        {
          question: "Can I wait if it isn't painful?",
          answer:
            "Small, painless hernias can sometimes be watched, but most surgeons recommend repair because hernias enlarge and carry a small risk of becoming trapped.",
        },
        {
          question: "When can I lift weights again?",
          answer:
            "Light activity within days, and a progressive return to heavy lifting and gym by about 4 weeks after keyhole repair.",
        },
        {
          question: "Will it affect fertility or sexual function?",
          answer:
            "Routine hernia repair does not affect fertility or sexual function. Your surgeon takes care to protect the cord structures during surgery.",
        },
      ],
    },
    {
      slug: "umbilical-hernia-treatment",
      title: "Umbilical Hernia Treatment",
      metaTitle: "Umbilical (Belly Button) Hernia Repair",
      metaDescription:
        "Suture or mesh repair for adult umbilical hernia, often laparoscopic — a short procedure with quick recovery, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "An umbilical hernia is a bulge at or near the navel, where a gap in the abdominal wall lets tissue push through. In adults it is often linked to pregnancy, obesity, previous abdominal surgery or repeated straining.",
        "Adult umbilical hernias do not resolve on their own. Small ones may be closed with sutures; larger ones are reinforced with mesh, often through a laparoscopic approach that spreads the repair widely and lowers recurrence.",
        "Ayushman Surgicare arranges the consultation, pre-operative tests, hospital and insurance, and your Care Buddy follows your recovery for 90 days.",
      ],
      commonSigns: [
        "A soft bulge at or beside the belly button",
        "The bulge is more visible when standing, coughing or straining",
        "Aching or tenderness around the navel",
        "Discomfort when bending or lifting",
        "A firm, painful lump or skin changes — seek prompt review",
        "A bulge that will not push back in",
      ],
      faqs: [
        {
          question: "Do adult umbilical hernias need surgery?",
          answer:
            "Yes, in almost all cases. Unlike in babies, adult umbilical hernias do not close by themselves and tend to grow. Repair is a short procedure with a quick recovery.",
        },
        {
          question: "Is mesh always used?",
          answer:
            "Very small defects can be closed with sutures alone. Mesh reinforcement is used for larger hernias because it substantially reduces the chance of recurrence.",
        },
        {
          question: "How long is the recovery?",
          answer:
            "Most patients go home the same day and return to desk work within a few days, with full activity in 2–4 weeks depending on the repair.",
        },
        {
          question: "Will the belly button look normal afterwards?",
          answer:
            "Surgeons take care to preserve the appearance of the navel. Any scar is small and usually well hidden.",
        },
      ],
    },
  ],
};

const gynaecology: Specialty = {
  slug: "gynaecology",
  label: "Gynaecology",
  blurb:
    "Sensitive, confidential care for women's-health conditions — from fibroids, cysts and endometriosis to pregnancy loss and elective procedures — mostly keyhole, with a 90-day Care Buddy.",
  testimonials: [
    {
      quote:
        "I'd been dismissed for years about my period pain. Here they actually listened, did the laparoscopy, confirmed endometriosis and treated it. Six months on, I finally have my life back.",
      name: "Divya M.",
      procedure: "Endometriosis Surgery",
      location: "Hyderabad",
    },
    {
      quote:
        "My ovarian cyst was removed by keyhole surgery and I was home the next day. They preserved the ovary and my Care Buddy walked me through every follow-up scan.",
      name: "Anjali R.",
      procedure: "Laparoscopic Ovarian Cystectomy",
      location: "Uppal",
    },
    {
      quote:
        "The hysterectomy decision took me months. They laid out every option, kept my ovaries, and did it laparoscopically. Recovery was far easier than I feared.",
      name: "Lakshmi V.",
      procedure: "Laparoscopic Hysterectomy",
      location: "Nacharam",
    },
    {
      quote:
        "When we found out it was ectopic, everything moved fast — the scan, the surgeon, the cashless approval — and they still took the time to explain what was happening to me.",
      name: "Sneha T.",
      procedure: "Ectopic Pregnancy Surgery",
      location: "Kompally",
    },
    {
      quote:
        "After two difficult deliveries I wanted this done properly. The gynaecologist explained laser versus surgery honestly and never once pushed me.",
      name: "Priya K.",
      procedure: "Vaginoplasty",
      location: "Secunderabad",
    },
    {
      quote:
        "I chose the procedure for my own reasons and every single person respected that. Complete privacy, a quick recovery, and no lectures.",
      name: "A patient, 27",
      procedure: "Hymenoplasty",
      location: "Hyderabad",
    },
  ],
  treatments: [
    {
      slug: "surgical-abortion",
      title: "Surgical Abortion",
      metaTitle: "Surgical Abortion — Safe, Confidential Care",
      metaDescription:
        "Safe, medically supervised surgical abortion (vacuum aspiration) with full confidentiality, a dedicated Care Buddy and care within India's MTP Act.",
      overview: [
        "Surgical abortion is a safe, medically supervised procedure to end a pregnancy, usually performed in the first trimester by suction (vacuum aspiration). The procedure itself takes only a few minutes.",
        "Our gynaecologists carry it out with complete confidentiality, and a dedicated Care Buddy guides you discreetly from consultation to recovery. All care is provided within the framework of India's MTP Act.",
      ],
      commonSigns: [
        "An unplanned or unwanted pregnancy",
        "A pregnancy that poses risks to your health",
        "A foetal abnormality found on a scan",
        "Failed contraception",
        "Pregnancy resulting from assault",
        "A personal decision made with your doctor",
      ],
      faqs: [
        {
          question: "Is the procedure painful?",
          answer:
            "It is done under local or general anaesthesia, so you feel nothing during the procedure. Afterwards you may have cramping similar to period pain, which settles with medication over a day or two.",
        },
        {
          question: "How long is the recovery?",
          answer:
            "Most women resume normal activities within 1–2 days, avoiding strenuous exercise and heavy lifting for about a week.",
        },
        {
          question: "Is my consultation confidential?",
          answer:
            "Yes, entirely. Patient privacy is our highest priority — all records and consultations are strictly confidential under law.",
        },
      ],
    },
    {
      slug: "mtp",
      title: "MTP (Medical Termination of Pregnancy)",
      metaTitle: "MTP — Medical Termination of Pregnancy",
      metaDescription:
        "Non-surgical medical termination of an early pregnancy (under 9 weeks) with a supervised medication course, full confidentiality and Care Buddy support.",
      overview: [
        "Medical Termination of Pregnancy (MTP) ends an early pregnancy — typically under 9 weeks — using a supervised course of medication rather than surgery.",
        "Our specialists guide you through each step, explain the timeline and what to expect, and your Care Buddy stays reachable throughout. All care follows India's MTP Act.",
      ],
      commonSigns: [
        "A confirmed early pregnancy",
        "A missed period with a positive test",
        "A preference for a non-surgical option",
        "A pregnancy under 9 weeks",
        "Medical advice to end the pregnancy",
        "A decision made with your doctor's support",
      ],
      faqs: [
        {
          question: "How does medical termination work?",
          answer:
            "It uses two medicines taken 24–48 hours apart. The first stops the pregnancy developing; the second causes the uterus to empty, with bleeding and cramping over several hours. A follow-up check confirms it is complete.",
        },
        {
          question: "Is it as effective as a surgical procedure?",
          answer:
            "For pregnancies under 9 weeks it is highly effective. In a small number of cases a short suction procedure is needed to complete it, which we arrange without delay.",
        },
        {
          question: "Is it confidential?",
          answer:
            "Completely. All consultations and records are strictly confidential under law.",
        },
      ],
    },
    {
      slug: "ectopic-pregnancy-treatment",
      title: "Ectopic Pregnancy Treatment",
      metaTitle: "Ectopic Pregnancy Treatment (Medical & Laparoscopic)",
      metaDescription:
        "Prompt treatment for ectopic pregnancy — methotrexate for early cases or tube-sparing laparoscopic surgery — with fast-tracked scans and insurance support.",
      overview: [
        "An ectopic pregnancy is one that implants outside the uterus, most often in a fallopian tube. It cannot develop safely and, if left untreated, can cause serious internal bleeding — so it is a medical emergency.",
        "Treatment is either medication (methotrexate) for early, stable cases, or laparoscopic surgery to remove the pregnancy while trying to preserve the tube. Ayushman Surgicare fast-tracks the scan, blood tests and surgeon, and handles the insurance.",
      ],
      commonSigns: [
        "Sharp or cramping pain on one side of the lower abdomen",
        "Vaginal bleeding, often lighter or darker than a period",
        "Shoulder-tip pain",
        "Dizziness or fainting",
        "A positive pregnancy test alongside these symptoms",
        "Pain when opening your bowels or passing urine",
      ],
      faqs: [
        {
          question: "Will I lose my fallopian tube?",
          answer:
            "Not necessarily. If the tube is not badly damaged, the surgeon can often remove just the pregnancy and preserve it. If the tube has ruptured or is severely damaged, removing it is safer.",
        },
        {
          question: "Can I have a normal pregnancy afterwards?",
          answer:
            "Yes. Most women go on to have healthy pregnancies, even with one fallopian tube. Your risk of another ectopic is slightly higher, so early scans are recommended in future pregnancies.",
        },
        {
          question: "How urgent is treatment?",
          answer:
            "Urgent. An ectopic pregnancy is treated the same day it is confirmed to prevent life-threatening bleeding.",
        },
      ],
    },
    {
      slug: "molar-pregnancy-treatment",
      title: "Molar Pregnancy Treatment",
      metaTitle: "Molar Pregnancy Treatment & Follow-up",
      metaDescription:
        "Suction evacuation for molar pregnancy followed by structured beta-hCG monitoring, coordinated by your Care Buddy, with full insurance support.",
      overview: [
        "A molar pregnancy is a rare complication where abnormal tissue grows in the uterus instead of a healthy pregnancy. It needs to be removed and then carefully monitored.",
        "Treatment is a suction evacuation of the uterus, followed by a series of blood tests (beta-hCG) over the following weeks to confirm all the tissue has cleared. Your Care Buddy keeps track of the follow-up schedule for you.",
      ],
      commonSigns: [
        "Vaginal bleeding in early pregnancy, sometimes with grape-like tissue",
        "Severe nausea and vomiting",
        "A uterus that seems larger than expected for the dates",
        "Very high pregnancy-hormone levels",
        "Pelvic pressure or pain",
        "High blood pressure early in pregnancy",
      ],
      faqs: [
        {
          question: "Why is follow-up so important?",
          answer:
            "In a small number of cases, molar tissue can persist and needs further treatment. Regular beta-hCG blood tests until levels are normal for a set period confirm everything has resolved.",
        },
        {
          question: "When can I try to conceive again?",
          answer:
            "Usually after your hormone levels have been normal for 6 months. Your gynaecologist will advise on contraception in the meantime and give you the all-clear.",
        },
        {
          question: "Is a molar pregnancy cancer?",
          answer:
            "No. It is a benign condition, though it is monitored closely because a small proportion can develop into a treatable growth that needs additional therapy.",
        },
      ],
    },
    {
      slug: "uterus-removal",
      title: "Uterus Removal (Hysterectomy)",
      metaTitle: "Hysterectomy — Laparoscopic & Vaginal Uterus Removal",
      metaDescription:
        "Keyhole and vaginal hysterectomy for fibroids, heavy bleeding, prolapse and endometriosis — less pain, shorter stay, insurance support and Care Buddy follow-up.",
      overview: [
        "A hysterectomy is the removal of the uterus. It is recommended for conditions such as large fibroids, heavy bleeding that has not responded to other treatment, endometriosis, prolapse or certain cancers.",
        "Wherever possible it is done laparoscopically or vaginally rather than through a large abdominal incision — meaning less pain, a shorter stay and a quicker recovery. Your surgeon will discuss whether the ovaries are kept.",
      ],
      commonSigns: [
        "Very heavy or prolonged periods",
        "Large or symptomatic fibroids",
        "Chronic pelvic pain or pressure",
        "Uterine prolapse",
        "Any bleeding after menopause — needs prompt review",
        "A condition your gynaecologist has advised surgery for",
      ],
      faqs: [
        {
          question: "Will I go into menopause after a hysterectomy?",
          answer:
            "Not if your ovaries are kept, which is usual before menopause. You will no longer have periods or be able to conceive, but your hormones continue as before. If the ovaries are also removed, menopause begins and can be managed with your doctor.",
        },
        {
          question: "Keyhole or open surgery?",
          answer:
            "Most hysterectomies today are done laparoscopically or vaginally. Open surgery is reserved for very large fibroids, extensive adhesions or certain cancers. Your surgeon decides based on your scans.",
        },
        {
          question: "How long is recovery?",
          answer:
            "After a keyhole or vaginal hysterectomy, a 1–2 day stay and a return to routine activity in 2–4 weeks. Open surgery takes 4–6 weeks.",
        },
      ],
    },
    {
      slug: "ovarian-cyst",
      title: "Ovarian Cyst",
      metaTitle: "Ovarian Cyst Removal (Laparoscopic Cystectomy)",
      metaDescription:
        "Keyhole ovarian cyst removal that preserves healthy ovarian tissue — same or next-day discharge, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "Ovarian cysts are fluid-filled sacs that develop on the ovary. Most are harmless and resolve on their own; some need removal if they grow large, cause pain, or look complex on a scan.",
        "Removal is usually done laparoscopically (ovarian cystectomy), preserving healthy ovarian tissue, with a same-day or next-day discharge for most patients.",
      ],
      commonSigns: [
        "Pelvic pain or a dull ache on one side",
        "Bloating or abdominal swelling",
        "Pain during bowel movements",
        "Pain during intercourse",
        "Frequent urination",
        "Irregular periods",
      ],
      faqs: [
        {
          question: "Do all ovarian cysts need surgery?",
          answer:
            "No. Most simple cysts are watched with a repeat scan and resolve by themselves. Surgery is considered for large cysts, those causing pain, or ones with features that need to be checked.",
        },
        {
          question: "Will it affect my fertility?",
          answer:
            "Keyhole cystectomy is done specifically to preserve the ovary and your fertility. The ovary is only removed if it is severely affected, and one healthy ovary is enough to conceive.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most patients go home the same day or the next, and are back to routine activity within a week.",
        },
      ],
    },
    {
      slug: "miscarriage-treatment",
      title: "Miscarriage Treatment",
      metaTitle: "Miscarriage Management (D&C / Suction Evacuation)",
      metaDescription:
        "Sensitive management of miscarriage — expectant, medical or a minor D&C / suction procedure — with compassionate care and Care Buddy follow-up.",
      overview: [
        "A miscarriage is the loss of a pregnancy before 20 weeks. When some tissue remains in the uterus, it can be managed by watchful waiting, medication, or a minor procedure (D&C or suction evacuation) to prevent bleeding and infection.",
        "Our team handles this sensitively — explaining the options, doing what is medically needed, and giving you space to grieve. Your Care Buddy checks in with you afterwards.",
      ],
      commonSigns: [
        "Vaginal bleeding or clots during pregnancy",
        "Cramping or lower back pain",
        "A gush of fluid from the vagina",
        "A sudden loss of pregnancy symptoms",
        "A scan showing no heartbeat or retained tissue",
        "Fever or foul-smelling discharge — needs prompt care",
      ],
      faqs: [
        {
          question: "Do I definitely need a D&C?",
          answer:
            "Not always. If the miscarriage is complete, no procedure is needed. If tissue remains, you can often choose between medication and a short suction procedure — your doctor will help you decide.",
        },
        {
          question: "When will my period return?",
          answer:
            "Usually within 4–6 weeks. The first period may be heavier or lighter than usual.",
        },
        {
          question: "When can I try to conceive again?",
          answer:
            "Physically, often after one normal period, but there is no medical need to wait longer than you feel ready for. Your gynaecologist can review any tests if you have had more than one miscarriage.",
        },
      ],
    },
    {
      slug: "bartholin-cyst-treatment",
      title: "Bartholin Cyst Treatment",
      metaTitle: "Bartholin Cyst & Abscess Treatment",
      metaDescription:
        "Day-care treatment for Bartholin cyst and abscess — drainage, Word catheter, marsupialisation or gland removal — with insurance support and Care Buddy follow-up.",
      overview: [
        "A Bartholin cyst forms when one of the glands at the vaginal opening becomes blocked and fills with fluid. Small ones may need nothing; larger or infected ones (an abscess) are painful and need drainage.",
        "Treatment options include marsupialisation or Word catheter placement to keep the gland draining, or gland removal for repeated cysts — usually a short day-care procedure.",
      ],
      commonSigns: [
        "A soft lump on one side of the vaginal opening",
        "Discomfort when sitting, walking or during intercourse",
        "Swelling and redness if it becomes infected",
        "Pain that builds over a few days",
        "Fever alongside a tender lump",
        "A cyst that keeps coming back",
      ],
      faqs: [
        {
          question: "Will it come back after drainage?",
          answer:
            "Simple drainage alone often recurs. A Word catheter or marsupialisation keeps the gland open while it heals and greatly reduces recurrence. Gland removal is offered for repeated cysts.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "It is done under local or short general anaesthesia, so it is not painful during. Afterwards there is mild soreness for a few days, eased with simple painkillers and warm baths.",
        },
        {
          question: "Is it a day-care procedure?",
          answer:
            "Yes. Most patients go home the same day and return to routine activity within 2–3 days.",
        },
      ],
    },
    {
      slug: "endometriosis-treatment",
      title: "Endometriosis Treatment",
      metaTitle: "Endometriosis Treatment & Laparoscopic Surgery",
      metaDescription:
        "Diagnostic and therapeutic laparoscopy for endometriosis with adhesion removal, hormonal management and fertility planning — insurance support and Care Buddy follow-up.",
      overview: [
        "Endometriosis is when tissue similar to the uterine lining grows outside the uterus — on the ovaries, tubes or pelvic lining — causing pain and sometimes fertility problems.",
        "Laparoscopy is used both to confirm the diagnosis and to treat it, by removing or destroying the deposits and freeing any adhesions. This is combined with hormonal treatment and, where relevant, fertility planning.",
      ],
      commonSigns: [
        "Painful periods that disrupt daily life",
        "Chronic pelvic pain between periods",
        "Pain during or after intercourse",
        "Pain with bowel movements or urination, especially during periods",
        "Heavy or irregular bleeding",
        "Difficulty getting pregnant",
      ],
      faqs: [
        {
          question: "Is surgery a cure for endometriosis?",
          answer:
            "Surgery removes visible disease and usually gives significant, lasting pain relief, but endometriosis can recur. Combining surgery with hormonal treatment lowers that risk.",
        },
        {
          question: "Will it affect my fertility?",
          answer:
            "Endometriosis can reduce fertility, and surgery to clear the pelvis and free the tubes and ovaries often improves the chance of conceiving. If you are planning a pregnancy, tell your surgeon so the plan is tailored.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most patients go home within a day and return to routine activity in 1–2 weeks, depending on how much disease was treated.",
        },
      ],
    },
    {
      slug: "adenomyosis-treatment",
      title: "Adenomyosis Treatment",
      metaTitle: "Adenomyosis Treatment (Medical & Surgical)",
      metaDescription:
        "Treatment for adenomyosis — hormonal management, medicated IUD or hysterectomy — with a clear explanation of options and Care Buddy follow-up.",
      overview: [
        "Adenomyosis is when tissue from the uterine lining grows into the muscular wall of the uterus, making it enlarged, tender and prone to heavy, painful periods.",
        "Milder cases are managed with hormonal treatment or a medicated IUD. When symptoms are severe and your family is complete, hysterectomy is the definitive treatment; uterus-sparing options are considered case by case.",
      ],
      commonSigns: [
        "Heavy, prolonged menstrual bleeding",
        "Severe menstrual cramps",
        "Chronic pelvic pressure or a bloated feeling",
        "A tender, enlarged uterus",
        "Pain during intercourse",
        "Passing large blood clots",
      ],
      faqs: [
        {
          question: "How is adenomyosis diagnosed?",
          answer:
            "Usually with a transvaginal ultrasound or MRI showing the thickened uterine muscle. A firm diagnosis is sometimes only confirmed after hysterectomy.",
        },
        {
          question: "Can it be treated without surgery?",
          answer:
            "Yes, for many women. A medicated IUD, hormonal tablets or tranexamic acid can control bleeding and pain. Surgery is offered when these do not give enough relief.",
        },
        {
          question: "How is it different from fibroids?",
          answer:
            "Fibroids are discrete lumps of muscle; adenomyosis is a diffuse spread of lining tissue through the muscle. The two often occur together and cause similar symptoms.",
        },
      ],
    },
    {
      slug: "pcos-pcod-treatment",
      title: "PCOS / PCOD Treatment",
      metaTitle: "PCOS / PCOD Treatment & Management",
      metaDescription:
        "Structured PCOS/PCOD management — lifestyle, cycle regulation, ovulation support and skin/hair treatment — with fertility planning where needed.",
      overview: [
        "PCOS (polycystic ovary syndrome) is a common hormonal condition that affects periods, ovulation, skin and weight, and can make conception harder.",
        "It is managed rather than cured — with lifestyle changes, medication to regulate cycles or support ovulation, and treatment for skin and hair symptoms. Surgery (ovarian drilling) is reserved for specific fertility cases.",
      ],
      commonSigns: [
        "Irregular, infrequent or absent periods",
        "Difficulty getting pregnant",
        "Excess facial or body hair",
        "Acne or persistently oily skin",
        "Weight gain, especially around the abdomen",
        "Thinning hair on the scalp",
      ],
      faqs: [
        {
          question: "Can PCOS be cured?",
          answer:
            "There is no cure, but symptoms can be well controlled. Even modest weight loss, regular activity and the right medication can restore regular cycles and reduce long-term health risks.",
        },
        {
          question: "Will I be able to have children?",
          answer:
            "Most women with PCOS conceive, often with help to trigger ovulation. If tablets are not enough, injections or IVF are options your gynaecologist can guide you through.",
        },
        {
          question: "Is surgery ever needed?",
          answer:
            "Rarely. Laparoscopic ovarian drilling is considered for a small group who want to conceive and have not responded to medication.",
        },
      ],
    },
    {
      slug: "pregnancy-care",
      title: "Pregnancy Care",
      metaTitle: "Antenatal & Pregnancy Care",
      metaDescription:
        "Structured antenatal care — obstetrician, scans and tests at the right time, a delivery plan and a Care Buddy keeping your appointments on track.",
      overview: [
        "Comprehensive antenatal care means regular check-ups, the right scans and blood tests at the right time, nutrition and lifestyle guidance, and a clear delivery plan.",
        "Ayushman Surgicare connects you with an obstetrician and a hospital for your delivery, coordinates the schedule, and your Care Buddy keeps your appointments and tests on track through the pregnancy.",
      ],
      commonSigns: [
        "A positive pregnancy test",
        "A missed period with early pregnancy symptoms",
        "Planning a pregnancy and wanting a pre-conception check",
        "A previous pregnancy with complications",
        "An existing condition (diabetes, thyroid, high BP) needing monitoring",
        "Wanting a structured antenatal plan",
      ],
      faqs: [
        {
          question: "When should my first visit be?",
          answer:
            "As soon as you know you are pregnant, ideally by 6–8 weeks, so the pregnancy can be dated and early tests arranged.",
        },
        {
          question: "How many scans will I need?",
          answer:
            "Typically a dating scan, an 11–14 week scan, a detailed 18–22 week anomaly scan, and growth scans in the third trimester — more if there is any concern.",
        },
        {
          question: "Can you help me choose a hospital for delivery?",
          answer:
            "Yes. We match you to a hospital by location, facilities and your obstetrician, and coordinate the booking and paperwork.",
        },
      ],
    },
    {
      slug: "laser-vaginal-tightening",
      title: "Laser Vaginal Tightening",
      metaTitle: "Laser Vaginal Tightening (Non-Surgical)",
      metaDescription:
        "Non-surgical laser vaginal rejuvenation to improve tone and mild stress incontinence — short outpatient sessions, no cuts, no downtime.",
      overview: [
        "Laser vaginal tightening is a non-surgical treatment that uses controlled laser energy to stimulate collagen in the vaginal wall, improving tone and, for some women, mild stress urinary leakage and dryness.",
        "It is done as a short outpatient session with no cuts and no downtime. A gynaecologist assesses whether it is suitable for you and how many sessions are likely to help.",
      ],
      commonSigns: [
        "A feeling of vaginal looseness, often after childbirth",
        "Reduced sensation during intercourse",
        "Mild urine leakage when coughing, laughing or exercising",
        "Vaginal dryness around menopause",
        "Wanting a non-surgical option",
        "Preferring to avoid the downtime of surgery",
      ],
      faqs: [
        {
          question: "Is it painful?",
          answer:
            "Most women describe a mild warm or tingling sensation. No anaesthesia is usually needed and you can drive yourself home afterwards.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Usually 3 sessions spaced about a month apart, with a touch-up once a year. Your gynaecologist will confirm after assessing you.",
        },
        {
          question: "How long do the results last?",
          answer:
            "Typically 12–18 months, after which a single maintenance session helps sustain the effect.",
        },
      ],
    },
    {
      slug: "hymenoplasty",
      title: "Hymenoplasty",
      metaTitle: "Hymenoplasty — Confidential Day-Care Procedure",
      metaDescription:
        "Confidential hymen reconstruction as a short day-care procedure under local or short general anaesthesia, with complete privacy and quick recovery.",
      overview: [
        "Hymenoplasty is a minor day-care procedure that reconstructs the hymen. Women choose it for personal, cultural or private reasons, and the decision is entirely their own.",
        "It is carried out with complete confidentiality under local or short general anaesthesia, takes about 30–45 minutes, and has a quick recovery.",
      ],
      commonSigns: [
        "A personal or cultural reason to have the procedure",
        "A previous injury to the area",
        "Wanting complete confidentiality",
        "Preferring a quick day-care procedure",
        "Wanting to discuss the options privately with a female gynaecologist",
        "Any reason that is your own",
      ],
      faqs: [
        {
          question: "Is it kept confidential?",
          answer:
            "Yes, absolutely. Your consultation, records and the procedure itself are strictly private. You can request a female gynaecologist and a discreet appointment.",
        },
        {
          question: "How long is recovery?",
          answer:
            "You can return to routine activity within a day or two. Avoid strenuous exercise and intercourse for about 4–6 weeks while it heals.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "It is done under anaesthesia, so there is no pain during. Afterwards there is mild soreness for a few days.",
        },
      ],
    },
    {
      slug: "vaginoplasty",
      title: "Vaginoplasty",
      metaTitle: "Vaginoplasty — Surgical Vaginal Tightening",
      metaDescription:
        "Surgical tightening and reshaping of the vaginal canal and muscles for laxity after childbirth or with age — with an honest comparison to laser options.",
      overview: [
        "Vaginoplasty is surgery to tighten and reshape the vaginal canal and surrounding muscles, often chosen after childbirth or with age-related laxity.",
        "It is a more involved procedure than laser tightening, done under anaesthesia with a recovery of a few weeks. A gynaecologist will help you decide which approach fits your goals.",
      ],
      commonSigns: [
        "Marked vaginal laxity, usually after vaginal deliveries",
        "Reduced friction or sensation during intercourse",
        "A visible or palpable widening of the opening",
        "Symptoms not improved by pelvic-floor exercises",
        "Wanting a lasting surgical result",
        "Considering it alongside other pelvic-floor repair",
      ],
      faqs: [
        {
          question: "Laser or surgery — which is right for me?",
          answer:
            "Laser suits mild laxity and dryness with no downtime. Surgery gives a stronger, lasting result for significant laxity, at the cost of a few weeks' recovery. Your gynaecologist will examine you and advise honestly.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A day-care or one-night stay, desk work in about a week, and full activity in 4–6 weeks.",
        },
        {
          question: "When can I resume intercourse?",
          answer:
            "Usually after 6 weeks, once your surgeon confirms healing at your follow-up.",
        },
      ],
    },
    {
      slug: "labiaplasty",
      title: "Labiaplasty",
      metaTitle: "Labiaplasty — Labial Reduction Surgery",
      metaDescription:
        "Day-care labiaplasty to reduce or reshape the labia for comfort during exercise, cycling and intercourse — under local or general anaesthesia with quick recovery.",
      overview: [
        "Labiaplasty reshapes the labia minora or majora, usually to reduce discomfort from enlarged or asymmetric labia during exercise, cycling, intercourse or in certain clothing.",
        "It is a day-care procedure under local or general anaesthesia, taking about an hour, with most swelling settling within a few weeks.",
      ],
      commonSigns: [
        "Discomfort or chafing during exercise or cycling",
        "Pain or tugging during intercourse",
        "Visible bulging in fitted clothing or swimwear",
        "Irritation or difficulty with hygiene",
        "Self-consciousness affecting daily comfort",
        "Asymmetry you would like corrected",
      ],
      faqs: [
        {
          question: "Is the procedure painful?",
          answer:
            "It is done under anaesthesia, so painless during. Afterwards there is swelling and tenderness for 1–2 weeks, managed with simple painkillers and cool compresses.",
        },
        {
          question: "Will it affect sensation?",
          answer:
            "The surgery is planned to preserve sensation. A careful technique by an experienced surgeon keeps this risk very low.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Desk work in 2–3 days, exercise after 3–4 weeks, and intercourse after about 6 weeks.",
        },
      ],
    },
    {
      slug: "vaginal-wart-removal",
      title: "Vaginal Wart Removal",
      metaTitle: "Genital Wart Removal (Cautery / Laser)",
      metaDescription:
        "Treatment for genital warts — prescription creams, or cautery / laser removal for larger lesions — plus HPV vaccination and screening advice.",
      overview: [
        "Genital warts are soft growths caused by certain types of HPV. They are common and treatable, though the virus can persist and warts sometimes recur.",
        "Small warts can be treated with prescription creams; larger or persistent ones are removed by cautery, laser or excision in a short procedure. Your gynaecologist will also discuss HPV vaccination and cervical screening.",
      ],
      commonSigns: [
        "Small flesh-coloured or grey growths around the vulva or vagina",
        "A cauliflower-like cluster of bumps",
        "Itching or discomfort in the area",
        "Bleeding during intercourse",
        "New growths appearing over weeks",
        "A partner diagnosed with genital warts",
      ],
      faqs: [
        {
          question: "Will the warts come back?",
          answer:
            "They can, because treatment removes the visible warts but not the underlying virus, which the immune system usually clears over time. Repeat treatment is straightforward if needed.",
        },
        {
          question: "Is it sexually transmitted?",
          answer:
            "Yes, HPV is passed through skin-to-skin contact. Your gynaecologist can advise your partner and discuss the HPV vaccine, which protects against the types that cause most warts and cervical cancer.",
        },
        {
          question: "Does removal hurt?",
          answer:
            "The area is numbed first. There is mild soreness for a few days afterwards, which settles with simple care.",
        },
      ],
    },
  ],
};

const ent: Specialty = {
  slug: "ent",
  label: "ENT",
  blurb:
    "Ear, nose and throat surgery — sinus and nasal blockage, chronic ear disease, tonsils, thyroid and voice — mostly endoscopic or through the ear canal, with a 90-day Care Buddy.",
  testimonials: [
    {
      quote:
        "The sinus pressure and headaches had worn me down for years. After the endoscopic surgery I could breathe through my nose for the first time in a decade, and my sense of smell came back.",
      name: "Vikram S.",
      procedure: "FESS Sinus Surgery",
      location: "Hyderabad",
    },
    {
      quote:
        "My daughter had one ear infection after another and had stopped responding when we called her. The grommets took ten minutes and her hearing was back that same afternoon.",
      name: "Reshma A.",
      procedure: "Grommet Insertion (Myringotomy)",
      location: "Uppal",
    },
    {
      quote:
        "I'd lived with a blocked nostril my whole life thinking it was normal. The septoplasty was done through the nose with no bruising, and I finally sleep through the night.",
      name: "Karthik R.",
      procedure: "Septoplasty",
      location: "Kukatpally",
    },
    {
      quote:
        "The tonsillitis kept knocking me out of work every few weeks. Recovery was rough for a week, but I haven't had a single throat infection since.",
      name: "Pooja M.",
      procedure: "Tonsillectomy",
      location: "Secunderabad",
    },
    {
      quote:
        "They found a nodule on my thyroid that needed removing. The surgeon explained every risk to my voice, the scar sits in a neck crease, and my Care Buddy sorted the follow-up blood tests.",
      name: "Anitha K.",
      procedure: "Thyroidectomy",
      location: "Nacharam",
    },
    {
      quote:
        "As a teacher my voice is my job. When the hoarseness wouldn't clear they did the vocal cord surgery, and with a few speech-therapy sessions I'm back to full lessons.",
      name: "Suresh N.",
      procedure: "Vocal Cord Polyp Removal",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "tympanoplasty",
      title: "Tympanoplasty",
      metaTitle: "Tympanoplasty — Eardrum Repair Surgery",
      metaDescription:
        "Surgical repair of a perforated eardrum to stop discharge and restore hearing — day-care or one-night stay, insurance support and 90-day Care Buddy follow-up.",
      overview: [
        "Tympanoplasty is surgery to repair a hole (perforation) in the eardrum, usually caused by chronic infection or injury. Closing it restores hearing and stops water and germs entering the middle ear.",
        "The graft is placed through the ear canal or a small incision behind the ear, as day-care or a one-night stay. Ayushman Surgicare arranges the hearing test, surgeon, hospital and insurance, with 90-day Care Buddy follow-up.",
      ],
      commonSigns: [
        "A long-standing hole in the eardrum on examination",
        "Recurring ear discharge, especially after water exposure",
        "Gradual hearing loss in the affected ear",
        "A blocked or full feeling in the ear",
        "Repeated middle-ear infections",
        "Occasional ringing in the ear (tinnitus)",
      ],
      faqs: [
        {
          question: "Will my hearing improve?",
          answer:
            "Most patients regain useful hearing once the drum is intact and the middle ear is dry. How much it improves depends on the state of the hearing bones, which the surgeon checks during surgery.",
        },
        {
          question: "How long is recovery?",
          answer:
            "You go home the same day or next, keep the ear completely dry for 4–6 weeks, and avoid flying and heavy straining for a few weeks.",
        },
        {
          question: "Is it covered by insurance?",
          answer:
            "Yes. Tympanoplasty for chronic ear disease is covered by most health insurance plans and government schemes, and our team handles the cashless paperwork.",
        },
      ],
    },
    {
      slug: "adenoidectomy",
      title: "Adenoidectomy",
      metaTitle: "Adenoidectomy — Adenoid Removal Surgery",
      metaDescription:
        "Day-care removal of enlarged adenoids to relieve mouth-breathing, snoring and repeated ear infections — no external cuts, quick recovery, insurance support.",
      overview: [
        "The adenoids are a patch of tissue high behind the nose. When enlarged — common in children — they block the nose and the Eustachian tubes, causing mouth-breathing, snoring and repeated ear and sinus infections.",
        "Adenoidectomy removes them through the mouth with no external cuts, as a short day-care procedure. It is often combined with grommet insertion or tonsillectomy so the child needs only one anaesthetic.",
      ],
      commonSigns: [
        "Persistent mouth-breathing, day and night",
        "Loud snoring or pauses in breathing during sleep",
        "A constantly blocked or runny nose",
        "Repeated ear infections or glue ear",
        "Nasal, muffled speech",
        "Frequent sinus infections",
      ],
      faqs: [
        {
          question: "Is it usually done with tonsillectomy?",
          answer:
            "Often, yes, when both are enlarged and causing problems — so your child has one anaesthetic and one recovery instead of two.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most children are back to normal within 3–5 days. A short spell of bad breath and mild ear ache is common and settles.",
        },
        {
          question: "Will the adenoids grow back?",
          answer:
            "Occasionally a small amount regrows, but symptoms rarely return to the same degree.",
        },
      ],
    },
    {
      slug: "sinus-treatment",
      title: "Sinus Treatment",
      metaTitle: "Chronic Sinusitis Treatment (Medical & Surgical)",
      metaDescription:
        "Treatment for chronic sinusitis — medical management, allergy control and endoscopic sinus surgery (FESS) when needed — with CT scan coordination and insurance support.",
      overview: [
        "Chronic sinusitis is long-standing inflammation of the sinus linings, causing a blocked nose, facial pressure, reduced smell and thick discharge that does not fully clear with tablets and sprays.",
        "Treatment starts with a medical course and allergy control. When symptoms persist, a CT scan guides endoscopic sinus surgery (FESS) to open the blocked drainage pathways. Ayushman Surgicare coordinates the scan, ENT surgeon, hospital and insurance.",
      ],
      commonSigns: [
        "A blocked or congested nose for months",
        "Facial pain or pressure around the cheeks, eyes or forehead",
        "Thick nasal or post-nasal discharge",
        "Reduced or absent sense of smell",
        "Headache that is worse on bending forward",
        "Frequent courses of antibiotics for sinus infections",
      ],
      faqs: [
        {
          question: "Do I definitely need surgery?",
          answer:
            "No. Many people improve with the right medical treatment and allergy management. Surgery is considered only when a proper medical trial fails and a scan shows blockage.",
        },
        {
          question: "Is the surgery done through cuts on the face?",
          answer:
            "No. It is done entirely through the nostrils with an endoscope, so there are no external scars.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most patients return to desk work within a week, using saline rinses, with a follow-up clean of the nose to help healing.",
        },
      ],
    },
    {
      slug: "septoplasty",
      title: "Septoplasty",
      metaTitle: "Septoplasty — Deviated Nasal Septum Surgery",
      metaDescription:
        "Correction of a deviated nasal septum to restore nasal breathing — done through the nostrils with no external cuts and no change to the nose's shape.",
      overview: [
        "A deviated nasal septum is when the wall between the two nostrils is bent, blocking airflow on one or both sides. It may be present from birth or follow an injury.",
        "Septoplasty straightens the septum through the nostrils, with no external cuts and no change to the shape of the nose, as day-care or a one-night stay.",
      ],
      commonSigns: [
        "Persistent blockage of one nostril",
        "Difficulty breathing through the nose, worse lying on one side",
        "Recurrent nosebleeds",
        "Noisy breathing or snoring",
        "Repeated sinus infections",
        "A dry, crusty nose",
      ],
      faqs: [
        {
          question: "Will my nose look different afterwards?",
          answer:
            "No. Septoplasty works on the internal wall only. If you also want to change the external shape, that is a separate procedure (rhinoplasty) which can be combined.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Desk work in 3–5 days. The nose feels blocked for 1–2 weeks while swelling settles and any internal splints are removed at follow-up.",
        },
        {
          question: "Is it painful?",
          answer:
            "Discomfort is usually mild and well controlled with tablets. The main nuisance is temporary congestion.",
        },
      ],
    },
    {
      slug: "mastoidectomy",
      title: "Mastoidectomy",
      metaTitle: "Mastoidectomy — Surgery for Chronic Ear Disease",
      metaDescription:
        "Surgery to clear infection or cholesteatoma from the mastoid bone, often with eardrum repair — CT-guided, with audiometry, insurance support and Care Buddy follow-up.",
      overview: [
        "Mastoidectomy removes infected air cells from the mastoid bone behind the ear. It is needed for chronic ear infection that has spread to the bone, or for cholesteatoma — an abnormal skin growth in the middle ear that must be removed to prevent complications.",
        "It is done through an incision behind the ear, often combined with tympanoplasty to rebuild the eardrum and hearing. Ayushman Surgicare arranges the CT scan, audiometry, surgeon and insurance.",
      ],
      commonSigns: [
        "Long-standing, foul-smelling ear discharge",
        "Progressive hearing loss",
        "A blocked, full feeling in the ear",
        "Ear pain or headache behind the ear",
        "Dizziness or imbalance",
        "Facial weakness on the affected side — seek urgent review",
      ],
      faqs: [
        {
          question: "Why can't this be treated with ear drops alone?",
          answer:
            "Cholesteatoma and bone infection do not clear with medication and can, over time, damage hearing, balance and the facial nerve. Surgery removes the disease and makes the ear safe.",
        },
        {
          question: "Will I need more than one operation?",
          answer:
            "Sometimes a planned second procedure is done 6–12 months later to check for residual disease and improve hearing. Your surgeon will explain if this applies to you.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A 1–2 day stay, ear kept dry for about 6 weeks, and a return to routine activity in 2 weeks.",
        },
      ],
    },
    {
      slug: "fess-surgery",
      title: "FESS Surgery",
      metaTitle: "FESS — Functional Endoscopic Sinus Surgery",
      metaDescription:
        "Endoscopic sinus surgery through the nostrils for chronic sinusitis and nasal polyps — no external cuts, CT-planned, insurance support and Care Buddy follow-up.",
      overview: [
        "Functional Endoscopic Sinus Surgery (FESS) opens blocked sinus drainage pathways using an endoscope passed through the nostrils. It is the standard surgical treatment for chronic sinusitis and nasal polyps that have not responded to medication.",
        "There are no external cuts. A CT scan maps the anatomy beforehand, and the procedure is tailored to exactly which sinuses are affected. Ayushman Surgicare coordinates the scan, surgeon, hospital and insurance, with Care Buddy follow-up.",
      ],
      commonSigns: [
        "Chronic nasal blockage despite sprays and tablets",
        "Facial pressure and headaches",
        "Loss of smell and taste",
        "Nasal polyps seen on examination or scan",
        "Recurrent sinus infections needing antibiotics",
        "Thick post-nasal drip and constant throat clearing",
      ],
      faqs: [
        {
          question: "How is FESS different from older sinus operations?",
          answer:
            "Older operations stripped the sinus lining or used facial incisions. FESS preserves healthy tissue, only opens the blocked areas, and is done entirely through the nose — so recovery is far quicker.",
        },
        {
          question: "Will my sense of smell come back?",
          answer:
            "Smell often improves once the blockage and polyps are cleared, though this can take weeks. With extensive polyps, ongoing sprays are needed to keep them from returning.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most people return to work within a week. Regular saline rinses and a follow-up nasal clean help healing.",
        },
      ],
    },
    {
      slug: "thyroidectomy",
      title: "Thyroidectomy",
      metaTitle: "Thyroidectomy — Thyroid Gland Surgery",
      metaDescription:
        "Partial or total thyroid removal for goitre, nodules and thyroid cancer — small hidden neck incision, voice-nerve protection, insurance support and Care Buddy follow-up.",
      overview: [
        "Thyroidectomy is removal of part or all of the thyroid gland in the neck. It is done for a large goitre causing pressure symptoms, an overactive nodule, suspicious or cancerous nodules, or thyroid cancer.",
        "The procedure is done through a small, well-hidden neck-crease incision, with careful protection of the voice nerves and the parathyroid glands. Ayushman Surgicare coordinates the ultrasound, biopsy, surgeon, hospital and insurance.",
      ],
      commonSigns: [
        "A visible or growing lump in the front of the neck",
        "Pressure in the neck, or difficulty swallowing or breathing",
        "A nodule reported as suspicious on biopsy",
        "An overactive thyroid not controlled by medication",
        "Voice changes alongside a thyroid swelling",
        "A confirmed thyroid cancer",
      ],
      faqs: [
        {
          question: "Will I need to take medication afterwards?",
          answer:
            "If the whole gland is removed you take a daily thyroid hormone tablet, adjusted by blood tests. If only half is removed, many people need nothing.",
        },
        {
          question: "Is there a risk to my voice?",
          answer:
            "The nerves to the voice box run close to the thyroid. An experienced surgeon identifies and protects them; temporary hoarseness can occur and usually settles.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A 1–2 day stay and a return to desk work in about a week. The scar fades to a fine line over several months.",
        },
      ],
    },
    {
      slug: "tonsillectomy",
      title: "Tonsillectomy",
      metaTitle: "Tonsillectomy — Tonsil Removal Surgery",
      metaDescription:
        "Removal of the tonsils for recurrent throat infections, tonsil stones or sleep-disordered breathing — modern low-pain techniques, insurance support and Care Buddy follow-up.",
      overview: [
        "Tonsillectomy removes the tonsils, recommended for repeated throat infections, tonsil stones, or enlarged tonsils that block breathing during sleep.",
        "It is a day-care or one-night procedure done through the mouth with no external cuts. Coblation and other modern techniques reduce bleeding and pain compared with older methods.",
      ],
      commonSigns: [
        "Several throat infections a year needing antibiotics",
        "Loud snoring or pauses in breathing during sleep",
        "Difficulty swallowing or a constant lump-in-throat feeling",
        "Recurrent tonsil stones and bad breath",
        "One tonsil noticeably larger than the other — needs review",
        "Daytime tiredness from disturbed sleep",
      ],
      faqs: [
        {
          question: "How many infections justify surgery?",
          answer:
            "A common guide is around 5–7 significant episodes in a year, or fewer if they are severe or causing time off work or school. Sleep-related breathing problems are a separate, strong reason.",
        },
        {
          question: "How long is the recovery?",
          answer:
            "Adults typically need 10–14 days off work; children recover faster. Sore throat and ear ache peak around day 5–7.",
        },
        {
          question: "Will I get more colds without tonsils?",
          answer:
            "No. The rest of the immune system more than compensates, and most people have far fewer throat problems afterwards.",
        },
      ],
    },
    {
      slug: "stapedectomy",
      title: "Stapedectomy",
      metaTitle: "Stapedectomy — Otosclerosis Hearing Surgery",
      metaDescription:
        "Microsurgery to replace a fixed stapes bone with a prosthesis for otosclerosis — no external incision, high success rate for restoring hearing.",
      overview: [
        "Stapedectomy treats otosclerosis, a condition where the tiny stapes bone in the middle ear becomes fixed and can no longer transmit sound, causing progressive hearing loss.",
        "The fixed bone is replaced with a small prosthesis through the ear canal, with no external incision. It is a delicate microsurgical procedure with a high success rate for restoring hearing.",
      ],
      commonSigns: [
        "Gradual hearing loss, often starting in one ear",
        "Hearing better in noisy surroundings than quiet ones",
        "A low-pitched hum or buzzing (tinnitus)",
        "A family history of early hearing loss",
        "Hearing loss that began or worsened during pregnancy",
        "Speaking softly because your own voice sounds loud to you",
      ],
      faqs: [
        {
          question: "Is a hearing aid an alternative?",
          answer:
            "Yes. A hearing aid is a good non-surgical option and some patients prefer it. Surgery offers the chance of restoring natural hearing without a device.",
        },
        {
          question: "What are the risks?",
          answer:
            "In experienced hands, serious complications are uncommon. There is a small risk to the remaining hearing and to taste and balance, which your surgeon will discuss in detail.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A day-care or one-night procedure, a few days off work, and avoiding flying, heavy lifting and nose-blowing for 2–4 weeks.",
        },
      ],
    },
    {
      slug: "myringotomy",
      title: "Myringotomy",
      metaTitle: "Myringotomy & Grommets — Surgery for Glue Ear",
      metaDescription:
        "Draining middle-ear fluid and inserting a ventilation tube (grommet) for persistent glue ear — a very short day-care procedure with hearing restored immediately.",
      overview: [
        "Myringotomy is a small opening made in the eardrum to drain fluid from the middle ear, usually followed by insertion of a tiny ventilation tube (grommet). It is the standard treatment for persistent glue ear, most often in children.",
        "It is a very short day-care procedure done through the ear canal under a brief general anaesthetic. Ayushman Surgicare arranges the hearing test, surgeon and insurance.",
      ],
      commonSigns: [
        "Reduced hearing, or turning up the TV volume",
        "Glue ear that has not cleared after 3 months",
        "Delayed or unclear speech in a young child",
        "Repeated middle-ear infections",
        "Balance problems or clumsiness",
        "Ear discomfort or a feeling of fullness",
      ],
      faqs: [
        {
          question: "How long do grommets stay in?",
          answer:
            "They usually fall out on their own after 6–12 months as the eardrum heals, and the small hole closes over. Some children need a second set.",
        },
        {
          question: "Can my child swim with grommets?",
          answer:
            "Surface swimming is generally fine. Your surgeon may advise ear plugs for diving or very deep water.",
        },
        {
          question: "How quickly will hearing improve?",
          answer:
            "Usually immediately, as soon as the fluid is drained.",
        },
      ],
    },
    {
      slug: "throat-surgery",
      title: "Throat Surgery",
      metaTitle: "Throat & Voice Box Surgery (Endoscopic)",
      metaDescription:
        "Endoscopic surgery of the voice box and throat — removing benign growths, taking biopsies, treating airway narrowing — through the mouth with no external cuts.",
      overview: [
        "Throat surgery covers a range of procedures on the voice box (larynx) and throat — removing benign growths such as vocal cord nodules, cysts or papillomas, taking biopsies of suspicious areas, and treating airway narrowing.",
        "Most are done endoscopically through the mouth with a microscope or laser, so there are no external cuts. Ayushman Surgicare coordinates the laryngoscopy, imaging, surgeon and insurance.",
      ],
      commonSigns: [
        "A hoarse or rough voice lasting more than three weeks",
        "The voice tiring or cutting out with use",
        "A persistent sensation of something in the throat",
        "Difficulty or pain when swallowing",
        "Noisy breathing or breathlessness",
        "Coughing up blood-streaked phlegm — seek prompt review",
      ],
      faqs: [
        {
          question: "Why is persistent hoarseness taken seriously?",
          answer:
            "Most causes are benign, but a voice change lasting over three weeks — especially in smokers — needs a look at the voice box to rule out anything serious. Early assessment is always best.",
        },
        {
          question: "Will my voice be normal afterwards?",
          answer:
            "For benign lesions the voice usually improves, sometimes after a short period of voice rest and speech therapy. Your team will guide this.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Endoscopic procedures are day-care with a few days of voice rest. Your surgeon will give specific advice based on what was done.",
        },
      ],
    },
    {
      slug: "ear-surgery",
      title: "Ear Surgery",
      metaTitle: "Ear Surgery — Eardrum, Middle Ear & Otoplasty",
      metaDescription:
        "Surgery for the outer and middle ear — eardrum repair, chronic infection, prominent-ear correction and benign lumps — tailored to the diagnosis, with Care Buddy follow-up.",
      overview: [
        "Ear surgery covers procedures on the outer and middle ear — repairing a perforated eardrum, treating chronic infection, correcting prominent ears (otoplasty), and removing benign lumps such as pre-auricular sinuses or keloids.",
        "The approach depends on the condition — through the ear canal, or a hidden incision behind the ear. Ayushman Surgicare arranges the hearing test, surgeon, hospital and insurance, with Care Buddy follow-up.",
      ],
      commonSigns: [
        "Recurring ear discharge or infection",
        "A hole in the eardrum on examination",
        "Gradual hearing loss in one ear",
        "Prominent or asymmetric ears causing distress",
        "A lump, pit or swelling on or in front of the ear",
        "A blocked, full feeling that will not clear",
      ],
      faqs: [
        {
          question: "Which ear operation do I need?",
          answer:
            "That depends on the diagnosis after an examination and hearing test. The consultation will explain exactly which procedure is right for your ear and why.",
        },
        {
          question: "At what age can prominent ears be corrected?",
          answer:
            "Usually from around 5–6 years, once the ear has nearly finished growing, but it can be done at any age including adulthood.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most ear procedures are day-care or one-night, with the ear kept dry for a few weeks and a return to routine activity within 1–2 weeks.",
        },
      ],
    },
    {
      slug: "vocal-cord-polyps",
      title: "Vocal Cord Polyps",
      metaTitle: "Vocal Cord Polyp Removal (Phonosurgery)",
      metaDescription:
        "Precise endoscopic microsurgery to remove vocal cord polyps and restore the voice, supported by voice rest and speech therapy — no external cuts.",
      overview: [
        "Vocal cord polyps are soft swellings on the vocal folds, usually caused by a single episode of vocal strain, shouting or a bad cough, or by smoking. They make the voice hoarse, breathy and easily tired.",
        "Small polyps sometimes settle with voice rest and speech therapy. Persistent ones are removed by precise endoscopic microsurgery through the mouth, with no external cuts.",
      ],
      commonSigns: [
        "A hoarse, rough or breathy voice for weeks",
        "The voice cutting out or dropping in pitch",
        "Vocal fatigue after short periods of talking",
        "A frequent need to clear the throat",
        "A sensation of a lump in the throat",
        "The voice noticeably worse by the end of the day",
      ],
      faqs: [
        {
          question: "Can a polyp go away without surgery?",
          answer:
            "A small, recent polyp may shrink with strict voice rest and speech therapy. A well-established polyp usually needs removal to restore the voice.",
        },
        {
          question: "Will my voice fully recover?",
          answer:
            "In most cases yes, particularly with post-operative voice rest and a few sessions of speech therapy. Continued smoking or vocal misuse makes recurrence more likely.",
        },
        {
          question: "How long is recovery?",
          answer:
            "The procedure is day-care. You will rest your voice completely for several days, then reintroduce speaking gradually under guidance.",
        },
      ],
    },
    {
      slug: "nasal-polyps",
      title: "Nasal Polyps",
      metaTitle: "Nasal Polyp Treatment (Medical & Endoscopic)",
      metaDescription:
        "Treatment for nasal polyps — steroid sprays and allergy control, with endoscopic polypectomy for polyps that block the nose despite medication.",
      overview: [
        "Nasal polyps are soft, painless swellings of the nasal and sinus lining, linked to long-standing inflammation, allergy and sometimes asthma. Larger ones block the nose and dull the sense of smell.",
        "Treatment combines steroid sprays or drops and allergy control to shrink them, with endoscopic surgery (FESS with polypectomy) for polyps that block the nose despite medication. Ongoing sprays are usually needed to stop them returning.",
      ],
      commonSigns: [
        "A persistently blocked nose that sprays do not fully relieve",
        "Reduced or absent sense of smell and taste",
        "A runny nose or post-nasal drip",
        "Facial pressure or headache",
        "Snoring and mouth-breathing",
        "Frequent sinus infections",
      ],
      faqs: [
        {
          question: "Will the polyps come back after surgery?",
          answer:
            "Nasal polyps tend to recur because the underlying inflammation continues. Surgery clears the nose, and regular steroid sprays afterwards greatly slow regrowth. Newer biologic medicines help difficult cases.",
        },
        {
          question: "Is the surgery done through the nose?",
          answer:
            "Yes, entirely endoscopically through the nostrils — no external cuts.",
        },
        {
          question: "How long is recovery?",
          answer:
            "About a week off work, with saline rinses and a follow-up nasal clean, then long-term spray use.",
        },
      ],
    },
    {
      slug: "turbinate-reduction",
      title: "Turbinate Reduction",
      metaTitle: "Turbinate Reduction Surgery for Nasal Blockage",
      metaDescription:
        "Reducing chronically swollen nasal turbinates with radiofrequency or coblation to restore airflow — through the nostrils, often combined with septoplasty.",
      overview: [
        "The turbinates are ridges inside the nose that warm and humidify air. When they are chronically swollen — from allergy, irritants or a deviated septum — they block airflow even when medication is used.",
        "Turbinate reduction shrinks the swollen tissue using radiofrequency, coblation or a small trimming procedure, usually through the nostrils with no external cuts. It is often combined with septoplasty.",
      ],
      commonSigns: [
        "A blocked nose that alternates from side to side",
        "Congestion that worsens when lying down",
        "A poor response to antihistamines and nasal sprays",
        "Mouth-breathing and a dry throat on waking",
        "Snoring and disturbed sleep",
        "Reduced sense of smell from congestion",
      ],
      faqs: [
        {
          question: "Is it done alone or with septoplasty?",
          answer:
            "Often together, since a deviated septum and enlarged turbinates commonly occur in the same nose and both contribute to the blockage.",
        },
        {
          question: "Will my nose feel dry afterwards?",
          answer:
            "Modern techniques reduce only the excess tissue and preserve function, so lasting dryness is uncommon. There is temporary crusting for a couple of weeks.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A day-care procedure with 2–3 days off work and saline rinses while the nose settles over 1–2 weeks.",
        },
      ],
    },
  ],
};

const urology: Specialty = {
  slug: "urology",
  label: "Urology",
  blurb:
    "Kidney stones, prostate, and men's-health procedures — mostly keyhole or day-care, with discreet care and a 90-day Care Buddy through recovery.",
  testimonials: [
    {
      quote:
        "The kidney stone pain put me in the ER twice. The RIRS procedure broke it up with a laser, no cuts, and I was home the next day. They also gave me a plan so it doesn't happen again.",
      name: "Ramesh G.",
      procedure: "RIRS (Kidney Stone)",
      location: "Hyderabad",
    },
    {
      quote:
        "I'd been getting up four times a night to pass urine. The laser prostate procedure fixed it — and my sleep, and my wife's, is finally back to normal.",
      name: "Prakash V.",
      procedure: "Enlarged Prostate Surgery",
      location: "Uppal",
    },
    {
      quote:
        "The recurrent infections under the foreskin were miserable. The stapler circumcision took fifteen minutes, barely any swelling, and I haven't had a problem since.",
      name: "A patient, 31",
      procedure: "Stapler Circumcision",
      location: "Kukatpally",
    },
    {
      quote:
        "My teenage son woke up with severe testicular pain at 2am. They saw us immediately, took him to theatre within the hour, and saved the testicle.",
      name: "Sunitha R.",
      procedure: "Testicular Torsion Surgery",
      location: "Secunderabad",
    },
    {
      quote:
        "The hydrocele had got large enough to be uncomfortable at work. Day-care surgery, back at my desk in three days, and the Care Buddy checked in through the first week.",
      name: "Mohan D.",
      procedure: "Hydrocelectomy",
      location: "Nacharam",
    },
    {
      quote:
        "After we decided our family was complete I chose a vasectomy. The no-scalpel procedure was quick, the counselling was thorough, and the follow-up test confirmed everything worked.",
      name: "Vijay S.",
      procedure: "No-Scalpel Vasectomy",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "circumcision",
      title: "Circumcision",
      metaTitle: "Circumcision Surgery (Adult & Child)",
      metaDescription:
        "Day-care circumcision for tight foreskin, recurrent infection or personal reasons — neat result, dissolvable stitches, insurance support and Care Buddy follow-up.",
      overview: [
        "Circumcision is the surgical removal of the foreskin, done for a tight foreskin (phimosis), recurrent infection, pain during erection, or personal or religious reasons.",
        "It is a short day-care procedure under local or general anaesthesia. Modern techniques and dissolvable stitches give a neat result and a quick recovery. Ayushman Surgicare arranges the surgeon, hospital and insurance.",
      ],
      commonSigns: [
        "A foreskin that will not retract or is painful to retract",
        "Recurrent redness, swelling or discharge under the foreskin",
        "Pain or tearing during erection or intercourse",
        "Ballooning of the foreskin when passing urine",
        "Repeated urinary or foreskin infections",
        "A personal or religious reason for the procedure",
      ],
      faqs: [
        {
          question: "Is it painful?",
          answer:
            "It is done under anaesthesia, so painless during. Expect mild soreness and swelling for about a week, controlled with tablets.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Desk work in 2–3 days; avoid strenuous activity and intercourse for 4–6 weeks while it heals.",
        },
        {
          question: "Will it affect sensation?",
          answer:
            "Most men report no meaningful change in sensation or function; many find intercourse more comfortable once a tight or infected foreskin is dealt with.",
        },
      ],
    },
    {
      slug: "stapler-circumcision",
      title: "Stapler Circumcision",
      metaTitle: "Stapler (ZSR) Circumcision — Stitchless",
      metaDescription:
        "Device-assisted stapler circumcision — under 15 minutes, less bleeding and swelling, no conventional stitches, quick return to routine and insurance support.",
      overview: [
        "Stapler (or ZSR) circumcision uses a single-use circular device that removes the foreskin and seals the edge in one quick step, with no conventional stitches.",
        "It typically takes under 15 minutes, causes less bleeding and swelling than traditional circumcision, and allows a faster return to routine. The device ring separates on its own after a few days.",
      ],
      commonSigns: [
        "A tight or non-retractile foreskin",
        "Recurrent balanitis or foreskin infection",
        "Pain during erection",
        "Ballooning of the foreskin on urination",
        "Wanting the quickest option with the least swelling",
        "A personal or religious reason for the procedure",
      ],
      faqs: [
        {
          question: "How is it different from normal circumcision?",
          answer:
            "It uses a device instead of hand-sewn stitches, so it is faster, bleeds less and swells less. The cosmetic result is very consistent.",
        },
        {
          question: "When does the device come off?",
          answer:
            "The outer ring usually loosens and falls away by itself in 5–10 days; occasionally it is removed at a quick follow-up.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most men are back to desk work in 1–2 days, avoiding heavy activity and intercourse for about 4 weeks.",
        },
      ],
    },
    {
      slug: "kidney-stones-treatment",
      title: "Kidney Stones Treatment",
      metaTitle: "Kidney Stone Treatment (ESWL, RIRS, PCNL)",
      metaDescription:
        "Treatment for kidney stones matched to stone size and position — shock-wave therapy or keyhole laser procedures — with CT coordination and 90-day Care Buddy follow-up.",
      overview: [
        "Kidney stones are hard mineral deposits that form in the kidneys and can cause severe pain when they move into the ureter. Small stones often pass on their own; larger ones need a procedure.",
        "Treatment is chosen by stone size and position — shock-wave therapy (ESWL), or keyhole procedures through the urinary tract (RIRS, URSL) or through the back (PCNL). Ayushman Surgicare arranges the CT scan, urologist, hospital and insurance.",
      ],
      commonSigns: [
        "Sudden, severe pain in the side or back, coming in waves",
        "Pain spreading to the lower abdomen and groin",
        "Blood in the urine — pink, red or brown",
        "Pain or burning when passing urine",
        "Nausea and vomiting alongside the pain",
        "Fever and chills — needs urgent care",
      ],
      faqs: [
        {
          question: "Will my stone pass on its own?",
          answer:
            "Stones under about 5 mm often pass with fluids, pain relief and a medicine to relax the ureter. Larger stones, or ones causing blockage or infection, need a procedure.",
        },
        {
          question: "Which procedure will I need?",
          answer:
            "That depends on the stone's size, hardness and location, shown on a CT scan. Your urologist will explain the options and the recovery for each.",
        },
        {
          question: "Will stones come back?",
          answer:
            "Recurrence is common without prevention. A simple set of blood and urine tests, plus diet and fluid advice, substantially lowers the chance of new stones.",
        },
      ],
    },
    {
      slug: "hydrocele",
      title: "Hydrocele",
      metaTitle: "Hydrocele Treatment (Hydrocelectomy)",
      metaDescription:
        "Day-care hydrocele surgery that drains the fluid and repairs the sac so it does not refill — ultrasound-confirmed, with insurance support and Care Buddy follow-up.",
      overview: [
        "A hydrocele is a painless collection of fluid around the testicle, causing a soft scrotal swelling. It is common and harmless, but a large or uncomfortable one is treated surgically.",
        "Hydrocelectomy is a short day-care procedure that drains the fluid and repairs the sac so it does not refill. Ayushman Surgicare arranges the ultrasound, surgeon and insurance.",
      ],
      commonSigns: [
        "A soft, painless swelling on one or both sides of the scrotum",
        "A heavy or dragging feeling",
        "The swelling larger by evening or after standing",
        "Discomfort with a very large hydrocele",
        "Difficulty with clothing or activity",
        "The scrotum glowing when a light is held to it",
      ],
      faqs: [
        {
          question: "Does a hydrocele need treatment?",
          answer:
            "Only if it is large, uncomfortable, or making it hard to examine the testicle. Small, painless hydroceles can simply be watched.",
        },
        {
          question: "Can it just be drained with a needle?",
          answer:
            "Needle drainage almost always refills. Surgery repairs the sac and gives a lasting result.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Day-care surgery, desk work in a few days, scrotal support for 1–2 weeks and no heavy activity for about a month.",
        },
      ],
    },
    {
      slug: "eswl",
      title: "ESWL",
      metaTitle: "ESWL — Shock Wave Lithotripsy for Kidney Stones",
      metaDescription:
        "Non-invasive kidney stone treatment using focused shock waves from outside the body — no cuts, day-care, sometimes needing more than one session.",
      overview: [
        "ESWL (Extracorporeal Shock Wave Lithotripsy) breaks kidney stones into tiny fragments using focused shock waves from outside the body, so the pieces can pass in the urine. There are no cuts.",
        "It suits small to medium stones in favourable positions. Sometimes more than one session is needed. Ayushman Surgicare arranges the imaging, urologist and insurance.",
      ],
      commonSigns: [
        "A stone confirmed on scan that is not passing on its own",
        "Recurrent bouts of stone pain",
        "Blood in the urine from a known stone",
        "A stone too large to pass but suitable for shock-wave therapy",
        "Wanting a non-surgical, no-incision option",
        "A single stone in a good position for treatment",
      ],
      faqs: [
        {
          question: "Is ESWL painful?",
          answer:
            "It is done with sedation or light anaesthesia. Afterwards you may have bruising over the treated area and stone pain as fragments pass over the following days.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Many stones clear in one session; harder or larger stones sometimes need two or three, spaced a couple of weeks apart.",
        },
        {
          question: "What are the alternatives?",
          answer:
            "If ESWL is unlikely to work — a large, hard or awkwardly placed stone — a keyhole procedure (RIRS, URSL or PCNL) may be recommended instead.",
        },
      ],
    },
    {
      slug: "rirs",
      title: "RIRS",
      metaTitle: "RIRS — Retrograde Intrarenal Surgery for Kidney Stones",
      metaDescription:
        "Scar-free kidney stone surgery with a flexible telescope and laser passed through the natural urinary passage — ideal for stones up to 2 cm and ESWL failures.",
      overview: [
        "RIRS (Retrograde Intrarenal Surgery) treats kidney stones with a very fine flexible telescope passed up through the natural urinary passage to the kidney, where a laser breaks the stone into dust. There are no cuts.",
        "It is well suited to stones up to about 2 cm, stones that failed shock-wave therapy, and patients on blood thinners. Ayushman Surgicare coordinates the scan, urologist, hospital and insurance.",
      ],
      commonSigns: [
        "A kidney stone of 1–2 cm not suitable for shock-wave therapy",
        "A stone that did not clear with ESWL",
        "Lower-pole stones that pass poorly",
        "A stone with a bleeding risk needing a scar-free approach",
        "Recurrent stones needing definitive clearance",
        "A stone causing repeated pain or infection",
      ],
      faqs: [
        {
          question: "Is a stent placed afterwards?",
          answer:
            "Usually a soft internal stent (DJ stent) is left for a week or two to keep the ureter open while it settles. It is removed in a quick outpatient step.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A day-care or one-night procedure, with a return to desk work in 2–3 days. Mild burning and urgency are common while the stent is in.",
        },
        {
          question: "How complete is stone clearance?",
          answer:
            "RIRS clears the majority of suitable stones in one sitting; very large stone burdens sometimes need a second look.",
        },
      ],
    },
    {
      slug: "pcnl",
      title: "PCNL",
      metaTitle: "PCNL — Percutaneous Nephrolithotomy for Large Stones",
      metaDescription:
        "Keyhole removal of large or staghorn kidney stones through a 1 cm track in the back — the most effective option for big stones, with CT planning and Care Buddy follow-up.",
      overview: [
        "PCNL (Percutaneous Nephrolithotomy) removes large kidney stones through a small (about 1 cm) track made in the back, directly into the kidney. It is the most effective option for big or complex stones.",
        "It is done under general anaesthesia with a 2–3 day stay. Ayushman Surgicare coordinates the CT scan, urologist, hospital and insurance, with Care Buddy follow-up.",
      ],
      commonSigns: [
        "A large kidney stone, usually over 2 cm",
        "A staghorn stone filling part of the kidney",
        "Stones that failed ESWL and RIRS",
        "A dense, hard stone unlikely to fragment with shock waves",
        "Multiple stones needing clearance in one procedure",
        "A stone causing recurrent infection or reduced kidney function",
      ],
      faqs: [
        {
          question: "Why is a track made through the back?",
          answer:
            "For large stones this gives the surgeon a direct route to remove big fragments efficiently — far more effective in one sitting than working up the natural passage.",
        },
        {
          question: "Will there be a tube afterwards?",
          answer:
            "A temporary drainage tube (nephrostomy) or internal stent is usually left for a short period and removed before or soon after discharge.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A 2–3 day stay and a return to routine activity in 1–2 weeks. Some blood in the urine for a few days is expected.",
        },
      ],
    },
    {
      slug: "ursl",
      title: "URSL",
      metaTitle: "URSL — Ureteroscopic Laser Lithotripsy",
      metaDescription:
        "Keyhole laser treatment for stones stuck in the ureter, passed through the natural urinary passage — the standard fix for a painful, obstructing ureteric stone.",
      overview: [
        "URSL (Ureteroscopic Lithotripsy) treats stones stuck in the ureter — the tube between kidney and bladder — with a thin telescope passed up through the natural passage and a laser to break the stone.",
        "It is the go-to procedure for a painful, obstructing ureteric stone. Ayushman Surgicare fast-tracks the scan, urologist and admission, and handles the insurance.",
      ],
      commonSigns: [
        "Severe, colicky pain from a stone lodged in the ureter",
        "A ureteric stone not passing after a trial of medication",
        "Blockage of the kidney shown on a scan",
        "Fever with a stone — an emergency needing urgent drainage",
        "Repeated episodes of the same stone moving",
        "A stone too large to pass but reachable from below",
      ],
      faqs: [
        {
          question: "How urgent is treatment?",
          answer:
            "An obstructing stone with fever, or in a solitary kidney, needs urgent drainage. Otherwise it is planned promptly once medication has failed to move it.",
        },
        {
          question: "Will I need a stent?",
          answer:
            "A short-term internal stent is usually placed to protect the ureter while swelling settles, and removed within 1–2 weeks.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Day-care or one night, desk work in 2–3 days, with mild urinary symptoms while the stent is in place.",
        },
      ],
    },
    {
      slug: "enlarged-prostate",
      title: "Enlarged Prostate",
      metaTitle: "Enlarged Prostate Treatment (BPH — Laser / TURP)",
      metaDescription:
        "Treatment for benign prostate enlargement — medication, or a day-case laser procedure / TURP to relieve the blockage — with flow tests and insurance support.",
      overview: [
        "An enlarged prostate (benign prostatic hyperplasia) is a very common, non-cancerous condition in older men where the prostate presses on the urine passage, making it hard to empty the bladder.",
        "Mild cases are managed with medication. When symptoms are troublesome or medication fails, a day-case laser procedure or TURP relieves the blockage. Ayushman Surgicare arranges the flow tests, urologist and insurance.",
      ],
      commonSigns: [
        "A weak or interrupted urine stream",
        "Difficulty starting to pass urine",
        "Needing to pass urine often, especially at night",
        "A feeling of not fully emptying the bladder",
        "Sudden urges that are hard to hold",
        "Dribbling at the end of urination",
      ],
      faqs: [
        {
          question: "Is an enlarged prostate the same as prostate cancer?",
          answer:
            "No. BPH is a benign enlargement. Your urologist will check the prostate and a PSA blood test to rule out other causes of the symptoms.",
        },
        {
          question: "Do I have to have surgery?",
          answer:
            "Not usually. Many men do well on medication for years. Surgery is offered for severe symptoms, retention of urine, recurrent infections or bleeding.",
        },
        {
          question: "Will surgery affect sexual function?",
          answer:
            "Modern laser techniques largely preserve erectile function. A common effect is dry orgasm (semen passing backwards into the bladder), which is harmless. Your surgeon will discuss this.",
        },
      ],
    },
    {
      slug: "frenuloplasty-surgery",
      title: "Frenuloplasty Surgery",
      metaTitle: "Frenuloplasty — Tight Frenulum Release",
      metaDescription:
        "Day-care frenuloplasty to release a tight frenulum causing pain or tearing during intercourse — foreskin-preserving, under local anaesthesia, with quick recovery.",
      overview: [
        "Frenuloplasty lengthens or releases a tight frenulum — the small band of tissue under the head of the penis — that causes pain or tearing during erection and intercourse.",
        "It is a quick day-care procedure under local anaesthesia that preserves the foreskin, unlike circumcision. Ayushman Surgicare arranges the surgeon and insurance.",
      ],
      commonSigns: [
        "A tight band under the head of the penis",
        "The head bending downward on erection",
        "Pain or a pulling sensation during intercourse",
        "Small tears or bleeding of the frenulum",
        "Discomfort that makes intercourse difficult",
        "A frenulum that has torn and healed tight before",
      ],
      faqs: [
        {
          question: "Is this instead of circumcision?",
          answer:
            "Yes, for a tight frenulum with an otherwise normal foreskin, frenuloplasty solves the problem while keeping the foreskin.",
        },
        {
          question: "Is it painful?",
          answer:
            "It is done under local anaesthesia. Expect mild soreness for a few days, managed with simple painkillers.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Back to work in 1–2 days; avoid intercourse and vigorous activity for 3–4 weeks.",
        },
      ],
    },
    {
      slug: "balanitis",
      title: "Balanitis",
      metaTitle: "Balanitis Treatment (Inflammation of the Glans)",
      metaDescription:
        "Treatment for balanitis — hygiene advice and a short course of cream or tablets, with circumcision for recurrent cases linked to a tight foreskin.",
      overview: [
        "Balanitis is inflammation of the head of the penis, causing redness, itching and soreness. It is often due to a yeast or bacterial infection, irritation, or poor drainage under a tight foreskin.",
        "Most cases clear with hygiene advice and a short course of cream or tablets. Recurrent balanitis linked to a tight foreskin is best treated with circumcision. Ayushman Surgicare arranges the consultation and any procedure.",
      ],
      commonSigns: [
        "Redness and swelling of the head of the penis",
        "Itching, soreness or a burning feeling",
        "A tight or difficult-to-retract foreskin",
        "Discharge or a bad smell under the foreskin",
        "Pain when passing urine",
        "Repeated episodes despite treatment",
      ],
      faqs: [
        {
          question: "What causes balanitis?",
          answer:
            "Commonly a yeast infection, sometimes bacteria, and often made worse by moisture trapped under a foreskin that does not retract fully. Diabetes increases the risk.",
        },
        {
          question: "Do I need circumcision?",
          answer:
            "Only if episodes keep recurring and are linked to a tight foreskin. A single episode is treated with cream and hygiene.",
        },
        {
          question: "Is it sexually transmitted?",
          answer:
            "Usually not, but a check for STIs is sensible if there is any doubt, and treating a partner's thrush can help prevent recurrence.",
        },
      ],
    },
    {
      slug: "balanoposthitis",
      title: "Balanoposthitis",
      metaTitle: "Balanoposthitis Treatment (Glans & Foreskin Inflammation)",
      metaDescription:
        "Treatment for balanoposthitis — inflammation of the glans and foreskin — with hygiene, antifungal or antibiotic treatment, diabetes control and circumcision for recurrent cases.",
      overview: [
        "Balanoposthitis is inflammation of both the head of the penis and the foreskin together — a step beyond balanitis. It causes marked redness, swelling and discomfort, and can make the foreskin hard to move.",
        "Treatment starts with hygiene, an antifungal or antibiotic, and control of any underlying diabetes. Repeated attacks, or a foreskin left scarred and tight, are treated with circumcision.",
      ],
      commonSigns: [
        "Redness and swelling of both the glans and the foreskin",
        "Difficulty retracting the foreskin during an attack",
        "Discharge, odour and soreness",
        "Pain on passing urine",
        "Splitting or cracking of the foreskin",
        "Frequent recurrences, often with poorly controlled diabetes",
      ],
      faqs: [
        {
          question: "How is it different from balanitis?",
          answer:
            "Balanitis involves only the head of the penis; balanoposthitis involves the head and the foreskin together, and tends to be more uncomfortable.",
        },
        {
          question: "Will it keep coming back?",
          answer:
            "It can, especially with a tight foreskin or high blood sugar. Treating both — often with circumcision and diabetes control — usually stops the cycle.",
        },
        {
          question: "When should I seek help urgently?",
          answer:
            "If the foreskin becomes stuck behind the head and cannot be brought forward (paraphimosis), or if there is spreading redness and fever.",
        },
      ],
    },
    {
      slug: "paraphimosis",
      title: "Paraphimosis",
      metaTitle: "Paraphimosis — Urological Emergency Treatment",
      metaDescription:
        "Prompt treatment for paraphimosis, where a retracted foreskin is trapped behind the glans — manual reduction, release incision or circumcision, with same-day care.",
      overview: [
        "Paraphimosis is a urological emergency where a retracted foreskin becomes trapped behind the head of the penis and cannot be pulled forward, causing swelling that worsens over time.",
        "It needs prompt treatment to reduce the swelling and free the foreskin — by manual reduction, a small release incision, or urgent circumcision. Recurrent episodes are prevented by circumcision.",
      ],
      commonSigns: [
        "The foreskin stuck behind the head of the penis",
        "Increasing swelling of the head and foreskin",
        "Pain that builds over minutes to hours",
        "A tight band of foreskin visible behind the head",
        "Darkening or a dusky colour of the head — seek emergency care",
        "Difficulty passing urine",
      ],
      faqs: [
        {
          question: "Is this an emergency?",
          answer:
            "Yes. Prolonged paraphimosis restricts blood flow to the head of the penis. Seek care immediately — most cases are resolved quickly once treated.",
        },
        {
          question: "How is it treated?",
          answer:
            "First by gently squeezing out the swelling and easing the foreskin forward, sometimes under local anaesthesia. If that fails, a small release incision is made. Definitive prevention is circumcision.",
        },
        {
          question: "Will it happen again?",
          answer:
            "It can, if the foreskin is tight. Circumcision, done once the swelling has settled, prevents recurrence.",
        },
      ],
    },
    {
      slug: "foreskin-infection",
      title: "Foreskin Infection",
      metaTitle: "Foreskin Infection Treatment",
      metaDescription:
        "Treatment for recurrent foreskin infection — hygiene, antifungal or antibiotic creams, and circumcision for a tight or repeatedly infected foreskin.",
      overview: [
        "A foreskin infection causes redness, swelling, discharge and soreness under and around the foreskin. It is usually caused by yeast or bacteria thriving in moisture trapped by a foreskin that does not retract fully.",
        "First-line treatment is hygiene advice and a short course of cream or tablets. Recurrent infections, or a foreskin scarred tight by past episodes, are best treated with circumcision.",
      ],
      commonSigns: [
        "Redness, swelling or soreness of the foreskin",
        "White or yellow discharge with an odour",
        "Itching or a burning sensation",
        "Pain when retracting the foreskin or passing urine",
        "A foreskin that has become tighter over time",
        "Infections that keep returning",
      ],
      faqs: [
        {
          question: "Why does it keep coming back?",
          answer:
            "A foreskin that will not retract fully traps moisture and skin debris, which feeds infection. Until that is addressed the cycle tends to continue.",
        },
        {
          question: "Is circumcision the only option?",
          answer:
            "No. Many single infections settle with treatment and better hygiene. Circumcision is reserved for recurrent infection or a tight, scarred foreskin.",
        },
        {
          question: "Could it be something else?",
          answer:
            "Persistent or unusual changes on the foreskin should be examined to rule out skin conditions such as lichen sclerosus, which also causes tightening.",
        },
      ],
    },
    {
      slug: "prostatectomy",
      title: "Prostatectomy",
      metaTitle: "Prostatectomy — Prostate Removal Surgery",
      metaDescription:
        "Radical prostatectomy for localised prostate cancer, or simple prostatectomy for a very large benign prostate — robotic / laparoscopic where possible, with nerve-sparing.",
      overview: [
        "Prostatectomy is surgical removal of the prostate gland. Radical prostatectomy removes the whole gland for localised prostate cancer; simple prostatectomy removes the inner part for a very large benign prostate.",
        "Radical surgery is usually done robotically or laparoscopically, sparing nerves where possible. Ayushman Surgicare coordinates the MRI, biopsy, surgeon, hospital and insurance, with Care Buddy follow-up.",
      ],
      commonSigns: [
        "A biopsy-confirmed prostate cancer suitable for surgery",
        "A rising PSA with localised disease on scans",
        "A very large benign prostate causing retention not helped by other surgery",
        "Recurrent bleeding or infection from an enlarged prostate",
        "A prostate too large for a standard TURP or laser procedure",
        "A treatment decision made with your urologist and oncologist",
      ],
      faqs: [
        {
          question: "Will I be continent afterwards?",
          answer:
            "Most men regain good urinary control within weeks to months, helped by pelvic-floor exercises. A small proportion have longer-term leakage, which can be treated.",
        },
        {
          question: "What about sexual function?",
          answer:
            "Nerve-sparing surgery preserves erections in many men, though recovery takes months and may need medication. Your surgeon will give you a realistic picture based on your scans.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A 1–3 day stay, a catheter for about a week, and a return to routine activity in 3–4 weeks.",
        },
      ],
    },
    {
      slug: "tight-foreskin",
      title: "Tight Foreskin",
      metaTitle: "Tight Foreskin Treatment (Phimosis)",
      metaDescription:
        "Graded treatment for a tight foreskin — steroid cream and stretching first, then circumcision or foreskin-preserving preputioplasty for scarred or symptomatic cases.",
      overview: [
        "A tight foreskin is one that cannot be pulled back over the head of the penis, or only with difficulty and discomfort. In adults it is often due to scarring from past infection or a skin condition.",
        "Mild cases improve with a steroid cream and gentle stretching. A persistently tight foreskin, or one causing infection or pain, is treated with circumcision or a foreskin-preserving widening procedure (preputioplasty).",
      ],
      commonSigns: [
        "A foreskin that will not retract, or only painfully",
        "Ballooning of the foreskin when passing urine",
        "Splitting or bleeding of the foreskin on retraction",
        "Recurrent infection or redness",
        "Pain during erection or intercourse",
        "A white, thickened ring at the tip of the foreskin",
      ],
      faqs: [
        {
          question: "Can creams fix a tight foreskin?",
          answer:
            "A course of steroid cream with gentle daily stretching helps many milder cases and is worth trying first. Scarred or severe phimosis usually needs a procedure.",
        },
        {
          question: "Circumcision or preputioplasty?",
          answer:
            "Preputioplasty widens the foreskin and keeps it; circumcision removes it. The right choice depends on the cause and how tight and scarred the foreskin is.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Circumcision: desk work in 2–3 days, full healing over 4–6 weeks. Preputioplasty heals a little faster.",
        },
      ],
    },
    {
      slug: "phimosis",
      title: "Phimosis",
      metaTitle: "Phimosis Treatment (Non-Retractile Foreskin)",
      metaDescription:
        "Treatment for phimosis — topical steroids and stretching for mild cases, circumcision or preputioplasty for scarred or symptomatic phimosis — with insurance support.",
      overview: [
        "Phimosis is the medical term for a foreskin that cannot be fully retracted over the head of the penis. It is normal in young boys and usually resolves; in adults it is generally caused by scarring.",
        "Treatment is graded — topical steroid cream and stretching for mild cases, and circumcision or preputioplasty for scarred or symptomatic phimosis. Ayushman Surgicare arranges the consultation and any procedure with insurance support.",
      ],
      commonSigns: [
        "Inability to retract the foreskin",
        "A tight, non-stretchy ring at the foreskin opening",
        "Pain or tearing on attempted retraction",
        "Ballooning during urination and a weak stream",
        "Recurrent balanitis",
        "Discomfort with erections",
      ],
      faqs: [
        {
          question: "Is phimosis always abnormal?",
          answer:
            "In boys under about 5–7 years it is usually normal and improves on its own. Persistent phimosis in older boys and adults, especially with scarring, is treated.",
        },
        {
          question: "What is BXO / lichen sclerosus?",
          answer:
            "It is a skin condition that causes firm white scarring of the foreskin tip and is a common cause of adult phimosis. It is best treated with circumcision and sometimes needs follow-up.",
        },
        {
          question: "Does treatment affect sensation or function?",
          answer:
            "Well-performed circumcision does not meaningfully reduce sexual function, and relieving a tight foreskin often makes intercourse more comfortable.",
        },
      ],
    },
    {
      slug: "swollen-penis",
      title: "Swollen Penis",
      metaTitle: "Swollen Penis — Causes & Treatment",
      metaDescription:
        "Assessment and treatment for swelling of the penis or foreskin — infection, allergy, paraphimosis or injury — with same-day urology review where needed.",
      overview: [
        "Swelling of the penis or foreskin can have several causes — infection (balanitis), an allergic reaction, a trapped retracted foreskin (paraphimosis), injury, or an insect bite. Sudden painful swelling needs prompt assessment.",
        "A urologist examines the area, identifies the cause, and treats accordingly — from creams and antihistamines to an urgent procedure for paraphimosis. Ayushman Surgicare arranges a same-day review where needed.",
      ],
      commonSigns: [
        "Swelling of the head of the penis or the foreskin",
        "Redness, warmth or discharge",
        "The foreskin stuck behind the head — an emergency",
        "Itching or a rash suggesting an allergy",
        "Pain, bruising or difficulty passing urine after an injury",
        "Swelling that is worsening rather than settling",
      ],
      faqs: [
        {
          question: "When is penile swelling an emergency?",
          answer:
            "If the foreskin is trapped behind the head (paraphimosis), if there is severe pain, a dusky colour, inability to pass urine, or spreading redness with fever, seek care immediately.",
        },
        {
          question: "Could it be an allergy?",
          answer:
            "Yes — latex condoms, lubricants, soaps and creams can all cause contact swelling. Stopping the product and taking an antihistamine usually settles it.",
        },
        {
          question: "What tests might I need?",
          answer:
            "An examination is often enough. Sometimes a swab, urine test or STI screen is done depending on what is found.",
        },
      ],
    },
    {
      slug: "corn-removal",
      title: "Corn Removal",
      metaTitle: "Corn Removal — Painful Corn Excision",
      metaDescription:
        "Day-care removal of a painful or recurrent corn under local anaesthesia, with advice on the pressure cause to prevent it returning.",
      overview: [
        "A corn is a small, thickened area of skin that forms over a pressure point, usually on the toes or sole, and can become painful when it presses on the tissue underneath.",
        "Most corns are managed with padding, footwear changes and regular paring. A painful or recurrent corn, or one with a deep core, can be removed under local anaesthesia as a quick day-care procedure.",
      ],
      commonSigns: [
        "A hard, raised bump of skin on a toe or the sole",
        "Pain or tenderness when pressed or when walking",
        "A central hard core within the thickened skin",
        "Skin that keeps thickening in the same spot",
        "A corn that has not improved with padding and filing",
        "Redness or discharge if it becomes infected",
      ],
      faqs: [
        {
          question: "Why does a corn keep coming back?",
          answer:
            "Corns form in response to pressure or friction. Unless the underlying cause — tight shoes, a bony prominence, or an abnormal gait — is addressed, they tend to recur.",
        },
        {
          question: "Is removal painful?",
          answer:
            "The area is numbed with local anaesthetic, so the procedure itself is painless. There is mild soreness for a few days.",
        },
        {
          question: "How long is recovery?",
          answer:
            "You can walk immediately, with a dressing kept clean and dry for about a week.",
        },
      ],
    },
    {
      slug: "vasectomy",
      title: "Vasectomy",
      metaTitle: "Vasectomy — No-Scalpel Male Sterilisation",
      metaDescription:
        "No-scalpel vasectomy under local anaesthesia — a simple, permanent method of male contraception in 15–20 minutes, with counselling and a follow-up semen test.",
      overview: [
        "Vasectomy is a simple, permanent method of male contraception. The two tubes (vas deferens) that carry sperm are sealed, so semen no longer contains sperm.",
        "The no-scalpel technique is done under local anaesthesia in about 15–20 minutes as a day-care procedure. Ayushman Surgicare arranges the counselling, procedure and the follow-up semen test.",
      ],
      commonSigns: [
        "A completed family and a decision for permanent contraception",
        "Wanting to take contraceptive responsibility from a partner",
        "A medical reason for a partner to avoid pregnancy",
        "A preference for a simpler procedure than female sterilisation",
        "A settled, informed choice made with your partner",
        "Comfort that the decision is likely permanent",
      ],
      faqs: [
        {
          question: "Is it effective immediately?",
          answer:
            "No. It takes about 3 months and around 20 ejaculations to clear remaining sperm. Use other contraception until a semen test confirms you are clear.",
        },
        {
          question: "Can it be reversed?",
          answer:
            "Reversal is possible but is major surgery with no guarantee of success, so vasectomy should be considered permanent.",
        },
        {
          question: "Will it affect sex or hormones?",
          answer:
            "No. Erections, orgasm, the volume and look of semen, and testosterone levels are all unchanged — only the sperm are absent.",
        },
      ],
    },
    {
      slug: "testicular-torsion",
      title: "Testicular Torsion",
      metaTitle: "Testicular Torsion — Emergency Surgery",
      metaDescription:
        "Emergency surgery for a twisted testicle — untwisting and fixing both testicles within hours to save the testicle, with fast-tracked assessment and theatre.",
      overview: [
        "Testicular torsion is a surgical emergency where a testicle twists on its cord, cutting off its blood supply. It causes sudden, severe scrotal pain and must be treated within hours to save the testicle.",
        "Surgery untwists the testicle and fixes both testicles in place to prevent it happening again. Ayushman Surgicare fast-tracks the assessment, surgeon and theatre, and handles the insurance.",
      ],
      commonSigns: [
        "Sudden, severe pain in one testicle",
        "Scrotal swelling and tenderness",
        "One testicle sitting higher or at an odd angle",
        "Nausea and vomiting with the pain",
        "Abdominal pain on the same side",
        "Pain that woke you from sleep",
      ],
      faqs: [
        {
          question: "How quickly does it need surgery?",
          answer:
            "Ideally within 6 hours of the pain starting to give the best chance of saving the testicle. Do not wait — go to an emergency department.",
        },
        {
          question: "Why are both testicles fixed?",
          answer:
            "The anatomy that allowed one to twist is usually present on both sides, so both are stitched in place to prevent a future torsion.",
        },
        {
          question: "Can it be mistaken for something else?",
          answer:
            "Epididymitis and a twisted appendage can mimic it. When torsion cannot be confidently excluded, surgeons explore the scrotum rather than risk missing it.",
        },
      ],
    },
    {
      slug: "epididymal-cyst",
      title: "Epididymal Cyst",
      metaTitle: "Epididymal Cyst / Spermatocele Treatment",
      metaDescription:
        "Ultrasound-confirmed diagnosis and day-care removal of a large or uncomfortable epididymal cyst (spermatocele) — a benign scrotal swelling.",
      overview: [
        "An epididymal cyst (or spermatocele) is a smooth, fluid-filled swelling at the top of the testicle, in the epididymis. They are common, benign and often need no treatment.",
        "A large or uncomfortable cyst can be removed with a small day-care procedure. Ayushman Surgicare arranges the ultrasound to confirm the diagnosis, the surgeon and the insurance.",
      ],
      commonSigns: [
        "A smooth, pea-sized or larger lump above and behind the testicle",
        "A painless swelling that moves separately from the testicle",
        "A dragging or heavy sensation with a large cyst",
        "The lump glowing when a light is held to it",
        "Slow growth over months or years",
        "Occasional aching after activity",
      ],
      faqs: [
        {
          question: "Is it cancer?",
          answer:
            "No. Epididymal cysts are benign. An ultrasound confirms it is a simple cyst and separate from the testicle, which settles most concerns.",
        },
        {
          question: "Does it need removing?",
          answer:
            "Only if it is large, painful or bothersome. Small, painless cysts are simply monitored.",
        },
        {
          question: "Could surgery affect fertility?",
          answer:
            "Removing a cyst can occasionally affect the flow through that epididymis. If fertility matters to you, discuss this with your surgeon before deciding.",
        },
      ],
    },
    {
      slug: "toenail-removal",
      title: "Toenail Removal",
      metaTitle: "Ingrown Toenail Removal (Partial / Total)",
      metaDescription:
        "Day-care removal of a painful ingrown or damaged toenail under local anaesthesia, treating the nail bed to permanently stop the ingrowing edge returning.",
      overview: [
        "Toenail removal treats a painful ingrown or badly damaged toenail. The edge of the nail (or occasionally the whole nail) is removed under local anaesthesia, and the nail-forming cells are treated to stop that portion regrowing.",
        "It is a quick day-care procedure with a high success rate for permanently curing a recurrent ingrown toenail.",
      ],
      commonSigns: [
        "Pain along one edge of the toenail, worse with pressure",
        "Redness and swelling of the skin fold beside the nail",
        "Discharge or a small overgrowth of tissue",
        "Repeated infections of the same toe",
        "A nail that has become thickened, curved or damaged",
        "An ingrown nail that keeps returning after home treatment",
      ],
      faqs: [
        {
          question: "Will the whole nail be removed?",
          answer:
            "Usually only the ingrowing edge (a wedge), which leaves a normal-looking nail. Full removal is reserved for a severely deformed or fungal nail.",
        },
        {
          question: "Will it grow back?",
          answer:
            "Treating the nail-forming cells (with phenol or a small excision) prevents that portion regrowing, so a properly done partial removal rarely recurs.",
        },
        {
          question: "How long is recovery?",
          answer:
            "You can walk straight away in an open shoe, with simple dressings changed over 1–2 weeks while it heals.",
        },
      ],
    },
  ],
};

const vascular: Specialty = {
  slug: "vascular",
  label: "Vascular",
  blurb:
    "Minimally invasive treatment for varicose veins, varicocele, DVT, diabetic foot and fibroid embolization — mostly pinhole procedures, with a 90-day Care Buddy.",
  testimonials: [
    {
      quote:
        "My legs ached every evening and the veins were embarrassing in shorts. The laser treatment took forty minutes, I walked out, and I was back at work the next morning.",
      name: "Sridhar P.",
      procedure: "Laser Varicose Vein Treatment",
      location: "Hyderabad",
    },
    {
      quote:
        "The leg swelled up overnight and I was scared it was a clot. They scanned me within hours, started the blood thinners, and explained exactly what to watch for.",
      name: "Anita B.",
      procedure: "DVT Treatment",
      location: "Uppal",
    },
    {
      quote:
        "The diabetic foot ulcer had been dressed for months with no progress. Once they fixed the circulation with an angioplasty and got the pressure off it, it finally healed.",
      name: "Ravindra K.",
      procedure: "Diabetic Foot Ulcer Care",
      location: "Nacharam",
    },
    {
      quote:
        "We'd been trying for two years. The varicocele repair improved my sperm count over a few months and we conceived not long after.",
      name: "A patient, 33",
      procedure: "Microsurgical Varicocele Repair",
      location: "Kukatpally",
    },
    {
      quote:
        "I wanted to keep my uterus. The fibroid embolization was done through my wrist, one night in hospital, and my periods are normal again.",
      name: "Kavitha R.",
      procedure: "Uterine Fibroid Embolization",
      location: "Secunderabad",
    },
    {
      quote:
        "The Care Buddy chased every appointment — the vascular scan, the wound clinic, the blood-sugar review. I'd never have kept track of it all myself.",
      name: "Prem N.",
      procedure: "Diabetic Foot Ulcer Care",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "varicose-veins-treatment",
      title: "Varicose Veins Treatment",
      metaTitle: "Varicose Veins Treatment (Laser / RFA)",
      metaDescription:
        "Pinhole laser and radiofrequency treatment for varicose veins under local anaesthesia — no big cuts, same-day discharge, insurance support and Care Buddy follow-up.",
      overview: [
        "Varicose veins are swollen, twisted veins — usually in the legs — that appear when the one-way valves inside them fail, letting blood pool. They can ache, swell and, over time, damage the skin.",
        "Modern treatment is done through a pinhole under local anaesthesia: laser or radiofrequency (EVLA/RFA) seals the faulty vein from inside, sometimes with foam sclerotherapy or medical glue. There are no big cuts and you walk out the same day.",
      ],
      commonSigns: [
        "Bulging, rope-like veins on the legs",
        "Aching, heaviness or throbbing that worsens by evening",
        "Ankle swelling after long periods of standing",
        "Itching or a rash over a prominent vein",
        "Night cramps or restless legs",
        "Skin darkening near the ankle, or an ulcer — needs prompt review",
      ],
      faqs: [
        {
          question: "Is the treatment painful?",
          answer:
            "It is done under local anaesthesia with a mild pulling or warm sensation. Most people take only paracetamol afterwards and return to work the next day.",
        },
        {
          question: "Will the veins come back?",
          answer:
            "The treated vein is permanently closed. New varicose veins can form elsewhere over the years, which are straightforward to treat again. Compression stockings and staying active help.",
        },
        {
          question: "Is it covered by insurance?",
          answer:
            "Yes, when varicose veins are causing symptoms or skin changes, treatment is covered by most health insurance plans; our team handles the cashless paperwork.",
        },
      ],
    },
    {
      slug: "varicocele-treatment",
      title: "Varicocele Treatment",
      metaTitle: "Varicocele Treatment (Microsurgery / Embolization)",
      metaDescription:
        "Day-care varicocele repair — microsurgical ligation or embolization — for scrotal ache, testicular shrinkage or male-factor infertility, with quick recovery.",
      overview: [
        "A varicocele is an enlargement of the veins within the scrotum, similar to varicose veins in the leg. It is common, usually on the left side, and can cause a dull ache and affect sperm quality.",
        "Treatment is either microsurgical varicocele ligation — tying off the faulty veins through a small groin incision — or embolization by an interventional radiologist through a pinhole. Both are day-care with a quick recovery.",
      ],
      commonSigns: [
        "A soft, 'bag of worms' feeling in the scrotum, usually on the left",
        "A dull ache or heaviness that eases when lying down",
        "The swelling more obvious after standing or exertion",
        "One testicle smaller than the other",
        "Being investigated for difficulty conceiving",
        "Abnormal results on a semen analysis",
      ],
      faqs: [
        {
          question: "Does every varicocele need treatment?",
          answer:
            "No. Many cause no problems and are simply monitored. Treatment is offered for ongoing pain, shrinkage of the testicle, or a varicocele contributing to a fertility problem.",
        },
        {
          question: "Will it improve my fertility?",
          answer:
            "In couples where the man has a varicocele and abnormal semen parameters, repair improves sperm quality in a majority and raises the chance of conception. Results take 3–6 months to show.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Day-care surgery or embolization, desk work in 2–3 days, and normal activity in 1–2 weeks.",
        },
      ],
    },
    {
      slug: "dvt-treatment",
      title: "DVT Treatment",
      metaTitle: "Deep Vein Thrombosis (DVT) Treatment",
      metaDescription:
        "Prompt DVT treatment — immediate blood-thinning medication, and catheter clot removal for large clots — with fast-tracked ultrasound and vascular review.",
      overview: [
        "Deep vein thrombosis (DVT) is a blood clot in a deep vein, usually in the leg. It causes pain and swelling, and carries a risk of part of the clot travelling to the lungs (a pulmonary embolism), which is why it is treated promptly.",
        "Treatment is blood-thinning medication for most people, started immediately. Large or limb-threatening clots may need catheter-directed clot removal. Ayushman Surgicare fast-tracks the ultrasound, vascular specialist and admission.",
      ],
      commonSigns: [
        "Swelling of one leg, often the calf",
        "Pain or tenderness, especially when standing or walking",
        "Warmth and redness over the affected area",
        "A heavy, aching feeling in the leg",
        "Surface veins becoming more prominent",
        "Sudden breathlessness or chest pain — a medical emergency",
      ],
      faqs: [
        {
          question: "How long will I be on blood thinners?",
          answer:
            "Usually at least 3 months. If the DVT had a clear temporary cause (surgery, a long flight) that may be enough; if it was unprovoked or you have ongoing risk factors, longer or indefinite treatment is advised.",
        },
        {
          question: "Can I fly or exercise?",
          answer:
            "Once you are stable on treatment, light activity is encouraged and helps recovery. Your specialist will advise on when longer travel is safe.",
        },
        {
          question: "What is post-thrombotic syndrome?",
          answer:
            "Some people develop long-term leg swelling and heaviness after a DVT. Wearing graduated compression stockings and staying active reduces this risk.",
        },
      ],
    },
    {
      slug: "diabetic-foot-ulcer-treatment",
      title: "Diabetic Foot Ulcer Treatment",
      metaTitle: "Diabetic Foot Ulcer Treatment & Limb Salvage",
      metaDescription:
        "Coordinated diabetic foot ulcer care — wound debridement, offloading, infection control, blood-sugar management and revascularisation — with Care Buddy coordination.",
      overview: [
        "A diabetic foot ulcer is a wound — usually on the sole or toes — that is slow to heal because diabetes reduces sensation, blood flow and the body's ability to fight infection. Left untreated, ulcers can become deep infections.",
        "Treatment is a coordinated package: cleaning and dressing the wound (debridement), offloading pressure, treating infection, controlling blood sugar, and restoring blood flow with an angioplasty or bypass where the circulation is poor. Your Care Buddy keeps the many appointments on track.",
      ],
      commonSigns: [
        "A sore, blister or wound on the foot that is not healing",
        "Redness, swelling, warmth or discharge from the foot",
        "A bad smell from a wound",
        "Numbness or tingling in the feet",
        "Black or discoloured tissue — needs urgent care",
        "Foot pain at rest or when lying flat, suggesting poor circulation",
      ],
      faqs: [
        {
          question: "Why won't my ulcer heal?",
          answer:
            "Three things usually need fixing together: pressure on the wound, infection, and blood supply. Addressing only one is why ulcers treated in isolation often fail to heal.",
        },
        {
          question: "Will I need an amputation?",
          answer:
            "The goal of coordinated care is to avoid that. Early referral, restoring blood flow and controlling infection save the great majority of feet. Amputation is a last resort for uncontrolled infection or dead tissue.",
        },
        {
          question: "How long does healing take?",
          answer:
            "Weeks to several months, depending on the ulcer's depth, infection and circulation. Consistent dressing changes, offloading and follow-up are essential.",
        },
      ],
    },
    {
      slug: "uterine-fibroids",
      title: "Uterine Fibroids (Embolization)",
      metaTitle: "Uterine Fibroid Embolization (UFE)",
      metaDescription:
        "Uterus-sparing Uterine Fibroid Embolization (UFE) — a pinhole procedure that shrinks fibroids by blocking their blood supply, avoiding major surgery.",
      overview: [
        "Uterine fibroids are common non-cancerous growths in the wall of the uterus that can cause heavy periods, pelvic pressure and, when large, bladder or bowel symptoms.",
        "Uterine Fibroid Embolization (UFE) is a minimally invasive, uterus-sparing treatment done by an interventional radiologist. Through a pinhole in the wrist or groin, tiny particles block the fibroids' blood supply so they shrink. It avoids major surgery and keeps the uterus.",
      ],
      commonSigns: [
        "Heavy or prolonged menstrual bleeding",
        "Passing large clots, or anaemia from blood loss",
        "Pelvic pressure, fullness or a visibly enlarged abdomen",
        "Frequent urination or difficulty emptying the bladder",
        "Constipation or back pain from a large fibroid",
        "Pain during intercourse",
      ],
      faqs: [
        {
          question: "How is UFE different from surgery?",
          answer:
            "There are no incisions and no general anaesthetic. It is done through a pinhole, usually with a one-night stay, and recovery is about a week versus several weeks for a hysterectomy or open myomectomy.",
        },
        {
          question: "Will my fibroids come back?",
          answer:
            "Treated fibroids shrink and do not regrow. New fibroids can occasionally develop, and a small number of women later need another procedure.",
        },
        {
          question: "Can I still have children after UFE?",
          answer:
            "Pregnancy is possible after UFE, but if fertility is a priority, surgical removal of the fibroid (myomectomy) is often preferred. Your team will help you weigh this.",
        },
      ],
    },
  ],
};

const aesthetics: Specialty = {
  slug: "aesthetics",
  label: "Aesthetics",
  blurb:
    "Body contouring, hair restoration and facial procedures — gynecomastia, liposuction, tummy tuck, rhinoplasty, hair and beard transplants — with day-care surgery and Care Buddy follow-up.",
  testimonials: [
    {
      quote:
        "The chest thing had bothered me since school. The gynecomastia surgery was day-care, the scars are tiny, and for the first time I'm comfortable at the pool.",
      name: "Akhil S.",
      procedure: "Gynecomastia Surgery",
      location: "Hyderabad",
    },
    {
      quote:
        "I'd tried everything for the fat on my flanks. The liposuction gave me the shape my diet never could — and it's stayed because my weight has.",
      name: "Deepa M.",
      procedure: "Liposuction",
      location: "Uppal",
    },
    {
      quote:
        "My hairline had been receding for a decade. Nine months after the FUE transplant it looks like my own hair, because it is.",
      name: "Naveen R.",
      procedure: "FUE Hair Transplant",
      location: "Kukatpally",
    },
    {
      quote:
        "The lump on my back had grown enough to catch on chairs. Twenty minutes under local anaesthetic and it was gone, confirmed benign.",
      name: "Ganesh P.",
      procedure: "Lipoma Removal",
      location: "Nacharam",
    },
    {
      quote:
        "I broke my nose years ago and could never breathe properly on one side. The septorhinoplasty fixed both the bump and the blockage.",
      name: "Sana K.",
      procedure: "Septorhinoplasty",
      location: "Secunderabad",
    },
    {
      quote:
        "The torn earlobe from a snatched earring had put me off jewellery for years. Quick repair, re-pierced two months later, and you can't tell.",
      name: "Priya V.",
      procedure: "Earlobe Repair",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "gynecomastia",
      title: "Gynecomastia",
      metaTitle: "Gynecomastia Surgery (Male Chest Reduction)",
      metaDescription:
        "Day-care gynecomastia surgery combining liposuction with gland excision through tiny incisions — for a flatter, firmer male chest, with insurance support where applicable.",
      overview: [
        "Gynecomastia is the enlargement of male breast tissue, caused by a mix of glandular tissue and fat. It is very common in teenagers and older men and, when it persists, is not helped by diet or exercise alone.",
        "Surgery combines liposuction to remove the fatty component with excision of the firm gland behind the nipple, through tiny incisions. It is a day-care procedure with a compression vest worn for a few weeks.",
      ],
      commonSigns: [
        "An enlarged or puffy chest that hasn't changed with weight loss",
        "A firm disc of tissue felt under the nipple",
        "Tenderness or sensitivity of the chest",
        "Self-consciousness in fitted clothing or swimwear",
        "Uneven enlargement of one or both sides",
        "Persistent enlargement for more than a year",
      ],
      faqs: [
        {
          question: "Will exercise fix it?",
          answer:
            "Exercise reduces overall body fat but cannot remove the glandular disc behind the nipple, which is why true gynecomastia needs surgery to correct.",
        },
        {
          question: "Will it come back?",
          answer:
            "The removed gland does not grow back. Significant weight gain or certain medications and supplements can cause new fatty enlargement, so those are worth reviewing.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Desk work in 3–5 days, a compression vest for 3–4 weeks, and gym after about 4–6 weeks. Scars are small and fade well.",
        },
      ],
    },
    {
      slug: "liposuction",
      title: "Liposuction",
      metaTitle: "Liposuction — Body Contouring Surgery",
      metaDescription:
        "Liposuction for stubborn, diet-resistant fat pockets — abdomen, flanks, thighs, arms or chin — reshaping the contour, with a compression garment and Care Buddy follow-up.",
      overview: [
        "Liposuction removes stubborn pockets of fat that do not respond to diet and exercise — commonly the abdomen, flanks, thighs, arms or chin — to reshape the contour. It is not a weight-loss procedure.",
        "Fat is loosened and suctioned through small cannulas via tiny incisions, under local or general anaesthesia depending on the area. A compression garment is worn afterwards to help the skin settle.",
      ],
      commonSigns: [
        "Localised fat bulges resistant to a stable diet and exercise routine",
        "Disproportionate areas such as flanks, thighs or upper arms",
        "A double chin or jawline fullness",
        "Being close to a healthy weight with specific problem areas",
        "Good skin elasticity in the area",
        "Realistic expectations about contour, not weight",
      ],
      faqs: [
        {
          question: "Is liposuction a weight-loss treatment?",
          answer:
            "No. It removes a limited volume of fat to improve shape. It works best for people near their target weight with localised bulges and firm skin.",
        },
        {
          question: "Will the fat come back?",
          answer:
            "Treated fat cells are permanently removed. If you gain weight afterwards, remaining fat cells elsewhere enlarge, so a stable weight keeps the result.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Bruising and swelling for 1–2 weeks, a compression garment for several weeks, desk work in 3–5 days, and the final shape at 2–3 months.",
        },
      ],
    },
    {
      slug: "lipoma-surgery",
      title: "Lipoma Surgery",
      metaTitle: "Lipoma Removal Surgery",
      metaDescription:
        "Complete excision of a benign fatty lump (lipoma) under local anaesthesia, with routine tissue confirmation and a small, well-placed scar.",
      overview: [
        "A lipoma is a soft, benign lump of fatty tissue that grows slowly under the skin, most often on the back, shoulders, arms or neck. It is harmless but is removed if it is large, growing, painful or in a visible spot.",
        "Removal is a short procedure under local anaesthesia — the lipoma is taken out whole through a small incision, and the tissue is sent for routine confirmation.",
      ],
      commonSigns: [
        "A soft, rubbery lump that moves easily under the skin",
        "Slow growth over months or years",
        "Usually painless, but tender if it presses on a nerve",
        "A lump large enough to be noticeable or catch on clothing",
        "More than one lump (some people develop several)",
        "A lump that is hard, fixed or rapidly growing — needs prompt review",
      ],
      faqs: [
        {
          question: "Is a lipoma dangerous?",
          answer:
            "Lipomas are benign. The removed tissue is checked under the microscope to confirm this, which is routine.",
        },
        {
          question: "Can it be removed without a cut?",
          answer:
            "Small lipomas can sometimes be removed by liposuction for a smaller scar, though this leaves a slightly higher chance of a small remnant. Standard excision removes it completely.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A few dressing changes over 1–2 weeks, stitches out at 7–14 days, and a small scar that fades over months.",
        },
      ],
    },
    {
      slug: "hair-transplant",
      title: "Hair Transplant",
      metaTitle: "Hair Transplant (FUE) for Hairline & Crown",
      metaDescription:
        "FUE hair transplant moving your own permanent follicles to thinning areas — natural, lifelong growth, day-care under local anaesthesia, with staged results over 12 months.",
      overview: [
        "A hair transplant moves your own permanent hair follicles from the back and sides of the scalp to areas of thinning or baldness, most often the hairline and crown. The transplanted hair grows naturally for life.",
        "The FUE technique extracts individual follicular units and places them in the recipient area, over one or more sessions. It is done under local anaesthesia as a day-care procedure.",
      ],
      commonSigns: [
        "A receding hairline or thinning crown that has stabilised",
        "A clear pattern of loss (male or female pattern)",
        "Enough healthy donor hair at the back and sides",
        "Loss that has not responded to medication alone",
        "Wanting a permanent rather than a maintenance solution",
        "Realistic expectations about density and coverage",
      ],
      faqs: [
        {
          question: "Will the transplanted hair fall out?",
          answer:
            "The transplanted follicles resist the hormone that causes pattern baldness, so they are permanent. The grafts shed in the first few weeks and regrow from about 3–4 months, with full results by 12 months.",
        },
        {
          question: "Will I still lose my other hair?",
          answer:
            "Yes, pattern loss continues in the untransplanted areas, so medication (finasteride/minoxidil) is often advised to protect existing hair and avoid a patchy look later.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Tiny scabs for about a week, back to work in 2–3 days (or with a cap), and avoiding gym, sun and swimming for 2–4 weeks.",
        },
      ],
    },
    {
      slug: "sebaceous-cyst-surgery",
      title: "Sebaceous Cyst Surgery",
      metaTitle: "Sebaceous Cyst Removal (Complete Excision)",
      metaDescription:
        "Complete removal of a sebaceous (epidermoid) cyst including its wall under local anaesthesia — the reliable way to prevent recurrence.",
      overview: [
        "A sebaceous (epidermoid) cyst is a smooth lump under the skin filled with keratin, with a tiny central pore. They are common on the scalp, face, neck, back and groin, and are harmless but can become inflamed or infected.",
        "The definitive treatment is complete surgical removal of the cyst along with its wall (capsule), under local anaesthesia — leaving the capsule behind is the main reason cysts recur.",
      ],
      commonSigns: [
        "A round, movable lump under the skin",
        "A small dark punctum (pore) on the surface",
        "Occasional discharge of thick, cheesy material with a strong smell",
        "The lump becoming red, swollen and painful if infected",
        "Slow growth over time",
        "A cyst in a spot that catches on clothing or a razor",
      ],
      faqs: [
        {
          question: "Can it just be drained?",
          answer:
            "Draining an infected cyst relieves pressure but the cyst wall remains and it almost always refills. Complete removal of the wall is what prevents recurrence.",
        },
        {
          question: "Should I have it removed before it gets infected?",
          answer:
            "Removing a quiet cyst is a simpler procedure with a neater scar than operating on an inflamed one, so elective removal is often advised for cysts that are enlarging or bothersome.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Stitches for 1–2 weeks and a small scar. An infected cyst may need antibiotics first and removal once the inflammation settles.",
        },
      ],
    },
    {
      slug: "rhinoplasty",
      title: "Rhinoplasty",
      metaTitle: "Rhinoplasty — Nose Reshaping Surgery",
      metaDescription:
        "Rhinoplasty to refine the tip, bridge or nostrils and balance the nose with the face — combinable with septoplasty to improve breathing.",
      overview: [
        "Rhinoplasty reshapes the nose — refining the tip, straightening the bridge, reducing a hump, or narrowing the nostrils — to balance it with the rest of the face. It can also be combined with septoplasty to improve breathing.",
        "It is done through the nostrils (closed) or with a tiny incision across the columella (open), under general anaesthesia. A splint is worn for about a week and swelling settles gradually over months.",
      ],
      commonSigns: [
        "A dorsal hump or bump on the bridge",
        "A drooping, bulbous or wide nasal tip",
        "A crooked or deviated nose, sometimes after injury",
        "A nose that looks too large or too small for the face",
        "Blocked breathing alongside the cosmetic concern",
        "A previous rhinoplasty needing revision",
      ],
      faqs: [
        {
          question: "Will it help my breathing too?",
          answer:
            "If a deviated septum or narrow airway is contributing to blockage, functional work is done at the same time (septorhinoplasty) so you get both a better shape and better airflow.",
        },
        {
          question: "When will I see the final result?",
          answer:
            "The nose looks much better once the splint is off at a week, but subtle swelling — especially at the tip — takes 6–12 months to fully settle.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A week off work with a splint and bruising around the eyes, avoiding glasses on the bridge and contact sports for several weeks.",
        },
      ],
    },
    {
      slug: "axillary-breast",
      title: "Axillary Breast",
      metaTitle: "Axillary Breast Removal (Accessory Breast Tissue)",
      metaDescription:
        "Day-care removal of accessory breast tissue in the armpit with liposuction and gland excision through a hidden incision — for a smoother contour and less cyclical tenderness.",
      overview: [
        "Axillary breast is a pad of extra breast tissue in the armpit, present from birth. It can enlarge with weight gain, pregnancy or hormonal changes, causing a visible bulge, chafing and tenderness before periods.",
        "Treatment is liposuction to remove the fatty part, with excision of any firm glandular tissue through a small hidden incision. It is a day-care procedure with a compression garment worn afterwards.",
      ],
      commonSigns: [
        "A soft bulge in one or both armpits",
        "The bulge more obvious in fitted or sleeveless clothing",
        "Tenderness or swelling before periods",
        "Chafing and irritation with arm movement",
        "Enlargement during or after pregnancy",
        "A lump that has been present since adolescence",
      ],
      faqs: [
        {
          question: "Is it the same as a swollen lymph node?",
          answer:
            "No. Axillary breast is soft, symmetrical tissue that changes with your cycle. A firm or new solitary lump in the armpit should always be examined separately.",
        },
        {
          question: "Will it come back?",
          answer:
            "Removed gland does not return. Significant weight gain can enlarge any residual fatty tissue, so a stable weight preserves the result.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Desk work in 2–3 days, a compression garment for 3–4 weeks, and small scars hidden in the armpit crease.",
        },
      ],
    },
    {
      slug: "tummy-tuck",
      title: "Tummy Tuck",
      metaTitle: "Tummy Tuck (Abdominoplasty)",
      metaDescription:
        "Abdominoplasty to remove loose lower-abdominal skin and tighten separated muscles after pregnancy or weight loss — a low, hidden scar and Care Buddy follow-up.",
      overview: [
        "A tummy tuck (abdominoplasty) removes loose, excess skin from the lower abdomen and tightens the underlying muscles that separate during pregnancy or major weight loss. It restores a flatter, firmer profile that exercise cannot achieve once the skin and muscle are stretched.",
        "It is a bigger operation than liposuction, done under general anaesthesia with a 1–2 night stay. The scar sits low, hidden by underwear, and fades over time.",
      ],
      commonSigns: [
        "An overhang of loose skin over the lower abdomen (an 'apron')",
        "A separation of the tummy muscles (diastasis) after pregnancy",
        "Skin that does not tighten despite diet and exercise",
        "Stretch marks and looseness after major weight loss",
        "Recurrent rashes or irritation in the skin fold",
        "A stable weight and a completed family",
      ],
      faqs: [
        {
          question: "Is it the same as liposuction?",
          answer:
            "No. Liposuction removes fat but not loose skin or muscle laxity. A tummy tuck addresses skin and muscle, and the two are often combined for the best contour.",
        },
        {
          question: "Should I finish having children first?",
          answer:
            "Yes. A future pregnancy can undo the muscle repair, so a tummy tuck is best done once your family is complete.",
        },
        {
          question: "How long is recovery?",
          answer:
            "2–3 weeks off work, a support binder for 6 weeks, no heavy lifting or core exercise for about 6–8 weeks, and the final result at 3–6 months.",
        },
      ],
    },
    {
      slug: "breast-lump",
      title: "Breast Lump",
      metaTitle: "Breast Lump Evaluation & Removal",
      metaDescription:
        "Triple assessment for a new breast lump — clinical exam, imaging and biopsy — with excision of benign lumps and a fast-tracked pathway for anything suspicious.",
      overview: [
        "Most breast lumps are benign — cysts, fibroadenomas or areas of thickening — but every new lump needs proper assessment to be sure. The standard 'triple assessment' combines a clinical exam, imaging (ultrasound or mammogram) and, if needed, a needle biopsy.",
        "Benign lumps that are large, growing or bothersome can be removed through a small, well-placed incision. Suspicious findings are referred straight to the breast and oncology team. Your Care Buddy keeps the pathway moving quickly.",
      ],
      commonSigns: [
        "A new lump or thickened area in the breast or armpit",
        "A change in breast size or shape",
        "Skin dimpling, puckering or redness",
        "Nipple discharge, especially if bloodstained, or a nipple change",
        "A lump that persists after a menstrual cycle",
        "A family history of breast or ovarian cancer with a new change",
      ],
      faqs: [
        {
          question: "Does a lump mean cancer?",
          answer:
            "No — the majority of breast lumps are benign. But because some are not, prompt triple assessment is important so you get a clear answer quickly.",
        },
        {
          question: "How fast can I be seen?",
          answer:
            "New breast lumps are treated as a priority. We arrange the clinical exam and imaging without delay and, if a biopsy is needed, fast-track the result.",
        },
        {
          question: "Will the lump be removed?",
          answer:
            "Small benign lumps can simply be monitored. Removal is offered if a lump is enlarging, uncertain on imaging, or causing distress — and is always done if there is any doubt about the diagnosis.",
        },
      ],
    },
    {
      slug: "double-chin",
      title: "Double Chin",
      metaTitle: "Double Chin Treatment (Chin Liposuction)",
      metaDescription:
        "Chin liposuction or fat-dissolving injections to remove submental fat and define the jawline — a short procedure with a chin strap and quick recovery.",
      overview: [
        "A double chin is a pocket of fat beneath the jaw (submental fat) that blurs the jawline. It often runs in families and can persist even at a healthy weight.",
        "It is treated with a short session of chin liposuction through a tiny hidden incision, or with fat-dissolving injections for smaller amounts. Liposuction gives a more defined, one-session result.",
      ],
      commonSigns: [
        "Fullness under the chin that persists despite weight loss",
        "A poorly defined jawline in photos",
        "A family tendency to a double chin",
        "Loose fat rather than loose skin",
        "Wanting a sharper profile",
        "Being at or near a stable weight",
      ],
      faqs: [
        {
          question: "Injections or liposuction?",
          answer:
            "Fat-dissolving injections suit small volumes and need several sessions. Liposuction removes more fat in one sitting with a quicker, more predictable result — your surgeon will advise based on the amount of fat and your skin.",
        },
        {
          question: "Will loose skin be a problem?",
          answer:
            "If the skin is firm it re-drapes well. Significant skin laxity may need a small skin-tightening step, which is assessed at consultation.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A chin strap for about a week, bruising for a few days, back to work in 2–3 days, and the final jawline at 6–8 weeks.",
        },
      ],
    },
    {
      slug: "buccal-fat",
      title: "Buccal Fat Removal",
      metaTitle: "Buccal Fat Pad Removal (Cheek Reduction)",
      metaDescription:
        "Buccal fat pad removal through a hidden incision inside the mouth to slim the mid-face and define the cheek-to-jaw contour — a conservative, no-visible-scar procedure.",
      overview: [
        "The buccal fat pads are rounded deposits of fat in the mid-cheek. Removing a portion of them slims the lower face and enhances the cheekbone-to-jaw contour, giving a more sculpted look.",
        "Buccal fat removal is a quick procedure done entirely through a small incision inside the mouth, so there is no visible scar. It is usually done under local anaesthesia with sedation.",
      ],
      commonSigns: [
        "Full, rounded cheeks that persist at a stable weight",
        "A 'baby face' appearance you would like to refine",
        "Cheek fullness that sits below the cheekbone",
        "Wanting a more defined lower face and jawline",
        "Good skin tone and no significant volume loss elsewhere",
        "Realistic expectations — the change is subtle and permanent",
      ],
      faqs: [
        {
          question: "Will my face look gaunt when I'm older?",
          answer:
            "Faces naturally lose fat with age, so surgeons remove only a conservative, measured amount to avoid a hollowed look later. Over-resection is the main thing to avoid.",
        },
        {
          question: "Is it reversible?",
          answer:
            "No — the fat removed does not come back, which is why a careful, conservative approach matters.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Swelling for 1–2 weeks, a soft diet and mouth rinses for a few days, back to work in 3–5 days, and the final result at 2–3 months.",
        },
      ],
    },
    {
      slug: "earlobe-repair",
      title: "Earlobe Repair",
      metaTitle: "Earlobe Repair (Split & Stretched Lobes)",
      metaDescription:
        "Quick repair of a split, torn or stretched earlobe under local anaesthesia — 20–30 minutes per ear, with re-piercing possible after healing.",
      overview: [
        "Earlobe repair corrects a split, stretched or torn earlobe — from a heavy earring, an accidental pull, or deliberate stretching (gauging). The edges are freshened and stitched to rebuild a natural shape.",
        "It is a quick procedure under local anaesthesia, taking 20–30 minutes per ear. The ear can usually be re-pierced after about 6–8 weeks.",
      ],
      commonSigns: [
        "A completely split earlobe from a torn piercing",
        "An elongated or slit-shaped piercing hole",
        "A stretched lobe after gauging that you want closed",
        "A thin, weak lobe at risk of tearing",
        "A keloid or lump at an old piercing site",
        "Wanting to wear earrings again comfortably",
      ],
      faqs: [
        {
          question: "Can I get my ears re-pierced afterwards?",
          answer:
            "Yes, usually after 6–8 weeks of healing, and ideally in a slightly different spot from the repair line.",
        },
        {
          question: "Will there be a visible scar?",
          answer:
            "There is a fine line where the edges are joined, which fades over a few months and is easily hidden.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Stitches out at about a week, keeping the area clean and dry, and avoiding pressure or earrings until healed.",
        },
      ],
    },
    {
      slug: "blepharoplasty",
      title: "Blepharoplasty",
      metaTitle: "Blepharoplasty — Eyelid Surgery",
      metaDescription:
        "Upper and lower eyelid surgery to correct hooding, puffiness and under-eye bags — hidden scars, day-care under local anaesthesia with sedation.",
      overview: [
        "Blepharoplasty removes excess skin and fat from the upper and/or lower eyelids to correct hooding, puffiness and under-eye bags that make the eyes look tired or older.",
        "Upper-lid surgery hides the scar in the natural crease; lower-lid work is often done from inside the eyelid with no visible scar. It is a day-care procedure under local anaesthesia with sedation.",
      ],
      commonSigns: [
        "Heavy or hooded upper eyelids, sometimes resting on the lashes",
        "A tired or aged appearance despite adequate sleep",
        "Puffy bags under the eyes",
        "Excess upper-lid skin affecting the edge of your vision",
        "Difficulty applying eye make-up on hooded lids",
        "Fine, crepey skin of the lower lids",
      ],
      faqs: [
        {
          question: "Will it get rid of my dark circles?",
          answer:
            "Blepharoplasty addresses bags and excess skin. Pigment-related dark circles are a separate issue treated with skincare, fillers or laser — your surgeon will explain what will and won't change.",
        },
        {
          question: "Can it be covered by insurance?",
          answer:
            "If excess upper-lid skin is genuinely obstructing your vision, a functional blepharoplasty may be covered. A purely cosmetic procedure is not.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Bruising and swelling for 1–2 weeks, stitches out at 5–7 days, back to work in about a week, and contact lenses and eye make-up after 2 weeks.",
        },
      ],
    },
    {
      slug: "beard-transplant",
      title: "Beard Transplant",
      metaTitle: "Beard Transplant (FUE) for Patchy Facial Hair",
      metaDescription:
        "FUE beard transplant filling patchy or scarred facial hair with scalp follicles — permanent, natural growth that can be trimmed and shaved, results over 8–12 months.",
      overview: [
        "A beard transplant fills patchy, thin or scarred areas of facial hair using follicles taken from the back of the scalp. The transplanted hairs grow permanently and can be trimmed and shaved like natural beard hair.",
        "It uses the FUE technique — individual follicular units placed to match natural growth direction — under local anaesthesia as a day-care procedure.",
      ],
      commonSigns: [
        "Patchy or uneven beard growth",
        "Thin areas on the cheeks or jawline",
        "Scarring from acne, burns or surgery within the beard area",
        "A gap or thin patch from a previous injury",
        "Wanting a fuller, more defined beard shape",
        "Enough healthy donor hair on the scalp",
      ],
      faqs: [
        {
          question: "Will it look and feel natural?",
          answer:
            "Yes. Because it is your own hair placed at the correct angle and density, it blends with existing beard hair and can be styled, trimmed and shaved normally.",
        },
        {
          question: "When can I shave?",
          answer:
            "The grafts shed in the first few weeks and regrow from about 3–4 months. You can usually shave gently after about 10 days, with full results by 8–12 months.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Tiny scabs on the face for about a week, back to work in 3–5 days, and avoiding heavy sweating and sun for 2–3 weeks.",
        },
      ],
    },
    {
      slug: "cleft-lip",
      title: "Cleft Lip",
      metaTitle: "Cleft Lip Repair Surgery",
      metaDescription:
        "Planned cleft lip repair, usually in the first months of life, closing the gap and rebuilding the lip and nostril — with feeding support and coordinated follow-up.",
      overview: [
        "A cleft lip is a gap in the upper lip, present from birth, that occurs when the lip does not fully join during early development. It may involve the nose and, in some children, the palate as well.",
        "Repair is a carefully planned reconstructive operation, usually done in the first few months of life, that closes the gap, rebuilds the muscle and restores a natural lip and nostril shape. Ayushman Surgicare coordinates the specialist team, feeding support and the surgical schedule.",
      ],
      commonSigns: [
        "A visible gap in the upper lip on one or both sides",
        "A change in the shape of the nostril on the affected side",
        "Feeding difficulty in a newborn",
        "A cleft of the gum or palate found on examination",
        "An older child or adult wanting revision of an earlier repair",
        "A need for coordinated speech, dental and ENT follow-up",
      ],
      faqs: [
        {
          question: "When is the repair done?",
          answer:
            "Lip repair is typically done at around 3–6 months of age when the baby is growing well. Palate repair, if needed, follows later. Your team will set out the timeline.",
        },
        {
          question: "Will my child need more than one operation?",
          answer:
            "Many children have an excellent result from the first repair. Some need minor revisions to the lip or nose in childhood or the teenage years, and speech or dental input along the way.",
        },
        {
          question: "How is feeding managed beforehand?",
          answer:
            "Special bottles and teats, and support from a feeding specialist, help your baby feed well and gain weight before surgery. Our Care Buddy helps arrange this.",
        },
      ],
    },
  ],
};

const orthopedics: Specialty = {
  slug: "orthopedics",
  label: "Orthopedics",
  blurb:
    "Joint replacement, sports-injury and spine surgery — knee and hip replacement, ACL and meniscus repair, arthroscopy and microdiscectomy — with physiotherapy built into a 90-day Care Buddy.",
  testimonials: [
    {
      quote:
        "I'd stopped walking to the market because of the knee pain. Six weeks after the total knee replacement I was doing it again, and by three months I'd forgotten which knee it was.",
      name: "Sarala D.",
      procedure: "Total Knee Replacement",
      location: "Hyderabad",
    },
    {
      quote:
        "The night tingling in my hand had got so bad I couldn't sleep. The carpal tunnel release took fifteen minutes and the first night after, I slept right through.",
      name: "Ramanaiah G.",
      procedure: "Carpal Tunnel Release",
      location: "Uppal",
    },
    {
      quote:
        "I tore my ACL playing cricket. The reconstruction, plus the rehab programme the Care Buddy kept me on schedule for, got me back on the pitch in ten months.",
      name: "Karan M.",
      procedure: "ACL Reconstruction",
      location: "Kukatpally",
    },
    {
      quote:
        "The hip pain had me walking with a stick at 58. The replacement was done on a Monday, I was home Wednesday, and off the stick in a month.",
      name: "Joseph P.",
      procedure: "Hip Replacement",
      location: "Nacharam",
    },
    {
      quote:
        "Years of sciatica down my leg, and nothing helped. The microdiscectomy took the leg pain away the same day — I could feel the difference waking up from the anaesthetic.",
      name: "Bhavani S.",
      procedure: "Microdiscectomy (Spine)",
      location: "Secunderabad",
    },
    {
      quote:
        "My shoulder kept dislocating every time I reached up. After the keyhole stabilisation it's been solid for a year, including back at the gym.",
      name: "Farhan A.",
      procedure: "Shoulder Stabilisation",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "knee-replacement",
      title: "Knee Replacement",
      metaTitle: "Knee Replacement Surgery (Partial & Total)",
      metaDescription:
        "Partial and total knee replacement for advanced arthritis — pain relief and restored movement, with rapid-recovery protocols, physiotherapy and 90-day Care Buddy follow-up.",
      overview: [
        "Knee replacement resurfaces a knee joint worn out by arthritis, replacing the damaged cartilage and bone with metal and plastic components. It relieves pain and restores movement when other treatments no longer work.",
        "Depending on how much of the joint is affected, a partial (uni-compartmental) or total knee replacement is done. Ayushman Surgicare arranges the X-rays, orthopaedic surgeon, hospital and insurance, with structured physiotherapy and a 90-day Care Buddy.",
      ],
      commonSigns: [
        "Knee pain that limits walking, stairs or sleep",
        "Stiffness after sitting or first thing in the morning",
        "Swelling that keeps returning",
        "A bowed or knock-kneed deformity developing",
        "Little or no relief from painkillers, injections and physiotherapy",
        "X-rays showing bone-on-bone arthritis",
      ],
      faqs: [
        {
          question: "Partial or total replacement?",
          answer:
            "A partial replacement suits arthritis confined to one part of the knee and has a faster recovery. A total replacement is used when two or three compartments are worn. Your surgeon decides from your X-rays and examination.",
        },
        {
          question: "How long does a knee replacement last?",
          answer:
            "Modern implants last 15–20 years or more in most people. Staying a healthy weight and active without high-impact sport helps it last.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Walking with support within a day, home in 2–3 days, off a stick by 4–6 weeks, and most improvement by 3 months with a full result at a year.",
        },
      ],
    },
    {
      slug: "carpal-tunnel-syndrome",
      title: "Carpal Tunnel Syndrome",
      metaTitle: "Carpal Tunnel Syndrome Treatment & Release Surgery",
      metaDescription:
        "Treatment for carpal tunnel syndrome — splinting and injection for mild cases, day-care carpal tunnel release for persistent numbness and weakness.",
      overview: [
        "Carpal tunnel syndrome is pressure on the median nerve at the wrist, causing numbness, tingling and pain in the thumb, index and middle fingers — often worse at night.",
        "Mild cases improve with a night splint or a steroid injection. Persistent or severe symptoms are treated with carpal tunnel release, a short day-care procedure that divides the tight ligament to free the nerve.",
      ],
      commonSigns: [
        "Numbness or pins-and-needles in the thumb, index and middle fingers",
        "Symptoms waking you at night, relieved by shaking the hand",
        "A weak grip or dropping objects",
        "Aching that spreads up the forearm",
        "Clumsiness with buttons, coins or keys",
        "Wasting of the muscle at the base of the thumb (a late sign)",
      ],
      faqs: [
        {
          question: "Will it get better without surgery?",
          answer:
            "Mild, recent symptoms often settle with a splint, activity changes or an injection. Once there is constant numbness or muscle weakness, surgery gives the most reliable and lasting relief.",
        },
        {
          question: "Open or keyhole release?",
          answer:
            "Both work well. Endoscopic release has slightly less scar tenderness early on; open release is quicker and needs no special equipment. Your surgeon will advise.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Light use of the hand within days, stitches out at 10–14 days, and a return to heavy or repetitive work in 3–4 weeks. Night symptoms often improve immediately.",
        },
      ],
    },
    {
      slug: "acl-tear-treatment",
      title: "ACL Tear Treatment",
      metaTitle: "ACL Tear Treatment & Arthroscopic Reconstruction",
      metaDescription:
        "Treatment for an ACL tear — physiotherapy for stable knees, arthroscopic ACL reconstruction for instability or a return to pivoting sport — with structured rehab.",
      overview: [
        "The anterior cruciate ligament (ACL) stabilises the knee during twisting and pivoting. It is commonly torn in sport by a sudden change of direction or awkward landing, causing the knee to give way.",
        "Treatment depends on your activity level. Many people manage with physiotherapy; those who pivot in sport or have an unstable knee are offered arthroscopic ACL reconstruction, using a graft to rebuild the ligament.",
      ],
      commonSigns: [
        "A 'pop' at the time of injury, then rapid swelling",
        "The knee giving way or feeling unstable on turning",
        "Difficulty fully straightening or bending the knee",
        "Pain and swelling after activity",
        "A sense of not being able to trust the knee",
        "An MRI confirming a complete ACL tear",
      ],
      faqs: [
        {
          question: "Do I definitely need surgery?",
          answer:
            "Not always. If your knee is stable for your daily activities and you don't play pivoting sports, a course of physiotherapy may be enough. Reconstruction is recommended for instability or a return to cutting sports.",
        },
        {
          question: "How long until I can play sport again?",
          answer:
            "Return to non-contact activity is around 4–6 months, and to competitive pivoting sport 9–12 months, guided by strength and control tests — not just time.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Day-care or one-night surgery, crutches for 1–2 weeks, and a structured rehab programme your Care Buddy helps you keep to.",
        },
      ],
    },
    {
      slug: "meniscus-tear-treatment",
      title: "Meniscus Tear Treatment",
      metaTitle: "Meniscus Tear Treatment (Repair or Trim)",
      metaDescription:
        "Arthroscopic treatment for a torn meniscus — repair where it can heal, or a partial trim for mechanical symptoms like locking and catching.",
      overview: [
        "The menisci are two C-shaped cushions in the knee. They tear from a twisting injury in younger people, or from wear in middle age, causing pain, swelling and sometimes locking or catching.",
        "Small tears in a good blood-supply zone can heal or settle with physiotherapy. Tears causing mechanical symptoms are treated arthroscopically — either repairing the tear or trimming the torn portion (partial meniscectomy).",
      ],
      commonSigns: [
        "Knee pain along the joint line, worse with twisting or squatting",
        "Swelling that develops over a day or two after activity",
        "The knee catching, clicking or locking",
        "A feeling of the knee giving way",
        "Difficulty fully straightening the knee",
        "Pain when kneeling or climbing stairs",
      ],
      faqs: [
        {
          question: "Repair or trim?",
          answer:
            "Repair is preferred where the tear can heal, especially in younger patients, and protects the knee long-term. Trimming is used for tears that cannot heal. The decision is often finalised during the arthroscopy.",
        },
        {
          question: "Can a meniscus tear heal on its own?",
          answer:
            "Only the outer third has enough blood supply to heal. Tears there, and small stable tears, may settle with rehab; central tears do not heal.",
        },
        {
          question: "How long is recovery?",
          answer:
            "After a trim, walking within days and sport in 3–4 weeks. After a repair, restricted weight-bearing and bending for about 6 weeks to protect the stitches, then a graded return.",
        },
      ],
    },
    {
      slug: "hip-replacement-surgery",
      title: "Hip Replacement Surgery",
      metaTitle: "Hip Replacement Surgery (Total Hip Arthroplasty)",
      metaDescription:
        "Total hip replacement for arthritis, avascular necrosis or fracture — durable implants, rapid-recovery protocols, physiotherapy and 90-day Care Buddy follow-up.",
      overview: [
        "Hip replacement removes a hip joint damaged by arthritis, avascular necrosis or fracture, and replaces the ball and socket with a durable implant. It is one of the most successful and satisfying operations in medicine.",
        "It is done under spinal or general anaesthesia with a 2–3 day stay. Modern approaches and rapid-recovery protocols get most patients walking the same day. Ayushman Surgicare arranges the imaging, surgeon, hospital, insurance and physiotherapy.",
      ],
      commonSigns: [
        "Groin or thigh pain that worsens with walking and weight-bearing",
        "Stiffness making it hard to put on shoes and socks",
        "A limp, or one leg feeling shorter",
        "Pain disturbing sleep",
        "Reduced walking distance and reliance on a stick",
        "X-rays showing advanced hip arthritis",
      ],
      faqs: [
        {
          question: "How long will the new hip last?",
          answer:
            "Most modern hip replacements last 20–25 years or more. Younger, more active patients may eventually need a revision.",
        },
        {
          question: "What can't I do afterwards?",
          answer:
            "You can return to walking, cycling, swimming, golf and travel. High-impact running and contact sport are generally discouraged to protect the implant.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Walking with support the same or next day, home in 2–3 days, off walking aids by 2–4 weeks, and back to most activities by 6–12 weeks.",
        },
      ],
    },
    {
      slug: "spine-surgery",
      title: "Spine Surgery",
      metaTitle: "Spine Surgery — Microdiscectomy, Decompression & Fusion",
      metaDescription:
        "Minimally invasive spine surgery for slipped disc, spinal stenosis and instability when leg or arm pain has not responded to non-surgical care — MRI-guided, with Care Buddy follow-up.",
      overview: [
        "Spine surgery treats problems such as a slipped (herniated) disc, spinal canal narrowing (stenosis), or an unstable or slipped vertebra, when leg or arm pain, weakness or numbness has not responded to non-surgical care.",
        "Wherever possible it is done with minimally invasive or microscope-assisted techniques — a microdiscectomy for a disc, decompression for stenosis, and fusion or disc replacement for instability. Ayushman Surgicare coordinates the MRI, spine surgeon, hospital and insurance.",
      ],
      commonSigns: [
        "Leg or arm pain that is worse than the back or neck pain",
        "Numbness, pins-and-needles or weakness in a limb",
        "Pain radiating below the knee or elbow in a clear pattern",
        "Symptoms not improving after 6+ weeks of physiotherapy and medication",
        "Difficulty walking distances due to leg heaviness (stenosis)",
        "Loss of bladder or bowel control, or saddle numbness — a surgical emergency",
      ],
      faqs: [
        {
          question: "Is spine surgery risky?",
          answer:
            "Modern, targeted procedures for the right problem have good outcomes and low complication rates. Careful selection — operating only when imaging matches the symptoms and non-surgical care has failed — is what drives success.",
        },
        {
          question: "Will I need a fusion?",
          answer:
            "Most disc and stenosis operations are simple decompressions with no fusion. Fusion is reserved for genuine instability or deformity, and disc replacement is an option in selected cases.",
        },
        {
          question: "How long is recovery?",
          answer:
            "After a microdiscectomy, home in 1–2 days and desk work in 2–3 weeks. Fusion takes longer — 6–12 weeks to the bulk of recovery.",
        },
      ],
    },
    {
      slug: "shoulder-dislocation",
      title: "Shoulder Dislocation",
      metaTitle: "Shoulder Dislocation & Instability Treatment",
      metaDescription:
        "Treatment for a dislocated or unstable shoulder — reduction and rehab for a first episode, arthroscopic Bankart stabilisation for recurrent instability.",
      overview: [
        "A shoulder dislocation is when the ball of the upper arm comes fully out of its socket, usually from a fall or sporting impact. After the first dislocation, some people — especially younger, active ones — go on to dislocate repeatedly.",
        "A first-time dislocation is reduced (put back) and rehabilitated. Recurrent instability is treated with arthroscopic stabilisation (Bankart repair) to re-attach the torn labrum and tighten the capsule.",
      ],
      commonSigns: [
        "The shoulder 'popping out', often with severe pain",
        "A visibly squared-off or deformed shoulder at the time",
        "Repeated dislocations or a feeling the shoulder will slip",
        "Apprehension with the arm raised and rotated outward",
        "Weakness or numbness down the arm after an episode",
        "Avoiding overhead activities or contact sport",
      ],
      faqs: [
        {
          question: "Do I need surgery after one dislocation?",
          answer:
            "Not usually. First dislocations are treated with a sling and physiotherapy. Surgery is offered for recurrent instability, or sometimes early for young athletes in collision sports who have a high re-dislocation risk.",
        },
        {
          question: "How successful is stabilisation surgery?",
          answer:
            "Arthroscopic Bankart repair prevents further dislocations in around 85–90% of patients and allows a return to sport.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A sling for 4–6 weeks, physiotherapy from early on, and a return to contact sport at 4–6 months.",
        },
      ],
    },
    {
      slug: "shoulder-replacement",
      title: "Shoulder Replacement",
      metaTitle: "Shoulder Replacement (Anatomic & Reverse)",
      metaDescription:
        "Anatomic and reverse shoulder replacement for arthritis, irreparable cuff tears and complex fractures — pain relief and restored movement, with structured rehab.",
      overview: [
        "Shoulder replacement resurfaces a shoulder joint worn out by arthritis or damaged by a large rotator cuff tear or complex fracture, replacing it with a metal-and-plastic implant to relieve pain and restore useful movement.",
        "The type — standard (anatomic) or reverse — depends on the state of the rotator cuff. It is done under general or regional anaesthesia with a 1–2 day stay and a structured rehab programme.",
      ],
      commonSigns: [
        "Deep shoulder pain, worse with movement and at night",
        "Grinding or catching with rotation",
        "Progressive loss of reach — overhead, behind the back",
        "Weakness lifting the arm (may indicate a cuff tear)",
        "Little relief from injections and physiotherapy",
        "X-rays showing advanced shoulder arthritis",
      ],
      faqs: [
        {
          question: "Anatomic or reverse replacement?",
          answer:
            "If the rotator cuff is intact, a standard anatomic replacement is used. If the cuff is torn beyond repair, a reverse replacement changes the mechanics so the deltoid muscle lifts the arm. Your surgeon decides from your scans.",
        },
        {
          question: "How much movement will I get back?",
          answer:
            "Pain relief is reliable and usually excellent. Movement improves substantially, though overhead reach may not be fully normal, particularly with a reverse replacement.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A sling for 3–6 weeks, physiotherapy throughout, everyday tasks by 6–8 weeks, and the final result by 6–12 months.",
        },
      ],
    },
    {
      slug: "rotator-cuff-repair",
      title: "Rotator Cuff Repair",
      metaTitle: "Rotator Cuff Repair (Arthroscopic)",
      metaDescription:
        "Arthroscopic rotator cuff repair re-attaching the torn tendon to bone with anchors — for pain, night ache and weakness, with a structured physiotherapy timeline.",
      overview: [
        "The rotator cuff is a group of four tendons that lift and rotate the shoulder. Tears occur from injury or gradual wear, causing pain, weakness and difficulty with overhead activity.",
        "Small or partial tears often improve with physiotherapy and a steroid injection. Larger or full-thickness tears, and tears in active people, are repaired arthroscopically by re-attaching the tendon to the bone with small anchors.",
      ],
      commonSigns: [
        "Pain on lifting the arm, especially between shoulder and head height",
        "Pain at night, particularly lying on that side",
        "Weakness raising or rotating the arm",
        "A dull ache deep in the shoulder",
        "Difficulty with overhead tasks or reaching behind the back",
        "A sudden loss of strength after a fall or lift",
      ],
      faqs: [
        {
          question: "Will the tear get bigger if I wait?",
          answer:
            "Full-thickness tears tend to enlarge over time and the muscle can waste, which makes repair less effective. Timely repair of a symptomatic tear gives the best result.",
        },
        {
          question: "How long until my shoulder is strong again?",
          answer:
            "The tendon takes about 3 months to heal to the bone, with strengthening after that. Most people regain good function by 6 months and full strength by a year.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Day-care surgery, a sling for 4–6 weeks, gentle physiotherapy from the start, and a graded return to activity over months.",
        },
      ],
    },
    {
      slug: "arthroscopy-surgery",
      title: "Arthroscopy Surgery",
      metaTitle: "Arthroscopy — Keyhole Joint Surgery",
      metaDescription:
        "Keyhole joint surgery to diagnose and treat cartilage and ligament tears, loose fragments and impingement in the knee, shoulder, hip, ankle and wrist — mostly day-care.",
      overview: [
        "Arthroscopy is keyhole joint surgery. A pencil-thin camera and fine instruments are passed through two or three small incisions, letting the surgeon diagnose and treat problems inside a joint with minimal disruption.",
        "It is used most often in the knee and shoulder — and also the hip, ankle and wrist — for cartilage and ligament tears, loose fragments, impingement and inflamed lining. Most arthroscopies are day-care with a quick recovery.",
      ],
      commonSigns: [
        "Joint pain, swelling or catching not settling with rest and physiotherapy",
        "A joint that locks or gives way",
        "An MRI showing a treatable tear, loose body or impingement",
        "Mechanical symptoms interfering with sport or work",
        "Persistent inflammation of the joint lining",
        "A need to confirm a diagnosis and treat it in one sitting",
      ],
      faqs: [
        {
          question: "How is arthroscopy different from open surgery?",
          answer:
            "The same problems are treated through keyhole incisions instead of a large cut, so there is less pain, a lower infection risk and a much faster recovery.",
        },
        {
          question: "Is it done under general anaesthesia?",
          answer:
            "Usually, though regional anaesthesia (spinal or a nerve block) is an option for some joints. It is discussed with the anaesthetist beforehand.",
        },
        {
          question: "How long is recovery?",
          answer:
            "It depends on what is done — from a few days for a simple clean-up or trim, to several weeks or months when a ligament or tendon is repaired.",
        },
      ],
    },
    {
      slug: "knee-arthroscopy",
      title: "Knee Arthroscopy",
      metaTitle: "Knee Arthroscopy — Keyhole Knee Surgery",
      metaDescription:
        "Day-care keyhole knee surgery for meniscus tears, loose fragments and cartilage damage — through two small incisions, with a tailored physiotherapy plan.",
      overview: [
        "Knee arthroscopy is keyhole surgery of the knee, used to treat meniscus (cartilage) tears, remove loose fragments, address early ACL problems, and manage cartilage damage — through two small incisions.",
        "It is a day-care procedure. You walk out the same day, often with crutches for a short period, and follow a physiotherapy plan tailored to what was found and treated.",
      ],
      commonSigns: [
        "Knee pain along the joint line with twisting or squatting",
        "The knee catching, clicking or locking",
        "Recurrent swelling after activity",
        "A confirmed meniscus tear or loose body on MRI",
        "The knee giving way",
        "Mechanical symptoms not helped by physiotherapy",
      ],
      faqs: [
        {
          question: "Will arthroscopy help my knee arthritis?",
          answer:
            "For arthritis alone, keyhole 'clean-up' does not give lasting benefit and is not recommended. Arthroscopy is for a specific mechanical problem such as a torn meniscus or a loose fragment.",
        },
        {
          question: "How soon can I drive?",
          answer:
            "Often within a week for the right knee once you can control the pedals safely, sooner for the left knee with an automatic car — but follow your surgeon's advice.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A trim allows walking in days and sport in 3–4 weeks; a repair needs 6 weeks of protection before a graded return.",
        },
      ],
    },
    {
      slug: "shoulder-arthroscopy",
      title: "Shoulder Arthroscopy",
      metaTitle: "Shoulder Arthroscopy — Keyhole Shoulder Surgery",
      metaDescription:
        "Keyhole shoulder surgery for rotator cuff repair, instability, impingement and frozen shoulder — small incisions, nerve-block pain relief, structured rehab.",
      overview: [
        "Shoulder arthroscopy is keyhole surgery of the shoulder, used for rotator cuff repair, stabilisation after recurrent dislocation, removing bone spurs causing impingement, and treating a frozen shoulder that has not responded to other care.",
        "It is done through small incisions under general or regional anaesthesia, usually as day-care or one night. Recovery depends on the specific procedure and follows a set physiotherapy timeline.",
      ],
      commonSigns: [
        "Shoulder pain with overhead reach or at night",
        "A feeling the shoulder will slip out (instability)",
        "Weakness lifting or rotating the arm",
        "Painful clicking or catching",
        "A stiff shoulder not improving with physiotherapy (frozen shoulder)",
        "An MRI showing a cuff tear, labral tear or impingement",
      ],
      faqs: [
        {
          question: "Is a nerve block used?",
          answer:
            "Often, yes. A nerve block numbs the shoulder for many hours after surgery, greatly reducing early pain and the need for strong painkillers.",
        },
        {
          question: "How long will I be in a sling?",
          answer:
            "From about 1 week for a decompression, to 4–6 weeks after a cuff repair or stabilisation, with physiotherapy throughout.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Everyday light use within weeks, with full strength and overhead function taking 4–9 months depending on what was repaired.",
        },
      ],
    },
    {
      slug: "total-knee-replacement",
      title: "Total Knee Replacement",
      metaTitle: "Total Knee Replacement (TKR)",
      metaDescription:
        "Total knee replacement for severe, bone-on-bone arthritis and deformity — resurfacing all compartments, with rapid-recovery protocols and 90-day Care Buddy rehab.",
      overview: [
        "Total knee replacement resurfaces all three compartments of a knee severely worn by arthritis, replacing the ends of the thigh and shin bones — and usually the kneecap surface — with metal and plastic components.",
        "It is the definitive treatment for advanced knee arthritis with severe pain and deformity. Rapid-recovery protocols and dedicated physiotherapy get most patients walking the same day, with a 90-day Care Buddy guiding rehabilitation.",
      ],
      commonSigns: [
        "Constant knee pain, including at rest and at night",
        "Severe stiffness and a marked limp",
        "A bowed (varus) or knock-kneed (valgus) deformity",
        "Walking distance reduced to a few hundred metres",
        "No benefit from painkillers, injections, braces or physiotherapy",
        "X-rays showing severe, bone-on-bone arthritis across the joint",
      ],
      faqs: [
        {
          question: "How is it different from a partial replacement?",
          answer:
            "A partial replacement resurfaces only the one worn compartment and keeps your ligaments; a total replacement addresses the whole joint and is used when arthritis is widespread or the knee is deformed.",
        },
        {
          question: "Will my knee feel normal?",
          answer:
            "Pain relief is excellent for the great majority. The knee may feel slightly different — some tightness kneeling, occasional clicking — but function is dramatically improved.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Walking with a frame or sticks on day one, home in 2–3 days, off walking aids by 6 weeks, driving by 6–8 weeks, and continued gains up to a year.",
        },
      ],
    },
  ],
};

const ophthalmology: Specialty = {
  slug: "ophthalmology",
  label: "Ophthalmology",
  blurb:
    "Vision correction and eye surgery — LASIK, SMILE and ICL, cataract (phaco), and retinal, glaucoma and squint procedures — mostly day-care, with a 90-day Care Buddy.",
  testimonials: [
    {
      quote:
        "Twenty years in glasses, and after the SMILE procedure I woke up the next morning able to read my phone on the pillow. It still feels like magic.",
      name: "Nikhil R.",
      procedure: "SMILE Laser Vision Correction",
      location: "Hyderabad",
    },
    {
      quote:
        "I'd stopped driving at night because of the glare. A week after the cataract surgery I was back behind the wheel, and the colours are extraordinary.",
      name: "Padma L.",
      procedure: "Cataract Surgery (Phaco)",
      location: "Uppal",
    },
    {
      quote:
        "The curtain came across my vision on a Saturday evening. They operated on the Sunday and saved most of the sight in that eye.",
      name: "Ganesh V.",
      procedure: "Retinal Detachment Surgery",
      location: "Nacharam",
    },
    {
      quote:
        "My daughter's eye had turned in since she was two. The squint surgery straightened it, and with the follow-up exercises her vision in that eye caught up.",
      name: "Suma K.",
      procedure: "Squint Surgery",
      location: "Kukatpally",
    },
    {
      quote:
        "The glaucoma was picked up on a routine check with no symptoms. Five years on the drops and my vision hasn't changed — which is exactly the point.",
      name: "Rao B.",
      procedure: "Glaucoma Management",
      location: "Secunderabad",
    },
    {
      quote:
        "My prescription was too high for LASIK, so they did the ICL. It's reversible, my eyes don't dry out, and I see sharper than I ever did in glasses.",
      name: "Ayesha M.",
      procedure: "ICL Surgery",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "lasik-eye-surgery",
      title: "LASIK Eye Surgery",
      metaTitle: "LASIK Eye Surgery — Laser Vision Correction",
      metaDescription:
        "LASIK laser vision correction for short-sight, long-sight and astigmatism — a few minutes per eye, vision improving within a day, with a full pre-op eye workup.",
      overview: [
        "LASIK is laser vision correction that reshapes the cornea to reduce or remove your dependence on glasses and contact lenses for short-sight, long-sight and astigmatism.",
        "A thin corneal flap is created (by blade or femtosecond laser), an excimer laser reshapes the tissue beneath, and the flap is replaced. It takes a few minutes per eye and vision improves within a day. Ayushman Surgicare arranges the detailed eye workup, surgeon and package pricing.",
      ],
      commonSigns: [
        "A stable spectacle prescription for at least a year",
        "Age 18 or older",
        "Wanting freedom from glasses or contacts",
        "Difficulty with contact lenses due to dryness or infection",
        "A prescription within the treatable range on assessment",
        "Healthy corneas of adequate thickness on scans",
      ],
      faqs: [
        {
          question: "Does LASIK hurt?",
          answer:
            "No. Numbing drops are used and you feel only pressure. There may be mild grittiness and watering for a few hours afterwards.",
        },
        {
          question: "Is the result permanent?",
          answer:
            "The corneal reshaping is permanent. Your eyes can still change later in life — reading glasses in your 40s are still likely, and a small number of people need an enhancement.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most people see well enough to work the next day, using lubricating drops for a few weeks and avoiding rubbing, swimming and dusty environments briefly.",
        },
      ],
    },
    {
      slug: "cataract-surgery",
      title: "Cataract Surgery",
      metaTitle: "Cataract Surgery (Phacoemulsification + IOL)",
      metaDescription:
        "Day-care cataract surgery — the cloudy lens removed by phaco through a 2 mm incision and replaced with a clear lens implant, with standard and premium IOL options.",
      overview: [
        "A cataract is a clouding of the eye's natural lens that develops with age, causing blurring, glare and faded colours. Surgery is the only effective treatment and one of the most common and successful operations performed.",
        "The cloudy lens is removed by phacoemulsification through a tiny self-sealing incision and replaced with a clear artificial lens (IOL). It is a day-care procedure taking 15–20 minutes per eye, done under local anaesthesia.",
      ],
      commonSigns: [
        "Blurred or misty vision not corrected by new glasses",
        "Glare or halos around lights, especially at night",
        "Colours looking dull or yellowed",
        "Needing brighter light to read",
        "Frequent changes to your spectacle prescription",
        "Double vision in one eye",
      ],
      faqs: [
        {
          question: "Which lens should I choose?",
          answer:
            "A standard monofocal lens gives excellent distance vision with glasses for reading. Premium lenses (multifocal, EDOF or toric) reduce glasses dependence and correct astigmatism, at extra cost. Your surgeon will advise what suits your eyes and lifestyle.",
        },
        {
          question: "Can both eyes be done together?",
          answer:
            "Usually they are done a week or two apart so the first eye settles and the lens power for the second can be fine-tuned.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Vision clears over a few days, with drops for about a month and avoiding rubbing, heavy lifting and swimming for 2–4 weeks.",
        },
      ],
    },
    {
      slug: "retinal-detachment",
      title: "Retinal Detachment",
      metaTitle: "Retinal Detachment Surgery (Emergency)",
      metaDescription:
        "Emergency surgery for retinal detachment — pneumatic retinopexy, scleral buckle or vitrectomy within days to reattach the retina and save vision.",
      overview: [
        "Retinal detachment is when the light-sensitive layer at the back of the eye peels away from its blood supply. It is an emergency — the longer it is left, the more permanent the vision loss.",
        "Treatment is surgery within days: laser or freezing plus a gas bubble (pneumatic retinopexy), a scleral buckle, or vitrectomy, chosen by the type and extent of the detachment. Ayushman Surgicare fast-tracks the retinal specialist and theatre.",
      ],
      commonSigns: [
        "A sudden shower of new floaters",
        "Flashes of light in the peripheral vision",
        "A dark curtain or shadow spreading across the vision",
        "A sudden drop or distortion in central or side vision",
        "The sensation of a veil over part of the eye",
        "These symptoms in a very short-sighted eye or one that recently had cataract surgery",
      ],
      faqs: [
        {
          question: "How urgent is it?",
          answer:
            "Very. A detachment that has not yet reached the central vision should be operated on within a day or two to save it. Seek emergency eye care for a curtain, sudden floaters or flashes.",
        },
        {
          question: "Will my vision come back to normal?",
          answer:
            "If the centre of the retina has not detached, vision often recovers well. If the centre was involved, some blur or distortion may remain despite a successful reattachment.",
        },
        {
          question: "How long is recovery?",
          answer:
            "If a gas bubble is used you may need to hold a specific head position for several days. Vision improves over weeks to months, and you cannot fly until the gas has absorbed.",
        },
      ],
    },
    {
      slug: "glaucoma-treatment",
      title: "Glaucoma Treatment",
      metaTitle: "Glaucoma Treatment (Drops, Laser & Surgery)",
      metaDescription:
        "Glaucoma management to lower eye pressure and protect vision — drops, SLT laser and surgery (trabeculectomy / MIGS) — with regular optic-nerve and field monitoring.",
      overview: [
        "Glaucoma is a group of conditions that damage the optic nerve, usually linked to raised eye pressure, and slowly erode peripheral vision. It has no early symptoms, which is why regular checks matter.",
        "Treatment aims to lower eye pressure and protect the remaining vision — with daily drops, laser (SLT), or surgery (trabeculectomy or a drainage device / MIGS) when drops are not enough. Damage already done cannot be reversed, so the goal is to halt progression.",
      ],
      commonSigns: [
        "Often none in the early stages",
        "Gradual loss of side (peripheral) vision",
        "Missing steps or bumping into objects on one side",
        "Difficulty adjusting to dim light",
        "A family history of glaucoma",
        "A sudden painful red eye with haloes and nausea — acute glaucoma, an emergency",
      ],
      faqs: [
        {
          question: "If I can see fine, do I really need treatment?",
          answer:
            "Yes. Glaucoma damage is silent and irreversible; by the time you notice a gap in your vision, significant nerve loss has occurred. Treatment protects what you still have.",
        },
        {
          question: "Will I go blind?",
          answer:
            "With early diagnosis and consistent treatment, the large majority of people keep useful vision for life. The risk rises with late diagnosis or missed treatment.",
        },
        {
          question: "Is laser or surgery better than drops?",
          answer:
            "Drops are usually first-line. Laser is a good early alternative or add-on. Surgery is reserved for pressure that stays too high or vision that keeps worsening despite maximum drops.",
        },
      ],
    },
    {
      slug: "squint-surgery",
      title: "Squint Surgery",
      metaTitle: "Squint (Strabismus) Surgery",
      metaDescription:
        "Day-care squint surgery adjusting the eye muscles to restore alignment — supporting vision development in children and relieving double vision in adults.",
      overview: [
        "A squint (strabismus) is when the eyes are not aligned — one may turn in, out, up or down. In children it can affect the development of vision (lazy eye); in adults it can cause double vision and affect confidence.",
        "Surgery adjusts the tension of the muscles that move the eye to bring them into alignment. It is a day-care procedure under general anaesthesia (or local in adults), often combined with glasses and vision therapy.",
      ],
      commonSigns: [
        "One eye visibly turning in, out, up or down",
        "Double vision (more common in adults)",
        "A child screwing up or closing one eye in bright light",
        "A head tilt or face turn to keep images single",
        "Eye strain or headaches with near work",
        "A previously treated squint that has drifted again",
      ],
      faqs: [
        {
          question: "Is squint surgery only cosmetic?",
          answer:
            "No. In children it supports the development of binocular vision and depth perception. In adults it relieves double vision and eye strain, as well as restoring alignment.",
        },
        {
          question: "Will one operation be enough?",
          answer:
            "Often, yes, but squints can be complex and some people need a second adjustment. Your surgeon will estimate the likelihood for your type of squint.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A red eye for 1–2 weeks, drops for a few weeks, back to school or work in a few days, and swimming avoided for 2–4 weeks.",
        },
      ],
    },
    {
      slug: "diabetic-retinopathy",
      title: "Diabetic Retinopathy",
      metaTitle: "Diabetic Retinopathy Treatment (Laser & Injections)",
      metaDescription:
        "Screening and treatment for diabetic retinopathy — risk-factor control for early disease, laser, intravitreal injections and vitrectomy for advanced disease.",
      overview: [
        "Diabetic retinopathy is damage to the retina's blood vessels from long-standing high blood sugar. Early on there are no symptoms; advanced disease causes bleeding, swelling of the central retina and, if untreated, severe vision loss.",
        "Treatment depends on the stage — tight control of sugar, blood pressure and cholesterol for early disease, and laser, intravitreal injections or vitrectomy for advanced disease. Regular screening catches it before vision is affected.",
      ],
      commonSigns: [
        "Often no symptoms in the early, treatable stages",
        "Blurred or fluctuating vision",
        "Dark spots or floaters in the vision",
        "Difficulty seeing at night",
        "Areas of missing or shadowed vision",
        "A sudden large floater or vision loss — a bleed, needs urgent care",
      ],
      faqs: [
        {
          question: "How often should I be screened?",
          answer:
            "At least once a year if you have diabetes, and more often if changes are found. Screening is quick and painless and is the single best way to protect your sight.",
        },
        {
          question: "Can the damage be reversed?",
          answer:
            "Swelling of the central retina often improves with injections, and bleeding can clear. Scarring and lost nerve tissue cannot be reversed, so early treatment matters.",
        },
        {
          question: "Will I need injections forever?",
          answer:
            "Injections are given in courses and tapered as the retina stabilises. Many people need fewer over time, especially with good diabetes control.",
        },
      ],
    },
    {
      slug: "vitrectomy",
      title: "Vitrectomy",
      metaTitle: "Vitrectomy — Keyhole Retinal Surgery",
      metaDescription:
        "Keyhole surgery inside the eye for vitreous haemorrhage, macular hole, epiretinal membrane, complex retinal detachment and advanced diabetic disease.",
      overview: [
        "Vitrectomy is keyhole surgery inside the eye. The vitreous gel is removed and replaced with fluid, gas or oil, giving the surgeon access to treat the retina.",
        "It is used for a non-clearing bleed inside the eye, advanced diabetic retinopathy, a macular hole or pucker, a retinal detachment, or a severe infection. It is done through three tiny ports under local or general anaesthesia.",
      ],
      commonSigns: [
        "A dense vitreous haemorrhage that has not cleared",
        "Advanced diabetic changes with traction on the retina",
        "A macular hole causing a central blind spot",
        "An epiretinal membrane distorting straight lines",
        "A complex retinal detachment",
        "Floaters severe enough to obscure vision (in selected cases)",
      ],
      faqs: [
        {
          question: "Will there be a gas or oil bubble afterwards?",
          answer:
            "Often. A gas bubble absorbs over 2–6 weeks; silicone oil is removed at a later, smaller operation. If a bubble is used you may need to position your head a certain way for several days.",
        },
        {
          question: "Can I fly after vitrectomy?",
          answer:
            "Not while a gas bubble is present, as the change in pressure can cause a dangerous rise in eye pressure. Your surgeon will tell you when it is safe.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Vision recovers over weeks to months depending on the underlying condition. You will use drops and attend several follow-up checks.",
        },
      ],
    },
    {
      slug: "prk-lasik",
      title: "PRK Lasik",
      metaTitle: "PRK — Flapless Surface Laser Vision Correction",
      metaDescription:
        "PRK surface laser vision correction with no corneal flap — preferred for thin corneas, contact-sport athletes and dry eyes, with a slower but equivalent result.",
      overview: [
        "PRK (photorefractive keratectomy) is a surface laser vision correction that reshapes the cornea without creating a flap. The outer skin of the cornea is gently removed and regrows over a few days.",
        "It is preferred for thinner corneas, certain corneal shapes, and people in contact sports or jobs where a corneal flap would be a risk. The visual result matches LASIK; the recovery is a little slower.",
      ],
      commonSigns: [
        "A stable prescription for at least a year, age 18+",
        "Corneas too thin or irregular for flap-based LASIK",
        "A job or sport with a risk of eye trauma",
        "Dry eyes that make LASIK less suitable",
        "Wanting no corneal flap for peace of mind",
        "A treatable prescription confirmed on scans",
      ],
      faqs: [
        {
          question: "Why choose PRK over LASIK?",
          answer:
            "PRK has no flap, so nothing to dislodge in an impact, and it removes less tissue — useful for thin corneas. LASIK recovers faster and more comfortably. Your surgeon recommends based on your corneal scans.",
        },
        {
          question: "Is PRK more uncomfortable?",
          answer:
            "Yes, for the first 3–4 days while the surface heals, managed with a bandage contact lens and drops. Vision is hazy in the first week and sharpens over 2–4 weeks.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Off work for about 4–7 days, night driving and sport after 2–4 weeks, with the final result at 1–3 months.",
        },
      ],
    },
    {
      slug: "smile-lasik-surgery",
      title: "SMILE Lasik Surgery",
      metaTitle: "SMILE — Flapless Small-Incision Vision Correction",
      metaDescription:
        "SMILE flapless laser vision correction for short-sight and astigmatism — a keyhole incision that keeps the cornea stronger, with less dry eye and quick comfort recovery.",
      overview: [
        "SMILE (Small Incision Lenticule Extraction) is a flapless laser vision correction for short-sight and astigmatism. A femtosecond laser shapes a thin disc of tissue (lenticule) inside the cornea, which is removed through a 2–4 mm incision.",
        "Because there is no flap and a much smaller incision, the cornea keeps more of its strength and dry eye is less common than with LASIK. It is a quick, minimally invasive procedure.",
      ],
      commonSigns: [
        "Short-sight, with or without astigmatism, in the treatable range",
        "A stable prescription for at least a year, age 18+",
        "A tendency to dry eyes",
        "An active lifestyle or contact sport",
        "Wanting a flapless, minimally invasive option",
        "Healthy corneas of adequate thickness on scans",
      ],
      faqs: [
        {
          question: "How is SMILE different from LASIK?",
          answer:
            "No corneal flap and a keyhole-sized incision instead of a large one, so the cornea stays stronger and dry eye is less likely. LASIK still treats a slightly wider range of prescriptions, including long-sight.",
        },
        {
          question: "Is recovery faster than LASIK?",
          answer:
            "Comfort recovery is very quick — most people are comfortable within hours. Vision is usually good the next day and continues to sharpen over the first week.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Back to work in 1–2 days, drops for a few weeks, and avoiding eye rubbing, swimming and dust briefly.",
        },
      ],
    },
    {
      slug: "femto-lasik-surgery",
      title: "FEMTO Lasik Surgery",
      metaTitle: "Femto-LASIK — Bladeless All-Laser LASIK",
      metaDescription:
        "Bladeless femto-LASIK creating the corneal flap with a femtosecond laser for a precise, uniform flap — correcting short-sight, long-sight and astigmatism.",
      overview: [
        "Femto-LASIK (bladeless LASIK) uses a femtosecond laser instead of a blade to create the corneal flap, before an excimer laser reshapes the cornea underneath. It is the most widely used form of modern LASIK.",
        "The all-laser approach gives a very precise, thin, uniform flap, which improves safety and the predictability of the result compared with older blade-based LASIK.",
      ],
      commonSigns: [
        "Short-sight, long-sight or astigmatism in the treatable range",
        "A stable prescription for at least a year, age 18+",
        "Wanting the established, all-laser LASIK technique",
        "Healthy corneas of adequate thickness",
        "Difficulty tolerating contact lenses",
        "A lifestyle where glasses are inconvenient",
      ],
      faqs: [
        {
          question: "Is bladeless LASIK safer?",
          answer:
            "The femtosecond flap is more precise and consistent than a blade-cut flap, which reduces certain flap-related risks. Overall LASIK is a very safe procedure in either form.",
        },
        {
          question: "Can it treat long-sight too?",
          answer:
            "Yes. Femto-LASIK can correct short-sight, long-sight and astigmatism within defined limits, which SMILE currently cannot.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most people see well enough to work the next day, using lubricating drops for a few weeks and protecting the eyes from rubbing and dust.",
        },
      ],
    },
    {
      slug: "icl-surgery",
      title: "ICL Surgery",
      metaTitle: "ICL Surgery — Implantable Collamer Lens",
      metaDescription:
        "ICL surgery placing a soft, reversible lens inside the eye to correct high short-sight, long-sight and astigmatism when laser correction is not suitable.",
      overview: [
        "ICL (Implantable Collamer Lens) surgery places a soft, biocompatible lens inside the eye, behind the iris and in front of the natural lens, to correct high degrees of short-sight, long-sight and astigmatism.",
        "It is the option of choice when the prescription is too high, or the cornea too thin, for laser vision correction. It does not remove any corneal tissue and is reversible — the lens can be exchanged or removed.",
      ],
      commonSigns: [
        "A high prescription outside the range of LASIK or SMILE",
        "Corneas too thin or irregular for laser correction",
        "Dry eyes that make laser surgery unsuitable",
        "Wanting a reversible vision-correction option",
        "Age 21–45 with a stable prescription",
        "A healthy eye with adequate internal space on scans",
      ],
      faqs: [
        {
          question: "Is it safe to have a lens inside the eye?",
          answer:
            "Modern ICLs have an excellent long-term safety record. Your surgeon measures the eye carefully to size the lens correctly and checks the internal anatomy is suitable.",
        },
        {
          question: "Can it be removed later?",
          answer:
            "Yes. Unlike laser surgery, ICL is fully reversible — the lens can be removed or exchanged, for example if your prescription changes or when you later develop a cataract.",
        },
        {
          question: "How long is recovery?",
          answer:
            "A quick day-care procedure, vision improving within a day, drops for a few weeks, and follow-up checks of the eye pressure and lens position.",
        },
      ],
    },
    {
      slug: "contoura-vision",
      title: "Contoura Vision",
      metaTitle: "Contoura Vision — Topography-Guided LASIK",
      metaDescription:
        "Contoura Vision topography-guided LASIK that maps and corrects the cornea's own irregularities for sharper vision and less night-time glare.",
      overview: [
        "Contoura Vision is a topography-guided LASIK that maps thousands of points on the surface of your cornea and treats its unique irregularities, not just your spectacle number.",
        "By smoothing the cornea's natural imperfections, it aims for sharper, higher-quality vision — many patients report seeing better than they did in glasses, with less glare at night.",
      ],
      commonSigns: [
        "Short-sight or astigmatism suitable for LASIK",
        "Wanting the best possible quality of vision, not just glasses-free",
        "Night-vision problems, glare or halos with your current glasses",
        "Mild corneal irregularity on topography",
        "A stable prescription for at least a year, age 18+",
        "Healthy corneas of adequate thickness",
      ],
      faqs: [
        {
          question: "How is Contoura different from standard LASIK?",
          answer:
            "Standard LASIK corrects your prescription. Contoura also corrects the cornea's own microscopic irregularities using a detailed surface map, which can give crisper vision and fewer night-time glare symptoms.",
        },
        {
          question: "Will I definitely see better than with glasses?",
          answer:
            "Many patients do, but it cannot be guaranteed for everyone. Your surgeon will give you a realistic expectation from your corneal maps.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Same as flap-based LASIK — back to work the next day, drops for a few weeks, and vision sharpening over the first month.",
        },
      ],
    },
    {
      slug: "phaco-surgery",
      title: "Phaco Surgery",
      metaTitle: "Phaco Surgery — Phacoemulsification Cataract Removal",
      metaDescription:
        "Phacoemulsification cataract surgery using ultrasound to remove the cloudy lens through a 2 mm stitchless incision, with a foldable lens implant.",
      overview: [
        "Phacoemulsification ('phaco') is the standard technique for cataract removal. Ultrasound energy breaks up the cloudy lens so it can be gently suctioned out through an incision of about 2 mm, and a foldable artificial lens is inserted.",
        "The small, self-sealing wound usually needs no stitches, and the eye recovers quickly. It is a day-care procedure under local anaesthesia, taking 15–20 minutes.",
      ],
      commonSigns: [
        "A diagnosed cataract affecting daily activities",
        "Blurred vision, glare or halos not fixed by new glasses",
        "Difficulty driving, reading or watching television",
        "Colours appearing washed out",
        "A cataract picked up on a routine eye test that is progressing",
        "Wanting the standard, minimally invasive cataract technique",
      ],
      faqs: [
        {
          question: "Is phaco the same as laser cataract surgery?",
          answer:
            "Phaco uses ultrasound to remove the lens. Femtosecond laser-assisted cataract surgery adds a laser for some steps; both give excellent results and your surgeon will discuss whether the laser adds value in your case.",
        },
        {
          question: "Will I still need glasses afterwards?",
          answer:
            "With a standard lens, usually for reading. Premium lenses can reduce or remove the need for glasses at extra cost.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Vision clears over a few days, drops for about a month, and normal activities within days while avoiding rubbing, dust and swimming for 2–4 weeks.",
        },
      ],
    },
  ],
};

const fertility: Specialty = {
  slug: "fertility",
  label: "Fertility",
  blurb:
    "Assisted-reproduction care — IVF, IUI, evaluation of female and male infertility, and egg freezing — with a structured plan, coordinated lab and clinic, and a Care Buddy.",
  testimonials: [
    {
      quote:
        "Three years, two miscarriages, and a lot of dead ends. The team actually sat down and explained why, made a proper plan, and our daughter is now eight months old.",
      name: "Anusha & Kiran",
      procedure: "IVF with ICSI",
      location: "Hyderabad",
    },
    {
      quote:
        "We didn't want to jump straight to IVF. Two rounds of IUI and it worked — and the cost and stress were a fraction of what we'd feared.",
      name: "Sowmya R.",
      procedure: "IUI Treatment",
      location: "Uppal",
    },
    {
      quote:
        "My semen analysis was the problem, which was hard to hear. Treating the varicocele and three months of changes turned the numbers around completely.",
      name: "A patient, 34",
      procedure: "Male Infertility Treatment",
      location: "Kukatpally",
    },
    {
      quote:
        "I was 31, single, and not ready — but I didn't want to leave it too late either. Freezing my eggs took the pressure off completely.",
      name: "Meghana T.",
      procedure: "Egg Freezing",
      location: "Secunderabad",
    },
    {
      quote:
        "Before my chemotherapy the oncologist referred me for fertility preservation. It was fast-tracked in a week, and knowing my eggs are stored made the treatment easier to face.",
      name: "Divya S.",
      procedure: "Fertility Preservation (Egg Freezing)",
      location: "Nacharam",
    },
    {
      quote:
        "The PCOS meant I wasn't ovulating. A few months of the right tablets and monitoring, and we conceived naturally.",
      name: "Harika V.",
      procedure: "Female Infertility (Ovulation Induction)",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "ivf-treatment",
      title: "IVF Treatment",
      metaTitle: "IVF Treatment (In Vitro Fertilisation)",
      metaDescription:
        "IVF treatment — ovarian stimulation, egg collection, laboratory fertilisation (with ICSI) and embryo transfer — with coordinated specialist, lab and medication scheduling.",
      overview: [
        "In vitro fertilisation (IVF) is an assisted-reproduction treatment where eggs are collected from the ovaries, fertilised with sperm in the laboratory, and one resulting embryo is transferred to the uterus.",
        "A cycle takes about 4–6 weeks: ovarian stimulation with daily injections, a short egg-collection procedure under sedation, laboratory fertilisation (often with ICSI), and embryo transfer, followed by a pregnancy test two weeks later. Ayushman Surgicare coordinates the specialist, the lab, medications and the schedule.",
      ],
      commonSigns: [
        "Trying to conceive for over a year (or 6 months if over 35) without success",
        "Blocked or damaged fallopian tubes",
        "A significantly low sperm count or motility",
        "Endometriosis, PCOS or ovulation problems not helped by simpler treatment",
        "Unexplained infertility after full investigation",
        "Wanting to use donor eggs or sperm, or genetic testing of embryos",
      ],
      faqs: [
        {
          question: "What are the chances of success?",
          answer:
            "Success depends heavily on age and the cause, and is best discussed against your own test results. Live-birth rates per transfer are highest under 35 and decline with age. Your specialist will give you realistic figures.",
        },
        {
          question: "How many embryos are transferred?",
          answer:
            "Usually one, to avoid the risks of a twin pregnancy. Any extra good-quality embryos are frozen for future transfers.",
        },
        {
          question: "Is IVF painful?",
          answer:
            "The injections are small and self-administered. Egg collection is done under sedation. Some bloating and cramping around collection is common and settles quickly.",
        },
      ],
    },
    {
      slug: "iui-treatment",
      title: "IUI Treatment",
      metaTitle: "IUI Treatment (Intrauterine Insemination)",
      metaDescription:
        "Intrauterine insemination — prepared sperm placed in the uterus around ovulation — a simpler, lower-cost first step for mild male-factor, ovulation and unexplained infertility.",
      overview: [
        "Intrauterine insemination (IUI) places prepared, concentrated sperm directly into the uterus around the time of ovulation, giving the sperm a head start. It is simpler and less expensive than IVF.",
        "The cycle involves tracking ovulation (sometimes with mild stimulation tablets), a quick, painless insemination in the clinic, and a pregnancy test two weeks later. It suits mild male-factor problems, ovulation issues, unexplained infertility and donor-sperm treatment.",
      ],
      commonSigns: [
        "A mild reduction in sperm count or motility",
        "Ovulation problems such as PCOS, once other steps have been tried",
        "Unexplained infertility with open tubes and near-normal semen",
        "Difficulty with intercourse or ejaculation",
        "Using donor sperm",
        "Wanting to try a lower-cost, less invasive option first",
      ],
      faqs: [
        {
          question: "How does IUI compare with IVF?",
          answer:
            "IUI is simpler, cheaper and less invasive, with a lower success rate per cycle. It is a sensible first step when tubes are open and the sperm is reasonable; couples usually try 3–4 cycles before moving to IVF.",
        },
        {
          question: "Is it uncomfortable?",
          answer:
            "The insemination feels like a smear test — a speculum and a fine soft tube. It takes a couple of minutes and you rest briefly afterwards.",
        },
        {
          question: "When can I take a test?",
          answer:
            "Two weeks after the insemination. Testing earlier can give a misleading result.",
        },
      ],
    },
    {
      slug: "female-infertility",
      title: "Female Infertility",
      metaTitle: "Female Infertility — Evaluation & Treatment",
      metaDescription:
        "Structured evaluation of female infertility — ovulation and ovarian-reserve tests, ultrasound and tubal assessment — with targeted treatment from ovulation induction to IVF.",
      overview: [
        "Female infertility can stem from ovulation problems, blocked or damaged fallopian tubes, endometriosis, fibroids, or an age-related decline in egg number and quality. A structured assessment identifies the cause.",
        "The workup includes blood tests for ovulation and ovarian reserve, an ultrasound, and a tubal test (HSG or laparoscopy). Treatment is then targeted — ovulation medication, surgery for tubes, fibroids or endometriosis, or assisted reproduction (IUI/IVF).",
      ],
      commonSigns: [
        "Not conceiving after 12 months of trying (or 6 months if over 35)",
        "Irregular, very light or absent periods",
        "Very painful periods or deep pain during intercourse",
        "A history of pelvic infection, surgery or ectopic pregnancy",
        "Known PCOS, endometriosis or thyroid disease",
        "Recurrent miscarriage",
      ],
      faqs: [
        {
          question: "What tests will I need?",
          answer:
            "Typically day-2/3 hormones and AMH, a mid-luteal progesterone, a pelvic ultrasound and a test of the fallopian tubes. Your partner has a semen analysis at the same time.",
        },
        {
          question: "Does age really matter that much?",
          answer:
            "Yes. Both egg number and egg quality fall with age, most steeply after the mid-30s, which is why earlier assessment gives more options.",
        },
        {
          question: "Will I definitely need IVF?",
          answer:
            "No. Many women conceive with ovulation tablets, a minor procedure or IUI. IVF is used when simpler treatments are unlikely to work or have not succeeded.",
        },
      ],
    },
    {
      slug: "male-infertility",
      title: "Male Infertility",
      metaTitle: "Male Infertility — Evaluation & Treatment",
      metaDescription:
        "Assessment and treatment of male infertility — semen analysis, hormone profile and ultrasound — from lifestyle and varicocele treatment to surgical sperm retrieval for ICSI.",
      overview: [
        "Male factors contribute to about half of all fertility problems — a low sperm count, poor movement (motility), abnormal shape, or a blockage. Many causes are treatable.",
        "Assessment starts with two semen analyses, a hormone profile, an examination and sometimes a scrotal ultrasound. Treatment ranges from lifestyle changes and treating a varicocele, to hormone therapy, to retrieving sperm surgically for use in IVF/ICSI.",
      ],
      commonSigns: [
        "A couple not conceiving after 12 months of regular unprotected sex",
        "A previous abnormal semen analysis",
        "A varicocele (enlarged scrotal veins)",
        "Difficulty with erections or ejaculation",
        "A history of undescended testis, mumps, injury or chemotherapy",
        "Reduced facial or body hair, or small testes",
      ],
      faqs: [
        {
          question: "Can a low sperm count be improved?",
          answer:
            "Sometimes markedly — by treating a varicocele, correcting a hormone imbalance, stopping smoking, losing weight, avoiding heat and certain medications, and allowing 3 months for new sperm to mature.",
        },
        {
          question: "What if there is no sperm in the sample?",
          answer:
            "Sperm can often still be found and retrieved directly from the testis (TESA / micro-TESE) for use with ICSI, even when none appear in the ejaculate.",
        },
        {
          question: "Do I need to see a specialist separately?",
          answer:
            "Fertility is assessed as a couple. Your evaluation runs alongside your partner's so the plan is made together.",
        },
      ],
    },
    {
      slug: "egg-freezing",
      title: "Egg Freezing",
      metaTitle: "Egg Freezing (Oocyte Cryopreservation)",
      metaDescription:
        "Egg freezing to preserve fertility — a two-week stimulation cycle and short egg-collection procedure, with vitrification and long-term storage.",
      overview: [
        "Egg freezing (oocyte cryopreservation) collects and freezes eggs while they are younger and healthier, to be used later. It gives you the option of trying for a pregnancy with your own eggs at a time that suits you.",
        "The process mirrors the first half of an IVF cycle — about two weeks of daily injections followed by a short egg-collection procedure under sedation. The eggs are frozen by vitrification and stored until you are ready.",
      ],
      commonSigns: [
        "Wanting to preserve fertility before an age-related decline in egg quality",
        "Not ready to try for a pregnancy now, for personal or career reasons",
        "Before treatment that can harm the ovaries (chemotherapy, radiotherapy, certain surgery)",
        "A family history of early menopause",
        "A low ovarian reserve found on testing",
        "Endometriosis or ovarian surgery that may reduce egg numbers",
      ],
      faqs: [
        {
          question: "What age is best for egg freezing?",
          answer:
            "The earlier the better for egg quality — ideally in your late 20s to early 30s. It can still be worthwhile later, but more eggs are needed and success rates are lower.",
        },
        {
          question: "How many eggs do I need?",
          answer:
            "It depends on your age, but broadly 15–20 mature eggs gives a reasonable chance of at least one live birth later. This may need more than one collection cycle.",
        },
        {
          question: "Is there a guarantee it will work?",
          answer:
            "No. Frozen eggs improve your options but do not guarantee a future pregnancy. Your specialist will explain age-based success estimates before you start.",
        },
      ],
    },
  ],
};

const weightLoss: Specialty = {
  slug: "weight-loss",
  label: "Weight Loss",
  blurb:
    "Medically supervised weight-loss treatment — keyhole bariatric surgery and the non-surgical intragastric balloon — with a dietitian, physician and a 90-day Care Buddy.",
  testimonials: [
    {
      quote:
        "I'd been on the diabetes medication for eight years. Four months after the sleeve, my sugars were normal and my doctor took me off two of the three tablets.",
      name: "Sudhakar R.",
      procedure: "Sleeve Gastrectomy",
      location: "Hyderabad",
    },
    {
      quote:
        "The surgeon was honest that it wasn't a shortcut. The dietitian and Care Buddy checked in every week for the first three months, and that's what made it work.",
      name: "Lakshmi P.",
      procedure: "Gastric Bypass",
      location: "Uppal",
    },
    {
      quote:
        "I needed to lose weight before my knee replacement and couldn't do it alone. The balloon plus the diet programme got me there in five months.",
      name: "Venkatesh G.",
      procedure: "Intragastric Balloon",
      location: "Nacharam",
    },
    {
      quote:
        "Forty kilos down in a year, and the sleep-apnoea machine is in the cupboard now. I hadn't slept properly in a decade.",
      name: "Anwar S.",
      procedure: "Sleeve Gastrectomy",
      location: "Kukatpally",
    },
    {
      quote:
        "What I didn't expect was how much the joint pain would improve. I walk 5km now without thinking about it.",
      name: "Padmavati D.",
      procedure: "Gastric Bypass",
      location: "Secunderabad",
    },
    {
      quote:
        "They didn't rush me into surgery. The balloon was the right first step, and it gave me the confidence that change was actually possible.",
      name: "Kiran M.",
      procedure: "Intragastric Balloon",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "bariatric-surgery",
      title: "Bariatric Surgery",
      metaTitle: "Bariatric Surgery (Sleeve Gastrectomy & Gastric Bypass)",
      metaDescription:
        "Keyhole bariatric surgery for severe obesity — sleeve gastrectomy and gastric bypass — with major, durable improvement in diabetes, blood pressure and sleep apnoea.",
      overview: [
        "Bariatric (weight-loss) surgery helps people with severe obesity lose a large amount of weight and improve or resolve conditions such as type 2 diabetes, high blood pressure, sleep apnoea and joint pain. It works by reducing stomach size and changing gut hormones that control hunger and fullness.",
        "The common procedures — sleeve gastrectomy and gastric bypass — are done laparoscopically (keyhole) with a 2–3 day stay. It is not a quick fix: results depend on a lifelong change in eating, activity and follow-up, which your Care Buddy and dietitian support.",
      ],
      commonSigns: [
        "A BMI of 37.5 or above, or 32.5+ with a weight-related condition (Asian thresholds)",
        "Type 2 diabetes that is hard to control despite medication",
        "Obstructive sleep apnoea, fatty liver or PCOS linked to weight",
        "Weight-related joint pain limiting daily life",
        "Serious, repeated attempts at diet and exercise without lasting success",
        "Being medically fit for surgery after assessment",
      ],
      faqs: [
        {
          question: "Which procedure is right for me?",
          answer:
            "Sleeve gastrectomy removes part of the stomach and is simpler with fewer long-term nutritional issues. Gastric bypass is often better for reflux and diabetes. A team assessment — including a dietitian and physician — recommends the best fit for you.",
        },
        {
          question: "How much weight will I lose?",
          answer:
            "Most people lose 25–35% of their total weight over 12–18 months, though this varies. The bigger, more durable benefit is the improvement in diabetes, blood pressure and sleep apnoea.",
        },
        {
          question: "Do I have to take supplements for life?",
          answer:
            "Yes. Lifelong vitamins and minerals, and annual blood tests, are essential to prevent deficiencies. Your team sets this up and monitors it.",
        },
      ],
    },
    {
      slug: "intragastric-balloon",
      title: "Intragastric Balloon",
      metaTitle: "Intragastric Balloon (Non-Surgical Weight Loss)",
      metaDescription:
        "A non-surgical intragastric balloon placed endoscopically for 6 months to reduce appetite, combined with a supervised diet and lifestyle programme.",
      overview: [
        "An intragastric balloon is a soft silicone balloon placed in the stomach and filled with saline, so you feel full sooner and eat less. It is a non-surgical option for people who are overweight or have moderate obesity and want a kick-start to weight loss.",
        "It is placed and removed endoscopically (through the mouth, no incisions) as a day-care procedure, and stays in for about 6 months. It works best combined with a supervised diet and lifestyle programme, which your team provides.",
      ],
      commonSigns: [
        "A BMI of about 27–35 with weight not shifting on diet alone",
        "Wanting a non-surgical, temporary option",
        "Needing to lose weight before another operation (e.g. a joint replacement or hernia repair)",
        "A previous partial success with dieting that then stalled",
        "Not yet eligible for, or not wanting, bariatric surgery",
        "Being committed to the diet and follow-up programme alongside the balloon",
      ],
      faqs: [
        {
          question: "How much weight can I lose with a balloon?",
          answer:
            "Typically 10–15% of body weight over the 6 months, best sustained when the balloon period is used to build lasting habits. Some weight regain is common if old habits return after removal.",
        },
        {
          question: "Is it uncomfortable?",
          answer:
            "The first 3–5 days bring nausea and cramping as the stomach adjusts, managed with medication. Most people settle after the first week.",
        },
        {
          question: "What happens after 6 months?",
          answer:
            "The balloon is removed endoscopically. Your team continues to support your diet and activity, and reviews whether further treatment is needed.",
        },
      ],
    },
  ],
};

const dermatology: Specialty = {
  slug: "dermatology",
  label: "Dermatology",
  blurb:
    "Non-surgical aesthetic dermatology — dermal fillers, PRP microneedling and thread lifts — planned by a dermatologist for a natural, balanced result with minimal downtime.",
  testimonials: [
    {
      quote:
        "I wanted to look less tired, not different. The dermatologist used a tiny amount of filler under the eyes and in the cheeks, and people just keep asking if I've been on holiday.",
      name: "Shwetha R.",
      procedure: "Dermal Fillers",
      location: "Hyderabad",
    },
    {
      quote:
        "Years of acne had left my cheeks pitted. Four sessions of microneedling with PRP and the texture is genuinely smoother — makeup sits better, and so does my confidence.",
      name: "Bhargavi M.",
      procedure: "Vampire Facial (PRP Microneedling)",
      location: "Uppal",
    },
    {
      quote:
        "The jawline had started to soften and I wasn't ready for surgery. The thread lift gave me a subtle lift with a week of feeling a bit tight, and it's held well for over a year.",
      name: "Anjali K.",
      procedure: "Face Thread Lift",
      location: "Kukatpally",
    },
    {
      quote:
        "My lips had thinned and lost their shape. A very natural, light filler restored the border — no duck lips, just my lips from ten years ago.",
      name: "Farheen S.",
      procedure: "Lip Filler",
      location: "Secunderabad",
    },
    {
      quote:
        "The scalp PRP was recommended for early thinning at my crown. Six months in, the shedding has slowed right down and there's visible regrowth.",
      name: "Rakesh P.",
      procedure: "Scalp PRP",
      location: "Nacharam",
    },
    {
      quote:
        "I was nervous about fillers going wrong. Knowing they can be dissolved if needed made me comfortable to try — and I loved the result.",
      name: "Divya T.",
      procedure: "Cheek & Chin Fillers",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "derma-fillers",
      title: "Derma Fillers",
      metaTitle: "Dermal Fillers — Volume & Contour Enhancement",
      metaDescription:
        "Hyaluronic-acid dermal fillers to restore lost volume and refine the lips, cheeks, chin, jawline and under-eyes — immediate, reversible results with minimal downtime.",
      overview: [
        "Dermal fillers are gels — usually hyaluronic acid, a substance the skin makes naturally — injected to restore lost volume, soften deep lines, and refine the shape of the lips, cheeks, chin, jawline and under-eye area.",
        "Treatment takes 20–45 minutes in the clinic, with numbing cream and fine needles or a blunt cannula. Results are immediate and last 6–18 months depending on the product and area. A dermatologist assesses your face and plans a natural, balanced result.",
      ],
      commonSigns: [
        "Deep folds between the nose and mouth, or 'marionette' lines",
        "Flattening or sagging of the cheeks with age",
        "Thin lips, or loss of lip shape and border",
        "A weak or receding chin, or an undefined jawline",
        "Hollowing and shadows under the eyes",
        "Wanting a non-surgical way to look refreshed",
      ],
      faqs: [
        {
          question: "Will it look obvious or 'overdone'?",
          answer:
            "A skilled dermatologist places small amounts to support the face's own structure, not to inflate it. The aim is that you look rested, not 'done'. Conservative treatment with review is the safest approach.",
        },
        {
          question: "Is it reversible?",
          answer:
            "Hyaluronic-acid fillers can be dissolved with an enzyme (hyaluronidase) if you are unhappy or in the rare event of a complication — one of the reasons this filler type is preferred.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Minimal. Some swelling and small bruises can occur for a few days, especially around the lips and eyes. Most people return to normal activities immediately.",
        },
      ],
    },
    {
      slug: "vampire-facial",
      title: "Vampire Facial",
      metaTitle: "Vampire Facial (PRP Microneedling)",
      metaDescription:
        "Microneedling with platelet-rich plasma (PRP) from your own blood to stimulate collagen — improving texture, fine lines, pores and mild acne scarring over a course of sessions.",
      overview: [
        "The 'vampire facial' combines microneedling with platelet-rich plasma (PRP) prepared from a small sample of your own blood. The controlled micro-injuries and the growth factors in PRP stimulate collagen and skin renewal.",
        "It improves skin texture, fine lines, enlarged pores, dullness and mild acne scarring, and is also used on the scalp for early hair thinning. A course of 3–4 sessions, spaced a month apart, gives the best result.",
      ],
      commonSigns: [
        "Dull, uneven or tired-looking skin",
        "Fine lines and early loss of firmness",
        "Enlarged pores or rough texture",
        "Mild rolling acne scars",
        "Under-eye crepiness or dark circles from thin skin",
        "Early hair thinning at the crown or hairline (scalp PRP)",
      ],
      faqs: [
        {
          question: "Does it hurt?",
          answer:
            "Numbing cream is applied first, so most people feel only mild prickling and warmth. The skin is pink for a day or two afterwards, like mild sunburn.",
        },
        {
          question: "When will I see results?",
          answer:
            "Skin looks fresher within a week, but the collagen-building effect builds over 4–12 weeks and improves across a course of sessions.",
        },
        {
          question: "Is it safe?",
          answer:
            "Because the PRP is your own blood, there is no risk of allergy or rejection. It is done with sterile, single-use needles by trained staff.",
        },
      ],
    },
    {
      slug: "face-threadlift",
      title: "Face Threadlift",
      metaTitle: "Face Thread Lift (Absorbable Suture Lift)",
      metaDescription:
        "A thread lift using fine absorbable sutures to reposition sagging cheeks, jawline and brow — an in-clinic middle option between fillers and a surgical facelift.",
      overview: [
        "A thread lift uses fine, absorbable sutures with tiny barbs, placed under the skin to gently reposition and support sagging tissue of the cheeks, jawline and brow. It also triggers collagen along the thread's path.",
        "It is a 45–60 minute in-clinic procedure under local anaesthesia — a middle option between fillers and a surgical facelift, suited to mild to moderate laxity. The lift is visible immediately and the threads dissolve over months while the collagen effect continues.",
      ],
      commonSigns: [
        "Early jowls or a softening jawline",
        "Mild sagging of the mid-face or cheeks",
        "A drooping brow or outer eyebrow",
        "Wanting more lift than fillers give, without surgery",
        "Good skin quality but early descent of the soft tissue",
        "Not ready for, or not wanting, a surgical facelift",
      ],
      faqs: [
        {
          question: "How does it compare to a facelift?",
          answer:
            "A thread lift gives a subtle lift with minimal downtime but a shorter-lasting result (about 12–18 months). A surgical facelift removes excess skin and lasts many years but needs proper recovery. Your dermatologist will advise which fits your degree of laxity.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Mild swelling, bruising and a tight or 'pulled' feeling for about a week. You should avoid heavy exercise, dental work and facial massage for 2–3 weeks.",
        },
        {
          question: "What happens when the threads dissolve?",
          answer:
            "The threads are gone by about 6 months, but the collagen they stimulated remains, so the effect fades gradually rather than suddenly. Treatment can be repeated.",
        },
      ],
    },
  ],
};

const dentistry: Specialty = {
  slug: "dentistry",
  label: "Dentistry",
  blurb:
    "Restorative and orthodontic dentistry — dental implants to replace missing teeth, and braces or clear aligners to straighten them — planned with a scan and 3D preview.",
  testimonials: [
    {
      quote:
        "I'd worn an uncomfortable denture for years and stopped smiling in photos. Two implants and a bridge later, I forget they're not my own teeth.",
      name: "Narasimha R.",
      procedure: "Dental Implants",
      location: "Hyderabad",
    },
    {
      quote:
        "My son's teeth were badly crowded. Two years of braces and a retainer, and his bite and his confidence are transformed.",
      name: "Suneetha K.",
      procedure: "Dental Braces",
      location: "Uppal",
    },
    {
      quote:
        "As a teacher I didn't want visible braces. The clear aligners closed the gap in my front teeth in eight months and no one at school ever noticed.",
      name: "Priyanka M.",
      procedure: "Clear Aligners",
      location: "Kukatpally",
    },
    {
      quote:
        "I lost a molar and was told a bridge would mean grinding down two healthy teeth. The implant left them untouched.",
      name: "Vamsi P.",
      procedure: "Single Tooth Implant",
      location: "Nacharam",
    },
    {
      quote:
        "The scan showed my bone was too thin, so they did a graft first. It added a few months but the implant is rock solid now.",
      name: "Zubeda S.",
      procedure: "Implant with Bone Graft",
      location: "Secunderabad",
    },
    {
      quote:
        "I'd had braces as a teenager and my teeth had drifted back. A short course of aligners fixed it, and this time I'm actually wearing the retainer.",
      name: "Harish V.",
      procedure: "Clear Aligners",
      location: "Dilsukhnagar",
    },
  ],
  treatments: [
    {
      slug: "dental-implant-surgery",
      title: "Dental Implant Surgery",
      metaTitle: "Dental Implant Surgery (Single & Multiple Teeth)",
      metaDescription:
        "Titanium dental implants to permanently replace missing teeth — CT-planned, with bone grafting where needed and a natural crown, bridge or fixed denture on top.",
      overview: [
        "A dental implant is a small titanium post placed into the jawbone to replace the root of a missing tooth. Once it has fused with the bone, a crown, bridge or denture is fixed on top, restoring a natural look, bite and confidence.",
        "Placement is a minor procedure under local anaesthesia. The implant then integrates over 2–4 months before the final tooth is attached; in suitable cases a temporary tooth is fitted the same day. A scan checks bone volume, and a graft is done first if needed.",
      ],
      commonSigns: [
        "One or more missing teeth, or a tooth that cannot be saved",
        "A loose or uncomfortable denture",
        "A gap affecting chewing, speech or appearance",
        "Wanting a fixed solution rather than a removable one",
        "Bone loss in the jaw from a long-standing gap",
        "Failing bridgework that needs replacing",
      ],
      faqs: [
        {
          question: "Am I too old, or is my bone too thin, for an implant?",
          answer:
            "Age is not a barrier — the health of the gums and bone is what matters. If bone is thin, a bone graft or sinus lift is done first, or a narrower implant is used. A scan tells us what is possible.",
        },
        {
          question: "How long does an implant last?",
          answer:
            "With good oral hygiene and regular check-ups, implants can last decades. The crown on top may need replacing after 10–15 years of wear.",
        },
        {
          question: "Does it hurt?",
          answer:
            "Placement is done under local anaesthesia and most people compare the recovery to a simple extraction — mild soreness for a few days, managed with painkillers.",
        },
      ],
    },
    {
      slug: "dental-braces",
      title: "Dental Braces",
      metaTitle: "Dental Braces (Metal, Ceramic & Lingual)",
      metaDescription:
        "Braces to correct crowding, gaps and bite problems — metal, tooth-coloured ceramic and hidden lingual options — typically 12–24 months, with a retainer afterwards.",
      overview: [
        "Braces use brackets and wires to gradually move teeth into a better position, correcting crowding, gaps, and bite problems that affect chewing, cleaning and appearance.",
        "Modern options include tooth-coloured ceramic braces and braces fixed to the inside of the teeth (lingual), as well as traditional metal. Treatment usually takes 12–24 months with adjustments every 4–8 weeks, followed by a retainer to hold the result.",
      ],
      commonSigns: [
        "Crowded, crooked or overlapping teeth",
        "Noticeable gaps between teeth",
        "An overbite, underbite or crossbite",
        "Difficulty cleaning certain teeth, leading to decay or gum problems",
        "Jaw discomfort or uneven tooth wear from a poor bite",
        "Teeth that have shifted after previous orthodontic treatment",
      ],
      faqs: [
        {
          question: "Braces or aligners — which is better?",
          answer:
            "Braces handle complex movements and severe crowding or bite problems more predictably and don't rely on you wearing them. Aligners are near-invisible and removable but need discipline. Your orthodontist will advise based on your case.",
        },
        {
          question: "Do braces hurt?",
          answer:
            "There is some tightness and tenderness for a few days after fitting and each adjustment, eased by soft food and painkillers. It settles quickly.",
        },
        {
          question: "How long will I wear them?",
          answer:
            "Most treatments take 12–24 months. A retainer — worn at night long-term — is essential afterwards, as teeth naturally drift back without it.",
        },
      ],
    },
    {
      slug: "teeth-aligners",
      title: "Teeth Aligners",
      metaTitle: "Clear Teeth Aligners (Invisible Orthodontics)",
      metaDescription:
        "Custom clear aligners that straighten teeth in near-invisible, removable steps — with a 3D digital preview of the result before you start.",
      overview: [
        "Clear aligners are a series of custom-made, near-invisible plastic trays that move the teeth in small steps. You change to the next tray every 1–2 weeks, and they are removed for eating and cleaning.",
        "A digital scan and 3D plan show the expected result before you start. Treatment typically takes 6–18 months depending on complexity, with occasional check-ups and a retainer at the end.",
      ],
      commonSigns: [
        "Mild to moderate crowding or spacing",
        "Teeth that have relapsed after childhood braces",
        "Wanting a discreet, removable option",
        "A specific concern such as a rotated front tooth or a small gap",
        "A social or professional preference to avoid visible braces",
        "The discipline to wear the trays 20–22 hours a day",
      ],
      faqs: [
        {
          question: "Are aligners as effective as braces?",
          answer:
            "For mild to moderate problems, results are comparable. Braces remain more predictable for complex bite corrections and severe crowding. A consultation and scan will tell you if aligners can achieve your goal.",
        },
        {
          question: "Will anyone notice I'm wearing them?",
          answer:
            "The trays are clear and fit closely, so they are very hard to spot in normal conversation. You take them out to eat, so there are no food restrictions.",
        },
        {
          question: "What if I lose a tray?",
          answer:
            "Move to the next tray or go back to the previous one and contact the clinic — a replacement is made from your digital plan. Keeping trays in their case avoids most losses.",
        },
      ],
    },
  ],
};

export const specialtyContent: Record<string, Specialty> = {
  proctology,
  laparoscopy,
  gynaecology,
  ent,
  urology,
  vascular,
  aesthetics,
  orthopedics,
  ophthalmology,
  fertility,
  "weight-loss": weightLoss,
  dermatology,
  dentistry,
};

export function getSpecialty(slug: string): Specialty | undefined {
  return specialtyContent[slug];
}

export function getTreatment(
  specialtySlug: string,
  treatmentSlug: string,
): Treatment | undefined {
  return specialtyContent[specialtySlug]?.treatments.find(
    (t) => t.slug === treatmentSlug,
  );
}
