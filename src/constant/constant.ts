import tepWeb from '@/src/assets/tep_web.webp';
import hrmsWeb from '@/src/assets/hrms_web.webp';
import camyWeb from '@/src/assets/camy_web.webp';
import hipmiWeb from '@/src/assets/hipmi_web.webp';
import liveraWeb from '@/src/assets/livera_web.webp';
import velaAeroWeb from '@/src/assets/vela_aero_web.webp';
import mediatechWeb from '@/src/assets/mediatech_web.webp';
import chameleonWeb from '@/src/assets/chameleon_web.webp';
import onyxTailorsWeb from '@/src/assets/onyx_tailors_web.webp';
import portalKerjaWeb from '@/src/assets/portal_kerja_web.webp';
import kompekFEBUIWeb from '@/src/assets/kompek_feb_ui_web.webp';
import portalKampusWeb from '@/src/assets/portal_kampus_web.webp';
import timurProjectWeb from '@/src/assets/timur_project_web.webp';
import bersamaDokterWeb from '@/src/assets/bersama_dokter_web.webp';
import portalSekolahWeb from '@/src/assets/portal_sekolah_web.webp';
import tradeLinkShopWeb from '@/src/assets/trade_link_shop_web.webp';
import golkarInstituteWeb from '@/src/assets/golkar_institute_web.webp';
import sewaBlowerMurahWeb from '@/src/assets/sewa_blower_murah_web.webp';
import ruhamaAlexandriaWeb from '@/src/assets/ruhama_alexandria_web.webp';
import indoMenaraDigitalWeb from '@/src/assets/indo_menara_dgitial_web.webp';
import indonsiaHealthPassWeb from '@/src/assets/indonesia_health_pass_web.webp';
import sunsetPeopleProjecteWeb from '@/src/assets/sunset_people_project_web.webp';
import kauluConceptWeb from '@/src/assets/kaulu_concept_web.webp';
import fairPaxIndonesiaWeb from '@/src/assets/fairpax_indonesia_web.webp';
import manaShaktiWeb from '@/src/assets/manashakti_web.webp';
import kingdomTechnologyWeb from '@/src/assets/kingdom_technology_web.webp';
import manashaktiApps from '@/src/assets/manashakti_apps.webp';
import figmaManashakti from '@/src/assets/figma_manashakti.webp';
import ranahKaryaWeb from '@/src/assets/ranah_karya_web.webp';
import figmaMagenta from '@/src/assets/figma_magenta.webp';
import edVissWeb from '@/src/assets/edviss_web.webp';
import vinjePartnersWeb from '@/src/assets/vinje_partners_web.webp';
import cmsEdVissWeb from '@/src/assets/cms_edviss_web.webp';
import expensesTrackerWeb from '@/src/assets/expenses_tracker.webp';

import { IExperiencesData, IHomeHeading, ILinks, ISocialLink, IStatsData } from './type';
import { SKILLS } from './skills';

export { SKILLS, SKILL_CATEGORIES, getProjectStack, getSkillById, countProjectsForSkill } from './skills';
export type { SkillId } from './type';

export const CV_URL = '/cv-briyan-sitinjak-ats.pdf';

export const CONTACT_EMAIL = 'Imanbriyan@gmail.com';

export const CONTACT_MAILTO =
  'mailto:Imanbriyan@gmail.com?subject=Remote%20opportunity%20%E2%80%94%20Briyan%20Sitinjak';

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Briyan-NS',
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/briyan_sitinjak',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/briyan-sitinjak/',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@imanbriyan',
  },
];

export const links:ILinks[] = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
    // {
    //     name: '🌻❤️🌻',
    //     path: '/anesya',
    //     mobileOnly: true
    // }

]

export const HOME_HEADING_INFO: IHomeHeading = {
    name: 'Briyan Sitinjak',
    role: 'Frontend Engineer · Remote-Ready',
    headingText: "Hello I'm",
    description:
        '5+ years building EdTech and production apps with Next.js, TypeScript, and automated testing. Remote experience with UK, Australia, and Germany teams, open to contract, freelance, and full-time roles.'
};

export const LIST_EXPERIENCES: IExperiencesData[] = [
    {
        name: 'Expenses Tracker',
        altText: 'expenses_tracker',
        description:
            'A mobile app for logging daily spending and seeing where money goes. I built it with React Native, Expo, and TypeScript so it runs on iOS and Android from one codebase. Focused on a clean input flow and clear summaries so people can track habits without friction.',
        img: expensesTrackerWeb,
        link: 'https://expenses-tracker-briyan.vercel.app/',
        status: 'active',
        deployment: 'staging'
    },
    {
        name: 'Vinje Partners',
        altText: 'vinje_partners_web',
        description:
            'A consulting firm needed a simple site that explains who they are and how they help businesses. I built a fast Next.js marketing site with clear sections for services and contact, then deployed it on Vercel for a temporary public link. The goal was trust and clarity, not clutter.',
        img: vinjePartnersWeb,
        link: 'https://vinje-partners-z4b1.vercel.app/',
        status: 'active',
        deployment: 'staging'
    },
    {
        name: 'CMS EdViss',
        altText: 'cms_edviss_web',
        description:
            'An internal CMS so the EdViss team can manage content and users without waiting on engineering. I built admin flows for publishing and user roles with Next.js and TypeScript. Made day-to-day content updates faster and safer.',
        img: cmsEdVissWeb,
        link: 'https://cms.edviss.com',
        status: 'active',
        deployment: 'staging'
    },
    {
        name: 'EdViss',
        altText: 'edviss_web',
        description:
            'EdViss is an EdTech product for learning at scale. I helped shape the frontend with Next.js and Tailwind, and worked on architecture that could grow with the product suite. Aimed at stable delivery for real users, not demos.',
        img: edVissWeb,
        link: 'https://edviss.com',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Figma of EdViss',
        altText: 'figma_edviss',
        description:
            'Design system and screens for EdViss apps and the CMS before build. I structured flows in Figma so engineering and product shared one source of truth. Reduced guesswork between design and implementation.',
        img: figmaMagenta,
        link: 'https://www.figma.com/design/h6CMMpzzsyIKJZf8QClVwu/Magenta?node-id=203-2539&t=1ldf7GZxbKh6Tqf2-1',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Manashakti',
        altText: 'manashakti_web',
        description:
            'A UK remote project for registration and waitlist. Users needed a guided path, not a blank form. I shipped a simple web experience built with Lovable, focused on clear steps and a clean signup flow.',
        img: manaShaktiWeb,
        link: 'https://manashakti.xyz/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Manashakti Apps',
        altText: 'manashakti_web',
        description:
            'Mobile companion for AI-assisted communication. Built end-to-end with React Native, Expo, Supabase, and ElevenLabs. Owned the full build path from product flow to a working mobile app.',
        img: manashaktiApps,
        link: '/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Figma of Manashakti',
        altText: 'figma_manashakti',
        description:
            'Full UI design for the Manashakti mobile app before development. Mapped screens, states, and voice-led flows in Figma. Gave the build a clear blueprint and kept the product consistent.',
        img: figmaManashakti,
        link: '/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Ranah Karya',
        altText: 'ranah_karya',
        description:
            'A creative portfolio site for showcasing work online. Built with Next.js and Tailwind so pages stay fast and easy to update. Helped the brand present projects in a clean, modern layout.',
        img: ranahKaryaWeb,
        link: 'https://ranahkarya.com/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'FairPax Indonesia',
        altText: 'fairpaxindonesia',
        description:
            'An online store that needed checkout and shipping that work in Indonesia. I set up WordPress and WooCommerce, then integrated Midtrans for payments and RajaOngkir for shipping rates. Customers can buy and get delivery estimates in one flow.',
        img: fairPaxIndonesiaWeb,
        link: 'https://fairpaxindonesia.com/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Kaulu Concept',
        altText: 'kaulu_concept',
        description:
            'Interior design brand that needed a home for their portfolio and products. Built with React and Tailwind, and deployed a temporary link on Vercel. Focused on showing the work first with a fast, clean layout.',
        img: kauluConceptWeb,
        link: 'https://kauluconcept.com/',
        status: 'active',
        deployment: 'staging'
    },
    {
        name: 'Kingdom Technology',
        altText: 'kingdom_technology',
        description:
            'Remote internship with a 4-person Australia-based team building an AI social platform. This was not a public live product. I used the stack in day-to-day work and learning: Next.js, Clerk, Strapi headless, Gemini, and ClickUp for tasks. Focused on how a small team ships AI features in a real codebase.',
        img: kingdomTechnologyWeb,
        link: 'https://www.kingdomtech.life/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Trade Link Shop',
        altText: 'trade_link_shop',
        description:
            'E-commerce site for selling their own products. Built on WordPress, Elementor, and WooCommerce with custom CSS for brand fit. Integrated Duitku as the payment gateway so checkout works for local payments.',
        img: tradeLinkShopWeb,
        link: 'https://indo.tradelinkshop.com/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Portal HRMS',
        altText: 'hrms_web',
        description:
            'HR portal for employee and employer data, still evolving in production. Built tables, forms, and data fetching with Next.js, TypeScript, Material UI, Redux, and React Query. Aimed at reliable admin work, not flashy UI.',
        img: hrmsWeb,
        link: 'https://accel.id/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Vela Aero',
        altText: 'vela_aero_web',
        description:
            'Air mobility company needed a public site that explains the vision. Built with WordPress and Elementor, plus custom JS/CSS where the theme fell short. Kept the story clear for investors and partners.',
        img: velaAeroWeb,
        link: 'https://velaaero.com/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Portal Kampus',
        altText: 'portal_kampus_web',
        description:
            'Campus data portal used daily by students and staff. Part of a three-product EdTech suite built for thousands of users. I worked on Next.js screens with TypeScript, Material UI, Redux, React Query, and solid form handling.',
        img: portalKampusWeb,
        link: 'https://vpn.vertical.id/login',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Portal Kerja',
        altText: 'portal_kerja_web',
        description:
            'Job-seeker platform inside the same EdTech suite. Built with Next.js, TypeScript, Redux, and SCSS. Also part of a monorepo move I helped lead, from scattered JS repos to one shared frontend setup.',
        img: portalKerjaWeb,
        link: 'https://portalkerja.co.id/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Portal Sekolah',
        altText: 'portal_sekolah_web',
        description:
            'National-scale school SMS/LMS with thousands of daily users. Led dashboard UX and the announcements module. Added Jest unit tests and Cypress end-to-end coverage so releases were safer as the product grew.',
        img: portalSekolahWeb,
        link: 'https://portalsekolah.co.id/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Camy',
        altText: 'camy_web',
        description:
            'Learning site with video lessons and quizzes after each module. Built learner-facing UI with Next.js, TypeScript, and Tailwind. Kept progress and content easy to follow.',
        img: camyWeb,
        link: 'https://camy.id/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Timur Project',
        altText: 'timur_project_web',
        description:
            'Visual portfolio celebrating East Indonesia. Built a light Next.js and Tailwind site, deployed on Vercel, and connected hosting for the client. Made imagery the main story.',
        img: timurProjectWeb,
        link: 'https://timur-project.vercel.app/',
        status: 'inactive',
        deployment: 'staging'
    },
    {
        name: 'Kompek FEB UI',
        altText: 'kompek_feb_ui_web',
        description:
            'Event site for FEB UI, info pages plus registration. Built with WordPress and Elementor, and integrated Google API so confirmations send by email automatically. Less manual follow-up for the organizers.',
        img: kompekFEBUIWeb,
        link: 'https://kompekfebui.com/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Indo Menara Digital',
        altText: 'indo_menara_digital_web',
        description:
            'Agency site and client work during my full-time role in 2021. Delivered WordPress and Elementor projects for the company and clients. Also supported day-to-day IT for the team.',
        img: indoMenaraDigitalWeb,
        link: 'https://www.menaradigital.com/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Onyx Tailors',
        altText: 'onyx_tailors_web',
        description:
            'Tailoring brand selling custom clothing online. Set up WordPress with product customization plugins so customers can configure orders. Focused on a smooth path from browse to buy.',
        img: onyxTailorsWeb,
        link: 'https://onyxtailors.com/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Golkar Institue',
        altText: 'golkar_institute_web',
        description:
            'Training institute needed registration and course info in one place. Built the site on WordPress with LMS plugins for learning content. Made signup and course discovery straightforward.',
        img: golkarInstituteWeb,
        link: 'https://golkarinstitute.org/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'TEP',
        altText: 'tep_web',
        description:
            'Holding group site covering 11 companies in two languages. Structured WordPress with mega menus so visitors can find each company without getting lost. Built for clarity across a large brand family.',
        img: tepWeb,
        link: 'http://www.tep.co.id/en/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Indonesia Health Pass',
        altText: 'indonesia_health_pass',
        description:
            'Public profile site introducing Indonesia Health Pass and linking to the World Health Passport system. Built in WordPress for quick content updates. Kept the message simple for a wide audience.',
        img: indonsiaHealthPassWeb,
        link: '',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Bersama Dokter',
        altText: 'bersama_dokter_web',
        description:
            'COVID-era site for swab/PCR registration, company info, and related products. Built on WordPress so ops could change content fast. Prioritized clear booking paths under time pressure.',
        img: bersamaDokterWeb,
        link: '',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'HIPMI',
        altText: 'hipmi_web',
        description:
            'Organization site for news and updates. Built with WordPress so the team can publish without developers. Simple structure so members find the latest info quickly.',
        img: hipmiWeb,
        link: '',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Sunset People Project',
        altText: 'sunset_people_project_web',
        description:
            'Event registration that should not leave people waiting for a human reply. Built WordPress forms and basic WhatsApp automation so confirmations go out right after signup. Cut manual follow-up for the organizers.',
        img: sunsetPeopleProjecteWeb,
        link: 'http://sunsetpeopleproject.com/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Sewa Blower Murah',
        altText: 'sewa_blower_murah_web',
        description:
            'Local wedding rental business in Bekasi needed online booking. Built the site with WordPress and Elementor so they can manage packages and inquiries. Made it easy for customers to request rentals.',
        img: sewaBlowerMurahWeb,
        link: 'https://sewablowermurah.com/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Ruhama Alexandria',
        altText: 'ruhama_alexandria_web',
        description:
            'Wedding services brand needed a complete online presence. Built service pages and contact flows with WordPress and Elementor. Helped couples find offerings without chasing chat threads.',
        img: ruhamaAlexandriaWeb,
        link: 'http://ruhamaalexandria.com/',
        status: 'inactive',
        deployment: 'maintenance'
    },
    {
        name: 'Mediatech',
        altText: 'mediatech_web',
        description:
            'E-commerce storefront on a Woodmart WordPress theme. Integrated RajaOngkir so shipping costs show during checkout. Goal was a working buy flow, not just a catalog.',
        img: mediatechWeb,
        link: 'https://mediatech.co.id/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Livera',
        altText: 'livera_web',
        description:
            'Product site for Livera healthy drinks under PT. Digital Anak Muda. Built pages that put products and brand story first. Kept it light so marketing can update content often.',
        img: liveraWeb,
        link: 'https://www.product.livera.id/',
        status: 'active',
        deployment: 'production'
    },
    {
        name: 'Chameleon / Digital Native Agency',
        altText: 'chameleon_web',
        description:
            'Corporate site for Chameleon (DNA) on a 4-month contract (2020-2021). Delivered WordPress with custom JS and Vue pieces where needed. Focused on a solid agency portfolio the team could maintain.',
        img: chameleonWeb,
        link: '',
        status: 'inactive',
        deployment: 'maintenance'
    },
]

/** @deprecated Use SKILLS. Kept for existing imports. */
export const LIST_TECH_MASTERED = SKILLS.map((skill, index) => ({
  id: String(index),
  name: skill.name,
  altText: skill.altText,
  icon: skill.icon,
}));

export const STATS_DATA: IStatsData[] = [
    {
      num: 5,
      text: 'Years of Experience'
    },
    {
      id: 'project_completed',
      num: 27,
      text: 'Projects Completed'
    },
    {
      id: 'tech_mastered',
      num: SKILLS.length,
      text: 'Technologies Mastered'
    },
    {
      num: 1857,
      text: 'Code Commits'
    }
  ];