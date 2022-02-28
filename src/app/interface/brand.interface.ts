export interface BrandInterface{
    business: string;
    brand: string;
    year: string;
    description: string;
    logo: string;
    wallpapper: string;
    wallpapper_mobile:string;
    routerLink: [];
    projects?: BrandProjectInterface[];
    url : string;
    carousel: [];
    cover: string;
    histories: string;
}

export interface BrandProjectInterface{
    title: string;
    row: any[];
    height: string;
    carousel: any[];
}

export interface BrandGridInterface{
    grid: any[];
}