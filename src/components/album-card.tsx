import { Image, StyleSheet, Text, View } from "react-native";

import { Album } from "@/models/album";

const priceFormatter = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

type AlbumCardProps = {
  album: Album;
};

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: album.coverUrl }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.genre}>{album.genre}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {album.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {album.artist} · {album.year}
        </Text>
        <Text style={styles.price}>{priceFormatter.format(album.price)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
  },
  cover: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#eee",
  },
  body: {
    padding: 12,
    gap: 2,
  },
  genre: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#2a9d8f",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1d1f3a",
  },
  artist: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "600",
    color: "#1d1f3a",
  },
});
