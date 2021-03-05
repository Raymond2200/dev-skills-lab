

const skills = [
    {skill: "CSS"},
    {skill: "HTML"},
    {skill: "JavaScript"},
    {skill: "views"}
]

function skilledRay(x) {
    let f = ""
    for (i of raymondSkills) {
        f += i.skill
    }
    return f
}

module.exports = {
    skills,
    skilledRay,
    deleteOne,
    updateOne, 
}

function deleteOne(x) {
    const bye = skills.findIndex(y => y.skill == x )
    skills.splice(bye, 1);
}

function updateOne(id, up) {
    const idx = skills.findIndex( y => y.skill == id)
    idx.skill = up
}


