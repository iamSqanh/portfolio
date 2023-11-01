import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from '@material-tailwind/react';

const TimeLine = () => {
    return (
        <div>
            <Timeline>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar
                                size="sm"
                                src="https://res.cloudinary.com/dclafzgo9/image/upload/v1697427022/portfolio_Anh/ictu2_yoj624.jpg"
                                alt="user 1"
                                withBorder
                            />
                        </TimelineIcon>
                        <Typography
                            variant="h4"
                            className="text-xl text-gray-500 font-normal"
                        >
                            2019 - Present
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography
                            color="white"
                            className="font-thin text-2xl mt-3"
                        >
                            Graduated
                        </Typography>
                        <Typography className="text-gray-300 font-normal mt-3">
                            University of Information and Communication
                            Technology
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar
                                size="sm"
                                src="https://res.cloudinary.com/dclafzgo9/image/upload/v1697427022/portfolio_Anh/oc2_yesnxi.png"
                                alt="OC"
                                withBorder
                            />
                        </TimelineIcon>
                        <Typography
                            variant="h4"
                            className="text-xl text-gray-500 font-normal"
                        >
                            6 / 2023 - Present
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography
                            color="white"
                            className="font-thin text-2xl mt-3"
                        >
                            Internship
                        </Typography>
                        <Typography className="text-gray-300 font-normal mt-3">
                            Ocean Technology Trading Investment Co ., Ltd
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default TimeLine;
