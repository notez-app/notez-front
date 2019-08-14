import { useState } from 'react'
import ContentEditable from 'react-contenteditable'

const Editable = ({ children }) => {
  const [content, setContent] = useState(children)

  const onChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <ContentEditable
      html={content}
      onChange={onChange}
      css={{
        padding: '3px 2px',
        outline: 0,
      }}
    />
  )
}

export default Editable
