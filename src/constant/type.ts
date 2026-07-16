export interface IExperiencesData {
    name: string;
    altText: string;
    description: string;
    img: any;
    link: string;
    status: 'active' | 'maintenance' | 'inactive';
}

export interface ISocialLink {
    name: string;
    url: string;
}

export interface IHomeHeading {
    name: string;
    role: string;
    headingText: string;
    description: string;
}

export interface ILinks {
    name: string;
    path: string;
    mobileOnly?: boolean;
}

export interface IStatsData {
    id?: string;
    num: number;
    text: string;
}

export interface ITechMastered {
    id?: string;
    name: string;
    altText:string;
    icon: any;
}
