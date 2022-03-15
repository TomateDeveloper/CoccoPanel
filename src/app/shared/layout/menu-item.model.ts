export interface MenuItem {
    title: string;
    link: string;
    icon: string;
    root: boolean;
    sub: MenuItem[];
}