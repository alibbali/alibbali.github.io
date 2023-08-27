import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image";
// @ts-ignore
import image from "../assets/social.png";
// @ts-ignore
import pic from "../assets/brian-alibali.png";

export interface Author {
    firstname: string;
    bio: string;
    profilePic: ImageMetadata;
    os?: string;
    shell?: string;
    lastname: string;
    socials: Socials[];
}

export interface Socials {
    name: string;
    link: string;
}

export interface Site {
    lang: string;
    rssTitle: string;
    siteName: string;
    title: string;
    description: string;
    image: ImageMetadata;
    twitterCreator: string;
    author: Author;
}

export const site: Site = {
    lang: "fr",
    rssTitle: "Le blog de monbry",
    siteName: "Brian Alibali | Développeur web Full Stack PHP & JS",
    title: "Développeur web fullstack à Bordeaux.",
    description:
        "Bienvenue sur mon site personnel. Il fera office de portfolio et me permettra de partager des articles sur différents sujet.",
    image: image,
    twitterCreator: "",
    author: {
        os: "MacOS",
        profilePic: pic,
        shell: "Zsh",
        bio: "Je suis un développeur web, passionée par mon métier et le basket.",
        firstname: "Brian",
        lastname: "Alibali",
        socials: [
            {
                name: "Malt",
                link: "https://www.malt.fr/profile/brianalibali",
            },
            {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/brian-alibali-developpeur-web/"
            },
            {
                name: "Github",
                link: "https://github.com/alibbali"
            }
        ],
    },
};
