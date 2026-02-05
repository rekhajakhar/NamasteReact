import MOCK_DATA from "../mocks/resCardMock.json";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

test ("should render the card on the screen", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const cardName = screen.getByText("Pizza Paradise");

    expect(cardName).toBeInTheDocument();

});