"use client"
import Container from '@/components/layout/container/container'
import React, { useState } from 'react'
import CartSummary from '../cartSum/CartSum'
import BusinessCouponCard from './BussinessCouponCart'
import CommentsSection from './Comments';

function BussinesStatus({ currentBusiness, currentCoupons }) {
    const [showMoreAbout, setShowMoreAbout] = useState(false);
    const [showMoreOurS, setShowMoreOurS] = useState(false);
    console.log("currentcouponsBusiness:" , currentCoupons)
    console.log("currentBusiness: ",currentBusiness)

    return (
        <Container className=''>
            {/* Business Info + Cart */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {/* Business Info */}
                <div className="md:col-span-2 space-y-3  rounded-2xl  ">
                    <div className='shadow p-5 rounded-xl'>
                        <h1 className="text-2xl font-bold text-gray-800"> { currentBusiness?.businessName} </h1>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 text-gray-600">
                                <span className="font-medium">⭐ { currentBusiness?.statistics?.rating} ({currentBusiness?.statistics?.reviewCount}) </span>
                                <span className="text-green-600 font-semibold"> {currentBusiness?.status?.current} </span>
                            </div>
                            
                        </div>
                        <span className="block text-gray-500">📍 {currentBusiness?.location?.city}/{currentBusiness?.location?.district}</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mt-5">Coupons</h2>
                        {currentCoupons.map(coupon => (
                            <BusinessCouponCard
                                key={coupon._id}
                                id = {coupon._id}
                                title={coupon.title}
                                description={coupon.description}
                                discountPercentage={coupon.discountPercentage}
                                originalPrice={coupon.originalPrice}
                                discountedPrice={coupon.discountedPrice}
                                purchaseLimit={coupon.purchaseLimit}
                                remainingQuantity={coupon.remainingQuantity}
                                salesPeriod={coupon.salesPeriod}
                                validityPeriod={coupon.validityPeriod}
                                status={coupon.status}
                                cover={currentBusiness?.media?.gallery?.[0]}
                            />
                        ))}


                    </div>
                    {/* About */}
                    <div className='shadow rounded-xl p-4 space-y-3'>
                        <h1 className='font-bold text-xl'>About</h1>
                        <p className={`text-gray-700 text-sm ${!showMoreAbout ? "line-clamp-3" : ""}`}>
                            {currentBusiness?.details?.description}                        </p>
                        <button
                            className="text-rose-600 text-sm font-medium hover:underline"
                            onClick={() => setShowMoreAbout(!showMoreAbout)}
                        >
                            {showMoreAbout ? "Less" : "More"}
                        </button>

                        {/* Aspects */}
                    </div>
                    <div className='shadow rounded-xl p-4 space-y-3'>
                        <h1 className='font-bold text-xl'>Our Services</h1>
                        <p className={`text-gray-700 text-sm ${!showMoreOurS ? "line-clamp-3" : ""}`}>
                            STATİC
                        </p>
                        <button
                            className="text-rose-600 text-sm font-medium hover:underline"
                            onClick={() => setShowMoreOurS(!showMoreOurS)}
                        >
                            {showMoreOurS ? "Less" : "More"}
                        </button>
                    </div>
                    <CommentsSection />

                </div>
                {/* Cart Summary */}

                <div className="md:col-span-1 sticky self-start top-24">
                    <CartSummary />
                </div>
            </div>
        </Container>

    )
}

export default BussinesStatus