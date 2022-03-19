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
                icon: "uil uil-tachometer-fast-alt",
                root: false,
                sub: []
            },
            {
                title: "Contactos",
                link: "/contacts",
                icon: "uil uil-book-open",
                root: false,
                sub: []
            },
        ]
    },
    {
        title: "Producción",
        link: "",
        icon: "",
        root: true,
        sub: [
            {
                title: "Productos",
                link: "/products",
                icon: "uil uil-bag",
                root: false,
                sub: []
            },
            {
                title: "Materiales",
                link: "/materials",
                icon: "uil uil-brush-alt",
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
                icon: "uil uil-house-user",
                root: false,
                sub: []
            },
            {
                title: "Grupos",
                link: "/groups",
                icon: "uil uil-key-skeleton",
                root: false,
                sub: []
            },
        ]
    },
];


export const PROFILE_MENU: MenuItem[] = [
    {
        title: "Perfil",
        link: "",
        icon: "uil uil-user-square",
        root: true,
        sub: []
    },
    {
        title: "Cerrar sesión",
        link: "",
        icon: "uil uil-signout",
        root: true,
        sub: []
    }
];