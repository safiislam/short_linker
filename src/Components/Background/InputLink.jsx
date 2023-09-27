import { useState } from "react";


const InputLink = ({ setGenerateLink}) => {
    const [link, setLink] = useState('')
    const handleLinkSubmit = () => {
        setGenerateLink(link)
    }
    return (
        <div >
            <div>
                <input
                    onChange={(e) => setLink(e.target.value)}
                    type="text"
                    placeholder="Enter your link"
                    className="border-none outline-none md:w-80 py-2 rounded-bl-lg  rounded-tl-lg text-lg ps-2 "
                />
                <button
                    onClick={handleLinkSubmit}
                    className="uppercase bg-[#FF953F] text-lg py-2 px-3 text-white font-semibold rounded-br-lg rounded-tr-lg "
                >Shorten</button>
            </div>
        </div>
    );
};

export default InputLink;