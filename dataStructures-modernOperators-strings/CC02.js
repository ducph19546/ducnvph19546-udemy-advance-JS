import { game } from "./data";
// 1.
for (const [i, player] of game.MVPs.entries())
    console.log(`MVP number ${i + 1}: ${player}`)
// 2.
let average = 0
