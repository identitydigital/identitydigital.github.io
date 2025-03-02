export const infomodal = `
<div class="modal">
            <h2>How to play</h2>
            <p>
                <br>
                There are X characters on your board. <br>
                You can either give a character coins OR take them away (250 or 50). <br>
                Every round each character donates 50 coins to charity.<br>
                <span style="font-weight:600">With each round tax increases making your characters pay more every time.</span><br>
                <span style="font-weight:600">When a character has 0 coins or is in debt, they die from hunger and are removed from the board and
                replaced with a new character</span><br>
                When a characters balance reaches 10 000 coins, they retire with all their wealth and generate passive
                income (if their balance goes down to less than 10 000 they will be kicked out from the retirement house
                and will have to pay 50 coins a round again)<br>
                <br><br>
                How to get money:
            <ol>
                <li>Take 50 or 250 coins from someone</li>
                <li>+100 coins when answering a trivia question correctly</li>
            </ol>

            <br>
            <h3>How to lose money:</h3>
            <ol>
                <li>Give 50 or 250 coins to someone</li>
                <li>-10 for each character whose balance is lower than 100 coins (a subsidy)</li>
                <li>-200 when someone dies (a fine)</li>
                <li>5% tax on ALL operations</li>
            </ol>
            <br>
            <h3>Status effects & traits:</h3>
            <ol>
                <li>Main character syndrome: They start a reality tv show that fails (lose 1000 coins)</li>
                <li>Scammer: Chooses a random character around them and steals 50 from them</li>
                <li>Investor: Each round their net worth changes by a random amount (-20 to +100)</li>
                <li>Church owner: Receive donations instead of taking them</li>
                <li>Emotional: If they receive more than 400 coins at once they get stressed and waste 6% of their net worth on a therapist</li>
                <li>Gremlin: Steals 10 coins from the richest character every round, if they get caught (1 in 100) they have to give back half of what they stole</li>
                <li>Queen of mictrotransactions: Spends 1% of their value every round, 1% chance to win +5,000 coins</li>
                <li>Parrot hoarder: Adopts a parrot every 3 rounds (-100 coins)</li>
                <li>Owns a parrot: These are trained to steal cash. For each stack of this steal 2-4 coins from a random character</li>
            </ol>
            <br>
            <h3>Other things to remember:</h3>
            <ol>
                <li>Retired characters may get scammed randomly and lose 750 coins</li>
                <li style="font-weight:600">YOU MAY ONLY MOVE UP TO 1500 COINS PER STEP (limit can be raised)</li>
                <li>Investing in one character too much (>1000 coins in a single round) will make them develop main character syndrome, making them split 75% of their wealth between all other characters</li>
                <li style="font-weight:600">THE GAME ENDS WHEN THERE ARE NO NEW CHARACTERS TO ADD TO THE BOARD</li>
            </ol>
            <br>
            Click anywhere to close

            </p>
        </div>
        `


export const winscreenmodal = `
       <div class="modal" class="winscreencontainer" style="overflow-y: hidden; width: 40vw;"> 
            <h3 class="gameover">Everyone died.</h3>
            <div class="winscorecontainer" style="background: linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url('%IMAGEURL%'); background-size: cover;">
                <h2 class="winscorelabel">score:</h2>
                <h3 class="score">%SCORE%</h3>
            </div>
            <div class="winbuttoncontainer">
            </div>
        </div>`
