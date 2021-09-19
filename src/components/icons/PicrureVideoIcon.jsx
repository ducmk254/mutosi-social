import React from 'react';

const PicrureVideoIcon = ({widht,height,className}) => {
    return (
        <span className={className}>
            <svg width={widht} height={height} viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V17C0 19.7614 2.23858 22 5 22H17C19.7614 22 22 19.7614 22 17V5C22 2.23858 19.7614 0 17 0H5ZM6 4V2H4V4H6ZM8 8.44443C8 7.71923 8.78378 7.2713 9.39984 7.64441L13.6113 10.195C14.2096 10.5574 14.2096 11.4327 13.6113 11.795L9.39984 14.3456C8.78378 14.7187 8 14.2708 8 13.5456V8.44443ZM4 20V18H6V20H4ZM10 2H8V4H10V2ZM8 18H10V20H8V18ZM14 2H12V4H14V2ZM12 18H14V20H12V18ZM18 4V2H16V4H18ZM16 20V18H18V20H16Z" fill="#1A99F4"></path></svg>
        </span>
    );
};

export default PicrureVideoIcon;