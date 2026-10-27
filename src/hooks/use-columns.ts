import { useWindowDimensions } from "react-native";

export function useColumns(): number {
  const { width } = useWindowDimensions();

  if (width >= 1200) return 4;
  if (width >= 900) return 3;
  if (width >= 600) return 2;
  return 1;
}
