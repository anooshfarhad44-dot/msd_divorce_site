export const siteConfig = {
  name: "MSD Solicitors",
  tagline: "Divorce & Family Law Specialists",
  phone: "0161 503 0553",
  email: "info@msdsolicitors.co.uk",
  offices: ["Manchester", "Birmingham", "London"],
  address: "Suite 2, First Floor, 6 Oldham Road, Manchester, M4 5DB",
  sraNumber: "666682",
  companyNumber: "12303416",
  vatNumber: "396387633",
};

export const ukGovLinks = {
  divorce: "https://www.gov.uk/get-a-divorce",
  childArrangements: "https://www.gov.uk/looking-after-children-divorce",
  financialSettlements: "https://www.gov.uk/money-property-when-relationship-ends",
  mediation: "https://www.gov.uk/family-mediation",
  legalAid: "https://www.gov.uk/check-legal-aid",
  courtFinder: "https://www.gov.uk/find-court-tribunal",
};

export const officeBranches = [
  {
    city: "Manchester",
    number: "0161 503 0553",
    href: "tel:+441615030553",
    address: "Suite 2, First Floor, 6, Oldham Road, Manchester, England, M4 5DB",
    mapQuery: "MSD Solicitors, Suite 2, First Floor, 6, Oldham Road, Manchester, M4 5DB",
  },
  {
    city: "London",
    number: "020 4537 5050",
    href: "tel:+442045375050",
    address: "Berkeley Square House, Berkeley Square, London, W1J 6BD",
    mapQuery: "MSD Solicitors, Berkeley Square House, Berkeley Square, London, W1J 6BD",
  },
  {
    city: "Birmingham",
    number: "0121 725 1550",
    href: "tel:+441217251550",
    address: "Two Snowhill, Snow Hill Queensway, Birmingham, B4 6GA",
    mapQuery: "MSD Solicitors, Two Snowhill, Snow Hill Queensway, Birmingham, B4 6GA",
  },
];

export const socialLinks = [
  {
    href: "https://www.instagram.com/msdsolicitors",
    label: "Instagram",
    colorClass: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white",
    icon: "instagram",
  },
  {
    href: "https://www.facebook.com/msdsolicitors",
    label: "Facebook",
    colorClass: "bg-blue-600 text-white",
    icon: "facebook",
  },
  {
    href: "https://x.com/msdsolicitors",
    label: "X (Twitter)",
    colorClass: "bg-black text-white border border-white/20",
    icon: "x",
  },
  {
    href: "https://www.linkedin.com/company/msdsolicitors",
    label: "LinkedIn",
    colorClass: "bg-sky-600 text-white",
    icon: "linkedin",
  },
  {
    href: "https://www.youtube.com/@msdsolicitors",
    label: "YouTube",
    colorClass: "bg-red-600 text-white",
    icon: "youtube",
  },
];

// Header nav should only show the primary pages per design request
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Divorce Guide", href: "/guide" },
  { label: "Fees", href: "/fees" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroData = {
  headline: "Divorce & Family Law Solicitors in Manchester",
  subheadline:
    "It's never easy, but it's easier when you have a team of experienced family law solicitors on your side.",
  cta1: { label: "Speak to a Divorce Solicitor", href: "/contact" },
  cta2: { label: "Speak to a Family Law Solicitor", href: "/contact" },
};

export const statsData = [
  { value: "20+", label: "Years Experience" },
  { value: "5,000+", label: "Cases Handled" },
  { value: "3", label: "UK Offices" },
  { value: "98%", label: "Client Satisfaction" },
];

export const servicesData = [
  {
    slug: "divorce",
    icon: "⚖️",
    image: "/images/services/divorce.webp",
    imagePrompt: "Professional divorce solicitor in modern law office with UK legal documents, compassionate consultation",
    title: "Divorce Proceedings",
    summary: "Expert guidance through every stage of the divorce process, from application to Final Order.",
    description: "Our experienced divorce solicitors will guide you through the entire process with care and expertise, ensuring you understand every step and make well-informed decisions. We follow the official UK government divorce process as outlined on GOV.UK.",
    officialLink: ukGovLinks.divorce,
  },
  {
    slug: "financial-settlements",
    icon: "🏠",
    image: "/images/services/financial-settlements.webp",
    imagePrompt: "Financial advisor and solicitor reviewing property documents and financial statements in UK law office",
    title: "Financial Settlements",
    summary: "Fair division of assets, property, and maintenance agreements tailored to your situation.",
    description: "We help negotiate and formalise financial arrangements including property division, savings, pensions, and spousal maintenance to protect your financial future, following UK government guidelines.",
    officialLink: ukGovLinks.financialSettlements,
  },
  {
    slug: "child-arrangements",
    icon: "👨‍👩‍👧",
    image: "/images/services/child-arrangements.webp",
    imagePrompt: "Family solicitor with parents discussing child arrangement plans in supportive law office environment",
    title: "Child Arrangements",
    summary: "Child arrangement orders covering care, living arrangements, and maintenance.",
    description: "We prioritise the best interests of your children, helping to establish clear and fair arrangements for living, contact, and financial support, in line with UK child law.",
    officialLink: ukGovLinks.childArrangements,
  },
  {
    slug: "mediation",
    icon: "🤝",
    image: "/images/services/mediation.webp",
    imagePrompt: "Family mediation session with professional mediator and couple in modern meeting room",
    title: "Family Mediation",
    summary: "Helping couples reach amicable agreements without the need for court proceedings.",
    description: "Mediation can save time, money and emotional distress. Our solicitors can advise and support you through a mediated settlement process as recommended by UK government.",
    officialLink: ukGovLinks.mediation,
  },
  {
    slug: "prenuptial-agreements",
    icon: "📝",
    image: "/images/services/prenuptial.webp",
    imagePrompt: "Couple with solicitor signing prenuptial agreement documents in professional law office",
    title: "Prenuptial Agreements",
    summary: "Protect your assets before marriage with a clear and legally sound prenuptial agreement.",
    description: "A prenuptial agreement can provide clarity and protection for both parties. We draft clear, fair agreements that reflect your individual circumstances and follow UK legal requirements.",
    officialLink: null,
  },
  {
    slug: "cohabitation",
    icon: "🏡",
    image: "/images/services/cohabitation.webp",
    imagePrompt: "Solicitor explaining cohabitation rights to unmarried couple in UK law office",
    title: "Cohabitation Disputes",
    summary: "Legal advice for unmarried couples separating, covering property and financial matters.",
    description: "Unmarried couples face unique legal challenges on separation. We provide expert advice on property rights, shared assets, and parental arrangements under UK law.",
    officialLink: ukGovLinks.financialSettlements,
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Speak with one of our experienced solicitors to discuss your situation confidentially and understand your options.",
  },
  {
    step: 2,
    title: "Submit Divorce Application",
    description:
      "File a single or joint divorce application to your local family court, including a statement that the marriage has irretrievably broken down.",
  },
  {
    step: 3,
    title: "Acknowledgement of Service",
    description:
      "Your spouse receives notification and must reply within 14 days with an acknowledgement of service form.",
  },
  {
    step: 4,
    title: "20-Week Cooling Off Period",
    description:
      "A mandatory 20-week reflection period introduced under no-fault divorce laws gives couples time to consider their decision.",
  },
  {
    step: 5,
    title: "Conditional Order",
    description:
      "Apply for the Conditional Order — a provisional decree confirming the legal requirements for divorce have been met.",
  },
  {
    step: 6,
    title: "Final Order",
    description:
      "After a minimum of 6 weeks from the Conditional Order, apply for the Final Order. Once granted, your marriage is legally over.",
  },
];

export const faqData = [
  {
    question: "How long does a divorce take in the UK?",
    answer:
      "The minimum time for a divorce in England and Wales is around 6–7 months due to the mandatory 20-week cooling off period between the application and Conditional Order, plus the 6-week wait before the Final Order.",
  },
  {
    question: "What is no-fault divorce?",
    answer:
      "No-fault divorce allows couples to end a marriage without blaming either party. Only one person needs to state the marriage has irretrievably broken down. It was introduced in April 2022.",
  },
  {
    question: "Do I need a solicitor to get divorced?",
    answer:
      "You are not legally required to use a solicitor, but having one ensures your application is correct, your financial settlement is fair, and you are fully protected throughout the process.",
  },
  {
    question: "How are assets divided in a divorce?",
    answer:
      "There is no fixed formula. Courts consider factors including the length of marriage, financial contributions, earning capacity, and the needs of any children. We work to achieve the fairest outcome for you.",
  },
  {
    question: "What happens to the children during a divorce?",
    answer:
      "Child arrangements cover where children live, how much time they spend with each parent, and financial support. These can be agreed between parties or, if needed, decided by the court.",
  },
  {
    question: "How much does a divorce cost?",
    answer:
      "Costs vary depending on whether the divorce is contested, the complexity of financial arrangements, and whether children are involved. We offer transparent pricing and will always explain costs upfront.",
  },
  {
    question: "Can I contest a divorce?",
    answer:
      "Under no-fault divorce laws, the ability to contest a divorce has been largely removed. You may only contest where the marriage is not valid, or where English/Welsh courts do not have jurisdiction.",
  },
  {
    question: "What if we cannot agree on financial matters?",
    answer:
      "If you cannot reach agreement, we can represent you in financial remedy proceedings. We always try to resolve matters through negotiation or mediation first to minimise cost and stress.",
  },
];

export const feesData = [
  {
    title: "Divorce / Separation",
    price: "£500 – £1,200 + VAT",
    description:
      "For straightforward divorces and separations where both parties are in agreement with no complex financial or child arrangement disputes.",
    includes: [
      "Initial consultation",
      "Divorce application (sole or joint)",
      "Acknowledgement of service",
      "Conditional and Final Order",
    ],
  },
  {
    title: "Financial Disputes / Settlement",
    price: "£1,200 – £2,500 + VAT",
    description:
      "Covers negotiation and drafting of a financial consent order, including division of property, savings, pensions and spousal maintenance.",
    includes: [
      "Full financial disclosure",
      "Negotiation of settlement",
      "Consent order drafting",
      "Court application if required",
    ],
  },
  {
    title: "Child Arrangement Orders",
    price: "£1,200 – £2,500 + VAT",
    description:
      "Expert representation for child arrangements covering where children live, contact with each parent, and child maintenance.",
    includes: [
      "Initial advice and strategy",
      "Negotiation with other party",
      "Child arrangement order drafting",
      "Court representation if needed",
    ],
  },
];

export const familyLawFees = [
  { service: "Divorce / Separation", range: "£500 – £1,200" },
  { service: "Child Arrangement Orders", range: "£1,200 – £2,500" },
  { service: "Financial Disputes / Settlement", range: "£1,200 – £2,500" },
  { service: "Non-Molestation & Residence Order", range: "£1,200 – £2,500" },
  { service: "Pre-nuptial Agreements", range: "£1,200 – £2,500" },
  { service: "Cohabitation Agreements", range: "£1,200 – £2,500" },
];

export const teamData = [
  {
    name: "Sarah Mitchell",
    role: "Senior Family Law Solicitor",
    bio: "Sarah has over 15 years of experience in family law and divorce proceedings, and is recognised as a leading practitioner in Manchester.",
    image: "/images/team/sarah.webp",
  },
  {
    name: "James Patel",
    role: "Divorce Specialist",
    bio: "James specialises in complex financial settlements and has successfully handled hundreds of high-value divorce cases.",
    image: "/images/team/james.webp",
  },
  {
    name: "Emma Clarke",
    role: "Child Law Solicitor",
    bio: "Emma is dedicated to protecting the interests of children in family proceedings and has extensive experience in child arrangement orders.",
    image: "/images/team/emma.webp",
  },
];

export const blogPosts = [
  {
    slug: "no-fault-divorce-explained",
    title: "No-Fault Divorce Explained: What You Need to Know",
    excerpt:
      "Since April 2022, couples in England and Wales can divorce without assigning blame. Here's everything you need to understand about the new law.",
    date: "12 March 2025",
    author: "Sarah Mitchell",
    category: "Divorce Law",
    readTime: "5 min read",
    image: "/images/blog/no-fault-divorce-explained.webp",
    imagePrompt: "UK divorce law concept with court documents and gavel, professional legal photography",
    content: `
      <p>The introduction of no-fault divorce in April 2022 was the most significant change to UK divorce law in over 50 years. Under the new rules, either spouse can apply for divorce simply by stating that the marriage has irretrievably broken down — without needing to prove fault or wrongdoing.</p>
      <h2>What changed?</h2>
      <p>Before the change, divorcing couples had to rely on one of five grounds to prove the marriage had broken down: adultery, unreasonable behaviour, desertion, two years' separation with consent, or five years' separation. This often meant blaming a spouse unnecessarily, increasing conflict and making an already difficult process more distressing.</p>
      <h2>The new process</h2>
      <p>Under no-fault divorce, the process is simpler and less adversarial. One or both parties can apply jointly. The option to contest a divorce has been largely removed. And a 20-week cooling off period has been introduced to allow couples time to reflect before proceeding.</p>
      <h2>Does it affect financial settlements?</h2>
      <p>No. How assets are divided remains governed by the same legal principles. The no-fault reform only affects how the divorce itself is obtained, not the financial or child arrangement aspects of separation.</p>
    `,
  },
  {
    slug: "dividing-assets-in-divorce",
    title: "How Are Assets Divided in a Divorce in the UK?",
    excerpt:
      "There's no automatic 50/50 split in UK divorce law. Find out how courts decide what's fair and how you can protect your interests.",
    date: "5 February 2025",
    author: "James Patel",
    category: "Financial Settlements",
    readTime: "7 min read",
    image: "/images/blog/dividing-assets-in-divorce.webp",
    imagePrompt: "Property division concept with house keys and financial documents, UK divorce financial settlement photography",
    content: `
      <p>One of the most common misconceptions about divorce is that assets are automatically split 50/50. In reality, English family law gives courts wide discretion to divide assets in a way that is fair — but fair does not always mean equal.</p>
      <h2>What factors are considered?</h2>
      <p>Under the Matrimonial Causes Act 1973, the court considers a range of factors including the welfare of any children, the financial needs and resources of each party, the length of the marriage, contributions made by each party, and future earning capacity.</p>
      <h2>Matrimonial vs non-matrimonial assets</h2>
      <p>Assets acquired during the marriage are generally treated as matrimonial assets and subject to division. Inheritances, pre-marital assets, and gifts may be treated differently, particularly in longer marriages.</p>
      <h2>Can we agree between ourselves?</h2>
      <p>Yes — and this is often preferable. An agreed financial settlement, formalised in a consent order approved by the court, is legally binding and avoids costly court proceedings. We can help you negotiate and document a fair agreement.</p>
    `,
  },
  {
    slug: "child-arrangements-after-divorce",
    title: "Child Arrangements After Divorce: A Parent's Guide",
    excerpt:
      "Deciding where children live and how much time they spend with each parent is one of the most important aspects of any separation.",
    date: "20 January 2025",
    author: "Emma Clarke",
    category: "Child Law",
    readTime: "6 min read",
    image: "/images/blog/child-arrangements-after-divorce.webp",
    imagePrompt: "Family law concept with children's toys and family silhouette, compassionate UK family law photography",
    content: `
      <p>When a couple with children separates, agreeing child arrangements is often the most emotionally charged part of the process. The law in England and Wales puts the best interests of the child at the centre of every decision.</p>
      <h2>What is a child arrangements order?</h2>
      <p>A child arrangements order is a court order that sets out where a child lives, how much time they spend with each parent, and any other contact arrangements. It replaces older "residence" and "contact" orders.</p>
      <h2>Do we need a court order?</h2>
      <p>Not necessarily. Many parents are able to agree arrangements between themselves, and courts generally encourage this. However, if you cannot agree, or if arrangements break down, a court order provides clarity and legal enforceability.</p>
      <h2>What about child maintenance?</h2>
      <p>Child maintenance (financial support) is separate from child arrangements and is usually calculated by the Child Maintenance Service. In some cases, arrangements can be agreed privately and documented in a consent order.</p>
    `,
  },
];

export const testimonials = [
  {
    name: "Rachel T.",
    location: "Manchester",
    text: "MSD Solicitors made an incredibly difficult time much more manageable. Sarah was compassionate, clear, and always kept me informed. I couldn't have asked for better support.",
    rating: 5,
    avatar: "/images/testimonials/rachel.webp",
    avatarPrompt: "Professional headshot of a woman in her 30s, friendly and approachable",
  },
  {
    name: "David K.",
    location: "Birmingham",
    text: "James handled my financial settlement with real expertise. I felt confident throughout and the outcome was far better than I expected. Highly recommend.",
    rating: 5,
    avatar: "/images/testimonials/david.webp",
    avatarPrompt: "Professional headshot of a man in his 40s, trustworthy and professional",
  },
  {
    name: "Priya M.",
    location: "London",
    text: "Emma was fantastic with the child arrangements. She was always focused on what was best for my children, and I felt genuinely supported throughout the whole process.",
    rating: 5,
    avatar: "/images/testimonials/priya.webp",
    avatarPrompt: "Professional headshot of a woman in her 30s, warm and caring",
  },
];

export const ukLegalResources = [
  {
    title: "Apply for a Divorce",
    description: "Official UK government page for getting a divorce or ending a civil partnership in England and Wales.",
    url: ukGovLinks.divorce,
    icon: "📄",
    image: "/images/resources/gov-divorce.webp",
    imagePrompt: "GOV.UK official website screenshot showing divorce application page",
  },
  {
    title: "Child Arrangements",
    description: "Information about making arrangements for your children when you separate or divorce.",
    url: ukGovLinks.childArrangements,
    icon: "👨‍👧‍👦",
    image: "/images/resources/gov-children.webp",
    imagePrompt: "GOV.UK page about child arrangements and custody",
  },
  {
    title: "Money and Property",
    description: "Guidance on dividing money, property and pensions when you end your relationship.",
    url: ukGovLinks.financialSettlements,
    icon: "💰",
    image: "/images/resources/gov-finance.webp",
    imagePrompt: "GOV.UK page about financial settlements and property division",
  },
  {
    title: "Family Mediation",
    description: "Find out how mediation can help you reach an agreement without going to court.",
    url: ukGovLinks.mediation,
    icon: "🤝",
    image: "/images/resources/gov-mediation.webp",
    imagePrompt: "GOV.UK page about family mediation services",
  },
  {
    title: "Check Legal Aid",
    description: "See if you can get legal aid to help with legal costs for family issues.",
    url: ukGovLinks.legalAid,
    icon: "⚖️",
    image: "/images/resources/gov-legalaid.webp",
    imagePrompt: "GOV.UK page about legal aid eligibility",
  },
  {
    title: "Find a Court",
    description: "Search for your local family court in England and Wales.",
    url: ukGovLinks.courtFinder,
    icon: "🏛️",
    image: "/images/resources/gov-courtfinder.webp",
    imagePrompt: "GOV.UK court and tribunal finder page",
  },
];
