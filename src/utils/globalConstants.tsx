export interface IPeople {
	name: string,
	profileURL: string,
	unreadMessage: number,
	lastMessage: {
		text: string,
		timestamp: Date,
		status: string
	}
}