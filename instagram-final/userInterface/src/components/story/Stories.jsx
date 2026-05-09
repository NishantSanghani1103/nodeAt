import React from 'react'

export default function Stories() {
    return (
        <div className="w-full border border-gray-300 bg-white rounded-md p-4 overflow-x-auto">

            {/* Stories Container */}
            <div className="flex items-center gap-5 min-w-max">

                {/* Story 1 */}
                <div className="flex flex-col items-center cursor-pointer">

                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <img
                            src="https://i.pravatar.cc/150?img=11"
                            alt="story"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    <p className="text-xs mt-2 text-gray-700">
                        alex
                    </p>

                </div>

                {/* Story 2 */}
                <div className="flex flex-col items-center cursor-pointer">

                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="story"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    <p className="text-xs mt-2 text-gray-700">
                        john
                    </p>

                </div>

                {/* Story 3 */}
                <div className="flex flex-col items-center cursor-pointer">

                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <img
                            src="https://i.pravatar.cc/150?img=13"
                            alt="story"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    <p className="text-xs mt-2 text-gray-700">
                        emma
                    </p>

                </div>

                {/* Story 4 */}
                <div className="flex flex-col items-center cursor-pointer">

                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <img
                            src="https://i.pravatar.cc/150?img=14"
                            alt="story"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    <p className="text-xs mt-2 text-gray-700">
                        olivia
                    </p>

                </div>

                {/* Story 5 */}
                <div className="flex flex-col items-center cursor-pointer">

                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <img
                            src="https://i.pravatar.cc/150?img=15"
                            alt="story"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    <p className="text-xs mt-2 text-gray-700">
                        sophia
                    </p>

                </div>

                {/* Story 6 */}
                <div className="flex flex-col items-center cursor-pointer">

                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <img
                            src="https://i.pravatar.cc/150?img=16"
                            alt="story"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    <p className="text-xs mt-2 text-gray-700">
                        david
                    </p>

                </div>

            </div>
        </div>
    )
}
