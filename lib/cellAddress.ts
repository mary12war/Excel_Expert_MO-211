export type CellAddress = { col: number; row: number }; // 0-based

export function colToLetter(col: number) {
  let n = col + 1;
  let s = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    s = String.fromCharCode(65 + rem) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

export function letterToCol(letter: string) {
  const s = letter.toUpperCase();
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    n = n * 26 + (s.charCodeAt(i) - 64);
  }
  return n - 1;
}

export function parseA1(a1: string): CellAddress | null {
  const m = /^([A-Za-z]+)(\d+)$/.exec(a1.trim());
  if (!m) return null;
  const col = letterToCol(m[1]);
  const row = Number(m[2]) - 1;
  if (!Number.isFinite(row) || row < 0 || col < 0) return null;
  return { col, row };
}

export function toA1(addr: CellAddress) {
  return `${colToLetter(addr.col)}${addr.row + 1}`;
}

