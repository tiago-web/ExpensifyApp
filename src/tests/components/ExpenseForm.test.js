import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
	const wrapper = shallow(<ExpenseForm />);

	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseForm correctly with expense data", () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find("form").simulate("submit", { preventDefault: () => {} });

	expect(wrapper.find("p").length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test("should set description", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find("input")
		.at(0)
		.onChange({ target: { value: "something" } });

	expect(wrapper.find("input").at(0).prop("value")).toEqual("something");
});
