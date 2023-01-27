import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello World</Button>
}
