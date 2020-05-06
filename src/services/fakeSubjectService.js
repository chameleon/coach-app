export const subjects = [
  {_id: "5b21ca3eeb7f6fbccd471818", name: "Guitar"},
  {_id: "5b21ca3eeb7f6fbccd471814", name: "Web Code"},
  {_id: "5b21ca3eeb7f6fbccd471820", name: "Fitness"},
  {_id: "5b21ca3eeb7f6fbccd471821", name: "Life Coach"},
];

export function getSubjects() {
  return subjects.filter((s) => s);
}
