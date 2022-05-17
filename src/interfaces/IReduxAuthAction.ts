// ========== IReduxAuthAction

export interface IReduxAuthAction {
	type: string;
	payload: {
		data: {
			accessToken: string;
			refreshToken: string;
		}
	}
}
