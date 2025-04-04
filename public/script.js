// Create a function that tests the post route handler [2 pts]

const base = "https://ominous-cod-7vpv6gr755vxcwqrj-3000.app.github.dev/"

async function getPotion(){
    const potionCreate = await fetch(base + "/create-potion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            label: req.body.label,
            effect: req.body.effect,
            ingredients: req.body.ingredients,
            color: req.body.color,
            isExplosive: req.body.isExplosive 
        }).save()
    
    })
    const data = await potionCreate.json()
}


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

getPotion()