const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const NOTES = require('./notes.js')

// create add command
yargs.command({
    command : 'add',
    describe : 'Add a Note',
    builder : {
        title : {
            describe : 'Title of note',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body of the note',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        NOTES.addNotes(argv.title,argv.body)
    }
})
// create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a Note',
    builder : {
        title:{
            describe : 'Title of the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        NOTES.removeNotes(argv.title)
    }
})
// create list command
yargs.command({
    command : 'list',
    describe : 'list down notes',
    handler(){
        NOTES.listNotes()
    }
})
// create read command
yargs.command({
    command : 'read',
    describe : 'read the notes',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        NOTES.readNotes(argv.title)
    }
})
yargs.parse()
