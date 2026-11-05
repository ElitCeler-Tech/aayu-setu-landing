/* The blog. Titles come from the old ayussetu.com, which listed these
   three with no articles behind them. Plain language, general wellness
   information only: nothing here diagnoses or replaces a doctor, and
   each post says so at the end. */

export type Block =
  | { h: string }
  | { p: string }
  | { list: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string; // shown as is
  iso: string;
  read: string;
  image: string;
  excerpt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "track-your-vitals",
    title: "5 tips to track your vitals effectively",
    category: "Vitals",
    date: "5 Nov 2026",
    iso: "2026-11-05",
    read: "4 min read",
    image: "/blog/vitals.png",
    excerpt:
      "A single reading says little. A steady record of your blood pressure, sugar and weight says a lot. Here is how to make yours worth reading.",
    body: [
      {
        p: "Blood pressure, blood sugar, heart rate and weight move through the day. One number on its own can mislead, in either direction. What helps you and your doctor is a record: the same measurement, taken the same way, over weeks.",
      },
      { h: "1. Measure at the same time each day" },
      {
        p: "Pick a time you can keep, such as before breakfast, and stay with it. Blood pressure is usually lower in the morning and blood sugar changes a lot after meals, so readings taken at random times are hard to compare.",
      },
      { h: "2. Sit, rest, then measure" },
      {
        p: "For blood pressure, sit with your back supported and your feet flat for five minutes first. Keep the cuff at heart level and stay quiet while it reads. Coffee, a cigarette or a climb up the stairs just before can push the number up.",
      },
      { h: "3. Write down the context, not just the number" },
      {
        p: "Fasting or after food, before or after your medicine, a poor night's sleep. A short note turns a puzzling reading into an understandable one.",
      },
      { h: "4. Look at the trend, not the single reading" },
      {
        p: "A reading that is a little high once is rarely the story. Several readings drifting the same way over two or three weeks is worth noticing and worth discussing with your doctor.",
      },
      { h: "5. Keep it all in one place" },
      {
        p: "Readings scattered across a notebook, a phone note and a lab report are hard to read together. In Ayussetu you can log blood pressure, sugar, heart rate, weight, sleep and steps in one screen, see each against its usual range, and share the trend with your doctor when you choose.",
      },
      {
        list: [
          "Same time, same position, same arm",
          "Rest five minutes before blood pressure",
          "Note fasting or after food for sugar",
          "Watch the two to three week trend",
          "Bring the record to your next visit",
        ],
      },
    ],
  },
  {
    slug: "medication-adherence",
    title: "The importance of medication adherence",
    category: "Medicines",
    date: "4 Nov 2026",
    iso: "2026-11-04",
    read: "4 min read",
    image: "/blog/medicines.png",
    excerpt:
      "Medicines only work when they are taken as prescribed. Why doses get missed, and small habits that make the routine easier to keep.",
    body: [
      {
        p: "Adherence simply means taking your medicines the way your doctor prescribed them: the right dose, at the right time, for as long as advised. It sounds easy. For anyone taking more than one medicine a day, it often is not.",
      },
      { h: "Why it matters" },
      {
        p: "Many medicines for blood pressure, cholesterol or blood sugar work quietly in the background. You may feel no different on the day you miss a dose, which is exactly why missed doses add up unnoticed. Taken regularly, they do the job they were prescribed for.",
      },
      { h: "Why doses get missed" },
      {
        list: [
          "A busy morning, travel or a change in routine",
          "Not being sure whether today's dose was already taken",
          "Running out before the refill is bought",
          "Feeling better and assuming the medicine is no longer needed",
        ],
      },
      { h: "Habits that help" },
      {
        p: "Tie each dose to something you already do every day, such as brushing your teeth or your first cup of tea. Keep a weekly pill box where you will see it. Refill a few days before you run out, not on the last day.",
      },
      {
        p: "Never stop or change a medicine on your own. If side effects or cost are making it hard to continue, that is a conversation for your doctor or pharmacist, who can often suggest another way.",
      },
      { h: "How Ayussetu helps" },
      {
        p: "Ayussetu reminds you when each dose is due, lets you mark it taken or skipped, and keeps a history you can look back on. It also counts what is left and tells you when a medicine is running low, so the refill happens before the gap.",
      },
    ],
  },
  {
    slug: "ai-in-personal-healthcare",
    title: "How AI is changing personal healthcare",
    category: "Ayu AI",
    date: "3 Nov 2026",
    iso: "2026-11-03",
    read: "5 min read",
    image: "/blog/ai.png",
    excerpt:
      "AI will not replace your doctor. It can help you understand your own reports, ask better questions, and arrive at your appointment prepared.",
    body: [
      {
        p: "Most of us have a drawer of lab reports we never fully understood. Pages of values, ranges and abbreviations, read once in a waiting room and then filed away. This is where AI is starting to make a real difference for patients.",
      },
      { h: "From paper to understanding" },
      {
        p: "Modern AI can read a scanned or photographed report, pick out each lab value, and place it against its reference range. Instead of a page of numbers you see which values are in range, which are borderline, and which are worth a closer look.",
      },
      { h: "Seeing change over time" },
      {
        p: "The real value appears when several reports sit side by side. Your cholesterol from last year next to this year's, or your HbA1c across three tests. Patterns that were invisible across separate pieces of paper become clear on one chart.",
      },
      { h: "Better questions for your doctor" },
      {
        p: "An assistant that knows your own record can explain a value in plain language and suggest what you might ask at your next visit. You arrive prepared, and the time with your doctor goes further.",
      },
      { h: "What AI should not do" },
      {
        p: "AI does not examine you, know your full history the way your doctor does, or make decisions about treatment. Good tools say so clearly, show where an answer came from, and point you back to your doctor for anything that matters.",
      },
      { h: "How Ayu works in Ayussetu" },
      {
        p: "Ayu, the assistant inside Ayussetu, answers from your own reports and readings when you choose to let it. Every answer is marked as AI generated, and it is there to help you understand and prepare, not to diagnose.",
      },
    ],
  },
];
