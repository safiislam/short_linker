import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from "axios";
const DisplayLink = ({ generateLink }) => {
    const [copy, setCopy] = useState(false)
    const [loading, setLoading] = useState(false)
    const [link, setLink] = useState('')
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${generateLink}`)
            setLink(res.data.result.full_short_link)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (generateLink) {
            fetchData()
        }
    }, [generateLink])
    console.log(link)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCopy(false)
        },1000)
        return ()=> clearTimeout(timer) 
    },[copy])
    if (loading) {
        return <p>loading....</p>
    }
    return (
        <div className="mt-3 flex justify-center ">
            {
                link &&
                <div className="space-x-3 flex md:flex-row flex-col justify-center items-center">
                    <input
                        type="text"
                        className="border-[1px] border-white bg-transparent outline-none py-1 ps-2  rounded-sm"
                        value={link} />
                    <CopyToClipboard text={link} onCopy={() => setCopy(true)}>
                        <span className={`${!copy ? 'bg-[#FF953F] text-white' : 'bg-white text-[#FF953F]'} px-3 cursor-pointer mt-3 inline-block py-1`} >Copy to clipbord</span>
                    </CopyToClipboard>

                </div>
            }
        </div>
    );
};

export default DisplayLink;