"use client";
import CouponCard from "@/components/items/couponCard/Couponcard";
import Container from "@/components/layout/container/container";
import Footer from "@/components/layout/footer/footer";

import React, { useState } from "react";

function MainClientPage({ AllBusinesses }) {

  console.log(AllBusinesses)
  const coupons = AllBusinesses.map(item => (item.coupons))
  console.log(AllBusinesses)


  return (
    <>
      <Container className="mt-40 flex justify-center items-center flex-col">
        {/* Header Image */}
        <div className="pt-7">
          <img src="/headerimg.jpeg" alt="Header Banner" />
        </div>

        {/* Title */}
        <h1 className="py-10 font-extrabold text-xl text-rose-700">
          Coupons Just for You
        </h1>

        {/* Category List */}
        <ul className="flex space-x-4 mb-10">

        </ul>

        {/* Coupon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AllBusinesses.map((item) => {
            const firstCoupon = item.coupons[0];
            return (
              <CouponCard key={item._id}
                businessName={item.businessName}
                title = {firstCoupon.title}
                discount= {firstCoupon.discountPercentage}
                description= {firstCoupon.description}
                price= {firstCoupon.originalPrice}
                discountedPrice= {firstCoupon.discountedPrice}
                city = {item.location.city}
                district = {item.location.district}
                slug = {item.slug}
                mainImage = {item?.media?.gallery?.[0]}

              />
            )
          }

          )}

        </div>
      </Container>

      <Container className="py-10">
        <Footer />
      </Container>
    </>
  );
}

export default MainClientPage;
