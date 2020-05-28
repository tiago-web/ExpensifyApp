import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NotFoundPage from "../../components/NotFoundPage";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useLocation: () => ({
		pathname: "localhost:3000/example/path",
	}),
}));

test("should render NotFoundPage correctly", () => {
	const wrapper = shallow(<NotFoundPage />);

	expect(toJSON(wrapper)).toMatchSnapshot();
});
