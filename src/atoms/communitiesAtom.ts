import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
    id: string;
    name: string;
    numberOfMembers: number;
    privacyType: "public" | "restricted" | "private";
    createdAt?: Timestamp;
    imageURL?: string;
}