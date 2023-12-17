/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const bill = [];
  for (i = 0; i < transactions.length; i++) {
    let price = transactions[i].price;
    let category = transactions[i].category;

    bill.push({ category, price });
  }

  return bill;
}

// console.log(
//   calculateTotalSpentByCategory([
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: "Food",
//       itemName: "Pizza",
//     },
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 100,
//       category: "Food",
//       itemName: "Pizza",
//     },
//   ])
// );

module.exports = calculateTotalSpentByCategory;
