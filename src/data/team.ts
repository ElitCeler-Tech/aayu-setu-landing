/* The team, taken from ayussetu.com so the new site and the one it
   replaces say the same things about the same people. The facts
   beneath each bio, education and roles, are theirs. */

export type Member = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  lede: string;
  bio: string[];
  education: string[];
  highlights: string[];
  location?: string;
};

export const team: Member[] = [
  {
    slug: "sandeep-konda",
    name: "Sandeep Konda",
    role: "Founder",
    photo: "/team/sandeep.png",
    linkedin: "https://www.linkedin.com/in/sandeepkonda/",
    lede: "Twenty years of healthcare leadership as a pharmacist in the United States.",
    bio: [
      "Sandeep brings 20 years of healthcare leadership experience as a pharmacist in the United States, combining clinical knowledge with a strong understanding of healthcare systems and patient care.",
      "His journey with Ayussetu is driven by both professional experience and a personal family medical urgency that highlighted the importance of having accessible, organized health information when it matters most.",
      "He founded Ayussetu with a vision to make healthcare more connected, informed and preventive, empowering individuals and families while helping doctors make better informed care decisions.",
    ],
    education: [
      "MBA, Paul Merage School of Business, UC Irvine, California, USA",
      "MS in Pharmaceutical Sciences, Western University of Health Sciences, California, USA",
      "BPharm, G. Pulla Reddy College of Pharmacy, Hyderabad, India",
    ],
    highlights: [
      "Registered Pharmacist in California and Texas, USA",
      "Certified in Immunization, HIV PrEP/PEP, Travel Medicine, Medication Therapy Management (MTM) and other clinical services",
      "Built and scaled a healthcare business (pharmacy and patient care) from the ground up",
    ],
  },
  {
    slug: "preeti-kotha",
    name: "Dr Preeti Kotha",
    role: "Director of Pharmacy",
    photo: "/team/preeti.png",
    linkedin: "https://www.linkedin.com/in/preeti-kotha-pharmd-app-75b95085/",
    lede: "A pharmacy leader and academic with 20 years of experience in clinical practice, pharmacy operations and patient care.",
    bio: [
      "Dr Preeti Kotha is a pharmacy leader and academic with 20 years of experience in clinical practice, pharmacy operations and patient care.",
      "As Director of Pharmacy Services and Operations and Assistant Professor at Western University of Health Sciences, she brings expertise in preventive healthcare, medication management, diabetes and cardiovascular care, and public health initiatives.",
      "At Ayussetu, she provides clinical guidance to ensure that medication information, health insights and preventive recommendations are meaningful, responsible and aligned with patient care needs.",
    ],
    education: [
      "Doctor of Pharmacy (PharmD), Western University of Health Sciences, California, USA",
      "Bachelor of Pharmacy (BPharm), Hyderabad, India",
    ],
    highlights: [
      "APhA Certified Travel Medicine Provider",
      "APhA Certified Immunizer",
      "Pharmacy Based Cardiovascular Disease Risk Management",
      "Pharmacist and Patient Centered Diabetes Care",
      "Advanced Practice Pharmacist (APh)",
      "Registered Pharmacist, California",
      "Basic Life Support (BLS) Instructor",
    ],
  },
  {
    slug: "sai-krishna-alishala",
    name: "Sai Krishna Alishala",
    role: "CTO",
    photo: "/team/sai.jpg",
    lede: "Leads technology at Ayussetu: the patient app, the doctor app, the clinic console and the systems that keep records private.",
    bio: [
      "Sai Krishna leads the engineering behind Ayussetu, from the apps people and doctors use every day to the services that read reports and keep every record behind the patient's consent.",
    ],
    education: [],
    highlights: [
      "Leads the Ayussetu engineering team",
      "Patient app, doctor app and clinic console",
    ],
  },
];
