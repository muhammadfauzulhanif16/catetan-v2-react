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
