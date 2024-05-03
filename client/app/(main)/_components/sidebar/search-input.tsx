"use client"

import { FormInput } from "@/components/form/form-input"
import { ElementRef, useRef } from "react"

interface SearchInputProps{
      disabled: boolean
}

export const SearchInput = ({ disabled}: SearchInputProps) => {
      const formRef = useRef<ElementRef<"form">>(null)
      const inputRef = useRef<ElementRef<"input">>(null)

      const onSubmit = () => { }
      const onBlur = () => {
            formRef.current?.requestSubmit();
      }
  return (
    <form ref={formRef} action={onSubmit}>
              <FormInput
                    ref={inputRef}
                    id="search"
                    placeholder="Поиск..."
                    onBlur={onBlur}
                    className=""
                    disabled={disabled}
              />
    </form>
  );
}
