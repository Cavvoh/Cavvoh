const fs = require('fs');
const path = require('path');

const geburtsdatum = new Date('2007-08-03');

function berechneAlter() {
  const heute = new Date();
  let alter = heute.getFullYear() - geburtsdatum.getFullYear();
  const monat = heute.getMonth();
  const tag = heute.getDate();
  
  if (monat < geburtsdatum.getMonth() || (monat === geburtsdatum.getMonth() && tag < geburtsdatum.getDate())) {
    alter--;
  }
  return alter;
}

function aktualisiereReadme() {
  const alter = berechneAlter();
  const readmePath = path.join(__dirname, 'README.md');
  
  fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) throw err;
    
    const updatedContent = data.replace(/I'm \d+/g, `I'm ${alter}`);
    
    fs.writeFile(readmePath, updatedContent, 'utf8', (err) => {
      if (err) throw err;
      console.log(`Alter erfolgreich auf ${alter} aktualisiert!`);
    });
  });
}

aktualisiereReadme();
