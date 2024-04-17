import React from 'react'
import  {StarIcon} from 'lucide-react'
import Image from 'next/image';
export default function User() {
  return (
    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div>
        <div className="flex flex-col md:flex-row space-x-4 items-center m">
          <Image
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/user.png"
            alt="user"
          />
          <div>
            <h1>Daniel Mwaura</h1>
            <p>Software developer</p>
          </div>
        </div>

        <div className="my-4 p-2 ">
          <p>
            Nurturing the next generation of innovators; inspiring to see kids
            exploring new ideas.
          </p>
        </div>

        <div className="flex items-center space-x-1">
          <Image
            width="20"
            height="48"
            src="https://img.icons8.com/color/48/filled-star--v1.png"
            alt="filled-star--v1"
          />
          <Image
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/filled-star--v1.png"
            alt="filled-star--v1"
          />
          <Image
            width="20"
            height="48"
            src="https://img.icons8.com/color/48/filled-star--v1.png"
            alt="filled-star--v1"
          />
          <Image
            width="20"
            height="48"
            src="https://img.icons8.com/color/48/filled-star--v1.png"
            alt="filled-star--v1"
          />
        </div>
      </div>
    </div>
  );
}
