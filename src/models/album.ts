export type Genre = "rock" | "jazz" | "pop" | "hip-hop" | "electro";

export type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: Genre;
  price: number;
  inStock: boolean;
  coverUrl: string;
};

export const GENRES: Genre[] = ["rock", "jazz", "pop", "hip-hop", "electro"];
