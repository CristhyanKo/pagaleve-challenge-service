export default class InitialService {
	public async initial(): Promise<object> {
		return {
			message: 'Server OK',
		}
	}
}
