
import React from 'react'

export default function Exercise08() {
    return (
        <div className='p-1'>
            <p>Các phần tử nằm bên trái:</p>
            <div className='flex gap-3 border border-gray-300 rounded-[10px]'>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>01</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>02</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>03</div>
            </div>
            <p>=================================================================================================================</p>
            <p>Các phần tử nằm bên phải:</p>
            <div className='flex gap-3 border border-gray-300 rounded-[10px] justify-end'>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>01</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>02</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>03</div>
            </div>
            <p>=================================================================================================================</p>
            <p>Các phần tử nằm bên ở giữa:</p>
            <div className='flex gap-3 border border-gray-300 rounded-[10px] justify-center'>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>01</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>02</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>03</div>
            </div>
            <p>=================================================================================================================</p>
            <p>Các phần tử dãn ra hai bên:</p>
            <div className='flex gap-3 border border-gray-300 rounded-[10px] justify-between'>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>01</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>02</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>03</div>
            </div>
            <p>=================================================================================================================</p>
            <p>Các phần tử dãn đều 2 bên:</p>
            <div className='flex gap-3 border border-gray-300 rounded-[10px] justify-around'>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>01</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>02</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>03</div>
            </div>
            <p>=================================================================================================================</p>
            <p>Các phần tử giữa đều:</p>
            <div className='flex gap-3 border border-gray-300 rounded-[10px] justify-evenly'>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>01</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>02</div>
                <div className='bg-blue-600 size-15 flex items-center justify-center text-white rounded-[10px]'>03</div>
            </div>
            <p>=================================================================================================================</p>
            
        </div>
    )
}
