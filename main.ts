const user = 'coffeewithcream'

const vis = require('vis-timeline')
const options =
{
  style: 'bar',
  format:
  {
    majorLabels:
    {
      millisecond: 'h:mm:ss'
    }
  }
}

const Http = new XMLHttpRequest()
const url = `https://xhamster.com/users/${user}`
Http.responseType = 'document'
Http.open('GET', url)
Http.send()

let items = []

function isOnline()
{
	const _parent = document.getElementsByClassName('details-row')[0]

	if (_parent.querySelector('#online') != null)
	{
		return 1
	}

	if (_parent.querySelector('#offline') != null)
	{
		return 0
	}
	console.log('unexpected error occured.')
	return 2
}

let graph = new vis.Graph2d(container, items, options)

(async () =>
{
	while (true)
	// do
	{
		await new Promise(f => setTimeout(f, 60000))
		let result = isOnline()

		if (!result && result === 1)
		{
			if (!result)
			{
				let item =
				{
					x: new Date(),
					y: 0
				}
			}

			if (result)
			{
				let item =
				{
					x: new Date(),
					y: 1
				}
			}
			graph.itemsData.getDataSet().add(item)
		}
		// debug
		else
		{
			console.log('error at async func.')
		}
	}
})()
