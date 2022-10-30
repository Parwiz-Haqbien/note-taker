const util = require('util');
const fs = require('fs');



const readingFiles = until.promisify(fs.readFile);
const writingFiles = until.promisify(fs.writeFile);



class save {
    constructor(lastId) {
        this.lastId = 0
    }
}


reading() {
    return readingFiles('db/db.json' , 'utf8');
}

writing(note) {
    return writingFiles('db/db.json' , JSON.stringify(note));
}


getNotes() {
    return this.reading().then((note) => {
        let parseNotes;
        try {
            parseNotes = [].concat(JSON.parse(note));
        } catch (err) {
            parseNotes = [];
        }
        return parseNotes
    });
}


addingNotes(note) {
    const{header , text} = note;

    if (!header || !text) {
        throw new Error('Both text and header cant be blanked');
    }
    const additionalNote = {header , text, id: this.lastId++};
    return getNotes()
    .then((note) => [...note, addingNotes]);
    then((newsetNotes) => this.write(newsetNotes));
    then(() => newsetNotes)
}