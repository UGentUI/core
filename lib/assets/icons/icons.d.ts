declare module '*/icons.json' {
  interface IconData {
    styles: string[];
    [key: string]: unknown;
  }

  const icons: Record<string, IconData>;
  export default icons;
}
