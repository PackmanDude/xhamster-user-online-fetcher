function isOnline(user?: string): boolean
{
	if (typeof user === 'undefined') { user = 'coffeewithcream' }

	// request data
	const Http = new XMLHttpRequest()
	const url = `https://xhamster.com/users/${user}`
	Http.responseType = 'document'
	Http.open('GET', url)
	Http.send()

	// check status
	const _parent = document.getElementsByClassName('details-row')[0]
	if (_parent.getElementsByClassName('online')[0] !== undefined)
	{
		console.log('im gay')
		return true
	}

	if (_parent.getElementsByClassName('offline')[0] !== undefined)
	{
		console.log('im offline')
		return false
	}

	else
	{
		console.log('unexpected error occured')
	}
}

isOnline()
