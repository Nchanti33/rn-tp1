import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { AlbumCard } from "@/components/album-card";
import { ALBUMS } from "@/data/albums";
import { useColumns } from "@/hooks/use-columns";
import { formatPrice } from "@/utils/format";

export default function Index() {
  const columns = useColumns();
  const [cartIds, setCartIds] = useState<string[]>([]);

  const cartAlbums = ALBUMS.filter((album) => cartIds.includes(album.id));
  const cartTotal = cartAlbums.reduce((total, album) => total + album.price, 0);

  function toggleCart(albumId: string) {
    setCartIds((ids) => (ids.includes(albumId) ? ids.filter((id) => id !== albumId) : [...ids, albumId]));
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.cart}>
          Panier : {cartAlbums.length} · {formatPrice(cartTotal)}
        </Text>
      </View>
      <FlatList
        // FlatList ne supporte pas un changement de numColumns : la key force sa recréation.
        key={columns}
        data={ALBUMS}
        keyExtractor={(album) => album.id}
        numColumns={columns}
        style={styles.list}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <View style={[styles.cell, cellWidths[columns]]}>
            <AlbumCard album={item} inCart={cartIds.includes(item.id)} onToggleCart={toggleCart} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f4f4f7",
  },
  header: {
    width: "100%",
    maxWidth: 1280,
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  cart: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1d1f3a",
  },
  list: {
    width: "100%",
    maxWidth: 1280,
    alignSelf: "center",
  },
  content: {
    padding: 8,
  },
  cell: {
    padding: 8,
  },
});

// Largeur fixe par colonne : la dernière ligne incomplète ne s'étire pas.
const cellWidths = StyleSheet.create({
  1: { width: "100%" },
  2: { width: "50%" },
  3: { width: "33.333%" },
  4: { width: "25%" },
});
