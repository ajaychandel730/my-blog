"use client";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Send } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center rounded-lg p-8">
      <h2 className="text-2xl mb-6 text-center">Send Me a Message</h2>
      <Form className="space-y-6 w-full sm:w-[600px] flex items-center">
        <Input
          classNames={{
            inputWrapper: "heroInputWrapper",
            input: "heroInput",
          }}
          size="lg"
          name="name"
          minLength={3}
          maxLength={30}
          type="text"
          required
          placeholder="Your name "
          className="mt-1 "
        />

        <Input
          classNames={{
            inputWrapper: "heroInputWrapper",
            input: "heroInput",
          }}
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          className="mt-1"
        />

        <Input
          classNames={{
            inputWrapper: "heroInputWrapper",
            input: "heroInput",
          }}
          name="subject"
          type="text"
          maxLength={100}
          required
          placeholder="Your subject"
          className="mt-1"
        />

        <Textarea
          classNames={{
            inputWrapper: "heroInputWrapper",
            input: "heroInput",
          }}
          endContent={
            <div className="text-[0.8rem] text-center">{text.length}/300</div>
          }
          name="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          maxLength={300}
          placeholder="Your message..."
          rows={6}
          className="mt-1"
        />

        <Button
          color="primary"
          size="md"
          type="submit"
          className="w-full"
          startContent={<Send className="w-5 h-5" />}
        >
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
