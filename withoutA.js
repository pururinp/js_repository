function search(text) {
    const withoutA = /\b[^Aa\s]{6,}\b/g;
    const find = text.match(withoutA);
    return find || []; 
  }

const input = "Layer amanda Rebase florida scorpio";
const result = search(input);

console.log(result);