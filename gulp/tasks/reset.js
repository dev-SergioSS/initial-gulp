import { deleteAsync } from 'del';

export const reset = () => {
	const pathsToDelete = [app.path.clean, app.path.zip];
	console.log(pathsToDelete);
	return deleteAsync(pathsToDelete);
};
