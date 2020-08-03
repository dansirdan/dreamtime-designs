import React from "react";

// materialize Container, Section, Divider, Row, and Col components

export function Container({ children }) {
  return <div className='container'>{children}</div>;
}

export function Section({ children }) {
  return <div className='section'>{children}</div>;
}

export function Divider({ children }) {
  return <div className='divider'>{children}</div>;
}

export function Row({ children }) {
  return <div className='row'>{children}</div>;
}

// This Col component lets us size materialize columns with less syntax
// e.g. <Col size="m6 s12"> instead of <div className="col m6 s12">
export function Col({ size, children }) {
    return (
      <div className={'col ' + size}>
        {children}
      </div>
    );
  }
