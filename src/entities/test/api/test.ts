import FetchBuilder from '@/shared/lib/api'

interface ITestRes {
	quickLinks: {
		name: string
		url: string
	}[]
}

const testApi = async () => {
	const url = '/api/links'
	const res = await new FetchBuilder(url)
		.useMock(true)
		.build()
		.request<ITestRes>()

	if (res.ok) {
		console.log(res.data)
		return res.data
	}
}

export default testApi