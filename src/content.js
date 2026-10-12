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
            <td>Asset powering paid games and payouts</td>
          </tr>
          <tr>
            <td><strong>Gems</strong></td>
            <td>Free-to-play currency</td>
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
          <div class="pot-pie" role="img" aria-label="Winner payout 90%, protocol earnings 10%"></div>
          <div class="pie-legend">
            <div><span class="legend-swatch winner"></span><strong>Winner payout: $1.80</strong><em>90%</em></div>
            <div><span class="legend-swatch protocol"></span><strong>Protocol earnings: $0.20</strong></div>
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
            <td>No match payout</td>
          </tr>
          <tr>
            <td>Gems queue</td>
            <td>Play using gems</td>
            <td>Gems + Slimecoin</td>
          </tr>
          <tr>
            <td>Cash queue (mobile)</td>
            <td>Play with USDC stakes</td>
            <td>USDC + Slimecoin</td>
          </tr>
        </tbody>
      </table>

      <h2>Current library</h2>

      <p>The current on-chain library includes:</p>

      <ul class="pill-list">
        <li>Triple Tile</li>
        <li>Solitaire</li>
        <li>Block Puzzle</li>
        <li>Bubble Shooter</li>
        <li>21 Solitaire</li>
        <li>Match 3</li>
        <li>Farm Wars</li>
        <li>2048</li>
      </ul>

    `,
  },
  {
    slug: "/gems/",
    navTitle: "Gems",
    title: "Gems",
    description:
      "Gems are the protocol's free-to-play currency.",
    eyebrow: "Free-play currency",
    content: `
      <h2>How to get gems</h2>

      <p>Players can claim gems for every hour elapsed, up to 24 hours per claim. The rate depends on:</p>

      <ul>
        <li>Slimecoin balance</li>
        <li>league gem bonus from the previous week's final rank</li>
        <li>current Gem Rush boost multiplier</li>
        <li>production cap for the player's current Gem Rush level</li>
      </ul>

      <p>The vault enforces the cap using the player's total gem inventory.</p>

      <p>If inventory is already at the current production cap, new gem production is capped at zero until the player spends or raises the cap.</p>

      <h2>Using gems in games</h2>

      <p>Gem matches are useful for low-stakes competition. They work like USDC games, but buy-ins and payouts happen in gems.</p>

      <aside class="callout">
        <strong>Turn gems into USDC</strong>
        <p>Players can use 1k gems to enter $1 paid matches to win USDC</p>
      </aside>

      <h2>Gems per hour by Slimecoin balance</h2>

      <table>
        <thead>
          <tr>
            <th>Slimecoin held</th>
            <th>Hourly gem production</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>1 gem</td></tr>
          <tr><td>25</td><td>2 gems</td></tr>
          <tr><td>50</td><td>3 gems</td></tr>
          <tr><td>2525</td><td>4 gems</td></tr>
          <tr><td>5000</td><td>5 gems</td></tr>
        </tbody>
      </table>

      <h2>Gem Rush</h2>

      <p>Gem Rush is the weekly activity system attached to gem production.</p>

      <p>As players generate weekly gameplay volume, they can claim milestones. Each claimed milestone increases the gem production multiplier and raises the inventory cap.</p>

      <h3>Weekly milestones</h3>

      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Weekly volume target</th>
            <th>Gem production boost</th>
            <th>Production cap</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>$0</td><td>0%</td><td>300 gems</td></tr>
          <tr><td>1</td><td>$0.10</td><td>5%</td><td>450 gems</td></tr>
          <tr><td>2</td><td>$0.25</td><td>10%</td><td>675 gems</td></tr>
          <tr><td>3</td><td>$0.50</td><td>15%</td><td>1,000 gems</td></tr>
          <tr><td>4</td><td>$1</td><td>20%</td><td>1,500 gems</td></tr>
          <tr><td>5</td><td>$2</td><td>25%</td><td>2,250 gems</td></tr>
          <tr><td>6</td><td>$4</td><td>30%</td><td>3,500 gems</td></tr>
          <tr><td>7</td><td>$8</td><td>40%</td><td>5,000 gems</td></tr>
          <tr><td>8</td><td>$16</td><td>60%</td><td>7,500 gems</td></tr>
          <tr><td>9</td><td>$32</td><td>80%</td><td>10,000 gems</td></tr>
          <tr><td>10</td><td>$64</td><td>100%</td><td>15,000 gems</td></tr>
        </tbody>
      </table>

      <h3>How volume is counted</h3>

      <p>USDC matches add the buy-in amount. Gem matches add the USD-equivalent amount based on the 1 USDC = 1,000 gems conversion.</p>
      </div>
    `,
  },
  {
    slug: "/slimecoin/",
    navTitle: "Slimecoin",
    title: "Slimecoin",
    description:
      "The play-to-mine token emitted from gameplay volume with supply-linked halvings.",
    eyebrow: "Play-to-mine token",
    content: `
      <h2>How mining works</h2>

      <p>In a paid USD or gems match, both players can receive Slimecoin:</p>

      <ul>
        <li>the winner receives the higher Slimecoin reward</li>
        <li>the loser receives the lower participation reward (10% of what the winner receives)</li>
        <li>both rewards scale with the buy-in</li>
        <li>both rewards halve as the remaining mineable supply crosses halving thresholds</li>
      </ul>

      <p>As players mine Slimecoin, the protocol moves through halving levels. At halving level 0:</p>

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

      <p>The halving level is based on remaining treasury holdings as a percentage of the total supply. Level 0 applies while more than 50% remains. Once treasury holdings are at or below 50%, the level increments. Each further halving threshold halves the emission rate again.</p>

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
          <tr><td>0</td><td>More than 50%</td><td>50</td><td>5</td></tr>
          <tr><td>1</td><td>50% or less</td><td>25</td><td>2.5</td></tr>
          <tr><td>2</td><td>25% or less</td><td>12.5</td><td>1.25</td></tr>
          <tr><td>3</td><td>12.5% or less</td><td>6.25</td><td>0.625</td></tr>
          <tr><td>4</td><td>6.25% or less</td><td>3.125</td><td>0.3125</td></tr>
          <tr><td>5</td><td>3.125% or less</td><td>1.5625</td><td>0.15625</td></tr>
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

      <h2>Practice mining</h2>

      <p>Players can claim Slimecoin for each of their first 10 practice wins, receiving the lower per-USD Slimecoin rate for each win.</p>
    `,
  },
  {
    slug: "/leagues/",
    navTitle: "Leagues",
    title: "Leagues",
    description: "Weekly rankings with fixed prizes and gem production boosts.",
    eyebrow: "Weekly competition",
    // Eligibility and reward bands verified against /api/v1/leagues/weekly on
    // https://supersize.miso.one on 2026-10-12.
    content: `
      <h2>Weekly rankings</h2>

      <p>Players compete by earning Slimecoin during the current week. To qualify for weekly rewards, earn at least <strong>50 Slimecoin</strong> during the week and finish among the <strong>top 100 qualifying players</strong>. Final weekly rank determines the prize and the gem production bonus for the following week.</p>

      <h2>Fixed weekly prizes</h2>

      <p>Each qualifying player receives the fixed USDC prize for their finishing position.</p>

      <table>
        <thead>
          <tr>
            <th>Final weekly rank</th>
            <th>USDC prize</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>40 USDC</td></tr>
          <tr><td>2</td><td>25 USDC</td></tr>
          <tr><td>3</td><td>18 USDC</td></tr>
          <tr><td>4-6</td><td>9 USDC each</td></tr>
          <tr><td>7-10</td><td>6 USDC each</td></tr>
          <tr><td>11-25</td><td>3 USDC each</td></tr>
          <tr><td>26-100</td><td>0.75 USDC each</td></tr>
        </tbody>
      </table>

      <h2>League gem boosts</h2>

      <p>Qualifying players also receive an hourly gem production bonus for the following week, based on their final weekly rank:</p>

      <table>
        <thead>
          <tr>
            <th>Final weekly rank</th>
            <th>League</th>
            <th>Extra gems per hour</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1-10</td><td>Diamond</td><td>+50</td></tr>
          <tr><td>11-20</td><td>Emerald</td><td>+20</td></tr>
          <tr><td>21-30</td><td>Gold</td><td>+10</td></tr>
          <tr><td>31-50</td><td>Silver</td><td>+5</td></tr>
          <tr><td>51-80</td><td>Bronze</td><td>+3</td></tr>
          <tr><td>81-100</td><td>Iron</td><td>+1</td></tr>
        </tbody>
      </table>

      <p>The league bonus is added to the player's base hourly gem rate before the Gem Rush multiplier is applied. The usual <a href="/gems/">gem production cap and claiming rules</a> still apply. Players below the qualifying threshold or outside the top 100 receive no weekly prize or league gem bonus.</p>

      <h2>Claiming rewards</h2>

      <p>After weekly results are finalized, claim the prize from Leagues during the following week. Unclaimed prizes expire at the next weekly rollover. The hourly gem bonus applies during that reward week and is collected with regular gem production.</p>
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

      <p>Player balances live in a non-custodial vault. The vault tracks each player's USDC, gems, Slimecoin, locked buy-ins, and claimable rewards through program-derived accounts.</p>

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
  "/slime/": "/gems/",
  "/tokens/slime/": "/gems/",
  "/tokens/slimecoin/": "/slimecoin/",
  "/rewards/leagues/": "/leagues/",
  "/about-slimecoin-io/tech/": "/fairness-security/",
};
