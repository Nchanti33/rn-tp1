import { FlatList, StyleSheet, View } from "react-native";

import { AlbumCard } from "@/components/album-card";
import { ALBUMS } from "@/data/albums";
import { useColumns } from "@/hooks/use-columns";

export default function Index() {
  const columns = useColumns();

  return (
    <View style={styles.screen}>
      <FlatList
        // FlatList ne supporte pas un changement de numColumns : la key force sa recréation.
        key={columns}
        data={ALBUMS}
        keyExtractor={(album) => album.id}
        numColumns={columns}
        style={styles.list}
        contentContainerStyle={styles.content}
        columnWrapperStyle={columns > 1 ? styles.row : undefined}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <AlbumCard album={item} />
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
  list: {
    width: "100%",
    maxWidth: 1280,
    alignSelf: "center",
  },
  content: {
    padding: 16,
    gap: 16,
  },
  row: {
    gap: 16,
  },
  cell: {
    flex: 1,
  },
});
