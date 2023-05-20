export const noteList = (amount) => {
  const notes = []

  for (let i = 1; i <= amount; i++) {
    const newNote = {
      id: i,
      title: `Catatan ${i}`,
      body: `Isi catatan ${i}`,
      createdAt: new Date()
    }

    notes.push(newNote)
  }

  return notes
}
