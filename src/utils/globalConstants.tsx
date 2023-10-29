export interface IPeople {
	id: number,
	name: string,
	profileURL: string,
	unreadMessage: number,
	lastMessage: {
		text: string,
		timestamp: Date,
		status: string
	}
}