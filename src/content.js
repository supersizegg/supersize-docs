export const pages = [
  {
    slug: "/",
    navTitle: "Overview",
    title: "Slimecoin",
    description:
      "A fully on-chain competitive gaming protocol.",
    eyebrow: "Protocol overview",
    heroLogo: false,
    content: `
      <p>The Slimecoin protocol is comprised of three programs:</p>

      <ul>
        <li><strong>Slimecoin Vault</strong> is where assets are stored for use in gameplay. It is non-custodial, so funds never leave the player's control.</li>
        <li><strong>Slimecoin Matchmaking</strong> pairs players by game and buy-in and ensures they compete under identical game conditions so the winner is determined by skill alone.</li>
        <li><strong>Slimecoin Games</strong> is a library of fully on-chain games.</li>
      </ul>

      <h2>Core assets</h2>

      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>USDC</strong></td>
            <td>Core asset powering paid games and payouts</td>
          </tr>
          <tr>
            <td><strong>SLIME</strong></td>
            <td>Free-to-play currency backed by USDC collateral</td>
          </tr>
          <tr>
            <td><strong>Slimecoin</strong></td>
            <td>Play-to-mine reward token</td>
          </tr>
        </tbody>
      </table>
      
      <h2>How a paid match settles</h2>

      <p>For a standard paid match, both players lock the same buy-in. The higher score wins the pot less the platform fee. With the current product fee model of 10% of the pot, a $1 duel settles as:</p>

      <div class="chart-panel pie-panel">
        <div class="chart-heading">
          <strong>$2.00 pot with 10% fee</strong>
          <span>Winner payout and fee destinations as a share of the total pot.</span>
        </div>
        <div class="pie-layout">
          <div class="pot-pie" role="img" aria-label="Winner payout 90%, SLIME collateral 5%, weekly leagues pool 3%, protocol earnings 2%"></div>
          <div class="pie-legend">
            <div><span class="legend-swatch winner"></span><strong>Winner payout: $1.80</strong><em>90%</em></div>
            <div><span class="legend-swatch collateral"></span><strong>SLIME collateral: $0.10</strong><em>5%</em></div>
            <div><span class="legend-swatch leagues"></span><strong>Weekly leagues pool: $0.06</strong><em>3%</em></div>
            <div><span class="legend-swatch protocol"></span><strong>Protocol earnings: $0.04</strong><em>2%</em></div>
          </div>
        </div>
      </div>
    `,
  },
  {
    slug: "/games/",
    navTitle: "Games",
    title: "Games",
    description: "Slimecoin games are competitive sessions with protocol-backed scoring and on-chain settlement.",
    eyebrow: "Game library",
    content: `
      <h2>Modes</h2>

      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>Currency</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Practice</td>
            <td>Free</td>
            <td>None</td>
          </tr>
          <tr>
            <td>SLIME queue</td>
            <td>Play using SLIME</td>
            <td>SLIME</td>
          </tr>
          <tr>
            <td>Paid queue</td>
            <td>Play with USDC stakes</td>
            <td>USDC + Slimecoin</td>
          </tr>
        </tbody>
      </table>

      <h2>Current library</h2>

      <p>The current on-chain library includes:</p>

      <ul class="pill-list">
        <li>Farm Wars</li>
        <li>Slime Solitaire</li>
        <li>Block Puzzle</li>
        <li>Blob Battle</li>
        <li>2048</li>
        <li>Bubble Shooter</li>
        <li>Match 3</li>
        <li>21 Solitaire</li>
      </ul>

    `,
  },
  {
    slug: "/slime/",
    navTitle: "Slime",
    title: "Slime",
    description:
      "Slime is the protocol's free-to-play USDC-backed currency.",
    eyebrow: "Free-play currency",
    content: `
      <pre><code>1 USDC = 1,000 SLIME</code></pre>

      <h2>Backing model</h2>
      <p>Slime is backed by USDC fees accrued by the protocol.</p>

      <h2>How to get Slime</h2>
      <p>Slime is designed as a gamified rakeback system. It gives casual players a way to keep playing while scaling up rewards for higher-volume players.</p>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>How it works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Claim Slime</td>
            <td>Players produce Slime over time based on Slimecoin balance and boosts</td>
          </tr>
          <tr>
            <td>Slime match winnings</td>
            <td>Winners in Slime matches receive claimable Slime</td>
          </tr>
        </tbody>
      </table>

      <h2>Claiming Slime over time</h2>

      <p>Players can claim Slime for every hour elapsed, up to 24 hours per claim. The rate depends on:</p>

      <ul>
        <li>Slimecoin balance</li>
        <li>current Slime Rush boost multiplier</li>
        <li>production cap for the player's current Slime Rush level</li>
        <li>remaining on-chain Slime capacity given current collateral</li>
      </ul>

      <p>The vault enforces the cap using the player's total SLIME inventory:</p>

      <p>If inventory is already at the current production cap, new SLIME production is capped at zero until the player spends or raises the cap.</p>

      <h2>Using Slime in games</h2>

      <p>Slime matches are useful for low-stakes competition. They work exactly like USDC games, but buy-ins and payouts happen in Slime.</p>

      <aside class="callout">
        <strong>Turn SLIME into USDC</strong>
        <p>Players can use 1k SLIME to enter $1 paid matches to win USDC</p>
      </aside>

      <h2>Slime/hr production by Slimecoin holdings</h2>

      <table>
        <thead>
          <tr>
            <th>Slimecoin held</th>
            <th>Hourly SLIME production</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>1 SLIME</td></tr>
          <tr><td>25</td><td>2 SLIME</td></tr>
          <tr><td>50</td><td>3 SLIME</td></tr>
          <tr><td>2525</td><td>4 SLIME</td></tr>
          <tr><td>5000</td><td>5 SLIME</td></tr>
        </tbody>
      </table>

      <h2>Slime Rush</h2>

      <p>Slime Rush is the weekly activity system attached to Slime production.</p>

      <p>As players generate weekly gameplay volume, they can claim milestones. Each claimed milestone increases the Slime production multiplier and raises the inventory cap.</p>

      <h3>Weekly milestones</h3>

      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Weekly volume target</th>
            <th>SLIME production boost</th>
            <th>Production cap</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>$0</td><td>0%</td><td>300 SLIME</td></tr>
          <tr><td>1</td><td>$0.10</td><td>5%</td><td>450 SLIME</td></tr>
          <tr><td>2</td><td>$0.25</td><td>10%</td><td>675 SLIME</td></tr>
          <tr><td>3</td><td>$0.50</td><td>15%</td><td>1,000 SLIME</td></tr>
          <tr><td>4</td><td>$1</td><td>20%</td><td>1,500 SLIME</td></tr>
          <tr><td>5</td><td>$2</td><td>25%</td><td>2,250 SLIME</td></tr>
          <tr><td>6</td><td>$4</td><td>30%</td><td>3,500 SLIME</td></tr>
          <tr><td>7</td><td>$8</td><td>40%</td><td>5,000 SLIME</td></tr>
          <tr><td>8</td><td>$16</td><td>60%</td><td>7,500 SLIME</td></tr>
          <tr><td>9</td><td>$32</td><td>80%</td><td>10,000 SLIME</td></tr>
          <tr><td>10</td><td>$64</td><td>100%</td><td>15,000 SLIME</td></tr>
        </tbody>
      </table>

      <h3>How volume is counted</h3>

      <p>USDC matches add the buy-in amount. Slime matches add the USD-equivalent amount based on the 1 USDC = 1,000 SLIME conversion.</p>
      </div>
    `,
  },
  {
    slug: "/slimecoin/",
    navTitle: "Slimecoin",
    title: "Slimecoin",
    description:
      "The play-to-mine token emitted from real USDC gameplay volume with supply-linked halvings.",
    eyebrow: "Play-to-mine token",
    content: `
      <h2>Supply</h2>

      <p>There is a total mineable Slimecoin supply of <strong>500,000,000 Slimecoin</strong>.
      As players mine Slimecoin, the protocol moves through halving levels.</p>

      <h2>How mining works</h2>

      <p>In a paid USD match, both players can receive Slimecoin:</p>

      <ul>
        <li>the winner receives the higher Slimecoin reward</li>
        <li>the loser receives the lower participation reward (10% of what the winner receives)</li>
        <li>both rewards scale with the USD buy-in</li>
        <li>both rewards halve as the remaining mineable supply crosses halving thresholds</li>
      </ul>

      <p>At halving level 0:</p>

      <table>
        <thead>
          <tr>
            <th>Player result</th>
            <th>Slimecoin mined per $1 buy-in</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Winner</td>
            <td>50 Slimecoin</td>
          </tr>
          <tr>
            <td>Loser</td>
            <td>5 Slimecoin</td>
          </tr>
        </tbody>
      </table>

      <p>For example, at level 0 a $5 paid match awards 250 Slimecoin to the winner and 25 Slimecoin to the loser.</p>

      <h2>Halving schedule</h2>

      <p>The halving level is based on remaining treasury holdings as a percentage of the total 500M supply. Level 0 applies while more than 50% remains. Once treasury holdings are at or below 50%, the level increments. Each further halving threshold halves the emission rate again.</p>

      <table>
        <thead>
          <tr>
            <th>Halving level</th>
            <th>Remaining Slimecoin supply</th>
            <th>Winner per $1</th>
            <th>Loser per $1</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>More than 250,000,000</td><td>50</td><td>5</td></tr>
          <tr><td>1</td><td>250,000,000 or less</td><td>25</td><td>2.5</td></tr>
          <tr><td>2</td><td>125,000,000 or less</td><td>12.5</td><td>1.25</td></tr>
          <tr><td>3</td><td>62,500,000 or less</td><td>6.25</td><td>0.625</td></tr>
          <tr><td>4</td><td>31,250,000 or less</td><td>3.125</td><td>0.3125</td></tr>
          <tr><td>5</td><td>15,625,000 or less</td><td>1.5625</td><td>0.15625</td></tr>
        </tbody>
      </table>

      <div class="chart-panel">
        <div class="chart-heading">
          <strong>Slimecoin emission per $1 buy-in</strong>
          <span>Winner and loser rewards halve as treasury thresholds are crossed.</span>
        </div>
        <svg class="line-chart" viewBox="0 0 680 320" role="img" aria-label="Slimecoin emission per one dollar buy-in">
          <line x1="62" y1="42" x2="62" y2="250" class="axis" />
          <line x1="62" y1="250" x2="625" y2="250" class="axis" />
          <line x1="62" y1="42" x2="625" y2="42" class="grid-line" />
          <line x1="62" y1="146" x2="625" y2="146" class="grid-line" />
          <text x="24" y="48" class="chart-tick">50</text>
          <text x="24" y="152" class="chart-tick">25</text>
          <text x="34" y="256" class="chart-tick">0</text>
          <polyline points="62,42 174,146 286,198 398,224 510,237 622,244" class="winner-line" />
          <polyline points="62,229 174,239 286,245 398,248 510,249 622,249.5" class="loser-line" />
          <g class="chart-labels">
            <text x="54" y="282">L0</text>
            <text x="166" y="282">L1</text>
            <text x="278" y="282">L2</text>
            <text x="390" y="282">L3</text>
            <text x="502" y="282">L4</text>
            <text x="614" y="282">L5</text>
          </g>
          <g class="legend">
            <circle cx="480" cy="26" r="5" class="winner-dot" />
            <text x="492" y="31">Winner</text>
            <circle cx="560" cy="26" r="5" class="loser-dot" />
            <text x="572" y="31">Loser</text>
          </g>
        </svg>
      </div>

      <h2>Why per-USD emissions matter</h2>

      <p>Slimecoin rewards are tied to actual gameplay buy-ins. This makes emissions volume-based. Halvings slow issuance as the mineable treasury runs down.</p>

      <h2>Practice quest mining</h2>

      <p>Players can claim Slimecoin for each of their first 10 practice wins, receiving the lower per-USD Slimecoin rate for each win. This gives new players a path to touch Slimecoin before entering USDC matches.</p>
    `,
  },
  {
    slug: "/leagues/",
    navTitle: "Leagues",
    title: "Leagues",
    description: "A permanent leaderboard with a weekly prize pool funded by protocol fees.",
    eyebrow: "Weekly competition",
    content: `

      <h2>Weekly USDC payouts</h2>
      <p>Every week players can claim a USDC prize proportional to their Slimecoin holdings. For example, if a player holds 10% of the active Slimecoin supply, they are entitled to 10% of the prize pool.</p>      

      <h2>Funding the pool</h2>

      <p>The weekly leagues pool is funded from protocol fee accounting.</p>
      <p>As a share of the total pot, with 10% fee model, that is:</p>
      <table>
        <thead>
          <tr>
            <th>Pot share</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>90%</td><td>Winner payout</td></tr>
          <tr><td>5%</td><td>SLIME collateral</td></tr>
          <tr><td>3%</td><td>Leagues pool</td></tr>
          <tr><td>2%</td><td>Protocol earnings</td></tr>
        </tbody>
      </table>
      <aside class="callout">
      The weekly pool can also include unclaimed rewards from the previous weeks pool
      </aside>

      <h2>Ranks</h2>
      <p>Players rank by Slimecoin balance in the public leaderboard. The app maps ranks into tiers:</p>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>League</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1-10</td><td>Diamond</td></tr>
          <tr><td>11-20</td><td>Emerald</td></tr>
          <tr><td>21-30</td><td>Gold</td></tr>
          <tr><td>31-50</td><td>Silver</td></tr>
          <tr><td>51-80</td><td>Bronze</td></tr>
          <tr><td>81-300</td><td>Iron</td></tr>
          <tr><td>301+ or unranked</td><td>Unranked</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    slug: "/fairness-security/",
    navTitle: "Fairness & Security",
    title: "Fairness & Security",
    description:
      "Slimecoin makes gameplay, funds, and results transparent and verifiable.",
    eyebrow: "Trust model",
    content: `
      <p>Slimecoin is built so players do not have to trust a private game server to decide moves, scores, payouts, or balances.</p>

      <h2>Transparent gameplay</h2>

      <p>Every meaningful action in a game is written to Solana program accounts. Moves, scores, seeds, session state, and final results are produced by on-chain game logic, so the path from play to payout is visible on the public ledger.</p>

      <p>The frontend can render the game and make it feel fast, but the result comes from the program-owned session. That means players can verify that a score was not invented by an off-chain service after the fact.</p>

      <h2>Non-custodial funds</h2>

      <p>Player balances live in a non-custodial vault. The vault tracks each player's USDC, SLIME, Slimecoin, locked buy-ins, and claimable rewards through program-derived accounts.</p>

      <p>Funds are not held in a game server wallet. The vault can only move balances through protocol rules: reserve a buy-in, refund a draw or timeout, credit winnings, or let the player claim rewards.</p>

      <h2>Zero-server settlement</h2>

      <p>Slimecoin.io can use apps, indexers, and UI services to make the experience smooth, but the core game and settlement path is zero-server:</p>

      <ul>
        <li>games store session state on-chain</li>
        <li>matchmaking pairs players through on-chain queues</li>
        <li>the vault settles outcomes through on-chain accounting</li>
        <li>rewards and league payouts are claimable from protocol accounts</li>
      </ul>

      <p>No private backend gets to secretly rewrite the result.</p>

      <p>This is the core fairness promise: the app may explain the result, but the ledger proves it.</p>
    `,
  },
];

export const aliases = {
  "/index": "/",
  "/index/": "/",
  "/about-slimecoin-io/games/": "/games/",
  "/tokens/slime/": "/slime/",
  "/tokens/slimecoin/": "/slimecoin/",
  "/rewards/leagues/": "/leagues/",
  "/about-slimecoin-io/tech/": "/fairness-security/",
};
