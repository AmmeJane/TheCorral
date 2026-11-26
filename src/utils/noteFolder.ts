/**
 * Gets the folder a note is in
 * @param note
 * @returns the folders in order
 * @example notes/Uni/Year 2/Lecture 1.md would become ["Uni", "Year 2"]
 */

export function noteFolder(note: { filePath?: string }) {
  const parts = note.filePath?.split(/[\\/]/) ?? [];
  const notesIndex = parts.findLastIndex(
    (part) => part.toLowerCase() === "notes",
  );
  return parts.slice(notesIndex + 1, -1);
}
