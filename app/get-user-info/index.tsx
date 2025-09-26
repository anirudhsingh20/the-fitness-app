import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { Input, InputField } from '@/components/ui/input';

const UserIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 48}
    height={props.size || 48}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={props.className}
  >
    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
    <circle cx='12' cy='7' r='4'></circle>
  </svg>
);

const CalendarIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 48}
    height={props.size || 48}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={props.className}
  >
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
    <line x1='16' y1='2' x2='16' y2='6'></line>
    <line x1='8' y1='2' x2='8' y2='6'></line>
    <line x1='3' y1='10' x2='21' y2='10'></line>
  </svg>
);

const RulerIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 48}
    height={props.size || 48}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={props.className}
  >
    <path d='M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L3 8.4a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0L12 5.4l3.9-3.9a2.4 2.4 0 0 1 3.4 0l2.6 2.6a2.4 2.4 0 0 1 0 3.4z'></path>
    <path d='m14.5 12.5 2-2'></path>
    <path d='m11.5 9.5 2-2'></path>
    <path d='m8.5 6.5 2-2'></path>
    <path d='m17.5 15.5 2-2'></path>
  </svg>
);

const WeightIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 48}
    height={props.size || 48}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={props.className}
  >
    <circle cx='12' cy='12' r='10'></circle>
    <path d='M12 2v4'></path>
    <path d='m16.2 7.8 2.8-2.8'></path>
    <path d='M22 12h-4'></path>
    <path d='m16.2 16.2 2.8 2.8'></path>
    <path d='M12 22v-4'></path>
    <path d='m7.8 16.2-2.8 2.8'></path>
    <path d='M2 12h4'></path>
    <path d='m7.8 7.8-2.8-2.8'></path>
  </svg>
);

const CheckIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 64}
    height={props.size || 64}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={props.className}
  >
    <polyline points='20 6 9 17 4 12'></polyline>
  </svg>
);

const ChevronLeftIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 24}
    height={props.size || 24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m15 18-6-6 6-6' />
  </svg>
);

const ChevronRightIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size || 24}
    height={props.size || 24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m9 18 6-6-6-6' />
  </svg>
);

// Form steps configuration
const steps = [
  {
    title: "Let's get to know you",
    question: 'What should we call you?',
    key: 'name',
    placeholder: 'Enter your name',
    type: 'text',
    icon: UserIcon,
  },
  {
    title: 'A little about you',
    question: "What's your age?",
    key: 'age',
    placeholder: 'Enter your age in years',
    type: 'number',
    icon: CalendarIcon,
  },
  {
    title: 'Your measurements',
    question: 'What is your height?',
    key: 'height',
    placeholder: 'Enter your height in cm',
    type: 'number',
    icon: RulerIcon,
  },
  {
    title: 'Your starting point',
    question: 'What is your current weight?',
    key: 'weight',
    placeholder: 'Enter your weight in kg',
    type: 'number',
    icon: WeightIcon,
  },
];

const GetUserInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  return (
    <Box className='flex flex-col items-center h-screen justify-between p-5 bg-neutral-900 font-sans'>
      {/* Progress Bar */}
      <Box className='w-full max-w-md space-y-2'>
        <Text className='text-sm text-center text-gray-400'>
          {currentStep < totalSteps
            ? `Step ${currentStep + 1} of ${totalSteps}`
            : 'Completed!'}
        </Text>
        <Box className='w-full bg-neutral-700 rounded-full h-2'>
          <Box
            className='bg-blue-500 h-2 rounded-full transition-all duration-300'
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></Box>
        </Box>
      </Box>

      {/* steps container */}
      <Box className='w-full max-w-md space-y-2 h-[70%]'>
        {currentStep < totalSteps && (
          <Box className='w-full max-w-md space-y-4 text-center flex flex-col items-center justify-center'>
            <UserIcon className='text-blue-400' />
            <Text className='text-2xl font-bold text-center text-white'>
              {steps[currentStep].title}
            </Text>
            <Text className='text-center text-gray-400'>
              {steps[currentStep].question}
            </Text>
            <Input className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <InputField
                autoFocus
                className='text-white text-center h-10'
                placeholder={steps[currentStep].placeholder}
              />
            </Input>
          </Box>
        )}
      </Box>

      {/* bottom navigation */}
      <Box className='w-full max-w-md flex flex-row items-center justify-end gap-4'>
        {currentStep > 0 && (
          <Button
            onPress={() => setCurrentStep(currentStep => currentStep - 1)}
            className='max-w-13 text-white text-center flex items-center justify-center px-6 py-3 space-x-2 font-semibold text-white rounded-full hover:bg-blue-700 disabled:bg-neutral-600 disabled:cursor-not-allowed transition'
          >
            <ChevronLeftIcon className='w-4 h-4' />
          </Button>
        )}
        <Button
          disabled={currentStep === totalSteps - 1}
          onPress={() => setCurrentStep(currentStep => currentStep + 1)}
          className='max-w-[10rem] text-white text-center flex items-center justify-center px-6 py-3 space-x-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 disabled:bg-neutral-600 disabled:cursor-not-allowed transition'
        >
          Next
          <ChevronRightIcon className='w-4 h-4' />
        </Button>
      </Box>
    </Box>
  );
};

export default GetUserInfo;
