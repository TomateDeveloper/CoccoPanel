import {MenuItem} from "./menu-item.model";

export const MENU: MenuItem[] = [
    {
        title: "General",
        link: "",
        icon: "",
        root: true,
        sub: [
            {
                title: "Dashboard",
                link: "/",
                icon: "uil uil-dropbox",
                root: false,
                sub: []
            }
        ]
    },
    {
        title: "Producción",
        link: "",
        icon: "",
        root: true,
        sub: [
            {
                title: "Material",
                link: "/material",
                icon: "uil uil-dropbox",
                root: false,
                sub: []
            },
            {
                title: "Productos",
                link: "/products",
                icon: "uil uil-bag",
                root: false,
                sub: []
            },
        ]
    },
    {
        title: "Administración",
        link: "",
        icon: "",
        root: true,
        sub: [
            {
                title: "Usuarios",
                link: "/users",
                icon: "uil uil-user",
                root: false,
                sub: []
            },
            {
                title: "Grupos",
                link: "/groups",
                icon: "uil uil-layer-group",
                root: false,
                sub: []
            },
        ]
    },
];