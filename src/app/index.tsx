import { StyleSheet, View } from "react-native";

import { AlbumCard } from "@/components/album-card";
import { ALBUMS } from "@/data/albums";

export default function Index() {
  return (
    <View style={styles.container}>
      <AlbumCard album={ALBUMS[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    maxWidth: 400,
  },
});
