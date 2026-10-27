import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { Genre, GENRES } from "@/models/album";

type GenreFilterProps = {
  selected: Genre | null;
  onSelect: (genre: Genre | null) => void;
};

const OPTIONS: { label: string; value: Genre | null }[] = [
  { label: "Tous", value: null },
  ...GENRES.map((genre) => ({ label: genre, value: genre })),
];

export function GenreFilter({ selected, onSelect }: GenreFilterProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {OPTIONS.map(({ label, value }) => {
        const active = value === selected;
        return (
          <Pressable
            key={label}
            onPress={() => onSelect(value)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            style={({ pressed }) => [styles.chip, active && styles.chipActive, pressed && styles.chipPressed]}
          >
            <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>{label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  chipActive: {
    backgroundColor: "#1d1f3a",
    borderColor: "#1d1f3a",
  },
  chipPressed: {
    opacity: 0.7,
  },
  chipLabel: {
    color: "#1d1f3a",
    fontWeight: "500",
  },
  chipLabelActive: {
    color: "#fff",
  },
});
