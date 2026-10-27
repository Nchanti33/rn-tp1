import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Album } from "@/models/album";
import { formatPrice } from "@/utils/format";

type AlbumCardProps = {
  album: Album;
  inCart: boolean;
  onToggleCart: (albumId: string) => void;
};

export function AlbumCard({ album, inCart, onToggleCart }: AlbumCardProps) {
  let label = "Ajouter au panier";
  if (!album.inStock) label = "Épuisé";
  else if (inCart) label = "Dans le panier ✓";

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
        <Text style={styles.price}>{formatPrice(album.price)}</Text>
        <Pressable
          onPress={() => onToggleCart(album.id)}
          disabled={!album.inStock}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.button,
            inCart && styles.buttonInCart,
            !album.inStock && styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={[styles.buttonLabel, !album.inStock && styles.buttonLabelDisabled]}>{label}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
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
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#1d1f3a",
  },
  buttonInCart: {
    backgroundColor: "#2a9d8f",
  },
  buttonDisabled: {
    backgroundColor: "#d5d5da",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonLabelDisabled: {
    color: "#888",
  },
});
