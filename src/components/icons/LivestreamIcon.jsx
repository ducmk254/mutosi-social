import React from 'react';

const LivestreamIcon = ({width,height,className}) => {
    return (
        <span className={className}>
            <svg width={width} height={height} viewBox="0 0 25 24" fill="none" class="icon-action"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3C2.29086 3 0.5 4.79086 0.5 7V17C0.5 19.2091 2.29086 21 4.5 21H14.5C16.7091 21 18.5 19.2091 18.5 17V7C18.5 4.79086 16.7091 3 14.5 3H4.5ZM8.46918 8.73848L11.9425 11.1814C12.509 11.5798 12.5087 12.4195 11.9421 12.8176L8.46876 15.2578C7.80614 15.7234 6.89389 15.2494 6.89389 14.4396L6.89389 9.55643C6.89389 8.74639 7.80661 8.27247 8.46918 8.73848Z" fill="#F5222D"></path><path d="M19.9157 8.3007C19.6547 8.48862 19.5 8.79061 19.5 9.11223V14.8878C19.5 15.2094 19.6547 15.5114 19.9157 15.6993L22.9157 17.8593C23.5772 18.3356 24.5 17.8629 24.5 17.0478V6.95223C24.5 6.13713 23.5772 5.66443 22.9157 6.1407L19.9157 8.3007Z" fill="#F5222D"></path></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
        </span>
    );
};

export default LivestreamIcon;