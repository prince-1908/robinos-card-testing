"use client";

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import { calculateTimeLeft } from '../functions/misc-functions';

type CountdownTimerProps = {
  timestamp: number | undefined;
  clockOnly?: boolean;
}

type TimerState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  completed?: boolean;
  isLoading?: boolean;
};


const CountdownTimer: React.FC<CountdownTimerProps> = ({ timestamp, clockOnly }) => {
  const formattedEndDate = moment.unix(timestamp || Date.now() / 1000).format('DD/MM');
  const [timeLeft, setTimeLeft] = useState<TimerState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: false, // EVENT HAS ENDED
    isLoading: true
  })

  useEffect(() => {
    const intervalId = setInterval(() => setTimeLeft(prevState => ({
      ...prevState,
      ...calculateTimeLeft(timestamp || Date.now() / 1000)
    })), 1000);

    return () => clearInterval(intervalId);
  }, [timestamp])
  
  if(timeLeft.isLoading) return <span>Loading event time</span>;
  
  if (timeLeft.completed) return <span>Event has ended</span>;
  
  return (
    clockOnly ?
      <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
    :
      <div className="flex place-content-between items-center">
        <div className="text-14 font-light ">Sale ends in <span className='font-medium'>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span></div>
        <Badge variant="outline">
          <Image className="inline mr-[10px]"
            src="/date.svg"
            width={11}
            height={18}
            alt="Picture of the author"
          />
          {formattedEndDate}
        </Badge>
      </div>
  )
};

export default CountdownTimer;