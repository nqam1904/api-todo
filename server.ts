import express, { Request, Response } from 'express'

class Sever {
	private app: express.Application

	constructor() {
		this.app = express()
		this.configuration()
	}

	public configuration() {
		this.app.set('port', process.env.PORT || 8080)
	}

	public routes() {
		this.app.get('/', (req: Request, res: Response) => {
			res.send('Hello World')
		})
	}
	public start() {
		this.app.listen(this.app.get('port'), () => {
			console.log(`Server listening ${this.app.get('port')} port.`)
		})
	}
}

const server = new Sever() // Create server instance
server.start() // Exceute the server
