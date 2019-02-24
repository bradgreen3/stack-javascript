class Stack {

    constructor() {
        this.numberOfItemsOnStack = 0
        this.currentNode = null
    }

    push(input) {
        this.numberOfItemsOnStack++

        let incomingNode = new StackNode()
        incomingNode.data = input
        incomingNode.previousNode = this.currentNode

        this.currentNode = incomingNode

        return this.numberOfItemsOnStack
    }

    size() {
        return this.numberOfItemsOnStack
    }

    peek() {
        return this.currentNode.data
    }

    pop() {
        if (!this.currentNode) {
            return null
        }

        let poopedNode = this.currentNode.data

        this.currentNode = this.currentNode.previousNode

        return poopedNode
    }
}

class StackNode {}

export default Stack