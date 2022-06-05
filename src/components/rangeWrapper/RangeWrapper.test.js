import React from "react";
import NormalRange from "./NormalRange";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"; 

afterEach(cleanup); 



it("Loader shows correct loading message", ()=>{
    const { getByTestId } = render(<NormalRange   />);
    expect(getByTestId('inputMaxLimit')).toBeGreaterThan(0); 
})

// it("Loader shows correct loading message", ()=>{
//     const { getByTestId } = render(<Loader  open={true}  status="error"  />);
//     expect(getByTestId('loadertext')).toHaveTextContent("Errore durante il caricamento dei dati"); 
// })

// it("Loader shows correct loading message", ()=>{
//     const { getByTestId } = render(<Loader  open={true}  status=""  />);
//     expect(getByTestId('loadertext')).toHaveTextContent("Caricamento dati in corso, attendere prego..."); 
// })

// it("Renders button correctly", ()=>{
//     const { getByTestId } = render(<Button label="save"></Button>);
//     expect(getByTestId('button')).toHaveTextContent("save")   
// })
