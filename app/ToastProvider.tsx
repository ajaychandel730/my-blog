"use client";
import React from 'react'
import { Toaster } from 'sonner';

const ToastProvider = () => {
  return (
  <Toaster position="top-center" visibleToasts={6}/>
  )
}

export default ToastProvider