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

	expect(wrapper.find("p").length).toBeGreaterThan(0); // Check if error was triggerd
	expect(wrapper).toMatchSnapshot();
});

test("should call onSubmit prop for valid form submission", () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(
		<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
	);
	wrapper.find("form").simulate("submit", { preventDefault: () => {} });

	expect(wrapper.find("p").length).toBe(0);
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt,
	});
});

// NOT WORKING
// test("should set description", () => {
// 	const wrapper = shallow(<ExpenseForm />);
// 	wrapper
// 		.find("input")
// 		.at(0)
// 		.simulate("change", { target: { value: "something" } });

// 	expect(wrapper.find("input").at(0).prop("value")).toEqual("");
// });
