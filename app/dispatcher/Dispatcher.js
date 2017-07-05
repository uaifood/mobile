// This is our default dispatcher, this is the core on flux.
// It's responsible to dispatch all changes that will happen on
// components (views) and trigger the action type that will
// be received for one or more stores.
import { Dispatcher } from 'flux';
class UaiFoodDispatcher extends Dispatcher {
	dispatchAction(type, data = {}) {
		this.dispatch({
			type,
			...data
		});
	}
}

const dispatcher = new UaiFoodDispatcher();

export const dispatchAction = dispatcher.dispatchAction.bind(dispatcher);

export default dispatcher;
