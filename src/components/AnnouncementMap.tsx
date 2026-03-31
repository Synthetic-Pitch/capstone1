import announcement from '../announcement.json'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const AnnouncementMap = () => {
    const containerRef = useRef<HTMLDivElement>(null);
   
    useGSAP(() => {   
        gsap.registerPlugin(ScrollTrigger);
        
        // Check if container exists
        if (!containerRef.current) return;
        
        const observer1 = new IntersectionObserver((entries, self) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    self.unobserve(entry.target);
                    
                    gsap.fromTo(entry.target, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        scrollTrigger: {
                            trigger: entry.target,
                            start: "top 95%",
                            scrub: true,
                        }
                    });
                }
            });
        });

        const titles = containerRef.current.querySelectorAll('.newsTitle');
        titles.forEach(title => observer1.observe(title));

        const observer2 = new IntersectionObserver((entries, self) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    self.unobserve(entry.target);
                    
                    gsap.fromTo(entry.target, {
                        y: 200
                    }, { 
                        y: 0,
                        scrollTrigger: {
                            trigger: entry.target,
                            start: "top bottom",
                            end: "+=200",
                            scrub: 2
                        },
                    });
                }
            });
        });

        const NewsImg = containerRef.current.querySelectorAll('.newsImg');
        NewsImg.forEach(img => observer2.observe(img));
        
        const paragraphs = containerRef.current.querySelectorAll('.newsParagraph');
        paragraphs.forEach(para => {
            gsap.fromTo(para, {
                scale: 0.9
            }, { 
                scale: 1,
                scrollTrigger: {
                    trigger: para,
                    start: "top 90%",
                    end: "+=150",
                    scrub: 2
                },
            });
        });

        // Cleanup
        return () => {
            observer1.disconnect();
            observer2.disconnect();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: containerRef });
    
    return (
        <div ref={containerRef} className='grid grid-cols-2 relative z-10 py-12 px-8'>
            <div className='bg-[#78bae9] absolute h-full w-full opacity-[.5] z-2 rounded-t-2xl'/>
            {
                announcement.map((item) => {
                    return (
                        <div key={item.id} className='px-4 relative z-20 mb-8 flex flex-col'>
                            <h1 className='text-2xl text-[#ffffff] font-family-mozilla py-4 newsTitle'>{item.title}</h1>
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