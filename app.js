class Node 
{
    constructor(data) 
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const mergeSort = (arr) => 
{
    if (arr.length === 1) return arr

    const middle = Math.floor(arr.length / 2)

    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    const merge = (left, right) => 
    {
        let result = [], leftIndex = 0, rightIndex = 0
        while (leftIndex < left.length && rightIndex < right.length) 
        {
            let leftValue = left[leftIndex]
            let rightValue = right[rightIndex]
            leftValue < rightValue
            ? (result.push(leftValue), leftIndex++)
            : (result.push(rightValue), rightIndex++)
        }
        return result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex))
    }

    return merge(mergeSort(left), mergeSort(right))
}

class Tree
{
    constructor(arr)
    {
        this.arr = (mergeSort(arr))
        this.root = this.buildTree(this.arr, 0, this.arr.length - 1)
    }

    buildTree(arr, start, end) 
    {
        if (start > end) return null;

        let mid = parseInt((start + end) / 2);
        let root = new Node(arr[mid]);
    
        root.left = (this.buildTree(arr, start, mid - 1));
        root.right = (this.buildTree(arr, mid + 1, end))
    
        return root;
    }

    insert(value, root = this.root)
    {
        if (root == null) {
            return root = new Node(value)
        }

        value > root.data
        ? root.right = this.insert(value, root.right)
        : root.left = this.insert(value, root.left)

        return root
    }

    // bfs(root) {
    //     let queue = [];
    //     queue.push(root)

    //     while (queue.length > 0) {
    //         let current = queue[0]
    //     }

    //     if (current.left !== null) {queue.push(current.left)}
    //     if (current.right !== null) {queue.push(current.right)}

    //     queue.shift()

    //     console.log(queue)
    // }

    minValueNode(root)
    {
        let minv = root.data;
            while (root.left != null)
            {
                minv = root.left.data;
                root = root.left;
            }
            return minv;
    }

    delete(value) {
		if (this.root === null) throw new Error("This Binary tree is empty!");
		if (this.root.left === null && this.root.right === null) {
			if (!(this.root.data === value)) {
				throw new Error("No element with such a value was found!");
			}
			this.root = null;
			return;
		}

		let parent = null;
		let node = this.root;

		while (node !== null && node.data !== value) {
			parent = node;
			node = node.data > value ? node.left : node.right;
		}
		if (node === null)
			throw new Error("No element with such a value was found!");

		if (node.left === null && node.right === null) {
			if (node === parent.left) {
				parent.left = null;
			} else {
				parent.right = null;
			}
		}

		if (node.left === null || node.right === null) {
			if (parent === null) {
				this.root = this.root.left || this.root.right;
				return;
			}

			if (node === parent.left) {
				parent.left = node.left || node.right;
			} else {
				parent.right = node.left || node.right;
			}
		}

		if (node.left && node.right) {
			let parentOfSuc = node;
			let suc = node.right;

			while (suc.left !== null) {
				parentOfSuc = suc;
				suc = suc.left;
			}

			if (suc === parentOfSuc.left) {
				parentOfSuc.left = suc.right;
			} else {
				parentOfSuc.right = suc.right;
			}

			node.data = suc.data;
		}
	}

    find(value) {
        if (this.root === null) {
            return root
        }
        
        let base = this.root

        while (base !== null && base.data !== value) {
            base = value > base.data ? base.right : base.left
        }

        return base
    }

    bfsCallback(func) {
        if (this.root === null) return []

        let queue = [this.root]
        let results = []
        while (queue.length) {
            let level = []
            for (let i = 0; i < queue.length; i++) {
                const node = queue.shift()
                level.push(node.data)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
                if (func) func(node.data)
                console.log(node)
            }
            results.push(level)
        }
        if (!func) return results
    }

    
}
const coolTree = new Tree([6,3,2,5,4,1])
// coolTree.insert(8)
// console.log(coolTree.root)
// console.log(coolTree.find(6))
// coolTree.delete(8)
// console.log(coolTree.root)
const add = (val) => val + 3
coolTree.bfsCallback(add)

//IGNORE BELOW

// const makeBST = (arr, start, end) => 
// {
//     if (start > end) return null;
//     const mid = parseInt((start + end) / 2);
//     console.log(`This is mid: ${mid}`)
//     const root = new Node(arr[mid]);

//     root.setLeft(makeBST(arr, start, mid - 1));
//     root.setRight(makeBST(arr, mid + 1, end))

//     return root;
// }

// const coolArray = [0,9,3,11,13,100]

// console.log(makeBST(coolArray, 0, coolArray.length - 1))

