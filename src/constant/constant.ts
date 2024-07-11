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

import { IExperiencesData, IHomeHeading, ILinks } from './type';

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
]

export const HOME_HEADING_INFO: IHomeHeading = {
    name: 'Briyan Sitinjak',
    role: 'Frontend - WordPress Developer',
    headingText: "Hello I'm",
    description:
        "I'm passionate about leveraging cutting-edge tech to bring my ideas to life in projects"
};

export const LIST_EXPERIENCES: IExperiencesData[] = [
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