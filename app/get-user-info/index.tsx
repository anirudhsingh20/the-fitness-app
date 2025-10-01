import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@/components/ui/radio';
import { useFormik } from 'formik';
import { userInfoValidationSchema } from '@/lib/validation/userInfoSchema';
import { useUser } from '@/lib/hooks/useUser';

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

const StrengthIcon = (props: any) => (
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
  >
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
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

const GoalIcon = (props: any) => (
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
  >
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
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
  {
    title: 'Your strength level',
    question: 'What is your strength level?',
    key: 'strengthLevel',
    placeholder: 'Select your strength level',
    type: 'radio',
    options: ['Beginner', 'Intermediate', 'Advanced'],
    icon: StrengthIcon,
  },
  {
    title: 'Your goal',
    question: 'What is your goal?',
    key: 'goal',
    placeholder: 'Select your goal',
    type: 'radio',
    options: ['Lose weight', 'Gain muscle', 'Maintain weight'],
    icon: GoalIcon,
  },
];

const GetUserInfo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;
  const { updateUserInfo, finishOnboarding } = useUser();

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      height: '',
      weight: '',
      strengthLevel: '',
      goal: '',
    },
    validationSchema: userInfoValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: values => {
      // Convert string values to numbers where needed
      updateUserInfo({
        name: values.name,
        age: Number(values.age),
        height: Number(values.height),
        weight: Number(values.weight),
        strengthLevel: values.strengthLevel as
          | 'Beginner'
          | 'Intermediate'
          | 'Advanced',
        goal: values.goal as 'Lose weight' | 'Gain muscle' | 'Maintain weight',
      });
      finishOnboarding();
      // Navigate to next screen or show success
    },
  });

  const handleNext = async () => {
    const currentKey = steps[currentStep].key;

    // Validate current field
    const fieldError = await formik.validateForm();
    formik.setTouched({ ...formik.touched, [currentKey]: true });

    if (!fieldError?.[currentKey as keyof typeof fieldError]) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        formik.handleSubmit();
        setCurrentStep(currentStep + 1);
      }
    }
  };

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
            {steps[currentStep].type !== 'radio' && (
              <>
                <Input
                  key={`${steps[currentStep].key}-input`}
                  className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <InputField
                    id={steps[currentStep].key}
                    value={
                      formik.values[
                        steps[currentStep].key as keyof typeof formik.values
                      ]
                    }
                    onChangeText={(text: string) => {
                      const isNumber = steps[currentStep].type === 'number';
                      if (isNumber) {
                        text = text.replace(/[^0-9.]/g, '');
                      }
                      formik.setFieldValue(steps[currentStep].key, text);
                    }}
                    placeholder={steps[currentStep].placeholder}
                    className='text-white text-center h-10'
                    keyboardType={
                      steps[currentStep].type === 'number'
                        ? 'numeric'
                        : 'default'
                    }
                    onSubmitEditing={handleNext}
                    autoFocus
                  />
                </Input>
                {formik.touched[
                  steps[currentStep].key as keyof typeof formik.touched
                ] &&
                  formik.errors[
                    steps[currentStep].key as keyof typeof formik.errors
                  ] && (
                    <Text className='text-red-400 text-sm mt-2'>
                      {
                        formik.errors[
                          steps[currentStep].key as keyof typeof formik.errors
                        ]
                      }
                    </Text>
                  )}
              </>
            )}

            {steps[currentStep].type === 'radio' && (
              <>
                <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <RadioGroup
                    id={steps[currentStep].key}
                    value={
                      formik.values[
                        steps[currentStep].key as keyof typeof formik.values
                      ]
                    }
                    onChange={(value: string) =>
                      formik.setFieldValue(steps[currentStep].key, value)
                    }
                  >
                    {steps?.[currentStep]?.options?.map((option: string) => (
                      <Radio key={option} value={option}>
                        <RadioIndicator className='data-[checked=true]:bg-blue-500'>
                          <RadioIcon as={CheckIcon} />
                        </RadioIndicator>
                        <RadioLabel className='text-white data-[checked=true]:text-blue-500'>
                          {option}
                        </RadioLabel>
                      </Radio>
                    ))}
                  </RadioGroup>
                </Box>
                {formik.touched[
                  steps[currentStep].key as keyof typeof formik.touched
                ] &&
                  formik.errors[
                    steps[currentStep].key as keyof typeof formik.errors
                  ] && (
                    <Text className='text-red-400 text-sm mt-2'>
                      {
                        formik.errors[
                          steps[currentStep].key as keyof typeof formik.errors
                        ]
                      }
                    </Text>
                  )}
              </>
            )}
          </Box>
        )}

        {currentStep === totalSteps && (
          <Box className='w-full max-w-md space-y-4 text-center flex flex-col items-center justify-center'>
            <CheckIcon className='text-blue-400' />
            <Text className='text-2xl font-bold text-center text-white'>
              You are all set!
            </Text>
            <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg'>
              <Text className='text-white text-center'>
                Name: {formik.values.name}
              </Text>
            </Box>
            <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg'>
              <Text className='text-white text-center'>
                Age: {formik.values.age}
              </Text>
            </Box>
            <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg'>
              <Text className='text-white text-center'>
                Height: {formik.values.height} cm
              </Text>
            </Box>
            <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg'>
              <Text className='text-white text-center'>
                Weight: {formik.values.weight} kg
              </Text>
            </Box>
            <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg'>
              <Text className='text-white text-center'>
                Strength: {formik.values.strengthLevel}
              </Text>
            </Box>
            <Box className='w-full max-w-xs p-3 mt-4 text-lg text-center text-white bg-neutral-800 border border-neutral-700 rounded-lg'>
              <Text className='text-white text-center'>
                Goal: {formik.values.goal}
              </Text>
            </Box>
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
          disabled={currentStep === totalSteps}
          onPress={handleNext}
          className='max-w-[10rem] text-white text-center flex items-center justify-center px-6 py-3 space-x-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 disabled:bg-neutral-600 disabled:cursor-not-allowed transition'
        >
          {currentStep === totalSteps - 1 ? 'Complete' : 'Next'}
          <ChevronRightIcon className='w-4 h-4' />
        </Button>
      </Box>
    </Box>
  );
};

export default GetUserInfo;
