const reversed = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)



function reverse(num) {
	return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  )
}

console.log(reversed(123))

console.log(reversed(233))

console.log(reversed(535))

console.log(reversed(95034))
