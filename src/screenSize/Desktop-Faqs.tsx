import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

type Props = {
    classname?:string
};

const Faqs = [
    {   id:1,
        question:"How do I check and pay my violation?",
        answer:"First log in using your plate-number then you will be able to see your violation and the amount you need to pay."
    },
    {   id:2,
        question:"How long does it take to process your violation?",
        answer:"It just takes usually a couple of minutes to make a transaction and submit your requirements, Then you will wait a couple of minutes, hours or day depending on how how dense the violation queue is before you can pay the violation thats it, If your vehicle was impounded then download the generated QR Code and scan it in our Office."
    },
    {   id:3,
        question:"What is this sytem aims to do?",
        answer:"It aims to streamline the process of checking and paying traffic violations by providing an online platform for users to access their violation details and make payments efficiently."
    },{
        id:4,
        question:"Is this system secure for online transactions?",
        answer:"Yes, the system implements robust security measures to protect user data and ensure secure online transactions, including encryption and secure payment gateways."
    },{
        id:5,
        question:"Can I access this system on my mobile device?",
        answer:"Yes, the system is designed to be responsive and can be accessed on various devices, including mobile phones and tablets, allowing users to check and pay their violations conveniently from anywhere."
    },{
        id:6,
        question:"What should I do if I encounter issues with the system?",
        answer:"If you encounter any issues with the system, you can contact our customer support by going to the contact us page and filling out the form or you can call our support line posted in the contact us page."
    }
];

const DesktopFaqs = ({classname}:Props) => {
    return (
        <div className={classname}>
            <h1 className="w-full max-w-300 text-3xl desktop:text-6xl font-bold font-family-poetsen  my-6 text-[#c1c1c1]">FAQS</h1>
            <div className="w-full max-w-300  bg-[red]px-8">
                {
                    Faqs.map((item)=>(
                        <Accordion key={item.id} type="single" collapsible defaultValue="item-1">
                            <AccordionItem value={`item-${item.id}`}>
                                <AccordionTrigger className="text-xl desktop:text-2xl [&>svg]:h-6 [&>svg]:w-6 font-family-poppins" >
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="pl-8 desktop:pr-18 font-family-poppins text-xl">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                }
            </div>
        </div>
    );
};

export default DesktopFaqs;