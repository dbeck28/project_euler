var x = 0

for (i = 1; i < 1001; i++) {
  if (i % 3 === 0) {
    x += i
  } else if (i % 5 === 0) {
    x += i
  }
}

// x will be equal to the desired answer after the loop has run
