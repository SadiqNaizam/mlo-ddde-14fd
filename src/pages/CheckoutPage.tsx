import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock } from 'lucide-react';

// Define the validation schema for the form
const formSchema = z.object({
  cardName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  cardNumber: z.string().refine((val) => /^\d{16}$/.test(val), {
    message: "Card number must be 16 digits.",
  }),
  expiryDate: z.string().refine((val) => /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(val), {
    message: "Invalid expiry date format (MM/YY).",
  }),
  cvc: z.string().min(3, { message: "CVC must be 3-4 digits." }).max(4, { message: "CVC must be 3-4 digits." }),
});

// Placeholder data for the book being purchased
const placeholderBook = {
  title: "A Study in Scarlet",
  author: "Arthur Conan Doyle",
  price: 14.99,
  coverImageUrl: "https://placehold.co/150x225/A68B6A/3A2E27?text=Book+Cover",
};

const CheckoutPage = () => {
  const location = useLocation();
  
  // In a real app, you'd fetch book details based on location.state.bookId
  const book = placeholderBook; 

  useEffect(() => {
    console.log('CheckoutPage loaded', { state: location.state });
  }, [location.state]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is where you would handle the payment processing
    console.log("Form submitted with values:", values);
    alert("Purchase successful! (Simulated)");
  }

  const tax = book.price * 0.08; // 8% tax
  const total = book.price + tax;

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950">
      <Header />
      <main className="flex-grow container py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-200 mb-8 text-center">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Order Summary Section */}
            <section>
              <Card className="bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-serif">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img src={book.coverImageUrl} alt={book.title} className="w-20 h-[120px] object-cover rounded-md shadow-md" />
                    <div>
                      <p className="font-semibold text-stone-800 dark:text-stone-200">{book.title}</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">by {book.author}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-600 dark:text-stone-400">Subtotal</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">${book.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600 dark:text-stone-400">Taxes (Est.)</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-stone-800 dark:text-stone-200">Total</span>
                    <span className="text-stone-900 dark:text-white">${total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Payment Form Section */}
            <section>
              <Card className="bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 shadow-sm">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center"><CreditCard className="mr-2 h-5 w-5"/>Payment Details</CardTitle>
                  <CardDescription>Enter your payment information to complete the purchase.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name on Card</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input placeholder="0000 0000 0000 0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel>Expiry Date</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvc"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel>CVC</FormLabel>
                              <FormControl>
                                <Input placeholder="123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold">
                        <Lock className="mr-2 h-4 w-4" />
                        Complete Purchase
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;