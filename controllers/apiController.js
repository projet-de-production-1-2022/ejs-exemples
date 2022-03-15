import axios from "axios";

const fetchData = async (firstName, lastName) => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/587d7ff7-9d99-47ee-9476-8170ed4f5b80"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchApiKey = async () => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/5e49906f-a3ce-466e-b03a-5792651a3a12"
    );
    return response.data;
  } catch (e) {
    console.log("something went wrong");
  }
};

export default { fetchData, fetchApiKey };
