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
	if (document.getElementsByClassName('online')[0] !== null)
	{
		console.log('im gay')
		return true
	}

	if (document.getElementsByClassName('offline')[0] !== null)
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
