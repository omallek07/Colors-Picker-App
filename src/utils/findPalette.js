export const findPalette = (id, palettes) => {
  return palettes.find((palette) => palette.id === id);
};
