/**
 * * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
 * _ If you want to know more: http://en.wikipedia.org/wiki/DNA
 *
 * * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
 * _ More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
 *
 * _ Example: (input --> output)
 * _ "ATTGC" --> "TAACG"
 * _ "GTAT" --> "CATA"
 */

const dnaStrand = (dna) => {
  const dnaComplement = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return [...dna].map((nucleotide) => dnaComplement[nucleotide]).join("");
};

export default dnaStrand;
