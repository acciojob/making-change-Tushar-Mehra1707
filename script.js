function makeChange(amount) {
  // Initialize the result object with 0 coins for each type
  const change = { q: 0, d: 0, n: 0, p: 0 };
  
  // Calculate the number of quarters
  change.q = Math.floor(amount / 25);
  amount = amount % 25; // Remainder after quarters
  
  // Calculate the number of dimes
  change.d = Math.floor(amount / 10);
  amount = amount % 10; // Remainder after dimes
  
  // Calculate the number of nickels
  change.n = Math.floor(amount / 5);
  amount = amount % 5; // Remainder after nickels
  
  // Remaining amount is the number of pennies
  change.p = amount; // Since pennies are worth 1 cent, the remainder is the number of pennies
  
  return change;
}
