import { useWindowDimensions } from "react-native";

export type Columns = 1 | 2 | 3 | 4;

export function useColumns(): Columns {
  const { width } = useWindowDimensions();

  if (width >= 1200) return 4;
  if (width >= 900) return 3;
  if (width >= 600) return 2;
  return 1;
}
