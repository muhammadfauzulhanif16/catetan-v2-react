export const titleChange = (e, note, setNote) => {
  setNote({
    title: {
      content: e.target.value,
      max: 50 - e.target.value.length
    },
    body: {
      content: note.body.content
    }
  })

  return setNote
}
