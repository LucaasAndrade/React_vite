import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000",
});

export const getAllFeedbacks = async () => {
	try {
		const response = await api.get("/feedbacks");
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const createFeedback = async (data) => {
	try {
		const response = await api.post("/feedbacks", data);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const deleteFeedback = async (id) => {
	try {
		const response = await api.delete(`/feedbacks/${id}`);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
