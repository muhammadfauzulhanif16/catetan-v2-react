export const titleChange = (e, note, setNote) => {
  if (e.target.value.length <= 50) {
    return setNote({
      title: {
        content: e.target.value,
        max: 50 - e.target.value.length
      },
      body: {
        content: note.body.content
      }
    })
  }
}

export const bodyChange = (e, note, setNote) => {
  return setNote({
    title: {
      content: note.title.content,
      max: note.title.max
    },
    body: {
      content: e.target.value
    }
  })
}

export const addNote = (note, notes, setNote, setNotes) => {
  const newNote = {
    id: +new Date(),
    title: note.title.content,
    body: note.body.content,
    archived: false,
    createdAt: new Date().toLocaleString()
  }

  setNotes([...notes, newNote])

  setNote({
    title: {
      content: '',
      max: 50
    },
    body: {
      content: ''
    }
  })
}
