const sentence = `hello there from lighthouse labs
`;
let delay = 0;
for (const char of sentence) {
  delay += Math.floor(Math.random() * 250);
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}
