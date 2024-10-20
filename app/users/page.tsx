import React from "react";

interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	const res = await fetch("http://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});
	const users: User[] = await res.json();

	return (
		<>
			<h1>{new Date().toLocaleTimeString()}</h1>
			<h1>Users:</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
