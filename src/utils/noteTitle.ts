/**
 * Gets the title of a note, uses either title in file or name of file if thats not found
 * @param note
 * @returns note title
 */

export function noteTitle(note: {
  id: string;
  filePath?: string;
  data: { title?: string };
}) {
  if (note.data.title) return note.data.title;

  const fileName = note.filePath?.split(/[\\/]/).pop()?.replace(/\.md$/, "");
  return fileName ?? note.id;
}
