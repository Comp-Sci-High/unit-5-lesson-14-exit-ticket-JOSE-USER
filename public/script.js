// Create a function that tests the post route handler [2 pts]

const base = "https://ominous-cod-7vpv6gr755vxcwqrj-3000.app.github.dev/"

async function getPotion(){
    const potionCreate = await fetch(base + "/create-potion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            label: req.params.label,
            effect: req.params.effect,
            ingredients: req.params.ingredients,
            color: req.params.color,
            isExplosive: req.params.isExplosive 
        }).save()
    
    })
    const data = await potionCreate.json()
}


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

getPotion()