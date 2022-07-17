import axios from "axios";

const axiosIns = axios.create(
    {
        baseURL: `http://localhost:4000`
    }
);

const UserAPI = {
    getAll: () => {
        return axiosIns.request(
            {
                method: "GET",
                url: `/users`
            }
        )
    },
    getSingleUser: (id) => {
        return axiosIns.request(
            {
                method: "GET",
                url: `/users/${id}`
            }
        )
    },
    create: (user) => {
        console.log("user is ", user);
        return axiosIns.request(
            {
                method: "POST",
                url: `/users`,
                data: user
            }
        )
    },
    update: (user, id) => {
        return axiosIns.request(
            {
                method: "PUT",
                url: `/users/${id}`,
                data: user
            }
        )
    },
    delete: (id) => {
        return axiosIns.request(
            {
                method: "DELETE",
                url: `/users/${id}`
            }
        )
    }
}

export default UserAPI;
