
declare interface Schemalogs {
	uid:				number
	ip:					string,
	data?:				string
	error?:				number
	created:			number
}

declare interface WebFileType {
	mime:string
	data:Buffer 
}

declare interface SessionType {
	lang?:			string
	created: 	number
}

declare interface RpcRequestType {
	jsonrpc: 		"2.0"
	method: 		string
	params: 		Array<string|number|boolean>
	id: 			string|number
}
declare interface RpcResponseType {
	jsonrpc: 		"2.0"
	id: 			string|number
	result?: 		any
	error?: 		number
}

declare interface ServerResponse {
	result?: any
	error?: number
}
