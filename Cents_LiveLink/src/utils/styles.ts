export const hexToRgba = (hex: string, opacity = 1) => {
  if (!hex) {
    return null;
  }
  let r = "0",
    g = "0",
    b = "0";

  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  return `rgba(${+r},${+g},${+b},${opacity})`;
};
