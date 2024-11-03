'use client'
import { FaPencilAlt, FaUserPlus, FaEye } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import {
    Card,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";

const InformationTable = () => {
    return (
        <Card className='h-full w-full !bg-transparent'>
            <div className="flex items-center justify-between mb-4 p-2">
                <div>
                    <Typography variant='h5' className="golden_text">
                        Members list
                    </Typography>
                    <Typography className='mt-1 font-normal text-white'>
                        See information about all members
                    </Typography>
                </div>
                <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
                    <div className='w-full md:w-72'>
                        <Input
                            label='Search'
                        />
                    </div>
                    <Button variant='outlined' size='sm' className="text-white">
                        view all
                    </Button>
                    <Button className='flex items-center gap-3 !bg-[#6126DD] ' size='sm'>
                        <FaUserPlus strokeWidth={2} className='h-4 w-4' /> Add member
                    </Button>
                </div>
            </div>
            <CardBody className='overflow-scroll px-0 scrollbar-hide py-0'>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead className="sticky top-0 bg-[#FFFFFF0D] tableGlass rounded-none z-50">
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className='cursor-pointer bg-transparent p-4 transition-colors'
                                >
                                    <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='flex items-center justify-between gap-2 font-semibold text-white'
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <HiChevronUpDown strokeWidth={2} className='h-4 w-4' />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ img, name, email, job, org, date }, index) => {
                                return (
                                    <tr key={name}>
                                        <td className={'p-4'}>
                                            <div className='flex items-center gap-3'>
                                                <Avatar src={img} alt={name} size='sm' />
                                                <div className='flex flex-col'>
                                                    <Typography
                                                        variant='small'
                                                        className='font-base text-white'
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant='small'
                                                        className='font-base text-white'
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={'p-4'}>
                                            <div className='flex flex-col'>
                                                <Typography
                                                    variant='small'
                                                    className='font-base text-white'
                                                >
                                                    {job}
                                                </Typography>
                                                <Typography
                                                    variant='small'
                                                    className='font-base text-white'
                                                >
                                                    {org}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={'p-4'}>
                                            <Typography
                                                variant='small'
                                                className='font-base text-white'
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={'p-4'}>
                                            <Tooltip content='View User'>
                                                <IconButton variant='text'>
                                                    <FaEye className='h-4 w-4 text-white ' />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip content='Edit User'>
                                                <IconButton variant='text'>
                                                    <FaPencilAlt className='h-4 w-4 text-white ' />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip content='Delete User'>
                                                <IconButton variant='text'>
                                                    <MdDelete className='h-4 w-4 text-white ' />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className='flex items-center justify-between  p-4'>
                <Typography variant='small' color='blue-gray' className='font-base text-white'>
                    Page 1 of 10
                </Typography>
                <div className='flex gap-2'>
                    <Button variant='outlined' size='sm' className="border-cyan-50 text-white">
                        Previous
                    </Button>
                    <Button variant='outlined' size='sm' className="border-cyan-50 text-white">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default InformationTable;
const TABLE_HEAD = ["Member", "Function", "Employed", "Actions"];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];
