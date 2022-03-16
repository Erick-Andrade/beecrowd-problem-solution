const input = require("fs").readFileSync("/dev/stdin", "utf-8");
const [spentTime, averageSpeed] = input.split("\n").map(inp => Number(inp));

const distance = spentTime * averageSpeed;
const spentLiters = distance / 12;
console.log(spentLiters.toFixed(3));