export type Theme = 'dark' | 'light';

export type Path = '/' | '/about';

export type NavItem = {
    to: Path;
    label: string;
    dot?: string;
    exact?: boolean;
};

export type LinkState = { isActive: boolean; isPending: boolean };