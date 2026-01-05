"use client";
import saveMessages from "@/actions/saveMessages";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Send } from "lucide-react";
import React, { useState, useActionState, useEffect } from "react";
import { toast } from "sonner";
import FormErrors from "../FormErrors";

const ContactForm = () => {
  const [text, setText] = useState<string>("");
  const [state, saveMessageAction, isPending] = useActionState(
    saveMessages,
    undefined
  );
  
  console.log("state:", state);
  
  useEffect(() => {
    if (state?.status === "ok") {
      setText("");
      toast.success(
        state.message || "Thank you! Your message has been sent successfully."
      );
    }

    if(state?.status === "error"){
      toast.error(state?.message || "Something went wrong. Please try later.");
    }

  }, [state]);

  return (
    <div className="w-full flex flex-col items-center rounded-lg p-8">
      <h2 className="text-2xl mb-6 text-center">Send Me a Message</h2>
      <Form
        action={saveMessageAction}
        className="space-y-6 w-full sm:w-[600px] flex items-center"
      >
        <Input
          autoComplete="false"
          size="lg"
          name="name"
          minLength={3}
          maxLength={30}
          type="text"
          required
          placeholder="Your name "
          className="mt-1 "
        />
        <FormErrors errors={state?.errors?.name} />
        <Input
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          className="mt-1"
        />
        <FormErrors errors={state?.errors?.email} />

        <Input
          name="subject"
          type="text"
          maxLength={100}
          required
          placeholder="Your subject"
          className="mt-1"
        />
        <FormErrors errors={state?.errors?.subject} />
        <Textarea
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
        <FormErrors errors={state?.errors?.text} />
        <Button
          isLoading={isPending}
          color="primary"
          size="md"
          type="submit"
          className="w-full"
          startContent={!isPending && <Send className="w-5 h-5" />}
        >
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
