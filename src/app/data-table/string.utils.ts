export class StringUtils {
  static reverseCamelCase = (str: string) => {
    const normalized = str.replace(/([A-Z])/g, char => ` ${char.toLowerCase()}`).trim();
    return `${normalized[0].toUpperCase()}${normalized.slice(1)}`;
  };
}
