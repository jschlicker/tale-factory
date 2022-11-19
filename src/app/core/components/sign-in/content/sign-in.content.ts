import { CarouselItem } from "../../../../shared/models/carousel-item.model";

export interface SignInContent extends Array<CarouselItem> {}

export const CONTENT: SignInContent = [
    {
        title: "Online management",
        description:
            "Tale-Factory offers different ways to create and edit your adventure...from a simple item to a whole story.",
        img: "../../../../../assets/images/cloud-document-management.svg",
    },
    {
        title: "Live sessions",
        description:
            "Thanks to intelligent and far-reaching functionalities, an authentic and exciting gaming experience is created, so that every game round makes fun as much as in real.",
        img: "../../../../../assets/images/online-live-sessions.svg",
    },
    {
        title: "Cloud storage",
        description: "All files are backed up online and can be shared or made publicly available if required.",
        img: "../../../../../assets/images/publicly-document-providing.svg",
    },
];
