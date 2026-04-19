"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useIsMobile } from "@/hooks/use-mobile";

const NewsletterFormSchema = z.object({
  email: z.email("Invalid email address"),
});

type NewsletterFormValues = z.infer<typeof NewsletterFormSchema>;

const NewsletterForm = () => {
  const isMobile = useIsMobile();

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterFormValues) => {
    console.log(data);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup
                aria-invalid={fieldState.invalid}
                className="glassmorphism h-12 md:h-16 rounded-full pl-2 md:pl-6 pr-1"
              >
                <InputGroupInput
                  {...field}
                  placeholder="Email"
                  className="md:text-sm/relaxed rounded-s-full"
                />
                <InputGroupAddon align={"inline-end"}>
                  <InputGroupButton
                    variant={"glass"}
                    size={isMobile ? "lg" : "xl"}
                    type="submit"
                    className={"rounded-full"}
                  >
                    Subscribe
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default NewsletterForm;
