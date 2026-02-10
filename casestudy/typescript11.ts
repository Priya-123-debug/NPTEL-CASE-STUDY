// Add a counter for each transaction type (checkout, return, priority, cancelled) using a for loop and an object.

// Use a while(true) infinite loop with a break condition when a new priority transaction arrives.

// Modify the do…while loop to handle a dynamic queue (an array you can push new returns into).

// Use for…in to reset all inventory counts to zero.

// Display visitor names in reverse order using a for or for…of loop.
type Transaction = {
  id: number;
  type: "checkout" | "return" | "priority" | "cancelled";
};

const transaction: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "return" },
  { id: 3, type: "cancelled" },
  { id: 4, type: "priority" },
];

// Counter object
type Counter = {
  checkout: number;
  return: number;
  priority: number;
  cancelled: number;
};

let counter: Counter = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0,
};

// 1️ Count transactions
for (let tx of transaction) {
  counter[tx.type]++;
}

// Display counter
for (let c in counter) {
  console.log(
    `given counter value of ${c} and its value is ${
      counter[c as keyof typeof counter]
    }`
  );
}

// 2️ Infinite loop until priority arrives
let ind = 0;

while (true) {
  if (ind >= transaction.length) {
    console.log("No priority found");
    break;
  }

  let tx = transaction[ind];
  ind++;

  if (tx && tx.type == "priority") {
    console.log("the priority is arriving so here we stop here");
    break;
  }
}

// 3️ Dynamic queue (do…while)
let queue = [...transaction];

do {
  let tx = queue.shift();
  if (!tx) break;

  console.log(`Processing ${tx.type}`);

  if (tx.type === "checkout") {
    queue.push({ id: 99, type: "return" });
  }
} while (queue.length > 0);

// 4️ Reset inventory using for…in
for (let c in counter) {
  counter[c as keyof typeof counter] = 0;

  console.log(
    `given counter value of ${c} and its value is ${
      counter[c as keyof typeof counter]
    }`
  );
}

// 5️ Visitors reverse order
const visitors: string[] = [
  "annu",
  "supriya",
  "sunny",
  "harsh",
  "mummy",
  "papaji",
];

for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(visitors[i]);
}
