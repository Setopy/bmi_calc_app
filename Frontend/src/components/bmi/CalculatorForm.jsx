import React from 'react';
import * as Form from "@radix-ui/react-form";

const Calculator = () => {
  return (
	<div className="flex items-center justify-center my-6 bg-[#ffffff] text-[#101010] px-6 md:px-20">

    <div className="px-6 md:px-20 w-full max-w-[550px]">
        <div className="w-full md:text-left mb-10">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-md md:text-lg text-gray-600">
        To use the BMI calculator, you have to have a
        </p>
      </div>
      <Form.Root>
		<div className='flex gap-16 my-4'>
        <Form.Field className="flex items-center gap-2" name="gender">
			<Form.Control asChild>
				<input className="Input" value="male" type="radio" required />
			</Form.Control>
            <div>
				<Form.Label>Male</Form.Label>
			</div>
		</Form.Field>
        <Form.Field className="flex items-center gap-2" name="gender">
			<Form.Control asChild>
				<input className="Input" value="female" type="radio" required />
			</Form.Control>
            <div>
				<Form.Label>Female</Form.Label>
			</div>
		</Form.Field>
        </div>
		<Form.Field className="my-4" name="age">
			<div>
				<Form.Label>Age</Form.Label>
				<Form.Message className="text-rose-600 float-right" match="valueMissing">
					Age cannot be empty
				</Form.Message>
				<Form.Message className="text-rose-600 float-right" match="rangeUnderflow">
					Age cannot be less than 1
				</Form.Message><Form.Message className="text-rose-600 float-right" match="rangeOverflow">
					Age cannot be more than 200
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input className="mt-1 block flex-1 w-full px-3 py-3 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0E4E30] focus:border-[#0E4E30] sm:text-sm" type="number" min="1" max="200" placeholder='25' required />
			</Form.Control>
		</Form.Field>
		<Form.Field className="my-4" name="weight">
			<div>
				<Form.Label>Weight</Form.Label>
				<Form.Message className="text-rose-600 float-right" match="rangeUnderflow">
					Weight cannot be less than 25
				</Form.Message>
                <Form.Message className="text-rose-600 float-right" match="rangeOverflow">
					Weight cannot be more than 900
				</Form.Message>
                <Form.Message className="text-rose-600 float-right" match="valueMissing">
					Weight cannot be empty
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input className="mt-1 block flex-1 w-full px-3 py-3 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0E4E30] focus:border-[#0E4E30] sm:text-sm" type="number" min="25" max="900" placeholder='55kg' required />
			</Form.Control>
		</Form.Field>
		<Form.Field className="my-4" name="height">
			<div>
				<Form.Label>Height</Form.Label>
				<Form.Message className="text-rose-600 float-right" match="valueMissing">
					Height cannot be empty
				</Form.Message>
				<Form.Message className="text-rose-600 float-right" match="rangeUnderflow">
					Invalid height. Height cannot be less than 30
				</Form.Message>
                <Form.Message className="text-rose-600 float-right" match="rangeOverflow">
					Invalid height. Height cannot be more than 200
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input className="mt-1 block flex-1 w-full px-3 py-3 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0E4E30] focus:border-[#0E4E30] sm:text-sm" type="number" placeholder='161cm' min="30" max="200" required />
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<button className="bg-[#0E4E30] text-white px-4 py-3 rounded-md hover:bg-[#0C3B22] transition duration-300 w-full">
				Calculate
			</button>
		</Form.Submit>
	</Form.Root>
     
    </div>
    </div>
  );
};

export default Calculator;


