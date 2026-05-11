import React from 'react'
import { FiCopy } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function PostItems({ value }) {
    const totalImages = value?.image?.length || 1;
    const navigate = useNavigate()
    return (
        <div className="relative   cursor-pointer group overflow-hidden"
            onClick={() => {

                navigate(`/post-view/${value.id}`)
            }}
        >

            {/* Multiple Image Badge */}
            {
                totalImages > 1 && (
                    <div className="absolute top-2 boreder right-2 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <FiCopy className="text-[10px]" />
                        <span>{totalImages}</span>
                    </div>
                )
            }

            {/* Image */}
            <img
                src={value?.imageUrl?.[0] || "https://images.unsplash.com/photo-1517841905240-472988babdf9"}
                className="w-full h-32 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                alt=""

            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        </div>
    )
}
