import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userApi";

const UserList = () => {
    const {
        data: users,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    });

    if (isLoading) {
        return <p>Loading users...</p>;
    }

    if (isError) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Tan Users</h2>

            {users?.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UserList;
