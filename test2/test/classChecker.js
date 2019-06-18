class Checker {
    constructor() {
        this.result = 0
    }

    onClick() {
        const firstN = parseInt(this.randomFirstNum)
        const secondN = parseInt(this.randomSecondNum)
        const userAns = parseInt(this.answer.value)
        const oper = this.randomOper

        switch (oper) {
            case 0: this.result = firstN + secondN
                break;
            case 1: this.result = firstN - secondN
                break;
            case 2: this.result = firstN * secondN
                break;
            case 3: this.result = firstN / secondN
                break;
        }
        if (this.result == userAns)
            this.resSpan.innerText = 'OK'
        else
            this.resSpan.innerText = 'Wrong'



    }

    render() {
        const mainDiv = document.createElement('div')

        
        let span = document.createElement('span')
        span.innerText = 'First number :'
        this.firstNum = document.createElement('input')
        this.randomFirstNum = 1 + Math.floor(Math.random() * 10)
        this.firstNum.value = this.randomFirstNum
        span.appendChild(this.firstNum)
        mainDiv.appendChild(span)
        let br = document.createElement('br')
        mainDiv.appendChild(br)

        span = document.createElement('span')
        span.innerText = 'Operation :'
        this.arr = ['+', '-', '*', '/']
        this.randomOper = Math.floor(Math.random() * this.arr.length)
        const operatorLabel = document.createElement('label')
        operatorLabel.innerText = this.arr[this.randomOper]
        span.appendChild(operatorLabel)
        mainDiv.appendChild(span)
        br = document.createElement('br')
        mainDiv.appendChild(br)


        span = document.createElement('span')
        span.innerText = 'Second number :'
        this.secondNum = document.createElement('input')
        this.randomSecondNum = 1 + Math.floor(Math.random() * 10)
        this.secondNum.value = this.randomSecondNum
        span.appendChild(this.secondNum)
        mainDiv.appendChild(span)
        br = document.createElement('br')
        mainDiv.appendChild(br)
        const hr = document.createElement('hr')
        mainDiv.appendChild(hr)

        span = document.createElement('span')
        span.innerText = 'Your answer :'
        this.answer = document.createElement('input')
        span.appendChild(this.answer)
        mainDiv.appendChild(span)

        let div = document.createElement('div')
        const btn = document.createElement('button')
        btn.innerText = 'Check'
        btn.onclick = this.onClick.bind(this)
        div.appendChild(btn)
        mainDiv.appendChild(div)


        div = document.createElement('div')
        div.innerText = 'Result :'
        this.resSpan = document.createElement('span')
        div.appendChild(this.resSpan)
        mainDiv.appendChild(div)




        return mainDiv
    }
}