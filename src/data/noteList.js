export const noteList = (amount) => {
  const notes = []

  for (let i = 1; i <= amount; i++) {
    const newNote = {
      id: +new Date(),
      title: `Catatan ${i}`,
      body: `Isi catatan ${i}`,
      archived: Boolean(Math.floor(Math.random() * 1)),
      createdAt: new Date()
    }

    notes.push(newNote)
  }

  return notes
}
