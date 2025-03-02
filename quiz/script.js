import { infomodal, winscreenmodal } from "./templates.js";
import { QuizApp } from "./quizapp.js";
import { HoverInfoSystem } from "./hoversystem.js"
import { shopitems } from './shop.js';

/*
TODO

- status effects
- more traits
- Conspiracy theorists
- Tax evaders

- scoring system is wack (actually playing the game gives lower scores than spamming next round)



*/
const chars = [
    ["Zani","https://www.prydwen.gg/static/505ab092ab4d706f757a89bac424b378/b26e2/card_zani.webp"],
    ["Verina","https://img.4gamers.com.tw/ckfinder-th/image2/auto/2024-06/Verina_Wuthering_Waves-240611-182010.png?versionId=wh_1GqR0rDI_KMHCt012Mom39ms67DUn"],
    ["Media expert woman","https://th.bing.com/th/id/OIP.EEs1mopq0nWP_FIACZIpiwAAAA?rs=1&pid=ImgDetMain"],
    ["Media expert babarog","https://th.bing.com/th/id/OIP.OPEje65UuoQcZnwdxMFKjQAAAA?rs=1&pid=ImgDetMain"],
    ["Pou","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55b11ef7-378f-4a7e-b93b-67297edaeae7/depwhwk-b46e45dd-ac79-47d0-97be-cb95d54583fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1YjExZWY3LTM3OGYtNGE3ZS1iOTNiLTY3Mjk3ZWRhZWFlN1wvZGVwd2h3ay1iNDZlNDVkZC1hYzc5LTQ3ZDAtOTdiZS1jYjk1ZDU0NTgzZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6Dl-6dfcbUBPCREbeqhskZnpobzkAIduN9JFxPxvwrE"],
    ["Jank boteko","https://i.etsystatic.com/42179761/r/il/2cab4d/6362212046/il_fullxfull.6362212046_gv2i.jpg"],
    ["Yhan","https://preview.redd.it/not-my-screenshot-this-npc-got-me-feeling-some-type-of-way-v0-0lfyvx3k1hjc1.png?width=640&crop=smart&auto=webp&s=906c8f44d4a361e76cc37e37f9444b8cd07bae02"],
    ["Lana del rey","https://i.redd.it/g72v7zrnijk81.jpg"],
    ["Hatsune miku","https://www.anime-oz.com/assets/thumbL/TAITOMIK39.png?20221216012716"],
    ["Verka serduchka","https://3fach.ch/storage/app/uploads/public/621/c00/0fb/thumb_26069_800_800_0_0_crop.jpg"],
    ["Cupcakke","https://www.thefamouspeople.com/profiles/images/cupcakke-9.jpg"],
    ["Jiafei","https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/10/27/d9c3acdc-dbec-4cbd-a833-7b4829d93d7d_995dcf71.jpg"],
    ["Winstrees cat","https://i.imgur.com/C7ABwWI.png"],
    ["2 birds on a wire","https://cdn.pixabay.com/photo/2018/01/13/18/49/parrot-3080543_1280.png"],
    ["Kim jong un","https://pbs.twimg.com/media/GX9eqQnaUAM9nsj.jpg"],
    ["brant from wuwa","https://i.pinimg.com/236x/f9/dd/7a/f9dd7a559da374a8b927d838025b8b18.jpg"],
    ["mulch dog","https://i.pinimg.com/736x/ba/50/e8/ba50e8818669b0cf7501ecd514e41da1.jpg"],
    ["stocking (psg)","https://i.pinimg.com/736x/63/5d/b8/635db8f2b4886d1866bcb6f47390b749.jpg"],
    ["julka tymoshenko","https://images.unian.net/photos/2017_09/1505164614-1224-yuliya-timoshenko.jpg"],
    ["milankas roblox avatar","https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E5F9B275EB9C4410AD58185BBAD48FEF-Png/150/150/AvatarHeadshot/Webp/noFilter"],
    ["Poseidon","https://th.bing.com/th/id/OIP.xpQGej8JviwqSGQ6N3_i5gHaHa?rs=1&pid=ImgDetMain"],
    ["Meowscles","https://th.bing.com/th/id/OIP.94gcH9un5WkYjgAsGUZHgwHaHv?rs=1&pid=ImgDetMain"],
    ["Marina and the diamonds","https://pm1.narvii.com/6076/acee3576f1c189d735c773381e0740ee5eec3e58_hq.jpg"],
    ["Bayonetta","https://vignette.wikia.nocookie.net/nintendo/images/0/06/Bayonetta_-_SSB4.png/revision/latest?cb=20151223123707&path-prefix=en"],
    ["Lara Croft","https://th.bing.com/th/id/OIP.GHK8RVPFnEEKRufmCy_UcgHaEK?rs=1&pid=ImgDetMain"],
    ["Ava useless cow","https://64.media.tumblr.com/73d539d7ccb5d415520fedf01747d825/8aad879e300488ff-bb/s1280x1920/36c3493594ab7e97da5d8f30a77e9db0eb3aa5a0.jpg"],
    ["Ranvision","https://th.bing.com/th/id/OIP.2qhZXWzNSJkjwK3RLyW8FwHaEK?rs=1&pid=ImgDetMain"],
    ["Dula peep","https://th.bing.com/th/id/OIP.qnYZgv3gtCWGww44W9f6CAHaHa?rs=1&pid=ImgDetMain"],
    ["Mii character","https://th.bing.com/th/id/R.bc570c44263fb30b6940085875347882?rik=oYwaJu8EyU6qVw&pid=ImgRaw&r=0&sres=1&sresct=1"],
    ["Shit machine","https://th.bing.com/th/id/OIP.5n1lvwOYzN1grvlq0wpXlwHaJI?rs=1&pid=ImgDetMain"],
    ["Zenia Diamond","https://th.bing.com/th/id/OIP.7-1biMwajIwgAthmEsPC3AHaNK?rs=1&pid=ImgDetMain"],
    ["Caxapok salad","https://th.bing.com/th/id/OIP.wsTnJJBB9eeI3KKppWxOPAHaHa?rs=1&pid=ImgDetMain"],
    ["Beatrice the bee","https://th.bing.com/th/id/OIP.MnEC1E09lynIpjEwZt13WwHaHf?rs=1&pid=ImgDetMain"],
    ["Mydei","https://th.bing.com/th/id/OIP.i2nD-6Zhbk0JH46Dh-B0wAHaEK?rs=1&pid=ImgDetMain"],
    ["Amrits dog","https://i.imgur.com/lnp3yjg.png"]
    /*["mrbeast", ""],
    ["Logan Paul", ""],
    ["Amber Heard", ""],
    ["James Charles", ""],
    ["Ellen DeGeneres", ""],
    ["Dream", ""],
    ["Kim Kardashian", ""],
    ["Kanye West", ""],
    ["Maya", ""],
    ["Doja Cat", ""],
    ["Nicki Minaj", ""],
    ["Taylor Swift", ""],
    ["Drake", ""],
    ["Meghan TRAITOR", ""],
    ["Madonna", ""],
    ["Ben Shapiro", ""],
    ["Andrew Tate", ""],
    ["Trisha Paytas", ""],
    ["Donald Trump", ""],
    ["Kamala harris", ""]*/
]

let playerbalance = 0;
let roundnum = 1;
let charsInGame = [];
let draggedIndex = null;
let transferredthisround = 0;
let transferlimit = 1500;


// variables affected by shop upgrades
let deductFive = false;
let deductTen = false;
let percenttaxreduction = false;


// data collection (creepy era)
let gameLog = {
    score: 0,
    rounds: [],
    characterEvents: [],
    playerEvents: [],
    traitActivations: [],
    deaths: [],
    retirements: [],
    transactions: []
};

class RoundData {
    constructor(roundNumber) {
        this.roundNumber = roundNumber;
        this.playerBalance = playerbalance;
        this.transferredThisRound = transferredthisround;
        this.transferLimit = transferlimit;
        this.timestamp = new Date().toISOString();
        this.characterSnapshots = charsInGame.map(char => ({
            id: char.id,
            name: char.name,
            balance: char.balance,
            previousBalance: char.previousBalance,
            traits: char.traits.map(t => t.name),
            isRetired: char.isRetired,
            parrots: char.parrots,
            hasToShare: char.hastoshare,
            sharingPartners: char.sharingwith.map(p => p.id)
        }));
    }
}

class CharacterEvent {
    constructor(characterId, eventType, details) {
        this.roundNumber = roundnum;
        this.characterId = characterId;
        this.eventType = eventType;
        this.details = details;
        this.timestamp = new Date().toISOString();
    }
}

class PlayerEvent {
    constructor(eventType, details) {
        this.roundNumber = roundnum;
        this.eventType = eventType;
        this.details = details;
        this.timestamp = new Date().toISOString();
        this.playerBalance = playerbalance;
    }
}
function handleDragStart(e) {
    const card = e.currentTarget;
    draggedIndex = Array.from(card.parentNode.children).indexOf(card);
    e.dataTransfer.setData('text/plain', draggedIndex);
    card.classList.add('dragging');
}

function handleDragEnd(e) {
    const card = e.currentTarget;
    card.classList.remove('dragging');
    draggedIndex = null;
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    const card = e.currentTarget;
    
    // Use a data attribute to track drag count per card
    let dragCounter = parseInt(card.dataset.dragCounter || 0);
    dragCounter++;
    card.dataset.dragCounter = dragCounter;

    if (dragCounter === 1) {
        card.classList.add('drop-target');
    }
}

function handleDragLeave(e) {
    const card = e.currentTarget;

    let dragCounter = parseInt(card.dataset.dragCounter || 0);
    dragCounter--;
    card.dataset.dragCounter = dragCounter;

    if (dragCounter === 0) {
        card.classList.remove('drop-target');
    }
}

function handleDrop(e) {
    const card = e.currentTarget;
    
    // Reset counter on drop
    card.dataset.dragCounter = 0;
    card.classList.remove('drop-target');

    const targetIndex = Array.from(card.parentNode.children).indexOf(card);
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));

    // Swap characters in the array
    [charsInGame[draggedIndex], charsInGame[targetIndex]] = [charsInGame[targetIndex], charsInGame[draggedIndex]];
    
    // Update the UI
    render(charsInGame);
}
function getNeighbors(index, extended = false) {
    const rows = 4;
    const cols = 5;
    const neighbors = [];

    // Handle 0-based index input
    // Convert to row and column coordinates
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    let directions;
    if (extended) {
        directions = [
            [-1, 0],  // up
            [1, 0],   // down
            [0, -1],  // left
            [0, 1],   // right
            [1, 1],   // bottom-right
            [1, -1],  // bottom-left
            [-1, 1],  // top-right
            [-1, -1]  // top-left
        ];
    } else {
        directions = [
            [-1, 0],  // up
            [1, 0],   // down
            [0, -1],  // left
            [0, 1]    // right
        ];
    }

    for (let [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;

        // Check bounds
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            const newIndex = newRow * cols + newCol;
            neighbors.push(newIndex);
        }
    }

    return neighbors;
}
function log(str) {
    let loginner = document.querySelector("#loginner")
    loginner.innerHTML += str + "<br>";
    loginner.scrollTo({ top: -loginner.scrollHeight, behavior: 'smooth' });
}
function randint(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function Delta(character, amount, forcesend = false) {
    const originalPlayerBalance = playerbalance;
    const originalCharBalance = character.balance;

    // Check transfer limit first
    if (transferredthisround + Math.abs(amount) > transferlimit) {
        log(`⛔ YOU CANNOT MOVE MORE MONEY THIS ROUND`);
        return;
    }

    // Taking money from character (negative amount)
    if (amount < 0) {
        if (character.balance >= Math.abs(amount)) {
            // Character has enough to give
            character.balance += amount; // Subtract from character
            playerbalance -= amount; // Add to player (minus becomes plus)
            // Tax calculation removed when taking money
        } else {
            // Take whatever the character has left
            playerbalance += character.balance * 0.95;
            character.balance = 0;
        }
    }
    // Giving money to character (positive amount)
    else if (amount > 0) {
        if (playerbalance >= amount || forcesend) {
            character.balance += amount;
            playerbalance -= amount + (amount * 0.02); // 2% tax on giving
        } else {
            log(`⛔ YOU CANNOT AFFORD SENDING ${amount} TO ${character.name}`);
            return;
        }
    }

    // Update transfer amount tracking
    transferredthisround += Math.abs(amount);

    // Update UI
    const tq = document.querySelector("#tq");
    tq.innerHTML = transferredthisround;

    const balancecounter = document.querySelector("#total-coins");
    balancecounter.innerHTML = Math.floor(playerbalance);

    // Log transaction
    gameLog.transactions.push({
        roundNumber: roundnum,
        timestamp: new Date().toISOString(),
        characterId: character.id,
        characterName: character.name,
        amount: amount,
        playerBalanceBefore: originalPlayerBalance,
        playerBalanceAfter: playerbalance,
        characterBalanceBefore: originalCharBalance,
        characterBalanceAfter: character.balance,
        forceSend: forcesend
    });
}
class Trait {
    constructor(name, description, effect) {
        this.name = name;
        this.description = description;
        this.effect = effect; // A function 
    }

    applyEffect(character) {
        return this.effect(character); // Apply
    }
}

// ==============================================
// ==============================================
// ==============================================
let trait_scammer = new Trait("Scammer","Can choose a random character around them and steals 50 from them",(char)=>{
    let choice = randint(1,10);
    let idx = findindexofchar(char.id)
    if (choice == 10) {
        let neighbors = getNeighbors(idx);
        //choose random victim

        let victim = charsInGame[neighbors[randint(0,neighbors.length-1)]]
        if (victim) {
            console.log(victim);
            deltaChars(victim,char,-50);
            return true;
        }


    }
    render(charsInGame);
    return false;
})
let trait_gremlin = new Trait("Gremlin","Steals coins from the richest character every round",(char)=>{
    let clone = [...charsInGame]
    clone = clone.sort((a,b)=> b.balance - a.balance)
    if (clone.length == 20) {
        deltaChars(clone[0],char,-10)
    }
})
let trait_investor = new Trait("Investor","Each round their net worth changes by a random amount (-20 to +100)",(char)=>{
    let delta = randint(-20,100)
    char.updateBalance(char.balance+=delta)
})
let trait_queen = new Trait("Queen of microtransactions"," Spends 1% of their value every round, 1% chance to win +5,000 coins",(char)=>{
    char.updateBalance(char.balance*0.99)

    let rand = randint(1,100)
    if (rand==1) {
        log(`💰 ${char.name} has won 5000 coins`)
        char.updateBalance(char.balance+5000)
    }
})
let trait_parrothoarder = new Trait("Parrot hoarder","Adopts a parrot every 3 rounds (-100 coins)",(char)=>{
    if (roundnum%3==0) {
        char.updateBalance(char.balance - 100);
        char.parrots++;
    }
})
let trait_entrepereneur = new Trait("Entrepreneur","Adjacent characters start a firm and have to split 30% of revenue/losses of any of the 9 characters. If one character dies, the owner pays 300 for their funeral and the firm collapses",(char)=>{
    console.log(char.id)
    let idx = findindexofchar(char.id);
    let neighbors = getNeighbors(idx,true);

    console.log(idx,neighbors);

    let company = [...neighbors,idx]
    company.forEach((target)=>{
        console.log(target,charsInGame[target])
        target = charsInGame[target]
        if (target.lastentrepereneur != char) {
            target.lastentrepereneur = char
            target.hastoshare = true
            target.sharingwith = company.map((x)=>charsInGame[x])
        }
    })
    
})
let trait_magician = new Trait("Magician","Each round increases adjacent characters value by 2.5%. Does not increase own value. Does not add money to a character if their value is more than 9000 coins",(char)=>{
    console.log(char.id)
    let idx = findindexofchar(char.id);
    let neighbors = getNeighbors(idx,true);

    neighbors.forEach((index)=>{
        let target = charsInGame[index]
        console.log("trait_magician",index,target)
        target.updateBalance(target.balance*1.025)
    })
    
})
const traits = [
    [0.4,trait_gremlin],
    [0.3,trait_scammer],
    [0.3,trait_investor],
    [0.1,trait_parrothoarder],
    [0.1,trait_entrepereneur],
    [0.05,trait_queen],
    [0.05,trait_magician]
]

function randomtrait() {
    let cumulativeranges = [];
    let sum = 0;

    traits.forEach((value)=>{
        let chance = value[0];
        let trait = value[1];

        cumulativeranges.push([sum,sum+chance,trait])
        sum += chance;
    })
    let rand = Math.random()*sum;
    for (let index = 0; index < cumulativeranges.length; index++) {
        const range = cumulativeranges[index];
        if (rand >= range[0] && rand < range[1]) {
            console.log(range[2]);
            return range[2];
        }
    }
}
function nametotrait(string) {
    for (let index = 0; index < traits.length; index++) {
        const element = traits[index][1];
        if (element.name.toLowerCase() == string.toLowerCase()) {
            return element
        }
        
    }
}
export class ShopSystem {
    constructor(nameToTrait) {
        this.shopContainer = document.querySelector('#shop');
        this.nameToTrait = nametotrait; // Function to convert trait name to trait object
        this.initializeShop();
        this.selectedItem = null;
    }

    initializeShop() {
        this.shopContainer.innerHTML = '';
        
        shopitems.forEach(item => {
            const iconDiv = document.createElement('div');
            iconDiv.className = 'shopicon';
            iconDiv.setAttribute("data-hover-info-type","upgrade");
            iconDiv.setAttribute("data-hover-info",`{"name":"${item.name}", "cost":${item.price}, "description":"${item.description}", "repeatable":${item.repeatable}}`)
            const img = document.createElement('img');
            img.src = item.icon;
            img.alt = item.name;
            
            iconDiv.addEventListener('click', () => this.handleItemClick(item, iconDiv));
            
            iconDiv.appendChild(img);
            this.shopContainer.appendChild(iconDiv);
        });
    }

    handleItemClick(item, iconElement) {
        if (!item.repeatable && iconElement.classList.contains('purchased')) {
            log(`⛔ ${item.name} has already been purchased`);
            return;
        }
        if (playerbalance < item.price) {
            log(`⛔ Cannot afford ${item.name} (${item.price} coins)`);
            return;
        }

        if (item.appliesToChar) {
            this.selectedItem = item;
            this.startCharacterSelection();
            log(`🎯 Select a character to ${item.name}`);
        } else {
            this.purchaseUpgrade(item, iconElement);
        }
    }

    startCharacterSelection() {
        const cards = document.querySelectorAll('.character-card');
        cards.forEach(card => {
            card.classList.add('drop-target');
            const charId = card.querySelector('.character-name').id;
            card.addEventListener('click', () => this.handleCharacterSelect(charId), { once: true });
        });
    }

    stopCharacterSelection() {
        const cards = document.querySelectorAll('.character-card');
        cards.forEach(card => {
            card.classList.remove('drop-target');
            const clone = card.cloneNode(true);
            card.parentNode.replaceChild(clone, card);
        });
    }

    handleCharacterSelect(characterId) {
        const character = charsInGame.find(char => char.id === characterId);
        const item = this.selectedItem;
        
        this.stopCharacterSelection();

        if (item.name.startsWith('Add')) {
            if (character.traits.some(trait => trait.name === item.traitname)) {
                log(`⛔ ${character.name} already has ${item.traitname}`);
                return;
            }

            const trait = this.nameToTrait(item.traitname);
            character.addTrait(trait);
            this.deductCost(item.price);
            log(`✨ Added ${item.traitname} to ${character.name}`);
        }
        else if (item.name.startsWith('Remove')) {
            if (!character.traits.some(trait => trait.name === item.traitname)) {
                log(`⛔ ${character.name} doesn't have ${item.traitname}`);
                return;
            }

            character.removeTrait(item.traitname);
            this.deductCost(item.price);
            log(`✨ Removed ${item.traitname} from ${character.name}`);
        }

        this.selectedItem = null;
        render(charsInGame);
    }

    purchaseUpgrade(item, iconElement) {
        this.deductCost(item.price);
        
        if (!item.repeatable) {
            iconElement.classList.add('purchased');
        }
        switch (item.id) {
            case "rdt1":
                    deductFive = true;
                break;
            case "rdt2":
                    deductTen = true;
                break;
            case "rdt3":
                    percenttaxreduction = true;
                break;
            default:
                log(`⛔ Failed to purchase ${item.id}`);
                return;
        }
        log(`✨ Purchased ${item.name}`);
    }

    deductCost(price) {
        playerbalance -= price;
        document.querySelector('#total-coins').textContent = Math.floor(playerbalance);
    }
}
function findindexofchar(uuid) {
    console.log(charsInGame.map((x)=>x.id),uuid)
    for (let index = 0; index < charsInGame.length; index++) {
        let char = charsInGame[index];
        if (uuid == char.id) {
            console.log("YES", index);

            return index; // This will now properly return the index and exit the function
        }
    }
    return -1; // If no match is found, return a default value
}


class Character {
    constructor(name, image, balance, traits = []) {
        this.id = crypto.randomUUID()
        this.imageurl = image
        this.name = name;
        this.balance = balance;
        this.traits = traits;
        this.previousBalance = balance;
        this.startOfRoundBalance = balance; 
        this.usedAbility = false;
        this.isNew = false;
        this.isRetired = false;
        this.parrots = 0;

        this.hastoshare = false;
        this.sharingwith = [];
        this.lastentrepereneur = null;
    }

    addTrait(trait) {
        this.traits.push(trait);
    }

    removeTrait(traitName) {
        this.traits = this.traits.filter(trait => trait.name !== traitName);
    }

    applyTraits() {
        this.usedAbility = false;
        this.traits.forEach(trait => {
            const result = trait.applyEffect(this);
            if (result) {
                this.usedAbility = true;
                
                // Log trait activation
                gameLog.traitActivations.push({
                    roundNumber: roundnum,
                    timestamp: new Date().toISOString(),
                    characterId: this.id,
                    characterName: this.name,
                    traitName: trait.name,
                    characterBalanceBefore: this.previousBalance,
                    characterBalanceAfter: this.balance
                });
            }
        });
    }

    updateBalance(newBalance) {
        // check if there are entrepereneurs nearby. if there arent any nearby they were moved/died and they dont have to share money anymore
        let neighbors = getNeighbors(findindexofchar(this.id),true).map((idx)=>charsInGame[idx]);
        let foundentrepereneur = false;
        neighbors.forEach((neighbor)=>{
            neighbor.traits.forEach((trait)=>{
                if (trait == trait_entrepereneur) {
                    foundentrepereneur = true;
                }
            })
        })
        if (!foundentrepereneur) {
            this.hastoshare = false;
            this.sharingwith = [];
        }

        if (this.hastoshare && this.sharingwith.length != 0) {
            console.log(this.hastoshare, this.sharingwith, this.balance, newBalance, this.previousBalance);
            this.previousBalance = this.balance;

            let difference = newBalance - this.previousBalance;

            let goesToCharacter = difference * 0.7;
            let share = (difference - goesToCharacter) / this.sharingwith.length;

            this.balance += difference;

            this.sharingwith.forEach((char) => {
                char.previousBalance = char.balance;
                char.balance += share;
            });

            return;
        }

        this.previousBalance = this.balance;
        this.balance = newBalance;
    }

    getEffectClasses() {
        const classes = [];
        const totalChange = this.balance - this.startOfRoundBalance; // Use total change since start of round

        if (totalChange >= 150) {
            classes.push("bigchange-positive");
        } else if (totalChange > 0) {
            classes.push("smallchange-positive");
        } else if (totalChange == 0) {
            // no change
        } else if (totalChange > -150) {
            classes.push("smallchange-negative");
        } else {
            classes.push("bigchange-negative");
        }

        if (this.balance < 100) {
            classes.push('danger');
        }

        if (this.usedAbility) {
            classes.push('bump');
        }

        if (this.isNew) {
            classes.push('new');
        }

        if (this.balance >= 10000) {
            if (this.isRetired == false) {
                gameLog.retirements.push({
                    roundNumber: roundnum,
                    timestamp: new Date().toISOString(),
                    characterId: this.id,
                    characterName: this.name,
                    finalBalance: this.balance,
                    traits: this.traits.map(t => t.name)
                });
            }
            this.isRetired = true;
            classes.push('retired');

        } else {
            this.isRetired = false;
        }

        return classes.join(' ');
    }

    resetRound() {
        this.startOfRoundBalance = this.balance; // Add this method to reset at start of round
    }
}

function exportGameLog() {
    const logData = JSON.stringify(gameLog, null, 2);
    const blob = new Blob([logData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `game_log_${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function tripleshuffle(arr) {
    for(let i  = 0; i < 3; i++) {
        for (let index = arr.length - 1; index > 0; index--) {
            let rand = Math.floor(Math.random()*arr.length);
            
            [arr[index],arr[rand]] = [arr[rand],arr[index]];
            
        }
    }
}
function createchar() {
    let caca = chars.shift();
    if (!caca) {
        winscreen()
        log("⛔ STOP: no characters left to create")
        return
    }
    let name = caca[0];
    let url = caca[1] || "";
    // CHOOSE TRAITS
    let chosentraits = []
    if (Math.random() > 0.1) {
        let chance = 0.8
        do {
            let chosen = randomtrait()

            // i have no idea
            if (!chosentraits.some(trait => trait.name === chosen.name)) {
                chosentraits.push(chosen)
            }
            chance = Math.pow(chance,2.2)
        } while (Math.random() < chance)
    }




    let char = new Character(name, url, 1000,chosentraits);
    return char

}

function traitlist2html(traitlist) {
    let finalhtml = "";
    traitlist.forEach(element => {
        finalhtml += `<li data-hover-info="${element.description}" data-hover-info-type="trait">${element.name}</li>`;
    });
    return finalhtml;
}
function deltaChars(sender, recipient, amount) {
    if (sender.balance >= amount) {
        sender.balance -= amount;
        recipient.balance += amount;
    } else {
        // send whats available
        recipient.balance += sender.balance;
        sender.balance = 0;
    }

    console.log(`${sender.name} sent ${amount} to ${recipient.name}`);
    console.log(`${sender.name} balance: ${sender.balance}`);
    console.log(`${recipient.name} balance: ${recipient.balance}`);
}
function calculateScore() {
    // Base scores for character management
    const retiredCharactersScore = charsInGame
        .filter(char => char.isRetired)
        .reduce((sum, char) => {
            // More points for characters retired earlier
            const earlyRetirementBonus = Math.max(0, 50 * (30 - roundnum));
            return sum + Math.floor(char.balance / 50) + earlyRetirementBonus;
        }, 0);
    
    const activeCharactersScore = charsInGame
        .filter(char => !char.isRetired)
        .reduce((sum, char) => {
            // Reward maintaining high balances
            const balancePoints = Math.floor(char.balance / 100);
            // Bonus for characters close to retirement
            const nearRetirementBonus = char.balance >= 8000 ? 200 : 0;
            return sum + balancePoints + nearRetirementBonus;
        }, 0);
    
    // Player engagement scoring
    const transactionVolume = gameLog.transactions
        .filter(t => t.roundNumber <= roundnum)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    

    const transactioncountbonus = gameLog.transactions.length > 20 ? 1000 : -1000
    const playerActivityScore = Math.floor(transactionVolume / 400);
    const baseroundscore = roundnum * 100;
    // Strategic scoring
    const averageBalance = charsInGame.reduce((sum, char) => sum + char.balance, 0) / charsInGame.length;
    const balanceDistributionScore = averageBalance >= 2000 ? 500 : 0;
    
    const lateStagePenalty = roundnum > 40 ? Math.pow(roundnum,1.25) : 0;
    
    // Trait management scoring
    const traitBonus = charsInGame.reduce((sum, char) => {
        if (char.traits.length > 1) {
            // Exponential bonus for managing multiple traits
            return sum + (Math.pow(2, char.traits.length) * 100);
        }
        return sum;
    }, 0);
    
    // Calculate final score
    const totalScore = 
        retiredCharactersScore +
        activeCharactersScore +
        playerActivityScore +
        baseroundscore + 
        balanceDistributionScore +
        transactioncountbonus + 
        lateStagePenalty +
        traitBonus;
    
    return [
        Math.floor(totalScore),
        {
            baseRoundScore: baseroundscore,
            retiredCharacters: retiredCharactersScore,
            activeCharacters: activeCharactersScore,
            playerActivity: playerActivityScore,
            transactionCount: transactioncountbonus,
            balanceDistribution: balanceDistributionScore,
            lateGamePenalty: lateStagePenalty,
            traits: traitBonus
        }
    ];
}
function winscreen() {
    let calcscore = calculateScore();
    let total = calcscore[0];
    let breakdown = calcscore[1]
    gameLog.score = calcscore;
    let richest = charsInGame.sort((a,b)=>b.balance-a.balance)[0];


    let modalcontainer = document.createElement("div");
    modalcontainer.classList.add("modalcontainer");
    document.body.prepend(modalcontainer);
    modalcontainer.innerHTML = winscreenmodal
        .replace("%IMAGEURL%",richest.imageurl)
        .replace("%SCORE%",total);

    let btncontainer = modalcontainer.querySelector(".winbuttoncontainer");

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart";
    restartBtn.classList.add("restart");
    restartBtn.addEventListener("click", () => {
        location.reload()
    });

    const downloadLogsBtn = document.createElement("button");
    downloadLogsBtn.textContent = "Export logs";
    downloadLogsBtn.classList.add("downloadlogs");
    downloadLogsBtn.addEventListener("click", () => {
        exportGameLog();
    });

    btncontainer.appendChild(restartBtn);
    btncontainer.appendChild(downloadLogsBtn);

}

function render(chars) {
    if (!chars) {
        winscreen();
        log("⛔ STOP: no characters left to render")
        return
    }

    const board = document.querySelector("#board");
    board.innerHTML = "";

    const roundc = document.querySelector("#round-counter");
    roundc.innerHTML = roundnum;

    const tq = document.querySelector("#total-coins");
    tq.innerHTML = Math.floor(playerbalance);

    chars.forEach(character => {
        const cardDiv = document.createElement('div');
        cardDiv.draggable = true
        cardDiv.className = `character-card ${character.getEffectClasses()}`;

        // Add character image
        const imageDiv = document.createElement('div');
        imageDiv.className = 'character-image';
        imageDiv.style = `background-image:url(${character.imageurl}); background-size:cover`
        cardDiv.appendChild(imageDiv);


        // Add character name
        const nameH3 = document.createElement('h3');
        nameH3.className = 'character-name';
        nameH3.textContent = character.name;
        nameH3.id = character.id;
        cardDiv.appendChild(nameH3);

        // Add value paragraph with a unique ID for updating
        const valueP = document.createElement('p');
        valueP.className = 'character-value';
        const valueStat = document.createElement('span');
        valueStat.className = 'stat';
        valueStat.id = `balance-${character.id}`;
        valueStat.textContent = character.balance;
        valueP.appendChild(document.createTextNode('Value: '));
        valueP.appendChild(valueStat);
        cardDiv.appendChild(valueP);

        // Add traits list
        const traitsList = document.createElement('ul');
        traitsList.className = 'character-traits';
        traitsList.innerHTML = traitlist2html(character.traits);
        cardDiv.appendChild(traitsList);

        // Create controls div
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'controls';

        const buttons = [
            { text: 'Take 250', amount: -250, isNegative: true },
            { text: 'Take 50', amount: -50, isNegative: true },
            { text: 'Give 50', amount: 50, isNegative: false },
            { text: 'Give 250', amount: 250, isNegative: false }
        ];

        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.className = 'control-btn' + (btn.isNegative ? ' negative' : '');
            button.textContent = btn.text;
            
            button.addEventListener('click', () => {
                const previousBalance = character.balance;
                Delta(character, btn.amount);

                const balanceElement = document.getElementById(`balance-${character.id}`);
                if (balanceElement) {
                    balanceElement.textContent = character.balance;
                }

                render(charsInGame);
            });

            controlsDiv.appendChild(button);
        });

        cardDiv.appendChild(controlsDiv);


        cardDiv.addEventListener('dragstart', handleDragStart);
        cardDiv.addEventListener('dragend', handleDragEnd);
        cardDiv.addEventListener('dragover', handleDragOver);
        cardDiv.addEventListener('dragenter', handleDragEnter);
        cardDiv.addEventListener('dragleave', handleDragLeave);
        cardDiv.addEventListener('drop', handleDrop);
        board.appendChild(cardDiv);
    });
}
function isdead(character) {
    if (character.balance <= 0) {
        log(`💀 ${character.name} has died with ${character.balance} coins`);
        gameLog.deaths.push({
            roundNumber: roundnum,
            timestamp: new Date().toISOString(),
            characterId: character.id,
            characterName: character.name,
            finalBalance: character.balance,
            traits: character.traits.map(t => t.name),
            replacementCharacterId: null  // Will be set below
        });


        const index = charsInGame.indexOf(character);
        const newChar = createchar();
        gameLog.deaths[gameLog.deaths.length - 1].replacementCharacterId = newChar.id;
        newChar.isNew = true;
        charsInGame[index] = newChar;

        
        playerbalance -= 200;
        const balancecounter = document.querySelector("#total-coins");
        balancecounter.innerHTML = Math.floor(playerbalance);

        if (character.hastoshare && character.sharingwith.length != 0) {
            character.lastentrepereneur.updateBalance(character.lastentrepereneur.balance - 300);
            character.sharingwith.forEach((target)=>{
                target.sharingwith = [];
                target.hastoshare = false;
            })
        }
        return true;
    }
    return false;
}
function step(cig) {
    roundnum++;
    log(`------ROUND ${roundnum}-------`);
    cig.forEach(character => character.resetRound());


    transferredthisround = 0;
    const tq = document.querySelector("#tq");
    tq.innerHTML = 0;
    const tql = document.querySelector("#tql");
    tql.innerHTML = Math.floor(transferlimit);

    if (roundnum > 9){
        const quizApp = new QuizApp(document.querySelector("#quizcontainer"), {
            onCorrectAnswer: () => {
                playerbalance += 100;
                let totalcoins = document.querySelector("#total-coins");
                totalcoins.innerHTML = Math.floor(playerbalance);
            }
        });
    }

    cig.forEach(character => {
        character.isNew = false;
        character.previousBalance = character.balance;
    });


    cig.forEach(character => {
        if (charsInGame.length > 19) {
            character.applyTraits();
        }
        if (character.isRetired == true) {
            character.updateBalance(character.balance+roundnum)
        } else {
            let tax = ((roundnum)*1.25+15);

            deductFive ? tax -= 5 : tax += 0;
            deductTen ? tax -= 10 : tax += 0;

            character.updateBalance(character.balance-tax)
        }
        
        if (isdead(character)) {
            console.warn("NO")
            return
        }
        
        if (character.balance < 100) {
            Delta(character,10,true);
            log(`📉${character.name} took 10 coins from you (balance < 100)`)
        }

        // mama a dead girl behind you

    });

    render(cig);
}
//=====================================================
//=====================================================
//=====================================================
tripleshuffle(chars)





function init() {
    let shopSystem = new ShopSystem();
    let hoverSystem = new HoverInfoSystem();
    //init help button
    let helpbtn = document.querySelector("#help");
    helpbtn.addEventListener('click',()=>{
        let container = document.createElement("div");
        container.classList.add("modalcontainer");
        container.innerHTML = infomodal;
        container.addEventListener('click',()=>{
            container.remove()
        })
        document.body.prepend(container)
    })
    // init 20 characters
    for (let i = 0; i < 20; i++) {
        charsInGame.push(createchar());
    }
    
    render(charsInGame);
    //init step button
    let stepbtn = document.querySelector("#step");
    stepbtn.addEventListener('click',function(){
        step(charsInGame);
    })

}

init()