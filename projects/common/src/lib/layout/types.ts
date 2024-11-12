// import { MenuItem } from "@rbcorp/ui-infra";
import { MenuItem, TextMenuItem } from "@js-sugar/angular";

export interface WorkspaceLayout1Configuration {
    showLoading?: boolean,
    sidebar: {
        open: boolean,
        headerText?: string;
        menuItems?: MenuItem<any>[];
        footerMenuItems?: MenuItem<any>[];
        user?: {
            title?: string;
            subTitle?: string;
        }
    },
    appbar: {
        appName: string,
        menu?: {
            title?: string;
            items: MenuItem<any>[];
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