// Shopkeep: The Game
// A quick, text-based game by Lance Schexnaydre for General Assembly


// item list for all items to be sold/obtained in game
let itemList = [
    { item: "Iron Sword", cost: 85 },
    { item: "Iron Shield", cost: 60 },
    { item: "Iron Armor", cost: 90 },
    { item: "Iron Helm", cost: 50 },
    { item: "Halberd", cost: 110 },
    { item: "Rapier", cost: 95 },
    { item: "Polearm", cost: 90 },
    { item: "Battle Axe", cost: 160 },
    { item: "Crossbow", cost: 90 },
    { item: "Long Sword", cost: 145 },
    { item: "Great Sword", cost: 200 },
    { item: "Claymore", cost: 300 },
    { item: "Longbow", cost: 180 },
    { item: "Mace", cost: 160 },
    { item: "Gold Axe", cost: 350 },
    { item: "Gold Helm", cost: 175 },
    { item: "Gold Shield", cost: 200 },
    { item: "Gold Armor", cost: 300 }
]

let shopkeep = {
    inventory: [],
    gold: 0,
    hp: 1
}
if (shopkeep.hp <= 0) {
    console.log("GAME OVER")
}

let customer = {
    inventory: [],
    gold: 1000000,
}


let pay = function() {
    customer.gold -= shopkeep.inventory[0].cost
    shopkeep.gold += shopkeep.inventory[0].cost
}

//pushes items from the itemList array into the shopkeep.inventory to start the game
for (let i = 0; i <= 2; i++) {
    shopkeep.inventory.push(itemList.splice(Math.floor(Math.random() * itemList.length), 1)[0]);
}

// functions for dialogue and windows for shopkeep
function hideWindows() {
    $("#shopkeep").hide()
    $("#notification").hide()
    $("#customer").hide()
    if (shopkeep.inventory.length === 0) {
        dungeonTime()
    }
        else {
            shopLoop()
        }

   }


function openShop() {
    $("#shopkeep").show()
    $(".sktext").empty()
    if (shopkeep.inventory.length === 3) {
        $(".sktext").append("Can't wait to start the day selling some of m'goods!")
    } else if (shopkeep.inventory.length === 2) {
        $(".sktext").append("Business is booming today!")
    } else if (shopkeep.inventory.length === 1) {
        $(".sktext").append("Might have to make a trip to the dungeon soon!")
    } else if (shopkeep.inventory.length === 0) {
        $(".sktext").append("Welp, better close up for the day and head to the dungeon. Gotta get some more goods!")
    }
    $("html").off()
}

function aCustomer() {
    $(".sktext").empty()
    if (shopkeep.inventory.length === 3) {
        $(".sktext").append("First customer of the day!")
    } else if (shopkeep.inventory.length === 2) {
        $(".sktext").append("Ho ho! Another customer!")
    } else if (shopkeep.inventory.length === 1) {
        $(".sktext").append("I might have to hire some help around here soon!")
    }
    $("html").off()
}

function customerExchange() {
    $(".sktext").empty()
    if (shopkeep.inventory.length === 3) {
        $(".sktext").append("Looking to pick up anything in particular?")
    } else if (shopkeep.inventory.length === 2) {
        $(".sktext").append("Welcome! Welcome! C'mon in!")
    } else if (shopkeep.inventory.length === 1) {
        $(".sktext").append("Hi! How's it going?")
    }
    $("html").off()
    $("#customer").show()
    $(".custtext").empty()
    $(".custtext").append("I was hoping you had a " + shopkeep.inventory[0].item + " in stock for purchase!")
    $("html").off()
}

function itemHope() {
    $(".sktext").empty()
    if (shopkeep.inventory.length === 3) {
        $(".sktext").append("But of course! Those are always in stock!")
    } else if (shopkeep.inventory.length === 2) {
        $(".sktext").append("We just added that to our inventory yesterday! You're in luck!")
    } else if (shopkeep.inventory.length === 1) {
        $(".sktext").append("Last one left. It must be your lucky day!")
    }
    $("html").off()
}

function madeMoney() {
    $("#shopkeep").hide()
    $("#customer").hide()
    $("#notification").show()
    $(".notitext").empty()
    $(".notitext").append("Shopkeeper made " + shopkeep.inventory[0].cost + " gold!")
    $("html").off()
}

function transaction() {
    $(".notitext").empty()
    pay()
    $(".notitext").append("Shopkeeper now has " + shopkeep.gold + " gold!")
    shopkeep.inventory.splice(0, 1)
    $("html").off()
}

function shopLoop() {
    $("html").click(function() {
        openShop()
        $("html").click(function() {
            aCustomer()
            $("html").click(function() {
                customerExchange()
                $("html").click(function() {
                    itemHope()
                    $("html").click(function() {
                        madeMoney()
                        $("html").click(function() {
                            transaction()
                            $("html").click(function() {
                                hideWindows()
                            })
                        })
                    })
                })
            })
        })
    })
}


hideWindows()


function dungeonTime() {
    $("html").click(function() {
        $("body").toggleClass("phase2")
        dungeonEnter()
        $("html").click(function() {
            dungeonSearch()
            $("html").click(function() {
                treasureChest()
                $("html").click(function() {
                    treasureTime()
                    $("html").click(function() {
                        treasureChest()
                        $("html").click(function() {
                            treasureTime()
                            $("html").click(function() {
                                treasureChest()
                                $("html").click(function() {
                                    dungeonChance()
                                    $("html").click(function() {
                                        monsterChat()
                                        $("html").click(function() {
                                            shopkeepChat()
                                            $("html").click(function() {
                                                monsterSale()
                                                $("html").click(function() {
                                                    headingHome()
                                                    $("html").click(function() {
                                                    sweetHome()
                                                    $("html").click(function() {
                                                    backHome()
                                                })
                                                })

                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

let monster = {
    random: 3,
    inventory: [],
    attack() { shopkeep.hp -= 2 }
}
let i = 0

function clear() {
    $("#shopkeep").hide()
    $("#notification").hide()
    $("#customer").hide()
    $(".sktext").empty()
    $("notitext").empty()
    $("custtext").empty()
}

function dungeonEnter() {
    $("#shopkeep").show()
    $(".sktext").empty()
    $(".sktext").append("Oh, man. No matter how many times I come here, this place still gives me the heebiejeebies.")
    $("html").off()
}

function dungeonSearch() {
    $(".sktext").empty()
    $(".sktext").append("Alright, let's see if I can't get into some of these treasure chests to find some goods.")
    $("html").off()
}

function treasureChest() {
    $("#shopkeep").hide()
    $("#customer").hide()
    $("#notification").show()
    $(".notitext").empty()
    $(".notitext").append("You found a treasure chest!")
    $("html").off()
}

function dungeonChance() {
    $("#notification").hide()
    $("#shopkeep").show()
    $(".sktext").empty()
    $(".sktext").append("Oh no! This one's a monster!")
    $("html").off()
}

function treasureTime() {
    shopkeep.inventory.push(itemList.splice(Math.floor(Math.random() * itemList.length), 1)[0]);
    $("#notification").hide()
    $("#shopkeep").show()
    $(".sktext").empty()
    $(".sktext").append("Holy smokes! " + shopkeep.inventory[i].item + ". This is gonna sell for a ton!")
    i += 1
    $("html").off()
}

function monsterChat() {
    $("#customer").show()
    $("#shopkeep").hide()
    $(".custtext").empty()
    $("h2").empty()
    $("h2").append("Monster")
    $(".custtext").append("Sure does look like you've got a lot of gold there.")
    $("html").off()
}

function shopkeepChat() {
    $("#shopkeep").show()
    $("#customer").hide()
    $(".sktext").empty()
    $(".sktext").append("What if we were to exchange gold for goods??")
    shopkeep.inventory.push(itemList.splice(Math.floor(Math.random() * itemList.length), 1)[0])
    $("html").off()
}

function monsterSale() {
    $("#customer").hide()
    $("#shopkeep").hide()
    $("#notification").show()
    $(".sktext").empty()
    $(".custtext").empty()
    $(".notitext").empty()
    $(".notitext").append("You purhcased " + shopkeep.inventory[0].item + " from monster.")
    $("html").off()
    console.log(shopkeep.inventory)

}

function headingHome() {
    $("#notification").hide()
    $("#customer").hide()
    $("#shopkeep").show()
    $(".sktext").empty()
    $(".sktext").append("Man, what a nice guy! Happy to have got out of that without a scratch. I should head back to get a head start for")
    $("html").off()
}

function sweetHome() {
    clear()
    $("body").removeClass(".phase2").addClass("phase3")
}

function backHome() {
    clear()
    $("#shopkeep").show()
    $(".sktext").append("What a wild day! I can't wait to get up and do it all again tomorrow!")

}