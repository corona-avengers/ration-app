export type ColorName =
  | "grey"
  | "yellow"
  | "orange"
  | "blue"
  | "blue-green"
  | "green"
  | "red";
export type ToneLevel = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 80 | 100;
export type ToneLevelV2 = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

const palette: { [color in ColorName]: { [tone: string]: string } } = {
  grey: {
    "0": "#FFFFFF",
    "10": "#F8FAFC",
    "20": "#EEF1F7",
    "30": "#CBD2D9",
    "40": "#9AA5B1",
    "80": "#3E4C59",
    "100": "#000000",
  },
  yellow: {
    "10": "#FFFBEA",
    "20": "#FFF3C4",
    "30": "#F8E495",
    "50": "#CB6E17",
  },
  orange: {
    "30": "#F9DBAF",
  },
  blue: {
    "10": "#D6DDE1",
    "20": "#ACBAC2",
    "30": "#8398A4",
    "40": "#597585",
    "50": "#305367",
    "60": "#264252",
  },
  "blue-green": {
    "40": "#0E8086",
  },
  green: {
    "10": "#F2FDF3",
    "20": "#E3F9E5",
    "30": "#C8F4CD",
    "40": "#B1EFB5",
    "50": "#51CA58",
    "60": "#0F8613",
  },
  red: {
    "10": "#FFF5F5",
    "20": "#FFE3E3",
    "30": "#FFD1D1",
    "40": "#FB8383",
    "50": "#F94343",
    "60": "#D14541",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const paletteV2: { [color in ColorName]: { [tone: string]: string } } = {
  grey: {
    "0": "#FFFFFF",
    "10": "#F5F7F9",
    "20": "#ECEFF3",
    "30": "#CDD1D6",
    "40": "#ABB1B7",
    "50": "#8C949B",
    "60": "#686E74",
    "70": "#53595D",
    "80": "#373C40",
    "90": "#1B1D1F",
  },
  yellow: {
    "10": "#FFFBEA",
    "20": "#FFF3C4",
    "30": "#F8E495",
    "50": "#CB6E17",
  },
  orange: {
    "30": "#F9DBAF",
  },
  blue: {
    "10": "#D6DDE1",
    "20": "#ACBAC2",
    "30": "#8398A4",
    "40": "#597585",
    "50": "#305367",
    "60": "#264252",
  },
  "blue-green": {
    "40": "#0E8086",
  },
  green: {
    "10": "#F2FDF3",
    "20": "#E3F9E5",
    "30": "#C8F4CD",
    "40": "#B1EFB5",
    "50": "#51CA58",
    "60": "#0F8613",
  },
  red: {
    "10": "#FFF5F5",
    "20": "#FFE3E3",
    "30": "#FFD1D1",
    "40": "#FB8383",
    "50": "#F94343",
    "60": "#D14541",
  },
};

export function color(
  colorName: "grey",
  tone: 0 | 10 | 20 | 30 | 40 | 80 | 100
): string;
export function color(
  colorName: "green" | "red" | "blue",
  tone: 10 | 20 | 30 | 40 | 50 | 60
): string;
export function color(colorName: "yellow", tone: 10 | 20 | 30 | 50): string;
export function color(colorName: "orange", tone: 30): string;
export function color(colorName: "blue-green", tone: 40): string;
/**
 * Returns the color according to the given color name and tone.
 *
 * @param colorName grey, yellow, orange, blue, blue-green, green, red
 * @param tone based on the colorName
 */
export function color(colorName: ColorName, tone: ToneLevel): string {
  return palette[colorName][tone];
}

export function colorV2(
  colorName: "grey",
  tone: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
): string;
export function colorV2(
  colorName: "green" | "red" | "blue",
  tone: 10 | 20 | 30 | 40 | 50 | 60
): string;
export function colorV2(colorName: "yellow", tone: 10 | 20 | 30 | 50): string;
export function colorV2(colorName: "orange", tone: 30): string;
export function colorV2(colorName: "blue-green", tone: 40): string;
/**
 * Returns the color according to the given color name and tone.
 *
 * @param colorName grey, yellow, orange, blue, blue-green, green, red
 * @param tone based on the colorName
 */
export function colorV2(colorName: ColorName, tone: ToneLevelV2): string {
  return paletteV2[colorName][tone];
}
