import Stack from './Stack'

describe('stack', () => {

    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('push', () => {
        it('puts one item on the stack and returns its position', () => {
            expect(stack.push('a')).toEqual(1)
        })
        it('puts two items on the stack and returns its position', () => {
            stack.push('a')
            expect(stack.push('b')).toEqual(2)
        })
    })
    describe('size', () => {
        it('returns 0 when no items on the stack', () => {
            expect(stack.size()).toEqual(0)
        })
        it('returns 1 when one item on the stack', () => {
            stack.push('a')
            expect(stack.size()).toEqual(1)
        })
    })
    describe('peek', () => {
        it('returns one item from stack when only one item on the stack', () => {
            stack.push('a')
            expect(stack.peek()).toEqual('a')
        })
        it('returns last item from stack when more than one item on the stack', () => {
            stack.push('a')
            stack.push('b')
            expect(stack.peek()).toEqual('b')
        })
    })
    describe('pop', () => {
        it('returns null when stack is empty', () => {
            expect(stack.pop()).toEqual(null)
        })
        it('removes last item from stack and returns it', () => {
            stack.push('a')
            stack.push('b')
            expect(stack.pop()).toEqual('b')
            expect(stack.peek()).toEqual('a')
        })
    })
})