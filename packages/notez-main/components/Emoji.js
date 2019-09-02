import emoji from 'emoji-dictionary'
import { Text } from 'flokit'

const Emoji = ({ symbol, ...props }) => {
  const label = emoji.getName(symbol)

  return (
    <Text
      role='img'
      aria-label={label}
      aria-hidden={label ? 'false' : 'true'}
      {...props}
    >
      {symbol}
    </Text>
  )
}

Emoji.defaultProps = {
  as: 'span',
}

export default Emoji
