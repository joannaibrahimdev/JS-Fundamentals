const args = process.argv[2]; // Get the first argument
const num = parseInt(args);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
