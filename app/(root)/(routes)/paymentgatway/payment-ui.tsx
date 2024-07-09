'use client'

import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode.react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import QRCodeGen from './qr-code-gen';

const openGooglePayApp = () => {
  const googlePayUri = 'googlepay://pay?pa=jawheriuday-1@okaxis&pn=Uday%20Jawheri&am=100.00&cu=INR&aid=uGICAgICdzajtEA'
  const isGooglePayInstalled = window.navigator.userAgent.includes('GooglePay')

  if (isGooglePayInstalled) {
    window.location.href = googlePayUri
  } else {
    // Handle the case when Google Pay is not installed
    console.log('Google Pay is not installed')
  }
}

const QRGen = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [showQRCode, setShowQRCode] = useState(false)
  const [isMobileResolution, setIsMobileResolution] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobileResolution(window.innerWidth <= 768) // Adjust the breakpoint as needed
    }

    handleResize() // Check the initial resolution

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'id':
        if (value.length <= 12) {
          setId(value)
        }
        break
      default:
        break
    }
  }

  const generateQRCode = () => {
    setShowQRCode(true)
    setFormSubmitted(true)
  }

  const downloadNow = async () => {
    try {
      const response = await fetch('/api/payment-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number, email, id }), // Pass email here
      });
  
      if (response.ok) {
        toast.success(
          'The link will be shared on the provided email shortly. Check your spam!',
          { duration: 10000 }
        )
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } else {
        toast.error('Failed to save payment data. Please try again.');
      }
    } catch (error) {
      console.error('Error saving payment data:', error);
      toast.error('Failed to save payment data. Please try again.');
    }
  }
  const goBack = () => {
    setShowQRCode(false)
    setFormSubmitted(false)
  }

  const isIdValid = id.length === 12

  return (
    <section className="max-w-md mx-auto p-6 bg-[#252529] rounded-lg shadow-2xl my-24">

    {!showQRCode ? (
      
      <div className="grid grid-cols-1 gap-4">
        <p className="mb-4">
          Ensure the information provided is valid, as it will be used to contact you for future processes.
          </p>
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ben Dover"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="number" className="flex font-medium mb-1">
            Number
          </label>
          <div className="flex items-center">
            <div className="bg-gray-200 text-black rounded-l-md px-3 py-2 border border-gray-300">
              +91
            </div>
            <input
              type="text"
              id="number"
              name="number"
              placeholder=""
              className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={number}
              onChange={handleInputChange}
              pattern="[0-9]*"
              title="Please enter a valid phone number."
              onKeyPress={(event) => {
                const charCode = event.which ? event.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                  event.preventDefault();
                }
              }}
              maxLength={10}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={generateQRCode}
          >
            NEXT
          </button>
        </div>
      </div>
      ) : (
        <div>
          {/* <div className="flex justify-between mb-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-300"
              onClick={goBack}
            >
              Back
            </button>
          </div> */}
          <p className="mb-4 text-white">
            <ul className='my-1'>
              <li className='my-1'>
                1. Scan the QR code and pay using any UPI app.
              </li>
              <li className='my-1'>
              2. Enter the transaction ID/Number in the field below.
              </li>
              <li className='my-1'>
              3. You will receive a mail for further processing.
              </li>
              <li className='my-1'>
              4. If you don't see the mail, please check your spam folder.
              </li>
            </ul>
          
          
          
          
          </p>
          <div className="my-8">
            <QRCodeGen amount={499.0} />;
          </div>
          <div className="mb-4">
            <img src="/img/paymentlogo.jpg" alt="Example" className="mx-auto" />
          </div>
          <div className="mb-4">
            <label htmlFor="id" className="block font-medium mb-1">
              UTR/REFERENCE/TRANSACTION ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="12-digit unique code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={id}
              onChange={handleInputChange}
              maxLength={12}
            />
          </div>
          <div className={`flex ${isMobileResolution ? 'justify-center' : 'justify-center'}`}>
            {isMobileResolution && formSubmitted && (
              <button
                className="px-4 py-2 hidden bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
                onClick={openGooglePayApp}
              >
                Pay with Google Pay
              </button>
            )}
            <button
              className={`px-7 py-3 rounded-md transition-colors duration-300 ${
                isIdValid
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed hover:bg-gray-500'
              }`}
              onClick={downloadNow}
              disabled={!isIdValid}
            >
              Join
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default QRGen
