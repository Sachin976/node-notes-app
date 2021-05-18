const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')



//add note
const addNotes = (title,body)=>{
    const notes = loadNotes()
    const tempNotes = notes.filter((note) => note.title === title)
    debugger
    if(tempNotes.length === 0){
        notes.push({
            'title': title,
            'body' : body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added'))
    }else{
        console.log(chalk.red.bold('Note title taken'))
    }
}

//remove note
const removeNotes = (title) =>{
    const notes = loadNotes()
    const newNotes= notes.filter((note) => note.title !== title )
    if(newNotes.length < notes.length){
        saveNotes(newNotes)
        console.log(chalk.green.bold(`Note with title :${title} is removed`))
    }else{
        console.log(chalk.red.bold('Title does not exist'))
    }
    
    
}

//list notes
const listNotes = () => {
    console.log(chalk.bgGreen.bold("Your notes"))
    const notes = loadNotes()
    notes.forEach((note) =>{
        console.log(chalk.blue.bold(note.title))
    })
}

//read notes
const readNotes = (title) =>{
    const notes = loadNotes()
    const tempNote = notes.find((note) => note.title === title)
    if(tempNote){
        console.log(chalk.blue.bold(tempNote.title))
        console.log(tempNote.body)
    }else{
        console.log(chalk.red.bold('NO title with the name: ' + title))
    }

}

// save notes
const saveNotes = (notes) => {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}
//load notes
const loadNotes = () => {
    try{
        dataBuffer = fs.readFileSync('notes.json')
        dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }

}

module.exports = {
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}