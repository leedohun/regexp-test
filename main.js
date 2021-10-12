const str = `
010-1234-5678
thebigeyec@naver.com
https://www.omdbapi.com/?apikey=7035cXXXX&s=frozen
The quick brown for jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
동해물과 백두산이 마르고 닳도록
`;


console.log(
  str.match(/^t/gmi)
);