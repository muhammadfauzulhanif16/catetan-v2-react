export const titleChange = (e, note, setNote) => {
  if (e.target.value.length <= 50) {
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
}
