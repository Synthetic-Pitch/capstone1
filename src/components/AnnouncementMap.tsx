import announcement from '../announcement.json'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';


const AnnouncementMap = () => {
    const h1Ref = useRef<HTMLDivElement>(null)
   
    useGSAP(() => {   
        gsap.registerPlugin(ScrollTrigger);
        const observer1 = new IntersectionObserver((entries,self) => {
            // This hold map Target element
            let targets = entries.map(entry=>{
                if(entry.isIntersecting){
                    self.unobserve(entry.target);
                    return entry.target;
                }
            }).filter((el): el is Element => el !== undefined);

            targets.forEach(target => {
                gsap.fromTo(target,{
                    opacity:0
                },{
                    opacity:1,
                    scrollTrigger:{
                        trigger:target,
                        start:"top 80%",
                        scrub:1
                    }
                
                })
            })
        });

        const titles = document.querySelectorAll('.newsTitle');
        titles.forEach(title => observer1.observe(title));

        const observer2 = new IntersectionObserver((entries,self) => {
            // This hold map Target element
            let targets = entries.map(entry=>{
                if(entry.isIntersecting){
                    self.unobserve(entry.target);
                    return entry.target;
                }
            }).filter((el): el is Element => el !== undefined);

            
            gsap.fromTo(targets,{
                y:200
            },{ 
                y:0,
                stagger:0.3,
                scrollTrigger:{
                    trigger:".newsDate",
                    start:"bottom bottom",
                    end:"+=200",
                    scrub:2
                },
            })
           
        });

        const NewsImg = document.querySelectorAll('.newsImg');
        NewsImg.forEach(title => observer2.observe(title));

        
        const observer3 = new IntersectionObserver((entries,self) => {
            // This hold map Target element
            let targets = entries.map(entry=>{
                if(entry.isIntersecting){
                    self.unobserve(entry.target);
                    return entry.target;
                }
            }).filter((el): el is Element => el !== undefined);

            gsap.fromTo(targets,{
                scale:.5
            },{ 
                scale:1,
                scrollTrigger:{
                    trigger:".newsParagraph",
                    start:"top 90%",
                    end:"+=150",
                    scrub:2
                },
            })
           
        });

        const NewsPrgh = document.querySelectorAll('.newsParagraph');
        NewsPrgh.forEach(title => observer3.observe(title));

        // Cleanup
        return () => {observer1.disconnect(),observer2.disconnect(),observer3.disconnect()};
    }, []);
   
    return (
        <div  className=' grid grid-cols-2 relative z-10 py-12 px-8'>
            <div className='bg-[#78bae9] absolute h-full w-full opacity-[.5] z-2  rounded-t-2xl'/>
            {
                announcement.map((item)=>{
                    return (
                        <div key={item.id} className='px-4 relative z-20 mb-8 flex flex-col '>
                            <h1 ref={h1Ref} className=' text-2xl text-[#ffffff] font-family-mozilla py-4 newsTitle'>{item.title}</h1>
                            <p className='font-family-poppins text-[#cacaca] newsDate'>{item.date}</p>
                            <div>
                                {item.img !== '' && <img src={item.img} alt="" className='newsImg' />}
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