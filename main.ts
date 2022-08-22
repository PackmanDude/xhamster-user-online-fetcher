const user = 'coffeewithcream'

const Http = new XMLHttpRequest()
const url = `https://xhamster.com/users/${user}`
Http.responseType = 'document'
Http.open('GET', url)
Http.send()

function isOnline()
{
	const _parent = document.getElementsByClassName('details-row')[0]

	if (_parent.querySelector('#online') != null)
	{
		console.log('sus amongus!')
		return true
	}

	if (_parent.querySelector('#offline') != null)
	{
		console.log('no sus!')
		return false
	}
	console.log('unexpected error occured')
	return false
}

isOnline()
