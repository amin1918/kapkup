"use client";

import CartItem from '@/components/items/cartItem/CartItem';
import CartSummary from '@/components/items/cartSum/CartSum';
import Container from '@/components/layout/container/container';
import Footer from '@/components/layout/footer/footer';
import { useBasket } from '@/stores/useBasket';
import React, { useEffect } from 'react';

export default function Page() {
  const { basket, fetchBasket } = useBasket();

  useEffect(() => {
    const fetchData = async () => {
      await fetchBasket();
    };
    fetchData();
  }, []); // dependency array خالی چون fetchBasket ثابت است

  const basketItems = basket?.items || [];
  console.log(basketItems);

  return (
    <Container className="pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Left / Cart Items */}
        <div className="lg:col-span-2 w-fit">
          <h1 className="text-2xl font-bold mb-4">In Your Cart</h1>
          <div className="flex flex-col gap-4">
            {basketItems.map((item, index) => (
              <CartItem
                key={index}
                qty={item.quantity}
                title={item.template?.title}
                description={item.template?.description}
                price={item.template?.discountedPrice}
                id={item?.template?._id}
              />
            ))}
          </div>
        </div>

        {/* Right / Cart Summary */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-20">
            <CartSummary />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </Container>
  );
}
