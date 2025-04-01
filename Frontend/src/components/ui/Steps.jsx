import React from 'react';
import { Card, CardImage, CardHeader, CardContent } from "../ui/card";
import cardIcon from "../../assets/cardIcon.png"; 

const Steps = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left space-y-6 mb-12 mx-auto "> 
          <h1 className='text-3xl md:text-4xl font-bold text-[#191614] mb-3'>
            Steps to take
          </h1>
          <p className='text-lg md:text-xl text-[#131313]'>
            Just a few steps, and your order is confirmed
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
          {/* Card 1 */}
          <Card className="w-full md:w-80 h-auto p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <CardImage 
                src={cardIcon}
                alt="Sign In Icon"
                className="h-14 w-14 mb-4"
              />
              <CardHeader className="text-xl font-semibold mb-3 text-center">
                Sign In
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Log in to your account to access our services and place your order securely.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="w-full md:w-80 h-auto p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <CardImage 
                src={cardIcon}
                alt="Register Icon"
                className="h-14 w-14 mb-4"
              />
              <CardHeader className="text-xl font-semibold mb-3 text-center">
                Register
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Create an account to save your preferences and track your order history.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="w-full md:w-80 h-auto p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <CardImage 
                src={cardIcon}
                alt="Verify Icon"
                className="h-14 w-14 mb-4"
              />
              <CardHeader className="text-xl font-semibold mb-3 text-center">
                Verify
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Complete verification to ensure the security of your account and transactions.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Steps;