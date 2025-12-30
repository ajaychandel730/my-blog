"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const ToastProvider =  dynamic(()=> import('./ToastProvider'), {ssr :false}); 

const ClientToastProvider = () => {
  return (
    <ToastProvider/>
  )
}

export default ClientToastProvider