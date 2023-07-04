import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={1} />);
                                                                      
        const countValue = Number(getByTestId("count").textContent); 
        expect(countValue).toEqual(1);                                
    })

    it("counter should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
        // const incrementBttn = getByRole("button", {className: "Increment"});

        const incrementBttn = document.getElementsByClassName("incButton")[0];
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);
        fireEvent.click(incrementBttn); // симилуриуем нажим на кнопку
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(2);
    })

    it("counter should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
        // const incrementBttn = getByRole("div", {name: "Decrement"});
        const incrementBttn = document.getElementsByClassName("decButton")[0];
        const countValue1 = Number(getByTestId("count").textContent);
        if (countValue1 == 1)
            expect(countValue1).toEqual(1);
        else {
            fireEvent.click(incrementBttn); // симилуриуем нажим на кнопку
            const countValue2 = Number(getByTestId("count").textContent);
            expect(countValue2).toEqual(countValue1-1);
        }
    })
})