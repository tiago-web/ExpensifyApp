import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Provider } from "react-redux";
import ExpenseList from "../../components/ExpenseList";
import configureStore from "../../store/configureStore";

const store = configureStore();

test("should render ExpenseList with expenses", () => {
	const wrapper = shallow(
		<Provider store={store}>
			<ExpenseList />
		</Provider>
	);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
