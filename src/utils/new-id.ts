/** Generates and returns a random id */
export function newID() {
  const id = Math.random().toString(36).slice(2);
  return '_' + id;
}
