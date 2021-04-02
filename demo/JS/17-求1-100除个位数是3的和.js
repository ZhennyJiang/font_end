var sum = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 10 == 3) {
    console.log(i);

    continue;
  }
  sum += i;
}
console.log(sum);
