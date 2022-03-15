import {MenuItem} from "./menu-item.model";

export const MENU: MenuItem[] = [
    {
        title: "Admin Tools",
        link: "",
        icon: "",
        root: true,
        sub: [
            {
                title: "Dashboard",
                link: "/",
                icon: "uil uil-tachometer-fast-alt",
                root: false,
                sub: []
            },
            {
                title: "Producción",
                link: "/products",
                icon: "uil uil-bag",
                root: false,
                sub: []
            },
            {
                title: "Contactos",
                link: "/contact",
                icon: "uil uil-user",
                root: false,
                sub: []
            },
            {
                title: "Administración",
                link: "/admin",
                icon: "uil uil-chart",
                root: false,
                sub: []
            },
        ]
    },
];