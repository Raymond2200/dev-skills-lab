let SkillsM = require('../model/skills');

function printSkills(req, res) {
    res.render('./skills/skills.ejs' , {skills: SkillsM.skills});
}

function newSkills(req, res) {
    res.render('./skills/newskills.ejs')
}

function create(req, res) {
    SkillsM.skills.push({skill: req.body.newskills})
    res.redirect('/skills')
    console.log(SkillsM.skills)
}

function deleteSkills(req, res) {
    SkillsM.deleteOne(req.params.id)
    res.redirect('/skills')
}

function showSkills(req, res) {
    let a = req.params.id
    res.render("./skills/show.ejs", { a : a })
}

function update (req, res) {
    let id = req.params.id
    let updateSkill = req.body.update

}

module.exports = {
    printSkills,
    newSkills,
    create,
    deleteSkills,
    showSkills,
    update,
}