import axios from "axios";

const fetchData = async (firstName, lastName) => {
  const response = await axios.get(
    "https://mocki.io/v1/587d7ff7-9d99-47ee-9476-8170ed4f5b80"
  );

  return response.data;
};

export default { fetchData };
