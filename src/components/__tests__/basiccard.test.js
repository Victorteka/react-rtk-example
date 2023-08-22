import { cleanup, render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer'
import BasicCard from '../BasicCard'

afterEach(() => {
    cleanup()
})

test('should render BasicCard component', () => {
    const post = {title: 'title', body:'body'}
    render(<BasicCard post={post} />)
    const basicCard = screen.getByTestId('basic-card')
    expect(basicCard).toBeInTheDocument()
    expect(basicCard).toHaveTextContent("title")
})

test('matches snapshot', () => {
    const post = {title: 'title', body:'body'}
    const tree = renderer.create(<BasicCard post={post} />).toJSON()
    expect(tree).toMatchSnapshot()
})