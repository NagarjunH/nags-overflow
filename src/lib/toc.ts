export function extractHeadings(
  content: string
) {
  const headingLines =
    content.match(/^##\s.+$/gm) || [];

  return headingLines.map(
    (heading) => {
      const text = heading.replace(
        /^##\s/,
        ""
      );

      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-");

      return {
        text,
        id,
      };
    }
  );
}