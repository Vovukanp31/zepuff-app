import React from 'react';

const Input = ({label, type, name, value, onChange}) => {
    return (
<div class="relative">
    <input 
     type={type}
     name={name}
     value={value}
     onChange={onChange}
     id="floating_filled"
     className="block rounded-md p-4 w-full text-mainPurple bg-white border-2 border-additionalpurple appearance-none focus:outline-none focus:ring-0 focus:text-black peer"
     placeholder=' '
    /> {/*focus:border-blue-600*/}

    <label 
     for="floating_filled" 
     className="absolute text-additionalpurple duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-mainPurple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
      {label}
     </label>
</div>
    );
};

export default Input;