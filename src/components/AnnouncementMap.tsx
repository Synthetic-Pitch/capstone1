import announcement from '../announcement.json'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const AnnouncementMap = () => {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".newsTitle",{
            opacity: 0
        },{
            opacity: 1,
            scrollTrigger:{
                trigger: ".newsTitle",
                start: "top 90%",
                scrub:1
            },
        });
        gsap.fromTo(".newsParagraph",{
            scale:'0.5'
        },{
            scale:'1',
            scrollTrigger:{
                trigger: ".newsParagraph",
                start: "top bottom",
                scrub:1,
            },
            stagger:.5
        });
        gsap.fromTo(".newsImg",{
            y:200
        },{
            y:0,
            scrollTrigger:{
                trigger: ".newsImg",
                start: "top bottom",
                end:"bottom 80%",
                scrub:true
            },
        });
    })
    return (
        <div className=' grid grid-cols-2 relative z-10 py-12 px-8'>
            <div className='bg-[#78bae9] absolute h-full w-full opacity-[.5] z-2  rounded-t-2xl'/>
            {
                announcement.map((item)=>{
                    return (
                        <div key={item.id} className='px-4 relative z-20 mb-8 flex flex-col'>
                            <h1 className='text-2xl text-[#ffffff] font-family-mozilla py-4 newsTitle'>{item.title}</h1>
                            <p className='font-family-poppins text-[#cacaca]'>{item.date}</p>
                            <div>
                                <img src={item.img} alt="" className='newsImg' />
                                <p className='font-family-noto-kr indent-12 mt-4 text-[#c9c9c9] newsParagraph'>{item.paragraph}</p>
                            </div>
                            <div className='grow flex items-end text-[#cacaca] font-family-mozilla'>
                                <a href={item.sourceURL} className='mt-6'>source:&#32;{item.source}</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AnnouncementMap;