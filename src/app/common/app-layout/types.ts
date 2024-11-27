// import { MenuItem } from "@rbcorp/ui-infra";
// import { MenuItem, TextMenuItem } from "@js-sugar/angular";

export interface WorkspaceLayout1Configuration {
    showLoading?: boolean,
    sidebar: {
        open: boolean,
        headerText?: string;
        menuItems?: any[];
        footerMenuItems?: any[];
        user?: {
            title?: string;
            subTitle?: string;
        }
    },
    appbar: {
        appName: string,
        menu?: {
            title?: string;
            items: any[];
        }
    },
    content?: {
        insideCard?: boolean
    }
}

export interface WaitingDescriptor {
    show: boolean;
    text?: string;
}