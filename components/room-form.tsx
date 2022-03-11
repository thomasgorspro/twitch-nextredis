import { NextComponentType } from 'next';
import { useMutation, useQueryClient } from 'react-query';
import { postRoom, RoomPayload } from './room-api';

const RoomForm: NextComponentType = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation(postRoom, {
		onSuccess: () => {
			queryClient.invalidateQueries('rooms');
		},
	});

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		const form = new FormData(event.target);
		const formData = Object.fromEntries(form.entries());

		mutation.mutate(formData as unknown as RoomPayload); // TODO fix type
	};

	return (
		<form className="w-full max-w-sm" onSubmit={handleSubmit}>
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label
						className="block text-gray-500 dark:text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
						htmlFor="inline-full-name"
					>
						Title
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						name="title"
						className="bg-gray-200 dark:bg-slate-600 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-purple-500"
						id="inline-full-name"
						type="text"
					/>
				</div>
			</div>
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label
						className="block text-gray-500 dark:text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
						htmlFor="inline-full-name"
					>
						Description
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						name="description"
						className="bg-gray-200 dark:bg-slate-600 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-purple-500"
						id="inline-full-name"
						type="text"
					/>
				</div>
			</div>
			<div className="md:flex md:items-center">
				<div className="md:w-1/3"></div>
				<div className="md:w-2/3">
					<button
						className="shadow bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="submit"
					>
						Create room
					</button>
				</div>
			</div>
		</form>
	);
};

export default RoomForm;
