import winston, { Logger } from 'winston'

export default function logInstance(): Logger {
	const logger: Logger = winston.createLogger({
		transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'logs/combined.log' })],
	})

	return logger
}
