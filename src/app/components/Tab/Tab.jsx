import bookOpen from "@/assets/icons/book-open.svg";
import book from "@/assets/icons/book.svg";
import template from "@/assets/icons/template.svg";
import package1 from "@/assets/icons/package.svg";
import star from "@/assets/icons/star.svg";
import Link from "next/link";


const Tab = () => {
    return (
        <div className='flex items-center pt-9 border-b border-[#282C31]'>
            <Link href="#" className='px-3 pb-4 flex items-center gap-x-[5px] border-b-2 border-[#E77960]'>
                <img src={bookOpen.src} alt="Opened book" />
                <span className="text-sm text-[#C2CAD1] font-semibold">Overview</span>
            </Link>

            <Link href="#" className='px-3 pb-4 flex items-center gap-x-[5px] border-b-2 border-transparent'>
                <img src={book.src} alt="Opened book" />
                <span className="text-sm text-[#C2CAD1] font-semibold">Repositories</span>
            </Link>

            <Link href="#" className='px-3 pb-4 flex items-center gap-x-[5px] border-b-2 border-transparent'>
                <img src={template.src} alt="Opened book" />
                <span className="text-sm text-[#C2CAD1] font-semibold">Projects</span>
            </Link>

            <Link href="#" className='px-3 pb-4 flex items-center gap-x-[5px] border-b-2 border-transparent'>
                <img src={package1.src} alt="Opened book" />
                <span className="text-sm text-[#C2CAD1] font-semibold">Packages</span>
            </Link>

            <Link href="#" className='px-3 pb-4 flex items-center gap-x-[5px] border-b-2 border-transparent'>
                <img src={star.src} alt="Opened book" />
                <span className="text-sm text-[#C2CAD1] font-semibold">Stars</span>
            </Link>
        </div>
    )
}

export default Tab;