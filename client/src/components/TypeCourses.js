import { typeCourses } from '@/constant';
import Link from 'next/link';

const TypeCourses = () => {
    return (
        <section className='w-full my-8'>
            <div className="w-full px-24">
                <h1 className='text-center text-black dark:text-white text-2xl font-semibold'>
                    Courses
                </h1>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    {typeCourses.map((course, index) => (
                        <DataCard
                            key={index}
                            item={course}
                            className={getClassNames(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const getClassNames = (index) => {
    const classNames = [
        "row-span-2 cardGlass",
        "cardGlass",
        "cardGlass",
        "col-span-2 cardGlass",
        "col-span-2 cardGlass",
        "row-span-2 cardGlass",
        "cardGlass",
        "row-span-2 cardGlass",
        "col-span-2 cardGlass",
        "cardGlass"
    ];
    return classNames[index] || "... cardGlass";
};

const DataCard = ({ item, className }) => {
    return (
        <div className={`${className} min-h-[150px] h-full`}>
            <div className='p-4 relative h-full'>
                <h1 className='text-lg font-semibold  dark:text-[#46e256] text-[crimson]'>{item?.title}</h1>
                <p className='text-sm'>{item?.description}</p>
                <div className='flex items-center justify-between absolute bottom-4 left-4 right-4'>
                    <Link href="/" passHref>
                        <button className='py-1 px-3 bg-[#6126DD] rounded-[5px] text-xs text-white'>
                            View
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TypeCourses;
