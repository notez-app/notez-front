import { Text } from 'flokit'

const Emoji = ({ symbol, label, ...props }) => (
  <Text
    role='img'
    aria-label={label}
    aria-hidden={label ? 'false' : 'true'}
    {...props}
  >
    {symbol}
  </Text>
)

Emoji.defaultProps = {
  as: 'span',
}

export default Emoji
