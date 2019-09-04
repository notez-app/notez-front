import { Text } from 'flokit'
import Editable from './Editable'

const types = {
  Text,
}

const Block = ({ type, children }) => {
  const BlockType = types[type]

  return (
    <BlockType as='div' width={1} mt='2px' mb='1px' lineHeight='24px'>
      <Editable>{children}</Editable>
    </BlockType>
  )
}

export default Block
