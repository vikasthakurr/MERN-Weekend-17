import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../redux/reducer/CartSlice.js";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      (item.price - (item.price * item.discountPercentage) / 100) *
        item.quantity,
    0
  );
  const total = subtotal;

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-gray-50/50">
        <div className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-white/20 animate-in fade-in zoom-in duration-500">
          <div className="bg-gradient-to-br from-cyan-50 to-fuchsia-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <ShoppingBag className="h-12 w-12 text-cyan-600" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Looks like you haven't discovered our premium collection yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            <span>Start Shopping</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <div className="p-2 bg-cyan-100 rounded-lg mr-3">
              <ShoppingBag className="h-6 w-6 text-cyan-600" />
            </div>
            Shopping Cart
            <span className="ml-3 text-lg font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {cart.reduce((acc, item) => acc + item.quantity, 0)} items
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4 animate-in slide-in-from-left-4 duration-500 delay-150">
            {cart.map((item, index) => {
              const discountedPrice = (
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 transition-all duration-300 hover:shadow-lg hover:border-cyan-100 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="w-28 h-28 shrink-0 bg-gray-100 rounded-xl overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-cyan-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-500 mt-1 capitalize px-2 py-0.5 bg-gray-100 rounded-md inline-block">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          }
                          className="text-gray-400 hover:text-red-500 transition-colors p-2 lg:hidden bg-gray-50 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 w-fit shadow-sm">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="p-2.5 hover:bg-white rounded-l-xl transition-all text-gray-600 disabled:opacity-50 hover:shadow-sm"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                          className="p-2.5 hover:bg-white rounded-r-xl transition-all text-gray-600 hover:shadow-sm"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
                          ${(discountedPrice * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-400 font-medium">
                          ${discountedPrice} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 animate-in slide-in-from-right-4 duration-500 delay-300">
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/20 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-b border-gray-100 pb-4">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-600 flex items-center gap-1">
                    Free
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
                        ${total.toFixed(2)}
                      </span>
                      <p className="text-xs text-gray-500 font-medium mt-1">
                        Tax included
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-8 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="text-sm font-semibold text-gray-500 hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
