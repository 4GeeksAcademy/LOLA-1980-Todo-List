import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoList from "./ToDoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5 container">
			<ToDoList />
		</div>
	);
};

export default Home;
