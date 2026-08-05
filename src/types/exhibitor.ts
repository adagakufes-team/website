export type UniversityId = "teika" | "geidai" | "tdu" | "mirai" | "bunkyo";

export type Exhibitor = {
  id: string;
  university: UniversityId;
  universityName: string;
  name: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  website?: string;
  x?: string;
  instagram?: string;
};
