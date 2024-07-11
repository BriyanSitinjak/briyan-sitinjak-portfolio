export interface IExperiencesData {
    name: string;
    altText: string;
    description: string;
    img: any;
    link: string;
}

export interface IHomeHeading {
    name: string;
    role: string;
    headingText: string;
    description: string;
}

export interface ILinks {
    name: string;
    path: string
}

export interface IStatsData {
    id?: string;
    num: number;
    text: string;
  }