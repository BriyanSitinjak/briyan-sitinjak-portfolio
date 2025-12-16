import tepWeb from '@/src/assets/tep_web.png';
import hrmsWeb from '@/src/assets/hrms_web.png';
import camyWeb from '@/src/assets/camy_web.png';
import hipmiWeb from '@/src/assets/hipmi_web.png';
import liveraWeb from '@/src/assets/livera_web.png';
import velaAeroWeb from '@/src/assets/vela_aero_web.png';
import mediatechWeb from '@/src/assets/mediatech_web.png';
import chameleonWeb from '@/src/assets/chameleon_web.png';
import onyxTailorsWeb from '@/src/assets/onyx_tailors_web.png';
import portalKerjaWeb from '@/src/assets/portal_kerja_web.png';
import kompekFEBUIWeb from '@/src/assets/kompek_feb_ui_web.png';
import portalKampusWeb from '@/src/assets/portal_kampus_web.png';
import timurProjectWeb from '@/src/assets/timur_project_web.png';
import bersamaDokterWeb from '@/src/assets/bersama_dokter_web.png';
import portalSekolahWeb from '@/src/assets/portal_sekolah_web.png';
import tradeLinkShopWeb from '@/src/assets/trade_link_shop_web.png';
import golkarInstituteWeb from '@/src/assets/golkar_institute_web.png';
import sewaBlowerMurahWeb from '@/src/assets/sewa_blower_murah_web.png';
import ruhamaAlexandriaWeb from '@/src/assets/ruhama_alexandria_web.png';
import indoMenaraDigitalWeb from '@/src/assets/indo_menara_dgitial_web.png';
import indonsiaHealthPassWeb from '@/src/assets/indonesia_health_pass_web.png';
import sunsetPeopleProjecteWeb from '@/src/assets/sunset_people_project_web.png';
import kauluConceptWeb from '@/src/assets/kaulu_concept_web.png';
import manaShaktiWeb from '@/src/assets/manashakti_web.png';
import kingdomTechnologyWeb from '@/src/assets/kingdom_technology_web.png';

import ReactJsIcon from '@/src/assets/icon_react.svg';
import BootstrapIcon from '@/src/assets/icon_bootstrap.svg'
import NextJsIcon from '@/src/assets/icon_nextjs.svg';
import ReduxJsIcon from '@/src/assets/icon_redux.svg';
import TypescriptIcon from '@/src/assets/icon_typescript.svg';
import AngularJsIcon from '@/src/assets/icon_angularjs.svg';
import PHPIcon from '@/src/assets/icon_php.svg';
import FirebaseIcon from '@/src/assets/icon_firebase.svg';
import CypressIcon from '@/src/assets/icon_cypress.svg';
import SentryIcon from '@/src/assets/icon_sentry.svg';
import StoryBookIcon from '@/src/assets/icon_storybook.svg';
import GithubIcon from '@/src/assets/icon_github.svg';
import GitlabIcon from '@/src/assets/icon_gitlab.svg';
import TailwindIcon from '@/src/assets/icon_tailwindsvg.svg';
import SASSIcon from '@/src/assets/icon_sass.svg';
import MaterialIcon from '@/src/assets/icon_material.svg';
import FramerMotionIcon from '@/src/assets/icon_framer_motion.svg';
import WordPressIcon from '@/src/assets/icon_wordpress.svg';
import ElementorIcon from '@/src/assets/icon_elementor.svg';
import WoocommerceIcon from '@/src/assets/icon_woocommerce.svg';

import { IExperiencesData, IHomeHeading, ILinks, IStatsData, ITechMastered } from './type';

export const CV_URL = 'https://drive.google.com/file/d/1BPZ2Q64nGw6ZCqhv8bmam6IkKlIseQip/view?usp=sharing';

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
    {
        name: '🌻❤️🌻',
        path: '/anesya',
        mobileOnly: true
    }

]

export const HOME_HEADING_INFO: IHomeHeading = {
    name: 'Briyan Sitinjak',
    role: 'Web Developer',
    headingText: "Hello I'm",
    description:
        "I'm passionate about leveraging cutting-edge tech to bring my ideas to life in projects"
};

export const LIST_EXPERIENCES: IExperiencesData[] = [
    {
        name: 'Manashakti',
        altText: 'manashakti_web',
        description: 'Application for communcation with AI assistant using React Native, Expo, Supabase and ElevenLabs',
        img: manaShaktiWeb,
        link: 'https://manashakti.xyz/'
    },
    {
        name: 'Ranah Karya',
        altText: 'ranah_karya',
        description: 'Website for portfolio that has been developed using NextJs, Chakra UI, and TailwindCSS',
        img: tradeLinkShopWeb,
        link: 'https://ranahkarya.com/'
    },
    {
        name: 'Fairpax',
        altText: 'fairpax_web',
        description: 'Web commerce for selling products using WooCommerce and WordPress and implement the payment gateway and shipping using radjaongkir',
        img: tradeLinkShopWeb,
        link: 'https://manashakti.xyz/'
    },
    {
        name: 'Kaulu Concept',
        altText: 'kaulu_concept',
        description: 'Website that showing the portfolio for design interior and some products from Kaulu Concept',
        img: kauluConceptWeb,
        link: 'https://kauluconcept.com/'
    },
    {
        name: 'Kingdom Technology',
        altText: 'kingdom_technology',
        description: 'Website for portfolio that showing the automation AI services that has been created using Framer (without motion hehehe)',
        img: kingdomTechnologyWeb,
        link: 'https://www.kingdomtech.life/'
    },
    {
        name: 'Trade Link Shop',
        altText: 'trade_link_shop',
        description: 'Website for e-commerce for selling own product. Worked on these use WordPress, Elementor, Woocommerce and Custom CSS. Also integration with Payment Gateway from duitku.com',
        img: tradeLinkShopWeb,
        link: 'https://indo.tradelinkshop.com/'
    },
    {
        name: 'Portal HRMS',
        altText: 'hrms_web',
        description: 'The portal manage employee and employeer. Developed using NextJs, Typescript, Material UI, Material React Table, React Query, useContext, yupValidation React Hook Form and useContext. This is still on development mode.',
        img: hrmsWeb,
        link: 'https://accel.id/'
    },
    {
        name: 'Vela Aero',
        altText: 'vela_aero_web',
        description: 'Website for portfolio of air mobility, one of the innovation for transportation Worked on these use WordPress, Elementor, and Custom Javascript and CSS',
        img: velaAeroWeb,
        link: 'https://velaaero.com/'
    },
    {
        name: 'Portal Kampus',
        altText: 'portal_kampus_web',
        description: 'The portal for campus to collect their data in one portal. Developed using NextJs, Typescript, Material UI, Material React Table, React Query, useContext, yupValidation React Hook Form and useContext. This is still on development mode.',
        img: portalKampusWeb,
        link: 'https://vpn.vertical.id/login'
    },
    {
        name: 'Portal Kerja',
        altText: 'portal_kerja_web',
        description: 'The portal for job seekers to find the best jobs depends on your skill and experience. Developed using React.js , Typescript, Redux and SASS. This is still on development mode.',
        img: portalKerjaWeb,
        link: 'https://portalkerja.co.id/'
    },
    {
        name: 'Portal Sekolah',
        altText: 'portal_sekolah_web',
        description: 'School Management System (SMS), Learning Management System (LMS) that has been developed with React.Js, Redux and SASS. I am the PIC for Dashboard view and the feature of Announcement. Dummy Account username: jjdumjo.briyan password: portal267',
        img: portalSekolahWeb,
        link: 'https://portalsekolah.co.id/'
    },
    {
        name: 'Camy',
        altText: 'camy_web',
        description: 'Website for develop your new skill using video and quizzes after the lessons. Developed using Next.Js, Typescript, MaterialUI and SASS',
        img: camyWeb,
        link: 'https://camy.id/'
    },
    {
        name: 'Timur Project',
        altText: 'timur_project_web',
        description: 'Website Portfolio for showing the greatness view of East Indonesia. Worked on this use NextJs, Tailwind, and Vercel for the temporary deployment And also connect with Hostinger',
        img: timurProjectWeb,
        link: 'https://timur-project.vercel.app/'
    },
    {
        name: 'Kompek FEB UI',
        altText: 'kompek_feb_ui_web',
        description: 'Website as information and event registration for the Faculty of Economics and Business, University of Indonesia. Developed using WordPress and Elementor. Also using GoogleAPI for the automatic email confirmation through WPMail',
        img: kompekFEBUIWeb,
        link: 'https://kompekfebui.com/'
    },
    {
        name: 'Indo Menara Digital',
        altText: 'indo_menara_digital_web',
        description: 'Website of Digital Agency that shows the information about the services provided. Developed using WordPress only with Elementor and Slider Revolutions',
        img: indoMenaraDigitalWeb,
        link: 'https://www.menaradigital.com/'
    },
    {
        name: 'Onyx Tailors',
        altText: 'onyx_tailors_web',
        description: 'Sales of products in the form of elegant clothing with the best materials. Developed using WordPress and plugin for create your own clothes',
        img: onyxTailorsWeb,
        link: 'https://onyxtailors.com/'
    },
    {
        name: 'Golkar Institue',
        altText: 'golkar_institute_web',
        description: 'Website for registration and explanation of training from Golkar. Developed using WordPress and plugin for handling Learning Management System (LMS)',
        img: golkarInstituteWeb,
        link: 'https://golkarinstitute.org/'
    },
    {
        name: 'TEP',
        altText: 'tep_web',
        description: 'Website holding group for 11 company. Made in dual languages containing information related to the TEP Group. Developed using WordPress and Mega Menu Plugin',
        img: tepWeb,
        link: 'http://www.tep.co.id/en/'
    },
    {
        name: 'Indonesia Health Pass',
        altText: 'indonesia_health_pass',
        description: 'Website as profile in introducing Indonesia Health Pass. The system is linked to the core web of World Health Passport Developed using WordPress',
        img: indonsiaHealthPassWeb,
        link: ''
    },
    {
        name: 'Bersama Dokter',
        altText: 'bersama_dokter_web',
        description: 'Website for registration of swabs and PCR tests, portfolio and also selling the product for against COVID-19. Developed using WordPress',
        img: bersamaDokterWeb,
        link: ''
    },
    {
        name: 'HIPMI',
        altText: 'hipmi_web',
        description: 'Website as an information viewer, the latest news and info about HIPMI. Developed using WordPress',
        img: hipmiWeb,
        link: ''
    },
    {
        name: 'Sunset People Project',
        altText: 'sunset_people_project_web',
        description: 'The website as a registrant to take part in events that is integrated with automated response via WhatsApp. Developed using WordPress and API for Automation respon through Whatsapp',
        img: sunsetPeopleProjecteWeb,
        link: 'http://sunsetpeopleproject.com/'
    },
    {
        name: 'Sewa Blower Murah',
        altText: 'sewa_blower_murah_web',
        description: 'Website for booking some weeding needs especially in Bekasi, Indonesia. Developed using WordPress and Elementor',
        img: sewaBlowerMurahWeb,
        link: 'https://sewablowermurah.com/'
    },
    {
        name: 'Ruhama Alexandria',
        altText: 'ruhama_alexandria_web',
        description: 'Website to provide all of the things for weedding. Developed using WordPress and Elementor',
        img: ruhamaAlexandriaWeb,
        link: 'http://ruhamaalexandria.com/'
    },
    {
        name: 'Mediatech',
        altText: 'mediatech_web',
        description: 'The e-Commerce platform that has built using the Woodmart theme. The transaction process uses the API Radja Ongkir as a payment',
        img: mediatechWeb,
        link: 'https://mediatech.co.id/'
    },
    {
        name: 'Livera',
        altText: 'livera_web',
        description: 'Showing a portfolio of products made by Livera as healthy drink consumption. One of the products from PT. Digital Anak Muda',
        img: liveraWeb,
        link: 'https://www.product.livera.id/'
    },
    {
        name: 'Chameleon / Digital Native Agency',
        altText: 'chameleon_web',
        description: 'Displays a portfolio of Digital Native Agency (DNA) or recently called by Chameleon companies as corporate information portals. This has been developed using VueJs and CSS',
        img: chameleonWeb,
        link: ''
    },
]

export const LIST_TECH_MASTERED: ITechMastered[] = [
    {
        id: '0',
        name: 'ReactJs',
        altText: 'react',
        icon: ReactJsIcon
    },
    {
        id: '1',
        name: 'Bootstrap',
        altText: 'bootstrap',
        icon: BootstrapIcon
    },
    {
        id: '2',
        name: 'NextJs',
        altText: 'next_js',
        icon: NextJsIcon
    },
    {
        id: '3',
        name: 'ReduxJs',
        altText: 'redux_js',
        icon: ReduxJsIcon
    },
    {
        id: '4',
        name: 'Typescript',
        altText: 'typescript',
        icon: TypescriptIcon
    },
    {
        id: '5',
        name: 'AngularJs',
        altText: 'angular_js',
        icon: AngularJsIcon
    },
    {
        id: '6',
        name: 'PHP',
        altText: 'php',
        icon: PHPIcon
    },
    {
        id: '7',
        name: 'Firebase',
        altText: 'firebase',
        icon: FirebaseIcon
    },
    {
        id: '8',
        name: 'Cypress',
        altText: 'cypress',
        icon: CypressIcon
    },
    {
        id: '9',
        name: 'Sentry',
        altText: 'sentry',
        icon: SentryIcon
    },
    {
        id: '10',
        name: 'Storybook',
        altText: 'storybook',
        icon: StoryBookIcon
    },
    {
        id: '11',
        name: 'Github',
        altText: 'github',
        icon: GithubIcon
    },
    {
        id: '12',
        name: 'Gitlab',
        altText: 'gitlab',
        icon: GitlabIcon
    },
    {
        id: '13',
        name: 'Tailwind',
        altText: 'tailwind',
        icon: TailwindIcon
    },
    {
        id: '14',
        name: 'SASS',
        altText: 'SASS',
        icon: SASSIcon
    },
    {
        id: '15',
        name: 'MaterialUI',
        altText: 'material_ui',
        icon: MaterialIcon
    },
    {
        id: '16',
        name: 'FramerMotion',
        altText: 'framer_motion',
        icon: FramerMotionIcon
    },
    {
        id: '17',
        name: 'Wordpress',
        altText: 'wordpress',
        icon: WordPressIcon
    },
    {
        id: '18',
        name: 'Elementor',
        altText: 'elementor',
        icon: ElementorIcon
    },
    {
        id: '19',
        name: 'Woocomerce',
        altText: 'woocomerce',
        icon: WoocommerceIcon
    },
]

export const STATS_DATA: IStatsData[] = [
    {
      num: 4,
      text: 'Years of Experiences'
    },
    {
      id: 'project_completed',
      num: 27,
      text: 'Projects Completed'
    },
    {
      id: 'tech_mastered',
      num: 24,
      text: 'Technologies Mastered'
    },
    {
      num: 1857,
      text: 'Code Commits'
    }
  ];