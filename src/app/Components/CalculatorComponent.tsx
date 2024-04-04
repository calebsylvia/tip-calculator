'use client'
import React, { useState, useEffect } from 'react'
import logo from '@/app/images/logo.svg'
import dollar from '@/app/images/icon-dollar.svg'
import person from '@/app/images/icon-person.svg'
import Image from 'next/image'

const CalculatorComponent = () => {


    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState(0)
    const [tip, setTip] = useState<number>(0)
    const [buttonOne, setButtonOne] = useState<boolean>(false)
    const [buttonTwo, setButtonTwo] = useState<boolean>(false)
    const [buttonThree, setButtonThree] = useState<boolean>(false)
    const [buttonFour, setButtonFour] = useState<boolean>(false)
    const [buttonFive, setButtonFive] = useState<boolean>(false)
    const [tipPer, setTipPer] = useState(0)
    const [totalPer, setTotalPer] = useState(0)


    useEffect(() => {
        if(bill > 0 && people > 0 && tip > 0){
            setTipPer((bill * tip) / people)
            setTotalPer((bill + (bill * tip)) / people)
        }
    }, [tip, bill, people])



    const handleReset = () => {
        setBill(0)
        setPeople(0)
        setTip(0)
        setButtonOne(false)
        setButtonTwo(false)
        setButtonThree(false)
        setButtonFour(false)
        setButtonFive(false)
        setTipPer(0)
        setTotalPer(0)
    }


  return (
    <>
        <div className='my-36'>
            <Image src={logo} alt='Splitter Logo' className='mx-auto'/>
            <div className='bg-whiteColor w-screen md:w-7/12 h-1/3 shadow-sm shadow-grayishCyan rounded-2xl md:mx-auto mt-20 md:flex px-5 py-4 md:p-2 max-md:text-sm'>
                <div className='w-full md:w-1/2'>
                    <div className='md:pl-10 md:pr-3 py-6'>
                            <p className='text-darkGrayishCyan'>Bill</p>
                            <div className='relative'>
                            <span className='absolute text-gray-400 text-2xl font-normal top-[14px] left-4'>
                                <Image src={dollar} alt='Dollar Sign'/>
                            </span>
                            <input value={bill == 0 ? "" : bill} type="number" name="bill" placeholder='0' className='bg-veryLightGrayishCyan h-12 rounded-xl text-xl text-right pr-5 w-full' onChange={(e) => setBill(parseFloat(e.target.value))} min={0} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                        </div>
                    </div>

                    <div className='md:pl-10 py-6'>
                        <p>Select Tip %</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 w-full md:w-96 gap-y-3 max-md:gap-x-4 max-md:'>
                        <button value="5%" className={`${buttonOne == true ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-whiteColor'} text-2xl w-full md:w-28 h-12 rounded-lg font-semibold hover:bg-lightGrayishCyan hover:text-veryDarkCyan`} onClick={(e) => {
                            setButtonOne(true)
                            setButtonTwo(false)
                            setButtonThree(false)
                            setButtonFour(false)
                            setButtonFive(false)
                            setTip(0.05)
                            
                        }}>
                            5%
                        </button>
                        <button value="10%" className={`${buttonTwo == true ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-whiteColor'} text-2xl w-full md:w-28 h-12 rounded-lg font-semibold hover:bg-lightGrayishCyan hover:text-veryDarkCyan`} onClick={(e) => {
                            setButtonOne(false)
                            setButtonTwo(true)
                            setButtonThree(false)
                            setButtonFour(false)
                            setButtonFive(false)
                            setTip(0.1)
                            
                        }}>
                            10%
                        </button>
                        <button value="15%" className={`${buttonThree == true ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-whiteColor'} text-2xl w-full md:w-28 h-12 rounded-lg font-semibold hover:bg-lightGrayishCyan hover:text-veryDarkCyan`}
                         onClick={(e) => {
                            setButtonOne(false)
                            setButtonTwo(false)
                            setButtonThree(true)
                            setButtonFour(false)
                            setButtonFive(false)
                            setTip(0.15)
                        }}>
                            15%
                        </button>
                        <button value="25%" className={`${buttonFour == true ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-whiteColor'} text-2xl w-full md:w-28 h-12 rounded-lg font-semibold hover:bg-lightGrayishCyan hover:text-veryDarkCyan`} onClick={(e) => {
                            setButtonOne(false)
                            setButtonTwo(false)
                            setButtonThree(false)
                            setButtonFour(true)
                            setButtonFive(false)
                            setTip(0.25)
                        }}>
                            25%
                        </button>
                        <button value="50%" className={`${buttonFive == true ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-whiteColor'} text-2xl w-full md:w-28 h-12 rounded-lg font-semibold hover:bg-lightGrayishCyan hover:text-veryDarkCyan`} onClick={(e) => {
                            setButtonOne(false)
                            setButtonTwo(false)
                            setButtonThree(false)
                            setButtonFour(false)
                            setButtonFive(true)
                            setTip(0.5)
                        }}>
                            50%
                        </button>
                        <input className='text-2xl bg-veryLightGrayishCyan w-11/12 md:w-28 h-12 rounded-lg font-semibold custom text-veryDarkCyan text-right pr-5 md:pr-2' type='text' placeholder='Custom' onClick={() => {
                             setButtonOne(false)
                             setButtonTwo(false)
                             setButtonThree(false)
                             setButtonFour(false)
                             setButtonFive(false)
                        }} onChange={(e) => {
                            setTip(parseInt((e.target.value)) / 100)
                        }}>
                        </input>
                        </div>
                    </div>

                    <div className='md:pl-10 pr-3 py-6'>
                        <div className='flex justify-between'>
                            <p className='text-darkGrayishCyan'>Number of People</p>
                            <p className='text-orange-500 pr-2'>{people === 0 ? "Can't be zero" : ""}</p>
                            </div>
                            <div className='relative'>
                            <span className='absolute text-gray-400 text-2xl font-normal top-[14px] left-4'>
                                <Image src={person} alt='Person Icon'/>
                            </span>
                            <input value={people === 0 ? "" : people} type="number" name="bill" placeholder='0' className='bg-veryLightGrayishCyan h-12 rounded-xl text-xl text-right pr-5 w-full' onChange={(e) => setPeople(parseFloat(e.target.value))} required min={0} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
                        </div>
                    </div>
                </div>
                <div className='bg-veryDarkCyan w-full md:w-1/2 md:m-5 rounded-xl'>
                    <div className=''>
                        <div className='flex px-10 pt-10 justify-between'>
                            <div>
                            <p className='text-whiteColor'>Tip Amount</p>
                            <p className='text-lightGrayishCyan opacity-50 text-sm'>/ person</p>
                            </div>
                            <div>
                                <p className='text-strongCyan text-2xl md:text-4xl'>{`$${tipPer != null ? tipPer.toFixed(2) : "0.00"}`}</p>
                            </div>
                        </div>
                        <div className='flex px-10 py-4 md:p-10 justify-between'>
                            <div>
                            <p className='text-whiteColor'>Total</p>
                            <p className='text-lightGrayishCyan opacity-50 text-sm'>/ person</p>
                            </div>
                            <div>
                                <p className='text-strongCyan text-2xl md:text-4xl'>{`$${totalPer != null ? totalPer.toFixed(2) : "0.00"}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 md:px-10 pb-4 pt-3 md:py-6 mt-0 md:mt-20'>
                        <button className='bg-strongCyan w-full h-12 rounded-lg hover:bg-lightGrayishCyan hover:text-veryDarkCyan' onClick={handleReset}>
                            RESET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CalculatorComponent