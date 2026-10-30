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
    role: "Founder and CEO",
    photo: "/team/sandeep.png",
    linkedin: "https://www.linkedin.com/in/sandeepkonda/",
    lede: "A pharmacist by training, with a mission to make healthcare connected, preventive and patient centric through digital transformation.",
    bio: [
      "Sandeep brings over twenty years of pharmacy leadership. At Rite Aid he built and ran some of the chain's highest performing pharmacies, with patient satisfaction and financial growth to match.",
      "During his MBA he co-developed iCancerCare, a digital tool for managing cancer patient treatment. That is where the thinking behind Ayussetu began: that the record, rather than the visit, is what carries a patient's care.",
      "He founded Ayussetu to bring scattered paper and digital health records together, and to use what they say about a person to act early rather than late.",
    ],
    education: [
      "MBA in Healthcare, Paul Merage School of Business, UC Irvine",
      "MS in Pharmaceutical Sciences, Western University of Health Sciences, California",
      "BPharm, G. Pulla Reddy College of Pharmacy, Hyderabad",
    ],
    highlights: [
      "Twenty years of pharmacy leadership at Rite Aid",
      "Co-developed iCancerCare, a treatment management tool",
      "Founded Ayussetu",
    ],
    location: "Warangal, Telangana",
  },
  {
    slug: "preeti-kotha",
    name: "Dr Preeti Kotha",
    role: "Advisor, PharmD, APh",
    photo: "/team/preeti.png",
    linkedin: "https://www.linkedin.com/in/preeti-kotha-pharmd-app-75b95085/",
    lede: "A pharmacy leader and educator, with deep experience in clinical operations, pharmacy services and interprofessional healthcare education.",
    bio: [
      "Dr Kotha is Director of Pharmacy Services and Operations, and Assistant Professor at Western University of Health Sciences, where she teaches PharmD students.",
      "Her work spans clinical operations and public health. She has led vaccine access programmes and interprofessional community outreach, the work that decides whether care actually reaches the people who need it.",
      "She advises Ayussetu on clinical practice, and on keeping what the product says about medicines and markers both useful and safe.",
    ],
    education: ["Doctor of Pharmacy, Western University of Health Sciences"],
    highlights: [
      "Director of Pharmacy Services and Operations",
      "Assistant Professor, teaching PharmD students",
      "Led vaccine access and community outreach programmes",
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
