export interface IExperiencesData {
    name: string;
    altText: string;
    description: string;
    img: any;
    link: string;
    status: 'active' | 'maintenance' | 'inactive' | 'coming soon';
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

export type MetadataMediaItem = {
    cacheControl: string;
    contentLength: number;
    eTag : string;
    httpStatusCode: number;
    lastModified: string;
    mimetype: string;
    size: number;
}

export type MediaItem = {
    created_at: string;
    id: string;
    last_accessed_at: string;
    metadata: MetadataMediaItem;
    name: string;
    updated_at: string;
}
